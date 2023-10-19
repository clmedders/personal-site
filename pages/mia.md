---
layout: blog
---

# Made In America
This project was the first one I had the chance to truly begin my journey in Test Automation and QA.

There is a true mix of skills to be used… Cypress, GitHub Actions, Circle Ci, Pa11y, Html Proofer, and traditional manual testing.   At the end of the blog, you will find links to my code and to the tools that were used in this project. 

## Cypress

This is a great tool that can test anything that is in a browser.  This project was used to focus on functional testing.  There has been a suite of tests that were written to cover how a typical user would interact with the site.  This induces checking that page’s load, and waiver page function is working as expected and that all links on the site are valid and do not lead users to a 404 error. 

## HTML Proofer

This tool is used by running through the entire site and checking every external link is working and valid. By doing this we are ensuring that the user is having a good experience and not being led to sites that are not working 

## PA11y

An automated accessibility testing tool will check each page for accessibility errors. This runs off AXE core which is a standard tool to be used. 

## GitHub Actions

In this project, GitHub actions were used to run the above tests through a pipeline.  This was triggered every time there was a pull request and any push that was done after. 

All these tools have allowed the team to catch any errors and bugs that might come up before they hit production.  Now, this has not been 100%, sometimes there are things you need to test that you didn’t know about before your launch, but a good development team can catch bugs and address them quickly.  This helps give your client confidence that you can handle any issue that might come up. 

From someone who was working in education less than a year before joining this project to helping provide a robust testing pipeline.  I look at the work done for this and am proud in knowing that users are having a positive experience and we are also helping promote American-made goods. 

Links to reports, tests, tools, and other things 

| -------- | 
| [Cypress](https://www.cypress.io/)| 
| [HTML Proofer](https://github.com/gjtorikian/html-proofer)| 
| [Pa11Y](https://pa11y.org/)|
| [GitHub Actions](https://github.com/features/actions)|
| [Cypress Tests for Project](https://github.com/GSA/made-in-america/tree/develop/cypress/integration/tests)|
| [Live Site](https://www.madeinamerica.gov/)|


