

# AI Hacking Village

Welcome to the AI Hacking Village — a new track at BSidesTLV 2025, where hackers, researchers, and practitioners meet to explore the offensive and defensive edges of AI systems.

From adversarial attacks to red teaming, from model abuse to security posture, this village brings real-world insights into how AI can be manipulated — and how to build resilience into our machine-driven future.

## 🔍 WHAT
The AI Hacking Village is a focused track at BSides TLV dedicated to the security of AI systems. Through a curated lineup of technical talks and expert-led discussions, we unpack real-world attack surfaces across AI-powered technologies — from model red teaming and prompt injection, to data poisoning, misuse, and adversarial manipulation.

## ❓ WHY
AI systems are being deployed across every sector — from critical infrastructure to national defense — but they bring with them new, often poorly understood attack surfaces.

The AI Hacking Village brings together hackers, engineers, and researchers who are actively probing these systems — sharing insights, tooling, and tradecraft to help the wider community secure AI in practice, not just in theory.

## 🎯 MISSION
To build a technically grounded, hands-on community in Israel focused on the secure and responsible use of AI. We aim to bridge the gap between AI practitioners and security professionals by fostering open collaboration, practical knowledge exchange, and applied research.

## 🌟 VISION
A future where AI systems are designed with security at their core — scrutinized, stress-tested, and improved by communities that understand how they can be manipulated, exploited, or fail in the real world.

## 👥 WHO SHOULD JOIN?
If you're curious about how AI systems break — and how to secure them — you belong here. Whether you're a security researcher, AI practitioner, policy wonk, or hacker at heart, the AI Hacking Village is your space to engage, share, and learn.

## Schedule

09:00–09:45  Opening Keynote – Main Event Kickoff  
09:45–10:10  Agent or Double Agent? — Ziv Karliner  
10:10–10:20  Break  
10:20–11:00  Exploring AI’s Blind Spots — Elli Shlomo  
11:00–11:15  Break  
11:15–11:40  Red Teaming AI Agents — Alex Polyakov  
11:40–11:50  Break  
11:50–12:30  The Dark Side of LLMs — Vitaly Simonovich  
12:30–13:20  Lunch  
13:20–13:45  The Hidden Threats Inside AI Model Files — Ran Dubin  
13:45–13:55  Break  
13:55–14:20  The Invisible Identities Behind AI Agents — Tal Skverer  
14:20–14:30  Break  
14:30–15:10  Vulnerability Detection in C/C++ with AI — Daniel Liezrowice  
15:10–15:25  Break  
15:25–15:50  Cyber Security Toolset in the AI Era — Dor Amit  
15:50–16:00  Break  
16:00–16:25  How Nation-States Weaponize AI — Gil Baram  
16:25–16:35  Break  
16:35–17:00  [Pending] — Itamar Golan  
17:00–17:15  Break  
17:15–18:00  Closing Keynote – Reflections and Wrap-Up

## Agenda

### Vulnerability Detection in C/C++ Code with Deep Learning  

**Daniel Liezrowice – CEO and Co-Founder @ Engineering Software Lab (ESL)**  

This talk explores how AI and Large Language Models (LLMs) are revolutionizing vulnerability detection in C/C++ code—especially in embedded systems. By leveraging models trained on the SEI CERT C and CERT C++ Coding Standards, we can now achieve levels of secure coding compliance that were previously out of reach. The session will demonstrate a real-world embedded development workflow that combines AI-assisted coding with static analysis tools to detect vulnerabilities like buffer overflows and memory corruption in real time. Attendees will see how this innovative approach accelerates compliance, improves code quality, and reduces the risk of firmware hacking in critical systems.

### The Hidden Threats Inside Your AI Model Files  

**Ran Dubin – CTO and Senior Lecturer @ BUFFERZONE Security and Ariel University**  

AI models aren’t just powerful—they’re vulnerable. In this eye-opening session, we expose how AI model files are becoming the next frontier for cyberattacks. From hidden steganographic payloads buried in neural network weights to dangerous serialization vulnerabilities and poisoned models delivered through supply chain compromises, attackers are targeting the very foundation of your AI pipeline. Through live demos and real-world scenarios, we’ll reveal how these stealthy threats operate. Then, we’ll showcase cutting-edge protection and prevention strategies from Ariel University ByteDefend Cyber Lab, including Moving Target Defense, Content Disarm and Reconstruction (CDR), and innovative steganalysis-based detection.

