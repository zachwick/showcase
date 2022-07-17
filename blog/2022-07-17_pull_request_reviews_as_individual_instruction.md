---
title: Pull-Request reviews as individual instruction
authors: zach
tags: [docs]
---

<audio controls>
    <source src="/audio/pull_request_reviews_as_individual_instruction_final.mp3" />
</audio>

In robust engineering organizations, engineers contribute code to a shared work product through a process call *pull
requests*.

This process is facilitated by pieces of software such as [git](https://git-scm.com/)
, [mercurial](https://www.mercurial-scm.org/), and [fossil](https://fossil-scm.org/), which enable *version control* of
software.

Using these software tools, along with a collaboration platform such at [GitHub](https://github.com)
or [GitLab](https://gitlab.com), engineers make proposed changes to the shared codebase which are then reviewed by peers
prior to applying these changes to the shared codebase. These changes are submitted as a *pull request* to the shared
codebase, and the review is often called a *pull request review*.

Because of their nature as an integral step in the work process of every engineer, regardless of their skills or
experience, treating the pull request process as an educational one can positively impact every engineer that works on a
particular codebase. When viewing the pull request process this way, it becomes clear that it has all of the necessary
characteristics of a
good assessment.

A good assessment must be objective and have a clearly defined outcome. When an engineer makes code changes that result
in a pull request, the changes were made with some goal in mind. That goal is sometimes the addition of a new product
feature, sometimes fixing a bug, or sometimes improving performance. In any case, there is an objective goal that the
code changes under review are intended to achieve. The peer charged with performing the pull request review similarly
has only three available actions. The reviewer can approve the changes with no feedback, approve the changes with
feedback, or reject the changes with feedback.

In the first case, the pull request as an assessment is of only limited value. Such a pull request only affirms that the
engineer's code changes met the intended goal. In the case of a pull request being approved or rejected with feedback,
the inclusion of feedback offers the reviewer the opportunity to provide formative or summative feedback. This has the
implication that effort put into providing quality feedback on pull requests has an impact on the quality
of future pull requests that take the feedback into consideration.

A good assessment must also be valid, in that it evaluates the actual skill under consideration. Within the context of
pull requests, this means that feedback and reviews must be limited in scope to the code changes under consideration. It
would be inappropriate for a pull request reviewer to reject a pull request because they didn't like that its creator
ate a particular food for lunch.

Using product features of Github,
namely [pull request templates](https://docs.github.com/en/communities/using-templates-to-encourage-useful-issues-and-pull-requests/creating-a-pull-request-template-for-your-repository)
, [Checks](https://docs.github.com/en/rest/checks), and automated test suites, pull requests can be more soundly formed
into an assessment tool.

Pull request templates enable code maintainers to provide a templated familiar set of content that engineers must
address and
follow in the process of creating their pull request. These templates often include directions to have the proposing
engineer explain in their own words what their code changes do, consider any follow-on effects, and provide any other
information that a reviewer would need to evaluate the code changes.

The GitHub Checks product feature enables code maintainers to programmatically enforce code conventions and provide
instruction to pull request creators that voilate them. This product offers the ability to provide formative feedback at
scale.

Automated test suites are of critical importance in any software product, but take on a new role as a means of
self-assessment when viewed through the lens of pull requests as an assessment tool. These automated tests run against
the modified code and ensure that the behavior is as expected.

Pull request reviews cannot replace targeted instruction. They can however augment previously given instruction and
scale its reach to a wide audience. When onboarding new engineers to a team or product, pull request reviews and the
feedback contained therein are the most impactful educational experiences related to the engineer's day-to-day job
functions. This importance should be honored by giving pull request reviews the respect that they deserve as a powerful
educational tool.



