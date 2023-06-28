---  
title: Bug Bounty Village
---  

# Bug Bounty Village at BSidesTLV:
{{% picture img="/images/banners/bugbounty.png" widths="540,720,960,1140" %}}

The seasoned gunslinger Rotem Bar, famed far and wide for his uncanny knack for hunting down pesky code bugs, will be marshal of this town. This homestead is all about rallying the quickest draws in web application security, hackers, and tech enthusiasts. You can bet your boots there'll be plenty of gabbing, hacking, and workshop to keep your hacker skills sharp as a spur​1​​2​.

## Embrace Your Inner Hacker

Attention all hackers! For the first time in BSidesTLV history, we're excited to unveil the Bug Bounty Village! This year's event is filled with gripping activities that will immerse you in the thrilling world of hacking, bug hunting, and shared knowledge.

Join us in this trailblazing journey and let's reshape the future of bug bounties together!

## Schedule

{{< rawhtml >}}

  <style>  
    table {  
      width: 100%;  
      border-collapse: collapse;  
    }  
    th, td {  
      border: 1px solid black;  
      padding: 8px;  
      text-align: center;  
    }  
    th {  
      background-color: #f2f2f2;  
    }  
    tr:hover {
        background-color: #f3f3f3;
        cursor: pointer;
    }
    @media screen and (min-width: 768px) {  
      th, td {  
        text-align: center;  
      }  
      th:nth-child(1), td:nth-child(1) {  
        width: 150px;  
      }  
      th:nth-child(3), td:nth-child(3) {  
        width: 150px;  
      }  
    }  
  </style> 

<script>  
    function goToSection(id) {  
      document.getElementById(id).scrollIntoView();  
    }  
  </script>

<table>  
  <tr>  
    <th>Time</th>  
    <th>Topic</th>  
    <th>Speaker</th>  
  </tr>  
  <tr onclick="goToSection('opening-presentation---what-is-bug-bounty-and-why-should-we-care')">  
    <td>10:00-10:30</td>  
    <td>Opening Presentation - What is Bug Bounty and why should we care</td>  
    <td>Rotem Bar</td>  
  </tr>  
  <tr onclick="goToSection('israeli-bug-bounty-programs-intro')">
    <td>10:30-11:15</td>  
    <td>

        Israeli bug bounty programs intro
        <hr style="boder: 1px solid black" />
        <ul style="list-style-type: none;">
            <li>Danny Robinson from Appsflyer</li>
            <li>Zohar Shachar From Wix</li>
            <li>Ariel Rachamim From Moon Active</li>   
            <li>Erez Mor From Rapyd</li>
            <li>And more ...</li>
        </ul>
    </td>  
    <td></td>
  </tr>  
  <tr onclick="goToSection('ssrf-protections-from-bounty-report-to-mitigation')">  
    <td>11:15-12:00</td>  
    <td>SSRF Protections, From bounty report to mitigation</td>  
    <td>Reuven Elezra, Appsflyer</td>  
  </tr>  
  <tr>  
    <td>12:00-13:00</td>  
    <td>Break</td>  
    <td></td>  
  </tr>  
  <tr onclick="goToSection('what-the-fork-gaining-rce-into-internal-cis-at-scale')">
    <td>13:00-13:45</td>  
    <td>Hacking CI systems in the wild</td>  
    <td>Moti Harmats, Wix</td>  
  </tr>  
  <tr onclick="goToSection('exploit-tiktok-our-journey-to-finding-an-account-takeover-vulnerability-using-xss')">  
    <td>13:45-14:15</td>  
    <td>Exploiting TikTok: Our Journey to Finding an Account Takeover Vulnerability using XSS</td>  
    <td>Amit Elbirt & Abir Nadav, EY</td>  
  </tr>
  <tr onclick="goToSection('deja-vu-in-cyberspace-old-techniques-new-exploits-in-rdp')">  
    <td>14:15-15:00</td>  
    <td>Deja Vu in Cyberspace: Old Techniques, New Exploits in RDP</td>  
    <td>Dor Dali, Cyolo</td>  
  </tr>
<tr onclick="goToSection('a-little-step-for-devops-a-big-step-for-security')">  
    <td>15:00-15:30</td>  
    <td>A little step for DevOps, a big step for Security</td>  
    <td>Valeri Goltsman, Rapyd</td>  
  </tr>
  <tr>  
    <td>15:30-17:00</td>  
    <td>Lightning talks - Registration on site</td>  
    <td> </td>  
  </tr>
  <tr>  
    <td>17:00-17:30</td>  
    <td>Ask us Anything</td>  
    <td>BugBounty Panel</td>  
  </tr>
  <tr>
<td colspan="3">From 10:30 → 18:00 - Collaboration / Hunting together - Bring a laptop*</td>
</tr>
</table>

{{< /rawhtml >}}


