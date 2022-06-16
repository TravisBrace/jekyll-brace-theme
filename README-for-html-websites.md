# Welcome to your Fuel Web Website

To upload content please go to the link <a href="https://www.rosenthallevy.com/.Page-Blog-Creation-Tool/" target="_blank">https://www.rosenthallevy.com/.Page-Blog-Creation-Tool/</a> to access our page generation tool. This will create all the code you needed an easy accessibile format for you to add to the website.

You also will need to copy and paste word documents into our word to our <a href="https://htmlg.com/member/?id=1118397585373913676613138751123757" target="_blank">html cleanup tool</a> so it's a good idea to have this open in advance also. 

All Pages will be automatically added to the sitemap

## Page Generation Steps

### Interal Page or Blog Post?

Fill out each form input field after choosing if this is an internal page or a blog post. They will each have different fields, meta, schema, generated so it's important that this choice is correct.

### Blog Example

Once you fill out all the fields in the generator tool, all social meta data and schema code should be created automatically. All You'll have to do is copy and paste! After filling out all the fields and generating the page You'll want to copy this into two different places, the blog snippit and the full blog post html.

**Step 1. Blog Post Snippit**
This will be what the user will see on the blog page <a href="https://www.rosenthallevy.com/blog/">https://www.rosenthallevy.com/blog/</a> 

For this you'll have to copy the generated blog snippit code <a href="https://github.com/Fuelweb/rosenthallevy/edit/main/blog/index.html">after the main-content-container in the /blog/index.html file on line 28</a>

**Step 2. Full Blog Post Html**
Then you'll be ready to add this file into the website repository by copy and pasting the Full Page HTML.

On the top of the page here click on the <a href="https://github.com/Fuelweb/rosenthallevy/tree/main/blog" target="_blank">Add File -> Create New File</a> to add in the Full Page Html.

Note: for websites ending in a slash you'll want to make the blog post name a directory and copy the Full Page HTML into an index.html file inside of that.

### Page Example

**Schema**
Interal Pages will typically have the same schema throughout the website. The schema <a href="https://github.com/Fuelweb/rosenthallevy/blob/main/assets/html/framework-parts/_header-sitewide-schema.html" target="_blank">is saved here</a>. This is sitewide and will apply to everypage that has `  <!--#include virtual="/assets/html/framework-parts/_header-meta-include.html" -->` in the `<head>` tag.

**Uploading**
After you fill out all the fields requested on the <a href="https://www.rosenthallevy.com/.Page-Blog-Creation-Tool/" target="_blank">page generation tool</a> you'll be ready to add this file into the website repository by copy and pasting the Full Page HTML

On the top of the page here click on the <a href="https://github.com/Fuelweb/rosenthallevy/new/main" target="_blank">Add File -> Create New File</a> to add in the Full Page Html.

_Important note to remember about page formatting_ if all of their pages end with a slash so you'll need to create the dirctory and save the file as index.html

**Adding to the Sidemenu Top Navigation and Mobile Menu**

If requested the page will need to be added to the navigation menus

The SideBar is located <a href="https://github.com/Fuelweb/rosenthallevy/blob/main/assets/html/framework-parts/_sidebar.html" target="_blank">here in assets/html/framework-parts/_sidebar.html</a>

The Top Navigation is Located <a href="https://github.com/Fuelweb/rosenthallevy/blob/main/assets/html/framework-parts/_nav.html" target="_blank">here in assets/html/framework-parts/_nav.html </a>

The Mobile Navigation is located <a href="https://github.com/Fuelweb/rosenthallevy/blob/main/assets/html/framework-parts/_mobilenav.html" target="_blank">here in assets/html/framework-parts/_nav.html </a>
