---
layout: blog_page
# title: Vote.gov
---     


# VOTE.gov

This project is one that I am very proud of… not just for the type of work that was done but also that this was my first chance to build a testing pipeline and process from the ground up.  Coming into the project there was just manual testing and no QA/Testing person who was dedicated to this.  

For test automation, the team decided to try and utilize Cypress as much as possible. These different tools will be address and explained below.  

For vote.gov, this site is your one stop for anything voter registration.  Anyone can get more information for how, when, and even where so that they can do their civic duty and select their representatives. 

## Cypress

This tool is very robust and allows any users to create testing steps run though anything that is in a browser.  For Vote.gov this was used to run though several functional tests to ensure that each user is having a positive experience.  This also allows the team to identify and address any bugs that might appear as soon as possible. 

## Link-Validation 

When anyone is clicking though a site the worst thing that can happen is clicking on a link and getting a 404 error, or page not found.  Cypress tests were written to check links to verify that they are working as expected and that they lead to the correct page as well. 

## Cypress-Axe Plugin 

Accessibility should be on the forefront of any developer minds… especially for any government site let alone one for voter registration.  This was key for our team was to find any accessibility errors and then find a way to ensure the site meets standards.  Cypress has a plug in that runs off AXE core and can be easy to set up and add into any testing pipeline.  

## GitHub Actions

In this project, GitHub actions were used to run the above tests through a pipeline.  This was triggered every time there was a pull request and any push that was done after

This was a fun project to work on, I was pushed to look at things in a different way and was able to try new things and see what works.  The support I was given for this project has made me an even better developer on top of Test Engineer.  I now feel more confident in my skills and my ability to think though things and make plans to better provided test coverage for this project.  

Links to reports, tests, tools, and other things 

-[Cypress](https://www.cypress.io/)
-[AXE-Plugin](https://github.com/component-driven/cypress-axe)
-[GitHub Actions](https://github.com/features/actions)
-[Cypress Tests for Project](https://github.com/usagov/vote-gov/tree/staging/cypress/e2e)
-[Live Site](https://vote.gov/)

