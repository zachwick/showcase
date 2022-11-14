---
sidebar_position: 2
---

# Python scenario-based learning

## Learning objectives

The primary learning objectives of this activity is to *learn how to appropriately select python control structures*.
This is a skill that differentiates experiences developers from novice developers. Because a wide variety of distinct
programs can be written to address a given task, experience with a variety of programming control structures is required
to
learn each control structure's individual benefits and drawbacks when used to accomplish a given task.

Because knowledge of programming control structures grows in proportion to experience, using a scenario-based learning (
SBL) activity to educate developers can realize the benefits of "compressed experience" for learners as the SBL
activity "creates a 'moment of need' for the knowledge and skills to resolve it" (Clark, 2009, p. 85)

<iframe
width="1200"
height="900"
src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FA6AJaMhhnSFE0xq67xTivT%2FLearn_Python_SBL%3Fpage-id%3D0%253A1%26node-id%3D5%253A77%26viewport%3D787%252C-60%252C0.53%26scaling%3Dscale-down%26starting-point-node-id%3D5%253A77"
allowfullscreen />

## Description of the SBL activity

The activity is an interactive prototype built in Figma. This medium was chosen because it facilitates easy embedding in
a website, is a familiar tool set, and enables user interaction - even when embedded in a web page.

Because the real world application of the activity's learning objectives are usually encountered in a text-based
terminal, the activity is designed to mimic that user experience and features instructional text and interactive text
elements in a simulated computer screen with a terminal split into three panes.

The left pane initially displays the scenario's set up text and later displays both positive and negative feedback as
the learner completes the activity. This pane is also where instructional information and the actual directions for each
place where user interaction is required.

The top-right pane shows the script that the SBL activity is aiming to create using the selections made by the learner.
The bottom-right pane is where the learner interacts with activity by selecting the correct option for the task
described in the left pane.

The SBL activity begins with the following prompt as the scenario's **trigger event**.

> instructions > You have been tasked with writing a python script that reports the word in the e. e. cummings poem in
> Just- and how many times that word appears.
>
> in Just-  
> spring when the world is mud-  
> luscious the little  
> lame balloonman  
> whistles far and wee
>
and eddieandbill come  
running from marbles and  
piracies and it's spring
>
> when the world is puddle-wonderful
>
> the queer  
> old balloonman whistles  
> far and wee  
> and bettyandisbel come dancing  
> from hop-scotch and jump-rope and
>
> it's spring  
> and the goat-footed  
> balloonMan whistles  
> far  
> and  
> wee
>
> Your first step is to get the full text of in Just- stored in a python variable.
>
> Notice that the text is more than one line, and that some lines are blank. In order to count the occurrences of each
> word, we need to store these lines of text in our code.
>
> Which option at right is the most appropriate way to represent the text of in Just- in our code?

This particular poem was chosen for two main reasons. First, it is short enough to fit entirely on one screen in the SBL
activity and so as not to appear overwhelming to the learners. Second, due to the author's style, the poem contains
empty lines, uncommon punctuation use, and use of whitespace or omission thereof. These qualities serve to make the
poem *in Just-* a good work to practice string manipulation with. Allen writes that one key to scenario-based learning
is to "use an appealing context" as this will help draw learners in (2016, p. 132). Because of the novelty of the poem *
in Just-*, it provides such an appealing context to engage learners in the activity.

This poem, considered as a series of English words, also forms the **scenario data** element described by Clark for this
SBL activity (2012).

At each step of the SBL activity, learners are presented with **guidance and instruction** as written of by Clark in *
Scenario-based e-learning: Evidence-based guidelines for online workforce learning* in the form of text in the left-pane
of the interface (2012). This text is consistently formatted in tandem with the activity code being built in the
top-right pane so as to reinforce how exactly the pieces of code correspond to the instructional material.
In the guidance and instructional text, non-code is presented in the Inter font. All code is presented in the JetBrains
Mono Nerd Font. The former is a common san-serif font, while the latter is a popular monospaced font used for displaying
source code. When referring to code within the guidance and instruction, the name of the variable or the constant is
styled in the JetBrains Mono Nerd Font and is colored appropriately for its type - green for strings, yellow for named
variables, purple for constants, and orange for control structures. Keeping with the color coding scheme, all text that
directs the learner to complete an action is blue.

