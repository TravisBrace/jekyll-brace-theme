# Welcome to the Jekyll CMS generator

Here you will find instructions for uploading blog posts and internal pages.

**All posts are written in markdown the easy to read text format**

A fantastic guide to markdown can be found online here [https://commonmark.org/help/](https://commonmark.org/help/) 

And there is a great interactive markdown creator here that can be used and copied into the file [https://markdown-editor.github.io/](https://markdown-editor.github.io/)

## Pages

Create a new mardown file inside the _pages director with your page name and extension .md like so: page-name.md Every new page starts every with the "front matter" shown below content example also included

```
---
layout: pagesidePA
titletag: page Title Tag goes here
description: page Description goes here
titlebar: titlebartextgoeshere
---

# h1 would go here

you can write regular paragraphs out like this.

```

If you need a page's permalink to be inside a folder it's a good idea to create the folder and page name for example _pages/family-law/divorce.md

You can also set a permalink by adding permalink into the front matter (between the lines of ---)

```
permalink: family-law/divorce/
```

## Blog Posts

All blog posts are made in the `_posts` directory by opening the posts folder and clicking Add file -> Create new file. All new posts must follow the year-month-day-pagename.md format shown in the example below:

```
2022-03-03-example-test-blog-post.md 
```

Start every new posts by copying the "front matter" below shown here. This will be used to create the page meta data and create the blog snippit that is added to the /blog/ page on the website. content example also

```
---
layout: post
titletag: Title Tag Goes Here
description: Description Goes Here
category: Category Goes Here
h1Headline: H1 goes here doubles for seo meta
---

Paragraph or h2 content would start here. The H1 is added into the blog posts automatically.

```
