---
title: 'CrimeOps of the KashmirBlack Botnet'
talkType: Deep-dive technical
date: 2021-07-22T11:20:00+03:00
start: 2021-07-22T11:20:00+03:00
end: 2021-07-22T12:05:00+03:00
duration: 45
tags:
  - Deep-dive technical
speakers:
  - ofir_shaty
  - sarit_yerushalmi

---
The KashmirBlack botnet mainly infects popular CMS platforms. It utilizes dozens of known vulnerabilities on its victims’ servers, performing millions of attacks per day on average, on thousands of victims in more than 30 different countries around the world.

Its well-designed infrastructure makes it easy to expand and add new exploits or payloads without much effort, and it uses sophisticated methods to camouflage itself, stay undetected, and protect its operation.

It has a complex operation managed by one C&C (Command and Control) server and uses more than 60 - mostly innocent surrogate - servers as part of its infrastructure. It handles hundreds of bots, each communicating with the C&C to receive new targets, perform brute force attacks, install backdoors, and expand the size of the botnet.

Takeaways:
- Security is only as strong as the weakest link.
- CMS platforms have the potential to be the weakest link in the security chain, because they are so modular with thousands of plugins and themes. Owners are notorious for poor cyber hygiene, using old versions, unsupported plugins and weak passwords. It’s not that CMS platforms are very vulnerable like they have the potential to be.
- A large scale botnet doesn’t necessarily need an exsotic exploit to expand, it can exploit old vulnerabilities to infect millions of victims. But in order to create a stable and long-term botnet, it needs a well designed agile infrastructure.
- The COVID pandemic has created more opportunities for hackers, as more businesses digitize their  operations. Just like the world adjusts and more businesses go online, the community needs to adjust and aducate for better security hygiene.