---
title: Documentation experience tips
authors: zach
tags: [docs]
---

<audio controls>
    <source src="/audio/documentation_experience_tips_final.mp3" />
</audio>

If grown organically, documentation experiences tend to be fragmented, inconsistent, and often don't clearly map to how
users can use the documented product offering to solve their own technical problems. These issues make the documentation
content more difficult to maintain and more difficult to add to in a self-consistent way.

Revamping the documentation experience with an eye towards improving the information architecture and thereby improving
the maintainability and extensibility of the documentation content is the best solution to these issues.

At the highest level, moving documentation into its own separate and distinct product from the documented product is an
integral initial step in this revamp process. During this migration, it is prudent to adapt the content to use the
appropriate content template based on the documentation type and adjust the information architecture of the navigation
to realign the documentation experience around solving user's business problems.

What should the infrastructure underlying the documentation experience be? How exactly should the documentation
experience be architected?

Building the documentation experience as its own product has the greatest amount of engineering cost, but provides the
most flexibility in what the resulting documentation experience can be. This option implies a separate maintenance
burden for the documentation apart from the documented product. The resulting documentation product from this option
could be released as a free and open source documentation framework that just so happens to have a particular instance
that documents a given product. However, this follow-on action also has the implicit resource requirements of any free
and open source project - namely maintenance and hosting costs.

Building off of a ready-made solution like [TailwindUI's Syntax](https://tailwindui.com/templates/syntax) template would
be a one-time payment of ~$799 USD in most cases, and would preclude a free and open source product offering being made
from the built documentation experience. Alternatively, using a free and open source project
like [Docusaurus](https://docusaurus.io/) enables building the desired documentation experience within a no-cost framework.

Alternatively, documentation experiences can be built using an off-the-shelf SAAS documentation solution
like [readme.io](https://readme.io).
This option provides the lowest ongoing maintenance burden, but requires an ongoing payment obligation to the SAAS
provider. This option allows documentation creators to focus their efforts on the content of the documentation
experience instead of having a split
focus on the content and the infrastructure. Using a documentation SAAS product also enables the easy collection of
documentation specific metrics that can be used to drive internal decisions. These metrics may be available under the
other options, but require an engineering effort to gather them. A "Business" license for ReadMe.io is typically around
$399 USD/month.

When a user enters a documentation experience, they presumably are attempting to solve a problem. The documentation
experience should expedite the search for a solution that features the documented product by aligning the entry into the
documentation experience with common user business problems. In addition, the design of the documentation experience
entry point should provide a quick overview of the available types of content and encourage visitors to explore of their
own curiosity.

Within many pieces of documentation, there are listed steps of more than one separate and distinct way of using a
product or feature. When all the documentation content is organized vertically, it is difficult to visually
identify where one set of steps ends and where another set begins. A tabbed interface provides a horizontal axis on
which to visually separate distinct product/feature usage experiences.

It is also important that the internal structure of documentation content is consistent. For each type of
documentation content, there should be a common base template with optional additional components. This helps ensure
consistency and helps lessen the maintenance burden of the documentation content. Such templates also provide a way to
scale a self-serve documentation creation model in which the documentation team acts more like an editorial agency or
collaborator instead of as the primary author because example content and helpful hints can be placed within the templates.

The four general types of documentation content are quickstarts, procedural docs, conceptual docs, and reference docs.
Quickstart documentation aims to help readers get up and running with the documented product quickly, and are usually
framed in terms of solving a particular specific business problem. These business problems are usually identical to the
main use cases of the documented product.

Procedural documentation is what is most often called "documentation". Procedural documentation is step-by-step guides
that educate a user on how to use the documented product to solve a particular problem. These are distinct from
quickstarts in that the goal of quickstarts is to *quickly* demonstrate the documented product's usefulness, while
procedural documentation is more focused on the eventual outcome instead of execution speed.

Conceptual documentation is intended to explain the concepts and ideas behind the documented product, without specific
implementation details. Conceptual documentation should describe *how* the documented product works, not how to use the
product.

Finally, reference documentation seeks to explain which exact product actions have which exact effects. These types of
documentation typically are an exhaustive listing and explanation of configuration options and product features.

Constructing a set of templates for each of these four types of documentation enables the documentation as a whole to
remain self-consistent while having a distinct medium by which to achieve each documentation type's specific goal.

    

