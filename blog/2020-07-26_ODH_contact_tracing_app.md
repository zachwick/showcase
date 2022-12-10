---
title: ODH Contact Tracing App Security Issues
authors: zach
tags: [development, security]
---

The Ohio Dept of Health is doing contact tracing as part of their response to COVID-19. When a person tests positive for
COVID-19, they provide their local health department with the name and phone number of any recent close contacts. Those
close contacts are then contacted by the local health department and are asked to self-quarantine for 14 days and take
their temperature twice a day. These close contacts are also asked to self-report their temperatures and any other
COVID-19 symptoms that they may have either over the phone to a health department employee or via a web app.

If a person chooses to report their temperature and other symptoms via the web app, they are sent a URL daily at 1600
and then again every 30 minutes until they visit the URL and report their information. These URLs look like the
following:

```
https://octs.odh.ohio.gov/symptom-tracker?p=T0RILTI5ODI1&d=MDcvMTMvMjAyMA%3D%3D&language=en
```

This was the URL that I was sent one day, as I was a close contact of a person who had tested positive for COVID-19 and
I did self-quarantine for 14 days.

# Breaking down the URL

Note that the query string of these URLs contains three fields; `p`, `d`, and `language`.

It's clear that `language` refers to the language that the requested page should be presented in. This can easily be
tested by substituting `es` for `en` and noting that the page is now presented in Spanish. Further testing revealed that
the self-reporting web app is only available in English and Spanish.

After receiving one of these URLs via SMS every day, it was apparent that the value of the `p` field didn't change,
while the value of the `d` field did change each day. That suggested that the `p` field is the "patient id", while
the `d` field is the date for which the user is self-reporting their temperatures and symptoms.

Noting that '%3D%3D' is the string '==' being URL encoded, suggests that the value of the `d` field is simply the date
in the format 'MM/DD/YYY' base64 encoded (because base64 encoded strings can be padded with '=' or '==' at the end). A
simple test of this showed that when I base64 encoded the string '07/18/2020', then URL encoded the result, and then
supplied that value as the value of the `d` field, I could submit information for myself for any future date that was
before the last day of my 14 day quarantine.

In my particular case, that meant that simply by changing the URL, I could submit temperature meausurements and other
symptoms for myself for any date between 2020-07-07 and 2020-07-21. If I attempted to load the page for 2020-07-22, I
was shown a message that I no longer need to complete the survey.

This ability to submit information for a day other than the current day probably isn't strictly a security bug, but it
is somewhat poorly designed and the server-side code clearly doesn't do any validation on the reporting date since I was
able to submit made up results for myself for 2020-07-18.

The more serious issue is the `p` field, which likely corresponds to a "patient id" or something of that ilk. Because
the `d` field was base64 encoded, it would make sense that the `p` field is also something that has been base64 encoded.
Note that the value of the `p` field does not have '%3D%3D' at the end. This is because base64 encoded only _may_ be
padded with '=' or '==' at the end, but a string doesn't strictly _need_ to end with those characters. So, by taking the
value of the `p` field and attempting to decode it as base64 yields (in my case) the string "ODH-29825". This seems like
it is in fact some kind of unique identifier for myself in ODH's database.

# So what can you do

Now that we understand what these fields are all used for, it is trivial to create query string parameters in reverse.
For example one could attempt to use today's date (07/27/2020) and the patient id of "ODH-00000" to craft a URL like:

```
https://octs.odh.ohio.gov/symptom-tracker?p=T0RILTAwMDAw&d=MDcvMjcvMjAyMA==&language=en
```

and attempt to load the page for that patient. This page will only load if you've both selected a valid ODH patient id,
and that the date that you've used for the value of the `d` parameter is within the 14 day quarantine period for that
ODH patient.

Originally, the patient's first and last name were displayed on this page. This means that one can simply enumerate
patient IDs from ODH-00000 to ODH-9999999 (or some large upper bound), and when an actual person's name appears on the
site, you then know that the person listed has been a close contact of a known positive COVID-19 case and is currently
self-quarantining and monitoring. Once a person has been found, you must simply try up to the next 14 days as the value
of the `d` field to determine when they were in contact with a positive COVID-19 case.