When a response is provided, the scenario provides **feedback** as described by Clark in *Scenario-based e-learning:
Evidence-based guidelines for online workforce learning* that is more than simply an indication of whether or not the
response was correct (2012). Clark writes that "feedback has little value unless the learner reviews the feedback and
considers how his or her actions or decisions led to the outcomes seen" (2012, p. 81). Providing such feedback is
another of Allen's keys to enhance learning motivation in scenario-based elearning (2016, p. 132). This SBL activity
provides intrinsic feedback by explaining why a particular selection was incorrect, or why a particular selection may in
fact work but in a less elegant way than another selection. This feedback helps the learners achieve the learning
objective of this SBL activity by being able to evaluate each control structure's benefits and drawbacks when used to
accomplish a given task. This feedback in the guise of a brief discussion of the benefits and drawbacks provide an
opportunity for **reflection** after each learner interaction. Clark suggests that such reflection periods are a
necessary element of effective SBL activities (2012).

Additionally, the "instructions >" label at the top of the left-pane changes colors based on whether the learner has
selected a correct response (green) or an incorrect response (red). In some locations in this SBL activity, there is a
response option of the form "what is X?" where X is some topic that the task at hand assumes the learner understands. If
a user selects such a response option, they are moved into a mini-scenario that seeks to answer "what is X?" for the
learner in a way that will be easily transferable to the original SBL activity task. These mini-scenarios provide a way
for learners to self-select the most appropriate material for themselves. This is a clear application of Allen's key to
enhance motivation in scenario-based learning which reads "select the right content for each learner" (2016, p. 132).
When a learner selects an response option that begins a mini-scenario, the "instructions >" label is colored green so as
to not indicate that the mini-scenario is a negative outcome. This is done in an effort to keep learners engaged and
keep them feeling positive about their learning journey through the activity.

Each mini-scenario uses **worked examples** to provide instruction on the topic that the original task assumes the
learner understands. According to Clark and Mayer, worked examples "have been shown to increase learning and efficiency
of learning in a wide range of skill domains ..." (2016, p. 239). A concrete example of a worked example from this SBL
activity is in the mini-scenario that educates learners on what a *loop* is and how the various types of loops in the
SBL activity differ from each other. In that instructional content, an example of a *for loop* is given in pseudo-code
as:

```
for each day in the week:
    end in y
```

By providing an example of a *for loop* that presupposes no coding knowledge but that uses the general structure of the
python *for loop* encountered in the SBL activity, this worked example is an optimal way to instruct learners who
self-select into the mini-scenario. This motif of contrived worked examples in the mini-scenarios appears in all
mini-scenarios in the SBL activity.

This SBL activity could be expanded to also address the learning objective of *learn how to use the git source control
tool to develop code* by following each correct learner interaction with a mini-scenario in which git must be used to
patch the existing code with the newly added line(s). Such an expansion would further allow learners to self-select into
the material that they find most engaging while still achieving the SBL activities' overall learning objectives.

## SBL activity summary map

![SBL activity summary map](/img/summary_map.png)

## References

Allen, M. W. (2016). Michael Allen's guide to e-learning: Building interactive, fun, and effective learning programs for
any company (2nd ed.). Hoboken, New Jersey: John Wiley & Sons, Inc.

Clark, R. C. (2009). Accelerating expertise with scenario-based learning. _T+ D_, _63_(1), 84-85.

Clark, R. C. (2012). _Scenario-based e-learning: Evidence-based guidelines for online workforce learning_  (1st ed.).
San Francisco, CA: Pfeiffer.

Clark, R. C. & Mayer, R. E. (2016).  _e-Learning and the Science of Instruction_ (4th Ed.) San Francisco, CA: Pfeiffer.

## Notes

This work was created for Instructional Design 6700 _Principles of Multimedia Production and Courseware Design_ at
Bowling Green State University to fulfill a requirement to create a complete scenario-based learning experience.