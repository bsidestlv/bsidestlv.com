name: add\remove sponsor
description: add a sponsor to the sponsor page
title: "[Sponsor change]: "
labels: [""]
assignees:
  - xFreed0m
body:
  - type: markdown
    attributes:
      value: |
        Thanks!
  - type: input
    id: sponsor-link
    attributes:
      label: sponsor-link
      description: Which link should the sponsor logo point to?
      placeholder: ex. supersponsor.co.il/jobs
    validations:
      required: yes
  - type: dropdown
    id: sponsor-logo
    attributes:
      label: Sponsor-logo
      description: Do we have a good res logo of the sponsor?
      options:
        - No
        - yes
    validations:
      required: true
  - type: dropdown
    id: sponsor-level
    attributes:
      label: Which level is the sponsor?
      multiple: true
      options:
        - Bronze
        - Silver
        - Chillout
        - Gold
        - Platinum
    validations:
      required: true
	  