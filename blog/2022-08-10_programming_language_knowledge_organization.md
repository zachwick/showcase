---
title: Programming Languages’ Effects on Knowledge Organization
authors: zach
tags: []
---

## Abstract

Language informs the internal structure of knowledge. This structure is both a product of the knowledge it contains, and
is the resulting artifact of that knowledge. These human languages are themselves comprised of fragments that each have
their semantic and terminological meanings. These meanings can be condensed into an intermediary form, which contains
those same represented meanings and therefore has the same inherent knowledge structures. Given basic operational rules,
these condensed intermediary language representations can be expressed as general purpose programming languages. Because
this condensed notational form of language contains representations of the structure and content of the original human
language, all fully faithful expressions of that intermediary form must also contain representations of the initial
underlying knowledge structures. This paper puts forth that programming languages contain representations of the human
languages that they are derived from, and the knowledge structures of those initial human languages can be found in the
knowledge structures implied by the programming language itself as shown by both the Catala programming language and a
hypothetical programming language derived from the human language Lojban.

## Language informs the internal structure of knowledge

Knowledge organization and language are intimately intertwined. Thellefsen argues that knowledge organization must be
informed by linguistic theory and semantics in order to represent the entirety of the knowledge within a given domain (
2003, p. 211). The language used within a domain is called *sub language* or *special language* (Thellefsen, 2003). This
definition of special language means more than just the words that are unique to that domain; it also encompasses the
change in meanings of existing words when used within the given domain. For instance, the word "inheritance" has similar
yet distinct meanings in the domains of law and computer science.

This difference in meaning between these two domains is because the word "inheritance" has both a semantic meaning and a
terminological meaning. The semantic meaning of the word is common to both domains; the word in both domains evokes
generational ownership and motion. However, the terminological meaning of the word in both domains are different. In the
legal domain, "inheritance" is something very specific and deals with beneficiaries and estates. In computer science, "
inheritance" means object oriented programs and generic classes of objects that have distinct instantiations as objects.

When considering the functions of a given word within the languages of specific domains, a framework for this analysis
is useful. The framework used in this paper is KRL, a framework provided by Bobrow and Winograd, which provides a
structured way of associating descriptions with conceptual entities as an organizational strategy for declarative
knowledge (1977). In KRL, a *description* is a group of *descriptors*, which are each a statement of some fact that is
either an observation about an object, or a fact about the object that is only useful when used as a comparator (Bobrow
& Winograd, 1977). Because a *description* may be comprised of multiple *descriptors*, it allows describing a complex
event through multiple points-of-view simultaneously (Bobrow & Winograd, 1977, p. 6). This ability of KRL to
simultaneously describe a single event through multiple view points lends itself well to describing *special language*
since studies of special language are concerned with both the terminological and semantic meanings of the given piece of
language.

KRL is put forth by Bobrow and Winograd as a general purpose program language. They accomplish this by specifying the
rules and operations under which groups of *descriptions,* called *units*, can be interacted with (1977, pp. 6-9). They
propose a syntax and a grammar for KRL and note that "We believe that it is more useful and perspicuous to preserve in
the notation many of the conceptual differences which are reflected in natural language, even though they could be
reduced to a smaller basis set" (p. 7). Thus, KRL represents a way to reduce natural language to a rigorous formalized
grammar and syntax via a notation set.

There are other general purpose programming languages that have begun life as a notation set as KRL has. APL, created by
Kenneth Iverson is a salient example. Iverson's main thesis in creating APL is that "Mathematical notation provides
perhaps the best-known and best-developed example of language used consciously as a tool of thought" (1980, p. 444). In
fact, Iverson originally created the notation used by APL as a teaching aid, and the notation set was only implemented
as a programming language after some years of use (1980, p. 445). In his work, Iverson notes that in general, the
advantages of programming languages as tools of thought are that programming languages are universal (that is, they are
general purpose), they are executable, and they are unambiguous (1980, p. 445). Iverson's treatment of APL as a
notational tool of thought provides the mechanisms for combining a notation set with a programming language. Iverson
suggests that a good notation must have at least a few common characteristics.