# Reporting Timeline

<h3>2020-07-07</h3>

I begin receiving these text messages from ODH.

<h3>2020-07-16</h3>

I resolve to report this to the State of Ohio, as I feel it is a big enough issue to warrant doing so.

<h3>2020-07-16 @ 1530</h3>

After searching around on https://ohio.gov, I came
across https://infosec.ohio.gov/Incidents/Reportanincident/StateGovernmentSites.aspx.

<h3>2020-07-16 @ 1540</h3>

I called the listed number (614-644-8660) and was asked to email the details of what I was reporting to csc@ohio.gov. I
was also asked if I was a public employee, to which I responded that while I'm not an employee of the State of Ohio, I
am an elected legislator in my village.

<h3>2020-07-16 @ 1549</h3>

I sent in an email indicating that I had been asked to email this address and asked how they would like me to securely
get the details of the vulnerability to their team.

<h3>2020-07-16 @ 1551</h3>

I received automated emails that an incident had been created and had been assigned to someone.

<h3>2020-07-16 @ 1658</h3>

I received an email at the email address corresponding to my position as an elected legislator, asking to confirm that
this email belongs to the same individual who sent the email to the state at 1540.

<h3>2020-07-16 @ 1702</h3>

I responded in the affirmative to the above email.

<h3>2020-07-16 @ 2114</h3>

I [tweet the SHA256 sum](https://twitter.com/zachwick/status/1283933170585554944)
of [this file](https://github.com/zachwick/ODH_Contact_Tracing/blob/master/proof.txt).

<h3>2020-07-17 @ 1559</h3>

I received an email and then shortly after a phone call from a representative from the state and I provided the
responding team a password-protected ZIP archive as an email attachment and provided the password to them over the
phone. This was the alternative I proposed since the team didn't seem interested in providing a GPG/PGP key that I could
use to encrypt my message to them.

<h3>2020-07-23 @ 0929</h3>

I received an automated email that the incident had been resolved. This email contained the following note:

> ODH worked with the vendor to strip the last names from the data. It was determined that the only data that a bad
> actor could see would be the name of the citizen that is being traced. ODH has excepted the fix of just removing the
> last name because of the volume of citizens that are being tracked.

# Alternative fixes

I understand the tradeoffs that go into building software, but accepting a fix of only no longer displaying the last
name of the person seems less than ideal. Anyone who can construct these URLs can still submit made-up information for
any person currently under a 14-day quarantine that has elected to self-report their temperatures and symptoms via the
ODH's web app.

A few alternative, and somewhat more robust, fixes come to mind here. One option is to to create a single-use UUID that
maps to a patient and date tuple in the ODH system backend, and then provide users with URLs that look like:

```
https://octs.odh.ohio.gov/symptom-tracker?t=<SOME_UUID_HERE>
```

These UUIDs should be created new for each patient for each day, and the server-side code that the self-reporting form
submits to should ensure that the date for that UUID matches the current date and that the user has not yet submitted
information for that day. This would make it much more difficult to enumerate all the possible UUIDs and extract the
names of people who may have been exposed to COVID-19 because a malicious actor would have a much smaller time window in
which a constructed URL would be valid. This also adds at least some server-side data validation.

Another option would be to just turn off the ability for citizens to self-report this health information and instead
have local health department employees contact each citizen under quarantine via phone each day to record their health
information. This would be much more time-consuming, and would cost much more, but would have the added benefit of not
being susceptible to false data being reported for a citizen by a malicious actor simply constructing a URL.

# Closing

I have [a repo](https://github.com/zachwick/ODH_Contact_Tracing), which contains a simple python script that
demonstrates how to generate the URL for a given ODH patient id and date. It would be unethical to submit false data for
a person other than yourself, but I feel it is important to show how trivial it is to construct these URLs.