### Exploring AI’s Blind Spots: A Research Perspective on Emerging Security Risks  

**Elli Shlomo – Head of Security Research @ Guardz**  

From model misalignment to adversarial inputs and systemic bias, AI’s blind spots are no longer theoretical, they’re being actively exploited or surfaced in real-world deployments. This session explores the evolving landscape of AI security risks, drawing attention to the less-visible, yet high-impact weaknesses in LLMs, multi-agent systems, and AI-enabled SOCs. It outlines attack classes, emerging red team tactics, and proposes a foundation for AI Security Posture Management (AI-SPM) frameworks that go beyond traditional defenses.

### The Dark Side of LLMs – Zero Knowledge Threat Actors  

**Vitaly Simonovich – Threat Intelligence Researcher @ Cato Networks**  

AI models aren’t just powerful—they’re vulnerable. This talk uncovers how threat actors are using LLMs for phishing, malware generation, and impersonation without needing prior knowledge. Through real examples, we’ll dissect these threats and explore detection and defense strategies.

### The Invisible Identities Behind AI Agents  

**Tal Skverer – Head of Research @ Astrix Security**  

AI Agents will become a major part of organizations’ workforce in the near future. This means that these agentic systems will perform tasks, access data and even deploy software. But who exactly are these "agents"? While organizations race to deploy AI agents for automation and efficiency, a critical security blind spot is hiding behind them: Non-Human Identities (NHIs). Every AI agent holds access to at least one NHI to function, access systems, and execute actions - such as service accounts, API keys and OAuth applications. Yet these highly privileged identities remain largely unmanaged and unmonitored. This talk will explore the overlooked touchpoints between AI Agents and NHIs, and reveal new research on how the growth of AI agents is amplifying the NHI security crisis within organizations. Tal will demonstrate how the fast adoption of AI creates new attack vectors where the agents themselves and their associated NHIs become the perfect target for attackers. If you're building, deploying, or securing AI systems, you don’t want to miss this exploration of the unexposed underbelly of agent identity security and the countermeasures needed in this new landscape. No previous knowledge in identity security is needed.

### Agent or double agent? How AI Coding Assistants Introduce Hidden Risk  

**Ziv Karliner – Co-Founder and CTO @ Pillar Security**  

As AI coding agents rapidly transition from novelty to necessity, organizations have embraced a "vibe coding" culture—where developers implicitly trust AI-generated outputs with minimal verification. This widespread adoption has created the perfect breeding ground for a new generation of supply chain attacks that exploit "automation bias" and our growing dependence on AI assistance. This session unveils the "Rules File Backdoor" research, demonstrating how attackers can transform AI coding agents into unwitting accomplices. Unlike conventional code injection attacks targeting known vulnerabilities, this technique weaponizes the AI tools themselves, allowing malicious code to propagate silently across development teams, repositories, and organizations—bypassing human review and traditional security controls alike. In this session, you'll discover how these invisible threats operate across popular platforms, and learn actionable strategies to detect and neutralize them before they compromise your organization.

### Red Teaming AI Agents  

**Alex Polyakov – Co-Founder and CEO @ Adversa AI**  

As AI agents become more autonomous, new attack surfaces emerge, threatening both system integrity and real-world operations. In this talk, we’ll dive into advanced red teaming tactics for AI-driven agents, exposing vulnerabilities that traditional security assessments often miss. Attendees will discover how malicious actors can exploit AI models and automation pipelines—learning the red team’s perspective and how to build more robust defenses. Join us to uncover where AI agents break—and how to safeguard the future of machine and human collaboration.

### Cyber Security Toolset in the AI Era  

**Dor Amit – Co-Founder @ 10root Cyber Security**  

AI opens the door to new solution concepts in Cyber Security for both offensive and defensive use cases. New ways to understand context and problem solving with a "human-like" heuristic approach instead of deterministic logic. In this lecture, I’ll explore those concepts and try to provide new solutions to existing problem domains with some unique added value. The first POC would be Application control designed for interactive usage which uses image analytics to understand actual usage and context and overcome known evasion techniques that are able to bypass conventional App Control. The second POC will focus on identifying user's Keystroke patterns using ML models for heuristic authentication use cases. Dor will discuss the use cases and where this type of solution is effective and poses unique added value.

