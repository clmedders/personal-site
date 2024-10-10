---
title: 'Pull Requests: The Unsung Hero of Software Development'
description: 'Why you need to care about your PRs'
pubDate: 'Nov 15, 2023'
heroImage: '/pr.png'
---

The magical pull request (PR)—a magical gateway where your latest masterpiece of code transitions from "works on my machine" to "let’s see how many things I broke in production." PRs are the unsung heroes of software development, quietly keeping chaos at bay. But here’s the kicker: while they’re crucial for your team’s sanity, a bad PR can be just as disastrous as no PR at all. 

<br>

#### Let’s dive into why good PRs, solid documentation, and testing steps are the holy trinity of keeping your team from rioting. 
A good PR is like a well-timed coffee break: essential, rejuvenating, and makes everything better and here’s why. 

**1. Code Review and Improvement:**

Think of your PR as submitting an essay to a very judgmental professor—but instead of red ink, you get inline comments that (hopefully) improve your code. Code reviews catch mistakes, provide feedback, and make your project stronger. Without them, it's like jumping out of a plane and assembling your parachute on the way down—scary, error-prone, and usually ends badly. 

**2. Reduced Errors and Bugs:**

Fewer bugs, fewer all-hands-on-deck fire drills. Good PRs encourage thorough code reviews, which means fewer "oops" moments later. 

**3. Collaboration and Communication:**

A well-crafted PR shows off your code like a resume shows off your job experience: it’s all about selling it. Clear communication in your PR ensures everyone’s on the same page, which means fewer Slack messages asking, “What does this function even do?” 

**4. Code Quality and Maintainability:**

Great PRs aren’t just about making things work now; they’re about making sure your code doesn’t turn into a haunted house that scares every developer who dares enter a month later. Well-structured PRs improve long-term maintainability and keep your future self from cursing your past self. 

Good PRs lead to:

  **- Faster development:** Clean code is easier to merge and deploy. 

  **- Improved morale:** When people aren’t sifting through spaghetti code, they’re happier. 

  **- Better scalability** Your app can grow, and so can your ability to deal with it.

Here is an example of a lacking pr description and a robust description.  One gives an overview of why the decision was made and the other just telling you what it is doing.  

Good - `Refactors template logic to support the ext_links front matter fields to display correct external agency icon. 
Previously was only displaying the site logo for external links, which is not consistent with the component's usage in other parts of the site.` 

Bad - `Updated logic to give the icon display`  

<br>

### Testing Steps: AKA, Proving You Didn’t Just Wing It 
Writing a PR without thorough testing is like building a bridge and not bothering to check if it holds weight. It might look fine... until the cars fall into the river. Testing is how you make sure your code doesn’t break everything else. 

**1. Comprehensive Testing:**

Your PR needs clear, detailed testing steps. Yes, it’s tedious, but it’s what stands between your code and an angry email at 2 AM. Test thoroughly, and don’t just cross your fingers. 

**2. Clear Test Results:** 

Nobody wants to decipher cryptic messages like “Failed because something broke.” Be clear, concise, and make sure anyone reviewing knows exactly what works—and what doesn’t. 

**3. provided information needed:**

Giving your reviewing links to tickets, definition of done and designs will help them know what the end goal is and what they should be comparing your solution to.  

Good testing steps will give the reviewer clear ways to either reproduce the bug or tell them what the goal of the fix is doing.  

Good steps:

  *- Visit the home page*

  *- Reduce the screen size to 390px width*

  *- Ensure that the mobile menu is appearing in the top right-hand corner*

  *- Click on the menu button, verify that the expected behavior of toggling open is happening*

Not good steps:

  *- Make your screen smaller*

  *- Check the menu is working* 

<br>

### Documentation: The Unsung Hero (That Everyone Ignores Until It's Missing) 
Good documentation in a PR is like leaving breadcrumbs through a forest. Without it, people get lost. With it, they know exactly how to follow your brilliant code—and even replicate it. 

**1. Clear Code Comments:**

Every line of code is a clue. Good comments explain the why behind your choices. No one has time to mind-read through your code structure. Be the helpful ghost, not the one who leaves everyone confused. 

**2. Well-Organized Code Base:**

Code structure should be like a well-organized kitchen: easy to navigate, no unnecessary clutter, and everything where you’d expect it. Good documentation helps people find their way around without having to ask, “Why is the toaster in the fridge?” 

**- Documentation benefits everyone by:** Improving readability: Less time spent deciphering code, more time improving it. 

**- Easier onboarding:** New team members don’t have to guess what your code does; they can read it and understand. 

**- Fewer bugs:** Because, shocker, people make fewer mistakes when they understand the code they’re working on. 

<br>

### Conclusion: Don’t Let Bad PRs Ruin Your Day  
In the end, good PRs, solid documentation, and thorough testing aren’t just nice-to-haves—they’re essentials. They make everything run smoother, improve team communication, and stop the “WTF does this code do?” moments. 

So, the next time you write a PR, remember: your team’s sanity depends on it. Prioritize clarity, document everything, and test like you’re about to launch a rocket. Your future self—and your team—will thank you. 

 