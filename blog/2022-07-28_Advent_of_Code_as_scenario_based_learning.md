---
title: Advent of Code as Scenario-based learning
authors: zach
tags: [education]
---

In their work _Scenario-based e-learning: Evidence-based guidelines for online workforce learning_, Clark defines
Scenario-based e-learning and discusses its constituent parts. Most of the discussion however focuses on examples that
are outside the domain of programming instruction. This brief exploration of [Advent of Code](https://adventofcode.com)
as an instance of Scenario-based e-learning seeks to ground Clark's discussion to this area of instruction.

In the yearly [Advent of Code](https://adventofcode.com/) event, a scenario is given and then there are guided
steps, each with their own instructions, by which participants build a stepwise programming solution to the general
scenario.

While there is no explicitly stated learning objective, the creator of Advent of Code describes it as

> "_Advent of Code_ is an Advent calendar of small programming puzzles for a variety of skill sets and skill levels that
> can be solved in [any](https://github.com/search?q=advent+of+code) programming language you like. People use them as
> a [speed contest](https://adventofcode.com/leaderboard)
>
, [interview](https://y3l2n.com/2018/05/09/interview-prep-advent-of-code/) [prep](https://twitter.com/dznqbit/status/1037607793144938497)
> , [company training](https://twitter.com/pgoultiaev/status/950805811583963137)
>
, [university](https://gitlab.com/imhoffman/fa19b4-mat3006/wikis/home) [coursework](https://gribblelab.org/teaching/scicomp2021/index.html)
> , [practice](https://twitter.com/mrdanielklein/status/936267621468483584) [problems](https://comp215.blogs.rice.edu/),
> or to [challenge each other](https://www.reddit.com/r/adventofcode/search?q=flair%3Aupping&restrict_sr=on)."

Because there is no explicitly stated learning objective and participants can use the Advent of Code scenario to achieve
their own desired ends, the guidance provided in the scenario changes Advent of Code from a "discovery learning"
scenario to a "guided learning" scenario (Clark, 2012, p. 122).

In the 2021 instantiation, the scenario starts with the following prompt as the scenario's **trigger event**.

> You're minding your own business on a ship at sea when the overboard alarm goes off! You rush to see if you can help.
> Apparently, one of the Elves tripped and accidentally sent the sleigh keys flying into the ocean!
>
> Before you know it, you're inside a submarine the Elves keep ready for situations like this. It's covered in Christmas
> lights (because of course it is), and it even has an experimental antenna that should be able to track the keys if you
> can boost its signal strength high enough; there's a little meter that indicates the antenna's signal strength by
> displaying 0-50 _stars_.

Now that the scenario is established, the actual task description is given as "Your instincts tell you that in order to
save Christmas, you'll need to get all _fifty stars_ by December 25th.". Each day from December 1 to December 25, two
correlated puzzles are offered that build off of the previous days' puzzles to guide participants towards a complete
solution.

For the first day's first puzzle, **scenario data** in the form of a CSV file of depth readings is provided. This data
file looks like:

```
199
200
208
210
200
207
240
269
260
263
```

The **guidance and instruction** for the first puzzle is then provided, in which it reads in part

> The first order of business is to figure out how quickly the depth increases, just so you know what you're dealing
> with - you never know if the keys will get carried into deeper water by an ocean current or a fish or something.
> To do this, count _the number of times a depth measurement increases_ from the previous measurement. (There is no
> measurement before the first measurement.) In the example above, the changes are as follows:

```
199 (N/A - no previous measurement)
200 (increased)
208 (increased)
210 (increased)
200 (decreased)
207 (increased)
240 (increased)
269 (increased)
260 (decreased)
263 (increased)
```

This guidance, especially the inclusion of an example programming script output that illustrates part of the task,
successfully mitigates the "flounder factor" by showing participants what is expected of them. Clark suggests that "One
of the most important success factors in scenario-based e-learning is sufficient guidance to minimize the flounder
factor" (2012, p. 30). In order to complete the first day's first puzzle, participants must write a programming script
that results in an answer to the question of "_How many measurements are larger than the previous measurement?_". The
provided response to this question is automatically checked by the scenario's own programming.

If an incorrect response is provided, the scenario provides **feedback** that is more than simply an indication of
whether or not the response was correct. Clark writes that "feedback has little value unless the learner reviews the
feedback and considers how his or her actions or decisions led to the outcomes seen" (2012, p. 81). This scenario
applies this insight by providing formative feedback with additional guidance of

> That's not the right answer; your answer is too low. If you're stuck, make sure you're using the full input data;
> there are also some general tips on the [about page](https://adventofcode.com/2020/about), or you can ask for hints on
> the [subreddit](https://www.reddit.com/r/adventofcode/)."

The addition of hints such as "make sure you're using the full input data", guide participants to consider where and how
their proposed solution deviates from the ideal solution based on the other bits of feedback such as "your answer is too
low." This inclusion of feedback statements such as "your answer is too low", or "your answer is too high" ensures that
the provided feedback is similar to what Clark refers to as *intrinsic feedback* in which there is a visual
representation of "how the scenario plays out or responds to the learner's actions" (2012, p. 80).

This scenario does not have an explicit "reflection" phase, which doesn't detract from its effectiveness as an
instantiation of Scenario-based e-learning. This is because "while some components, such as task deliverable, trigger
event, and feedback, are required elements, others may vary according to your learning domain and context" (Clark, 2012,
p. 72). In the context of this scenario, the only reflection is implicit in each days' puzzles building off each other
and therefore each puzzle's solution must be adapted to become the solution for the next puzzle.

This scenario could be improved by providing a venue in which participants must explicitly reflect on their provided
solution to a puzzle. Such an explicit venue could take the form of asking participants to remark on the space or time
complexity of their solution (commonly referred to as "Big-O notation"), or on the elegance and structure of their
solution's code. Given that the understated goal of the entire Advent of Code scenario is to enable participants to use
programming code to solve a real-world problem, such reflection encourages participants to consider the real-world
consequences of their particular solution.

**References**
Clark, R. C.(2012).  _Scenario-based e-learning: Evidence-based guidelines for online workforce learning_  (1st ed.).
San Francisco, CA: Pfeiffer.