### The Dark Side of Innovation: How Nation-States Weaponize AI  

**Gil Baram – Research Scholar and Senior Lecturer @ UC Berkeley and Bar Ilan University**  

Artificial intelligence is reshaping cyber conflict, enabling nation-states and criminal groups to amplify speed, scale, and precision. This presentation maps the 2025 AI-cyber threat landscape, integrating UC Berkeley tabletop insights with cases from Iran, North Korea, China, and Russia. Tehran’s APTs employ LLMs for spear-phishing, vulnerability scouting, and tailored propaganda; Pyongyang exploits AI for crypto-theft, malware design, and freelance deception; Beijing combines AI-driven reconnaissance with narrative manipulation aimed at Taiwan and U.S. tech; Moscow refines code obfuscation while building domestic LLMs for influence ops. Emerging vectors include hyper-localized phishing, autonomous AI agents that discover and exploit zero-days, deepfake-as-a-service enabling real-time impersonation, and “fabricated employees” who bypass remote hiring checks to gain privileged access. While generative AI has not produced entirely novel malware, it accelerates every kill-chain phase and lowers barriers for less-resourced actors. The study concludes that combining defensive AI with robust trust frameworks will be decisive for global security interests in this fast-moving contest.

### [Pending]  

**Itamar Golan – CEO and Co-Founder @ Prompt Security**  
(Talk title and abstract will be updated.)

## Speakers

### Dr. Ran Dubin

Dr. Ran Dubin is a cybersecurity expert specializing in AI-driven threat detection, network security, and malware analysis. He heads the ByteDefend Cyber Lab at Ariel University, leading cutting-edge research in AI-based cyber defense, network detection and response (NDR), and protocol security.

Before joining Ariel University, Dr. Dubin co-founded and was CEO of SNDBOX, an AI-driven malware sandbox acquired in 2020. He specializes in bridging academic research with real-world cybersecurity solutions, turning innovations into successful startups. His latest venture, Tope.AI, emerged from his study to advance API security. As CTO of BUFFERZONE Security, he leads the development of AI-powered endpoint isolation and cyber threat prevention technologies. With deep expertise in malware research and AI-enhanced cybersecurity, Dr. Dubin bridges academia and industry through extensive publications, patents, and advanced cybersecurity courses. Always looking for exceptional MSc and PhD students.

