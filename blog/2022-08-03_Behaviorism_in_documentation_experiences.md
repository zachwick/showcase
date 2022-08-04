---
title: Behaviorism in documentation experiences
authors: zach
tags: [education, docs]
---

Educational behaviors rooted in the theory of behaviorism, or at least the operant conditioning branch of it, are
regularly used in software product design decision-making processes. Product onboarding, as an educational experience,
is an archetypal application of these theories. For instance, within the sequence of informational popups that show a
new user how to use a piece of software, the button with the positive, forward-in-the-onboarding-process
call-to-action (such as "Next", or "Okay") should be consistently placed and styled, and match the styling of the rest
of the product. This has the result that a user is gently nudged towards learning the visual cues and language that the
product they are being educated on uses. As described by Chen, such reinforcement of the visual language used within the
software would positively influence the _perception_ category of Bloom's psychomotor domain, which deals with "the
ability to use sensory cues to guide motor activity" (2005, p. 133).

The order in which new users are guided through the main features of the software product also influences the
educational impact of the onboarding. In Bloom's _affective_ domain, which includes a learner motivation dimension among
others, the _organization_ category "organizes values into priorities" (2005, p. 133). Because learner's motivation is
increased when learning a high priority item, the new user onboarding process should show the most important feature (or
features) first. This helps ensure that new users are able to not only see value in becoming revenue generating
customers of the software product, but that they are educated the most effectively on how the software can be used to
solve their business need.

Behaviorism is present in significant ways in many popular software based educational tools. For example, the online MBA
program offered by Bowling Green State University relies heavily on the Connect and SmartBook products from McGraw-Hill.
SmartBook is a web-based software product that uses _programmed instruction_ as written of by Chen (2005). This
behaviorist style of instruction uses a series of sets of questions each associated with a section of reading. In order
to progress forward through the instruction, the learner must answer the set of questions correctly and may be required
to re-experience the associated reading if the questions are answered incorrectly multiple times. This type of
instruction is appropriate for the content of this program which is often centered around analyzing a financial process.

As described by Chen, behaviorist theories of learning position spaced repetition as an integral part of the learning
process (2005). The idea of using repetition to impact learning can be leveraged with consistent use of language cues in
software product documentation.

Consider the software documentation for a generic REST API for a todo list tool. Using this REST API, a user can create
new, read existing, update existing, or delete existing todo items for themselves. The documentation for such an API,
should start with the most important use case first, to influence the _organization_ category of Bloom's _
affective_ domain as discussed above. In our example, this means that the first bit of documentation should be how to
create a new todo list item.

In the language of REST APIs, a task to be done in our example is called a _resource_. When talking about the resource
in the documentation for this API, the capitalization and styling of the resource's name should be consistent and
visually distinct from other uses of that resource's name as a word. This means that when referring to the resource that
corresponds to a task to be done, it should be consistently referred to as "a Todo" with a capital letter as an English
proper noun.

In the contrived example of a todo list REST API, the benefits of this kind of repetition may not be evident. However,
consider the REST API for a payment processing product. In that context, many of the resources needed while moving
through a payment process are commonly used nouns and verbs in addition to being important foundational concepts of how
the software product works. A good example is the API resource of a `Charge` which is the software representation of
taking a payment from a customer. In the documentation around how to interact with a `Charge` API resource, there are
sentences that read similar to:

> To charge a `Customer`, create a `Charge` object.

In this example documentation sentence, "charge" is used as the English verb while `Charge` is typographically
identified as being the API resource. In keeping with the behaviorist emphasis on repetition to influence learning,
being consistent in the typographic indications of what object or abstracted concept is being referred to allows readers
of the software documentation to have a positively impacted educational experience.

# References

Chen, I. (2005). Behaviorism. In _Encyclopedia of Distance Learning_ (pp. 127-147). IGI
Global. ( [](https://www.igi-global.com/chapter/behaviorism/12097)[https://www.igi-global.com/chapter/behaviorism/12097](https://www.igi-global.com/chapter/behaviorism/12097))