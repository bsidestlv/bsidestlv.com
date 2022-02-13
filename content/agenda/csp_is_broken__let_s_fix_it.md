---
title: 'CSP is broken, Let''s fix it'
talkType: Deep-dive technical
date: 2021-07-22T14:35:00+03:00
start: 2021-07-22T14:35:00+03:00
end: 2021-07-22T15:20:00+03:00
duration: 45
tags:
  - Deep-dive technical
speakers:
  - amir_shaked

---
The CSP standard was supposed to improve the security of websites. But, like any standard, it needs to evolve to stay relevant, both in the assumptions on how sites are working and what is the reality in the implementation. In this talk, we will discuss those gaps. First, we will demonstrate how the standard can be abused and is abused when facing real-world uses. Second, we will cover multiple implementation gaps causing it to misbehave in browsers and expose information to attackers. Third, we will review and analyze bad implementations by website owners who place poor configuration, misunderstandings of the directives and outdated configurations. These three gaps between the standard and real-world uses will be the basis to discuss the improvements and considerations DevSecOps need to consider using CSP while discussing ideas on how to improve the standard.

The talk will cover the following points: 1. A brief overview of the history behind CSP (3 minutes) 2. The timeline of main changes, early versions to current (5 minutes) 3. Where it went wrong - abusing the safelist concept to inject code and extract information (15 minutes) 4. Examples of poor implementation by browsers - not covering all angles, CVEs and other gaps (10 minutes) 5. Poor usage examples by webmasters (5 minutes) 6. Thoughts on how CSP 3 (or 4) can remediate that to make a more secure internet (5 minutes)

Attendee takeaways include:
1. CSP Isn’t a silver bullet
2. Skimmers are a new breed of APT
3. Checklist for your own site