[LinkedIn](https://www.linkedin.com/in/dubinran/) · [X](https://x.com/DubinRan)

### Tal Skverer 

Tal holds an M.Sc. in Computer Science and has more than a decade of experience in reverse engineering, web hacking, cryptography and pentesting. Tal is the Head of Security Research at Astrix, where he challenges cloud platforms' defenses. At his previous job, he hacked vehicle computers daily, and is also known for being one of the researchers who broke PokemonGo's anti-cheating system in 2016. Last year, Tal discovered GhostToken, a 0-day vulnerability in GCP, revealed in a talk last DEFCON.

[LinkedIn](https://www.linkedin.com/in/reverser/)

### Dor Amit

Dor Amit Co-Founder & CTO of 10Root Cyber Security. White Hacker and Security researcher with over 20~ years’ experience. Amit has 2 registered patents and vast lecturing experience in Conferences such as Microsoft BlueHat, BSides TLV etc.

[LinkedIn](https://www.linkedin.com/in/dor-amit-7791397/)

### Alex Polyakov

Alex Polyakov is an AI Security Pioneer and AI Red Teaming evangelist, co-founder of Adversa.AI, vice chair at IEEE AI Cybersecurity group, AI Agents security co-lead at CosAI and member of the Forbes Technology Council. He has 20 years of experience in applying AI for cybersecurity and cybersecurity for AI, from practical red teaming expert to C-level executive. He has found over 300 vulnerabilities, presented his research at over 100 conferences in 30+ countries, and published dozens of whitepapers, two books, and multiple trainings, including the world's first practical training on securing AI. His work is mentioned on such websites as WSJ, Bloomberg, Fortune, Forbes, TechCrunch, Wired, MIT, and others.

[LinkedIn](https://www.linkedin.com/in/alex-polyakov-cyber/) · [X](https://x.com/donttrustai)

### Ziv Karliner

Ziv Karliner, Chief Technology Officer and Co-Founder of Pillar Security, is a distinguished cybersecurity innovator with over a decade of experience in research and the development of cutting-edge security products.

Ziv’s expertise encompasses financial cybercrime, cloud, and software supply chain security, shaped by his foundational work in the Israeli intelligence forces and significant contributions to leading security companies such as IBM Trusteer and Aqua Security.

[LinkedIn](https://www.linkedin.com/in/zivk/)

### Daniel Liezrowice

Since 1998, Daniel has specialized in developing, analyzing, and testing real-time embedded firmware in C/C++. He has built and applied source code analysis and testing tools for mission-critical systems, and has been an active participant in industry standards committees and open-source projects. He has also consulted extensively in regulated industries such as medical devices, avionics, and automotive, helping teams ensure their software meets rigorous safety, security, and quality standards. Since 2023, he has focused on integrating artificial intelligence (AI) and large language models (LLMs) with coding standards enforcement tools to fortify critical embedded applications. He works with strict coding standards such as MISRA C/C++ and SEI CERT C/C++, harnessing AI-driven code assistants to achieve 100% compliance with these stringent guidelines. This cutting-edge approach helps eliminate vulnerabilities and significantly reduces the risk of firmware hacking in embedded systems.

[LinkedIn](https://www.linkedin.com/in/liezrowice/)

### Elli Shlomo

Elli Shlomo is a security researcher with expertise in cloud and AI security and threat detection. With years of experience in cybersecurity, Elli focuses on uncovering emerging vulnerabilities in AI systems. He has contributed to AI-based security tools and leads research on the intersection of AI and cyber defense.

[LinkedIn](https://www.linkedin.com/in/elishlomo/) · [X](https://x.com/ellishlomo)

### Vitaly Simonovich 

Vitaly Simonovich is a threat intelligence researcher at Cato Networks and member of Cato CTRL. Currently, Vitaly focuses on researching topics related to LLM security, with a particular emphasis on jailbreaks and prompt injections.

Prior to joining Cato in 2023, Vitaly worked at Incapsula and Imperva, where he led teams of security analysts and researchers. With over nine years of experience in cybersecurity, Vitaly specializes in application security, data security, and LLM security.

An active contributor to the cybersecurity community, Vitaly regularly publishes research blogs, hosts webinars, and presents at conferences. In addition to his professional work, he teaches cybersecurity at local colleges and enjoys solving CTF challenges in his free time to stay sharp and enhance his skills.

[LinkedIn](https://www.linkedin.com/in/vitalysimonovich/) · [X](https://x.com/vitalysimx)

### Dr. Gil Baram

Dr. Gil Baram is a senior lecturer (US non-tenured Associate Professor) at the Political Studies Department, Bar Ilan University. She is a non-resident research scholar at the Center for Long-Term Cybersecurity University of California Berkeley. She is also a senior adjunct research fellow at the Centre of Excellence for National Security, Nanyang Technological University, Singapore. Previously she was a Fulbright Cybersecurity postdoctoral fellow at the Center for International Security and Cooperation (CISAC) at Stanford University.

Dr. Baram’s research explores, among others, areas such as AI-driven cyber threats, the impact of technology on national security, the role of Intelligence agencies in cyber operations, cyber threats to space systems, cyber norms development and data-based approach to cyber conflict research. Previously, she served as the Head of the Cyber & Space research group at the Yuval Ne’eman Workshop for Science, Technology and Security, and a research fellow at the Blavatnik Interdisciplinary Cyber Research Center, both at Tel Aviv University. Dr. Baram also held cyber intelligence positions within Israel’s National Information Security Authority.

[LinkedIn](https://www.linkedin.com/in/dr-gil-baram-cyber/)

## Leadership

### Tal Eliyahu  - Director, Cybersecurity & Technology Innovation @ InnovGuard

With 15+ years of experience working with startups and innovation labs in AI, blockchain, and smart city projects, Tal has worked alongside over 30 startups globally, leading their cybersecurity efforts from early stages in areas of Crypto, Finance, Supply Chains, and more. A creator of highly adopted public projects, communities, and a conference speaker, Tal continues to help companies innovate with confidence and lead with assurance.

[LinkedIn](https://www.linkedin.com/in/adgnji/) · [X](https://x.com/Eliyahu_Tal_)

