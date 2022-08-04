---
sidebar_position: 1
---

# Scenario-based learning

## Learning objectives

The main learning objective of this activity is to *learn how to appropriately choose part of an error message to use as
a web search query to aid in debugging*. This is a is commonly used skill that often differentiates junior developers
from their less-junior peers because it is rarely taught and must often be learned only through lived experience.

A secondary learning objective of this activity is to *learn to use python import statements to fix NameError type
errors*. These type of errors are often encountered by newcomers to the python programming language and they are usually
corrected in ways that seem counter-intuitive based on the error message when read by python newcomers.

<iframe
width="1200"
height="900"
src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F3EAG1xFtzSwM1FWsardMy4%2FDebugging_Code_SBL%3Fpage-id%3D0%253A1%26node-id%3D2%253A2%26viewport%3D471%252C665%252C0.09%26scaling%3Dscale-down%26starting-point-node-id%3D2%253A2"
allowfullscreen />

## Description of the SBL activity

The activity is an interactive prototype built in Figma. This medium was chosen because it facilitates easy embedding in
a website, is a familiar tool set, and enables user interaction - even when embedded in a web page.

Because the real world application of the activity's learning objectives are usually encountered in a text-based
terminal, the activity is designed to mimic that user experience and features instructional text and interactive text
elements in a simulated computer screen with a terminal split into four equal-sized panes.

The top-left pane initially displays the scenario's set up text and later displays both positive and negative feedback
as the learner completes the activity. The top-right pane shows the short python script that is being debugged. This
pane's content doesn't change, so as to keep the code on screen throughout the activity to reinforce the context in
which this lesson takes place - debugging a particular type of error for a particular small piece of code. The
bottom-left pane is used to display instructions for each opportunity for user interaction as well as instructional
content to be used to inform each interaction. The bottom-right pane is where the learner interacts with activity by
selecting the correct option for the task described in the bottom-left pane. In the case of the learner making an
incorrect choice, the selected incorrect option in the bottom-right pane is displayed with a red background to visually
indicate that an incorrect choice was made.

The first learner interaction is where the learner must select which set of error message output lines that are not
specific to the local machine. An incorrect selection results in the top-left pane showing an explanation of why the
selected choice is incorrect. A correct selection moves the learner to the second interaction.

In the second interaction, learners must select which of the two error message lines is the most appropriate web search
query by virtue of being the least implementation specific. Both the feedback for an incorrect choice in this
interaction and the interaction's directions provide some instruction on what it means to be implementation specific.

In the final interaction, the user must choose which of the two edited code snippets is the correct solution to the
original NameError type error message based on the instructional material presented in the bottom-right that guides the
learner towards selecting the code snippet that defines the `requests` name before attempting to use it. As before, an
incorrect selection results in feedback and an explanation of why the selected choice is incorrect in the top-left pane.

## Why is SBL an ideal approach

As Clark writes that Scenario-based learning (SBL) is well-suited to learning in which the "goal is to build critical
thinking skills linked to specific job roles such as troubleshooting..." (2016, p. 52). Because the primary learning
objective is one of learning how to debug a particular class of programming errors, an SBL learning activity is an
appropriate means to achieve this learning objective. In the parlance of programmers, to troubleshoot code that doesn't
function as expected is to *debug* that code.

As mentioned above, the debugging skills of programmers improve with increased programming experience. Debugging skills
typically distinguish mediocre programmers from senior programmers and is a significant part of almost every software
engineer or programmer job interview. Because debugging skills grow in proportion to experience, using an SBL activity
to educate novice programmers can realize the benefits of "compressed experience" for learners as the SBL activity "
creates a 'moment of need' for the knowledge and skills to resolve it" (Clark, 2009, p. 85). Clark additionally writes
of SBL that the "goal is to accelerate expertise" (2009, p. 84). By providing a common real world scenario that python
newcomers struggle with in a low risk way, low risk because unlike programming for employment, there is no additional
performance or financial repercussions from debugging the scenario's code incorrectly, learners are able to focus on the
underlying learning objective instead of meeting job function performance goals on their journey to becoming a more
skillful python developer.

## References

Clark, R. (2009). Accelerating expertise with scenario-based learning. _T+ D_, _63_(1), 84-85.

Clark, R. C. (2016). Accelerate expertise with scenario-based e-learning: This design approach enhances critical
thinking and problem-solving skills, research reveals. _TD Magazine,_ _70_(8), 50.