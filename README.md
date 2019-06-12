# Trice Jekyll

> *Copyright 2019 [CuiYiming](https://cuiyiming007.github.io/)*

English Documentation | [中文文档](/README_CN.md)

**Trice Jekyll** is a ready-to-use template to help you create an awesome website quickly. Perfect for personal sites, blogs, or simple project websites.  [Check out my blog](https://cuiyiming007.github.io/) of what you'll get after just two minutes and see it in use.

**If you enjoy this theme, please consider *supporting me* for developing and maintaining this template.**

<p align="center">
    <img src="/alipay-code.jpg" width="200px"/>
    <span>&#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160;</span>
    <img src="/wechat-code.png" width="200px"/>
</p>

## Contents

- [How to build your website](#how-to-build-your-website)
- [How to use this theme](#how-to-use-this-theme)
    - [Install and setup](#Install-and-setup)
    - [Customize your website settings](#Customize-your-website-settings)
    - [Add your content](#add-your-content)
- [Showcased users](#Showcased-users)
- [Credits](#credits)
- [Contributions](#Contributions)

## How to build your website

About this part, you can see my blog [How to build blog in github](https://cuiyiming007.github.io/web/2019/05/19/How-to-build-blog-in-github.html). It is written in Chinese. Hope can help.

## How to use this theme

### Install and setup

Before using it, you may need [Bower](http://bower.io/) and [Bundler](http://bundler.io/) on your local to install dependencies.

1. Fork code and clone
2. Run `bower install` to install all dependencies in `bower.json`
3. Run `bundle install` to install all dependencies in `Gemfile`

### Customize your website settings

Edit the `_config.yml` file to change all the settings to reflect your site. The settings in the file are fairly self-explanatory and I added comments inside the file to help you further. Any line that begins with a pound sign (`#`) is a comment, and the rest of the lines are actual settings.

This is a introduction of parameter.

Parameter   | Description
----------- | -----------
title       | Website title(Home page)
location    | Your location showing under the title(Home page)
company     | Company name showing under the title(Home page)
company_url | Website address to turn when click the company name
github_username     | Github name showing under the title(Home page)
github_url  | Website address to turn when click the github name
bigimg      | A large full-width image at the top of the page.  You can either give the path to a single image, or provide a list of images to cycle(Home page)
name        | Name showing on the top
favicon     | Image showing on the tab bar
url         | The hostname of website
social-network-links    | Social Network links. You can choose which to use.
livere      | Comment plugin
disque      | Comment plugin

### Add your content

To add pages to your site, you can either write a markdown file (`.md`) or you can write an HTML file directly. You can look at some files on this site to get an idea of how to write markdown or reference the [Markdown Grammar Description](http://www.markdown.cn/) in Chinese. 

Any file that you add inside the [`_posts`](./_posts) directory will be treated as a blog entry.  You can look at the existing files there to get an idea of how to write blog posts.  After you successfully add your own post, you can delete the existing files inside [`_posts`](./_posts) to remove the sample posts, as those are just demo posts to help you learn.

In order to have your new pages use this template and not just be plain pages, you need to add [YAML front matter](https://jekyllrb.com/docs/front-matter/) to the top of each page. This is where you'll give each page some parameters that I made available, such as a title and subtitle. If you don't want to use any parameters on your new page (this also means having no title), then use the empty YAML front matter:

```
---
---
```

If you want to use any parameters, write them between the two lines. For example, you can have this at the top of a page:

```
---
title: Contact me
subtitle: Here you'll find all the ways to get in touch with me
---
```

**Important takeaway: ALWAYS add the YAML front matter, which is two lines with three dashes, to EVERY page. If you have any parameters, they go between the two lines.**    

If you don't include YAML then your file will not use the template.

These are the main parameters you can place inside a page's YAML front matter that **Trice Jekyll** supports.

Parameter   | Description
----------- | -----------
title       | Page or blog post title
subtitle    | Short description of page or blog post that goes under the title
category    | Categorize the post. It will show on the right side of Blog page.
tags        | List of tags to categorize the post. Separate the tags with commas and place them inside square brackets. Example: `[android, flutter, web]`
bigimg      | Include a large full-width image at the top of the page.  You can either give the path to a single image, or provide a list of images to cycle through. And if you don't add this parameter, there is a default picture.
comments    | If you want do add comments to a specific page, use `comments: true`. Comments are automatically enabled on blog posts; to turn comments off for a specific post, use `comments: false`. Comments only work if you enable at least one provider(diqus, livere) in `_config.yml` file.
social-share | If you don't want to show buttons to share a blog post on social media, use `social-share: false` (this feature is turned on by default).
layout      | What type of page this is (default is `post` for blog posts and `page` for other pages.
no-post-nav | If your `layout` parameter is `post`, there is a post navigation on the right side. If you don't want to show the navigation, use `no-post-nav: true`.
gh-repo   | If you want to show GitHub buttons at the top of a post, this sets the GitHub repo name (eg. `cuiyiming007/Trice-Jekyll`). You must also use the `gh-badge` parameter to specify what buttons to show.
gh-badge  | Select which GitHub buttons to display, available options are: `[star, watch, fork, follow]`. You must also use the `gh-repo` parameter to specify the GitHub repo.


## Showcased users

Want your website featured here? [Contact me](https://cuiyiming007.github.io/about) to let me know about your website.


| Website | Who | Description |
| :------ |:--- | :---------- |
| [https://cuiyiming007.github.io](https://cuiyiming007.github.io) | Cui Yiming | Creator of Trice Jekyll |


## Credits

This template was not made entirely from scratch. I would like to give special thanks to:
- [Dean Attali](https://github.com/daattali) and his project [beautiful-jekyll](https://github.com/daattali/beautiful-jekyll), from whom I've taken several ideas and code snippets, as well as some documenation tips.
- [DONGChuan](https://github.com/DONGChuan) and his project [Yummy-Jekyll](https://github.com/DONGChuan/Yummy-Jekyll), from which I've used some configurations in config_config.yml and the templating code for posts and pagination.

## Contributions

If you find anything wrong or would like to contribute in any way, feel free to create a pull request/open an issue/send me a message.  Any comments are welcome!

If you do fork or clone this project to use as a template for your site, I would appreciate if you keep the link in the footer to this project.  I would prefer to get the recognition if you do use this :)