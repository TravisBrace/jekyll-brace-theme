---
layout: page
title: About
description: About the new Fuel Web Jekyll CMS
titlebar: About Page
---

This is the Fuel Web Jekyll Powered Content Management System!

This is a combination of our framework we've worked on the last years and the static site generator/content management system that is Jekyll RB.

## Posts

All blog posts are created inside a folder called _posts. Inside you will find a template file *_post-template.md you'll want to duplicate this file to create a new post. All posts are named with year-month-day-postname.md This has to follow this format but the way the urls are displayed in the browser can chagne to however we would want to display them.

## Menus

Menus are located inside the _data folder. These follow a basic yaml structure. each new link starts with a dash followed by the page name like so 

- pagename: example\
	url: /example.html

These are open and easy to read. 

## Pages

Pages added follow the same file structure as they would in any other website just labeled as an md file. So for example.com/about.html and example.com/about/ would both work for an about.md file in the root domain.

If you had a page like for instance example.com/practice-areas/car-accidents/uber-and-lyft/ this would be a file uber-and-lyft.md places inside the car-accidents folder inside the practice-areas folder.

## Conclusion

Any further questions can see the basic Jekyll usage documentation at [jekyllrb.com]