## Our Vision

The Bug Bounty Village is a vibrant, hands-on community with a focus on hacking techniques, tactics, collaboration, and most importantly, knowledge sharing.

Our mission is to provide a safe environment for both beginners and professionals to learn, enhance their skills, and devise innovative methods for identifying security vulnerabilities.

At BSidesTLV, we will host technical talks, live bug bounty demonstrations, and interactive activities to acquaint you with the latest hacking tools and techniques.

Whether you're an experienced cybersecurity professional or just starting out, there's something for everyone. Join us at the Bug Bounty Village and let's collectively make a difference in the world of cybersecurity!

## Agenda

### Opening Presentation - What is Bug Bounty and why should we care
by Rotem Bar

In this lecture, Rotem Bar provides an introduction to bug bounty programs. Why they are important for the community, and why they are vital for every company out there. We will discuss how to start in your bug hunting journey, if you are a complete beginner or only did pentests or other infosec activities, even developers can join the fight :)

### Israeli bug bounty programs intro

We will showcase different bug bounty programs and provide an overview of the bug bounty landscape in Israel, including the organizations that run bug bounty programs and the types of vulnerabilities they are interested in.

### SSRF Protections, From bounty report to mitigation
by Reuven Elezra, Appsflyer 

Inspired by a critical SSRF bug bounty report, we embarked on a transformative journey towards enhancing our security practices. Seeking guidance from the security community, we explored the best solution to address SSRF vulnerabilities. To develop a game-changing security library, we prioritized factors such as time efficiency and easy implementation. Our collaborative approach, backed by real-world analysis, led us to create an innovative library that provides robust SSRF protection while simplifying integration for developers.

### What The Fork? Gaining RCE into internal CI's at scale
by Moti Harmats 

CI/CD systems make great targets for attackers as they often run in privileged environments with access to sensitive secrets and internal systems.
It is not uncommon to treat INTERNAL CI's as INTERNAL systems that are not exposed to the internet, but the truth is that internal CI’s are just as exposed as your web API’s through version control systems such as GitHub & GitLab.

Although it is commonly known that untrusted & unreviewed pull requests should never be automatically merged to a repository’s main branch (a.k.a “master branch”) - CI pipelines tend to behave differently, they often “build first and ask questions later”.

In this talk Moti will show how this functionality can be exploited against public repositories, why vulnerable pipelines are so abundant and why DevEx / DevOps teams should always design their CI’s in an “assume breached” mindset.
Moti will showcase the attacks using a new open-source automation attack framework built by him!!

### Exploit TikTok: Our Journey to Finding an Account Takeover Vulnerability using XSS
by Amit Elbirt & Abir Nadav

Join us as Amit and Abir present their findings on a recently discovered vulnerability that could potentially compromise user accounts on TikTok. 
Through careful investigation and bug bounty participation, They identified and exploited a Cross-Site Scripting (XSS) vulnerability. 

The presentation will provide an overview of the discovery process, including navigating the challenges posed by a Web Application Firewall (WAF) and demonstrating the potential impact through an OAuth authentication exploit. They will also discuss the timely response from TikTok in addressing the issue. 

This presentation offers valuable insights into the importance of robust security measures in today's digital landscape.

### Deja Vu in Cyberspace: Old Techniques, New Exploits in RDP
by Dor Dali

In an era where cutting-edge technology and sophisticated security measures take center stage, it's easy to overlook the ghosts of the past. This talk revisits two classic techniques that, combined, allowed us to achieve Remote Code Execution (RCE) on the Remote Desktop Protocol (RDP) Client, which plays a crucial part in the realm of remote access.

Throughout this presentation, we will delve into the comprehensive details of the vulnerability - from the initial discovery to the final reporting stage via the Microsoft Bug Bounty Program.

### A little step for DevOps, a big step for Security
by Valeri Goltsman

Uncover the significance of moving beyond the realm of security and acquiring DevOps expertise.
Explore how incorporating DevOps principles can bolster security practices, optimize operations, and adapt to the ever-changing technological landscape.

### Lightning talks

This session consists of lightning talks, which are short and concise presentations on various topics. The exact topics and speakers may vary, as registration is done on-site. Lightning talks provide an opportunity for different individuals to share their knowledge, experiences, or insights within a limited timeframe. Attendees can learn about diverse subjects and get a broad range of perspectives.


## Call for Volunteers

We're looking for volunteers to help us run the Bug Bounty Village this year. Volunteer roles include:

- Main Desk: Provide information about bug bounties, how to start, and general help

- Newbie Assistant: Assist newcomers to the bug bounty field (requires technical knowledge)

- Hacking Guru: Join the hunt, help hunters exploit and identify vulnerabilities, suggest new bypass methods, or provide useful tips to save time.

If you're interested in joining our team, please contact us via email - rotemb@gmail.com

