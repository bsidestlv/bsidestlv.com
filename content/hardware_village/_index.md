<!--
---
title: Hardware Village
menu:
  main:
    weight: 56
---

## Hardware Village at BSidesTLV

Howdy partner! For the first time in BSidesTLV history, we are excited to introduce the Hardware Village!

This year's event will host a range of engaging activities designed to immerse attendees in the world of Hardware research, exploitation, and design.

We invite you to join us in this groundbreaking initiative and be part of a collaborative effort to shape the future of cybersecurity.

## Our Vision

The Hardware Village is dedicated to exploring the world of hardware security and sharing knowledge across the community. We are looking to cover many topics in the Hardware security space such as Secure hardware design, verification of hardware, hardware attacks, and designing hardware attack tools.

We aim to bring vendors and security experts together to improve the security of the hardware which underlies all our digital society by understanding attack surfaces, attack methods, secure design concepts, and security processes.

At BSidesTLV, we’ll host technical talks, live demos, and a special workshop to give our attendees a deep dive into the current state of the Hardware security field from an offensive and a defensive perspective.

Whether you’re a seasoned cybersecurity pro or just starting out, we’ve got something for everyone. So saddle up and join us at the Hardware Village! Yeehaw!

## Agenda

### How to trust your open-source ASIC
**Leonid Azriel**

Open-source IC is not a new concept. Nevertheless, usage of open-source by the hardware community has been limited until recently. In the last few years, the introduction of the RISC-V open architecture helped to bring fresh energy to open-source IC, and many new projects have emerged. In addition to many benefits in productivity and quality, the open-source model contributes to product security by following the Kerckhoff's principle of open algorithm. However, unlike in software, in the IC world there is a long way from the source to the finished product, and it is hard to guarantee that the product indeed implements the algorithm as advertised. In this talk, I will discuss possible schemes, methodologies and policies to verify the compliance of the integrated circuit to the claimed open source and propose a scheme based on the existing Design-for-Test technology.

### CYMOCAN - An open-source USB CAN-FD adapter
**Benny Meisels**

CYMOCAN is a hardware tool which allows a Linux system to connect to a CAN bus over USB. The commercial products in this space can be very costly and some require software licenses. With CYMOCAN we aim to offer a cheaper alternative for hobbyists and professionals while also supporting both the CAN and CAN-FD protocols.

### Bolt-on security for existing and new designs with Secure Flash
**Nir Tasher**

Real world designs today suffer from profound security vulnerabilities. Regardless of platform type, once they are connected to any network, it opens up numerous attack vectors. Chaos agents exploit software vulnerabilities to upload and execute malicious code, with focus on making attacks persistent. Persistent attacks are much harder to detect and recover from, and allow the attackers to fine tune the timing and scale of their attacks. A persistent attack requires modification of the system non-volatile storage. The most sensitive and thus sought after is the boot loader. Pawning the system boot loader allows an attacker to achieve almost anything in terms of compromising the system and in many cases, the entire infrastructure. Protecting the non-volatile code storage, and in particular the boot loader, is the essence of the secure flash. The secure flash guarantees that code can only be modified by a trusted entity. It prevents rolling back the system to older code, and allows the system and infrastructure to create a root of trust for various operations such as platform attestation. And it offers this security hardening with almost zero changes to the system and existing software stack.

### Firmware security testing with Fault Injection Simulation
**Jan Jager**

I will address the effect Fault Injection has on the firmware and how to simulate fault injection attacks. I will demonstrate with a sample code with FI attacks before and after mitigation.

## Call for Papers

Note: The Call for Papers is now closed.

In line with our vision, we are looking for innovative and groundbreaking presentations on offensive/defensive hardware research. The Hardware Village will host technical talks, workshops, live demos, panel discussions, and other hands-on activities.

We invite you to submit your proposals for talks at the Hardware Village during BSidesTLV on Thursday, June 29th, 2023. Our CFP is open from Tuesday, 30th March till May 1st, 2023.

### Topics we would like to hear about:

We are interested in new and cutting edge security work in defensive and offensive domains. Security topics that interest us include (but are not limited to): 
Hardware Components (Integrated Circuits, System-On-Chip, Microcontrollers etc.)
Embedded Systems and Connected Devices
Automotive, Aerospace and Locomotive systems
Industrial Control Systems and Medical Devices
Firmware, Wired and Wireless Communication Protocols
Secure Hardware (Hardware Security Modules, Trusted Execution Environment, Trusted Platform Module, Security Elements)
Attacks & Countermeasures

### Available speaking slots include:

- Regular talk (25 minutes)
- Deep-dive, technical talk (45 minutes, which should include a workshop or a live demo)
- Lightning talk (10 minutes)
- Panel (30 minutes, which should include a few members)

Submit your proposal here: [Hardware Village CFP](https://cfp.bsidestlv.com/bsidestlv-2023-villages)

## Call for Volunteers

We’re looking for volunteers to help us run the Hardware Village this year.

If you’re interested in joining our team, please reach out to us via email at hardwarevillage@bsidestlv.com.

## Leadership

Our amazing CFP Review board members can be found [here]({{< relref "/team#hardvillageteam" >}}).

## Our Code of Conduct:

**All attendees, speakers, sponsors and volunteers at our conference are required to agree with the following code of conduct.**

Our Code Of Conduct can be found [here][coc-url]

[coc-url]: /code-of-conduct

-->