The first characteristic of a good notation is that is "must allow convenient expression not only of notions arising
directly from a problem, but also of those arising in subsequent analysis, generalization, and specialization. (1980, p.
446). This is true of any general purpose programming language, as it is the definition of "general purpose." Iverson
also specifies another facet of general purpose programming languages that lends itself to being a characteristic of a
good notation; he puts forth that a good notation is suggestive. By this, he means that a good notation can "represent
identities in brief, general, and easily remembered forms" (1980, p. 447). This means that a solution for a problem,
given in a particular notation, can be recognized as the notational form of a solution for that particular problem and
any other similar problem.

Much like how Bobrow and Winograd noted that their notational form of KRL was larger than strictly required (1977, p. 7)
, Iverson writes that APL, and indeed any good notation, should subordinate detail and be economic in its vocabulary (
1980, pp. 448-449). By this Iverson means that a notation should be able to express a large number of ideas in terms of
a relatively small vocabulary (1980, p. 449). The mechanism by which this expression happens is by introducing a set of
grammatical rules to be used in coordination with the notation set (1980, p. 449). A set of grammatical rules that
govern the use of a language is central to the idea of a language in general.

Finally, Iverson suggests that a good notation is amenable to formal proofs (1980, p. 450). In the narrowest
interpretation of that statement, one need only look at the origins of Iverson's APL language as a mathematical teaching
aid to see the practical effects of this characteristic. However, when considering a programming language itself as a
notation set, then this characteristic instead means that within the grammatical rules of the language itself, precise
and unambiguous statements can be made.

The characteristics of a good notation are also the characteristics of *special language*. This means that a notation (
and its grammatical rules) comprises of both the vocabulary of the notation itself and the meanings of those notational
elements. If a notation wasn't a special language contained within the general human language, then there would be no
need for the notation to have a vocabulary or rules that are different than those of the general human language that it
is derived from. The characteristics of a good notation are also the characteristics of general purpose programming
languages. This means that a general purpose programming language is a notation for a human language, and is also a *
special language* of that human language.

While the ability to be unambiguous is vitally important in general purpose programming languages and notations, it is
often less important for human languages to be unambiguous at all times. The human language Lojban however, was
constructed for logic based unambiguous human-to-human and human-to-machine communication (Hintz, 2014, p. 18). Because
Lojban has an unambiguous grammar, it is trivial to parse and easy to learn. The regular morphology, minimal regular
syntax, and the explicitly minimized semantic ambiguity in Lojban all contribute to it being well suited for accurate
and efficient communication (Hintz, 2014, pp. 18-21).

Given the features of Lojban, it is clear that Lojban as a language also fits many of the characteristics of a *special
language* as well as a notation and programming language. Even when treating Lojban as a notational language however,
the semantics of the language are still important. This importance has the implication that the semantics of the
original language are still present and important in the notational form of that language. This is true for all
programming languages, and not only for condensed human languages that can function as programming languages.

In the programming language Catala for example, legal texts can be translated to executable forms. This translation is
achieved by a notation that is referred to as "the Catala programming language" (Merigoux, Chataing, and Protzenko,
2021, p. 1). The stated aim of the creators of the Catala programming language is to "bring together lawyers and
programmers through a shared medium, which they can understand, edit, and evolve, bridging a gap that too often results
in dramatically incorrect implementations of the law" (Merigoux et al., 2021, p. 1).

It is seemingly obvious that legal language is a *sub language* or *special language* derived from a base general
purpose human language. Catala has been proven to be correct in its core compilation steps by the F* proof assistant (
Merigoux et al., 2021, p. 1). This implies that Catala is amenable to formal proof and that it can express ideas
unambiguously. Catala as a notation is also suggestive because it has clear semantics and "compiles to a generic
lambda-calculus that can then be translated to any existing language" (Merigoux et. at., 2021, p. 3).

