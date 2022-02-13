---
title: 'Whitelist Me, Maybe? When Cyber Criminals Try A Daring Approach to Evade Detection'
talkType: Regular Talk
date: 2021-07-22T10:30:00+03:00
start: 2021-07-22T10:30:00+03:00
end: 2021-07-22T10:55:00+03:00
duration: 25
tags:
  - Regular Talk
speakers:
  - omri_misgav

---
In February this year, we received a request via email on behalf of a company to whitelist their software. At first glance, the email seemed to be legit and the file nor link to it were flagged by any other security vendor. As we started to investigate, we quickly realized it was a sophisticated attempt of a threat actor to evade detection by using social engineering.

A lot of effort was put into creating the cover story, to the point the threat actor was so confident enough to just hand us their executable. A real, though sketchy, company was used to masquerade the activity along with valid code signing certificates. We hunted down dozens of malicious samples and identified a rather elaborate, multistage infection mechanism that can be activated at any point in time.

The tools were developed in-house in Go programming language, which becomes increasingly popular among malware authors, and included versions for Linux and MacOS as well.

The first stage uses a public and open-source update service dedicated to Go applications. The following stages use the same protocol but with servers hosted by the threat actor. In addition, they also include a reverse proxy capability based on another open-source Go package that was modified by the threat actor so they could easily bypass perimeter firewalls or utilize infected machines as hop points in operations against other organizations.

The final payload is customized according to the attacker’s discretion. In this campaign we identified a few InfoStealers, one is FickerStealer, a new stealer sold in Russian hacking forums. Though it’s written in Rust, evidence in the code hint that it may originate from the same developers of this malware distribution infrastructure.