In legal texts, there are several structures that are not typically present in other texts. The first of these atypical
structures is "out-of-order definitions" (Merigoux et al., 2021, p. 3). In this type of structure, the general case is
given first, followed by an enumeration of limitations or exceptions. The creators of the Catala language describe this
structure as "relevant information is scattered throughout, and \[one section\] alone is nowhere near enough information
..." (Merigoux et. alo, 2021, p. 3).

The second atypical structure found in legal texts is "back-patching" (Merigoux et al., 2021, p. 3). In this type of
structure, a section of text is modified in place by other text that comes after the section to be modified. A modified
version of this structure can be made by combining "back-patching" and "out-of-order definitions" to create "
out-of-order back-patching" which may change the entirety of a section of legal text based on one out-of-order piece of
information (Merigoux et al., 2021, p. 5).

The final atypical structures found in legal texts are "re-interpretation" and back-patching re-interpretation (Merigoux
et al., 2021, pp. 4-5). In these structures, a section of text can recursive or re-entrant and can back-patch preceding
texts.

Finally, in the context of the special language of legal texts, the underlying logic model is one of default logic. This
non-monotonic logic has been refined in the context of legal purposes as "prioritized default logic" (Merigoux et al.,
2021, p. 5).

All of these textual structures are present in the designed elements of the Catala language. In fact, the main design
goal of the Catala language is exactly to provide a programming language the uses prioritized default logic and is
tailored for use in law by both its syntax and semantics (Merigoux et al., 2021, p. 5).

## Further Research

While Catala is a programming language specifically created for use in the legal domain, it may be useful in other
domains. One could argue however that the application of Catala to a different set of problems is simply the application
of existing law to the domain that the problems exist in. Catala is interesting in this regard as it has been used to
verify the implementation of legal structures in both English and French law. This is novel because of the assumption
that the English and French languages have different structures, semantics, and syntax. Juxtaposed against this
one-to-many relation of Catala to both English and French, is Lojban existing as a human language and a programming
language simultaneously. When compared to English or French speakers learning Catala or APL to express their ideas, it
would be interesting to study native Lojban speakers (should any exist) learning how to express their ideas in Lojban as
a notational form that a computer can execute and verify.

## Conclusion

By looking at the concrete examples of Lojban as a constructed human language that can be simultaneously a programming
language and Catala as a constructed programming language made to match the structures of legal texts, this paper has
attempted to show that a programming language is simultaneously a notation and a special language derived from a general
purpose human language and that the knowledge structures present in the original human language can be found in the
resulting programming language.

## References

Bobrow, D.G. and Winograd, T. (1977), An Overview of KRL, a Knowledge Representation Language. Cognitive Science, 1:
3-46. [https://doi-org.ezproxy.bgsu.edu/10.1207/s15516709cog0101_2](https://doi-org.ezproxy.bgsu.edu/10.1207/s15516709cog0101_2)

Hintz, G. (2014). *Semantic parsing using Lojban – On the middle ground between semantic ontology and language* (
Master's thesis). Retrieved
from [https://www.inf.uni-hamburg.de/en/inst/ab/lt/teaching/theses/completed-theses/2014-ma-hinz.pdf](https://www.inf.uni-hamburg.de/en/inst/ab/lt/teaching/theses/completed-theses/2014-ma-hinz.pdf)

Iverson, K. E. (1980). Notation as a tool of thought. Communications of the ACM, 23(8),
444–465. [https://doi.org/10.1145/358896.358899](https://doi.org/10.1145/358896.358899)

Merigoux, D., Chataing, N., & Protzenko, J. (2021). Catala: A Programming Language for the Law. *ArXiv, abs/2103.03198*.

Thellefsen, M. (2003), The role of special language in relation to knowledge organization. Proc. Am. Soc. Info. Sci.
Tech., 40: 206-212. [https://doi.org/10.1002/meet.1450400126](https://doi.org/10.1002/meet.1450400126)

## Notes

This work was created for Instructional Design 6010 _Principles of Learning Design_ at Bowling Green State University to
fulfill a requirement to research and discuss an area of research germane to the course and to one's personal interests.