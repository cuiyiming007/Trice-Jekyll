---
layout: post
title: 感谢选择Trice Jekyll
category: Web
gh-repo: cuiyiming007/Trice-Jekyll
# no-post-nav: true
---

&#160; &#160; &#160; &#160;感谢你选择Trice Jekyll作为网站的主题。后面几篇文章会介绍博客文章的几个基本的用法。欢迎在GitHub上star本项目。  

&#160; &#160; &#160; &#160;Thank you for chooseing Trice Jekyll as the theme of your website. I would appreciate if you star the program on the Github.

# Trice Jekyll

> *Copyright 2019 [CuiYiming](https://cuiyiming007.github.io/)*

[English Documentation](https://raw.githubusercontent.com/cuiyiming007/Trice-Jekyll/master/README.md) | 中文文档

**Trice Jekyll** 是一个可以快速帮助你搭建一个漂亮的网站的即时可用的模板。适用于个人站点，博客或者简单的项目网站。[访问我的个人博客](https://cuiyiming007.github.io/)你可以看看你只需要几分钟就能实现的效果。

**如果你喜欢这个主题, 可以考虑 *资助我* 使我更好的开发和维护这个模板。**

<p align="center">
    <img src="/alipay-code.jpg" width="200px"/>
    <span>&#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160;</span>
    <img src="/wechat-code.png" width="200px"/>
</p>

## 如何构建你的网站

关于这部分，你可以看我的博客[如何在github.io上搭建自己的博客](https://cuiyiming007.github.io/web/2019/05/19/How-to-build-blog-in-github.html)。

## 如何使用这个主题

### 安装和配置

在使用之前，你需要`Ruby`环境及[Bower](http://bower.io/)和[Bundler](http://bundler.io/)来安装依赖项。

1. Fork code and clone
2. 运行`bower install`安装`bower.json`中的依赖。
3. 运行`bundle install`安装`Gemfile`中的依赖。  

### 个性化你的网站设置

编辑`_config.yml`文件，来改变你的网站设置。文件中的设置项都是自解释的，我也加入了部分注释以进一步帮助你理解。以(`#`)开头的都是注释,其余部分是设置项。

下面是部分参数的说明：

Parameter   | Description
----------- | -----------
title       | 网站的名字(Home page)
location    | 显示在网站名字下方的位置信息(Home page)
company     | 显示在网站名字下方的公司名称(Home page)
company_url | 当点击公司名称时跳转的网址
github_username     | 显示在网站名字下方的GitHub用户名(Home page)
github_url  | 当点击GitHub用户名时跳转的网址
bigimg      | 在页面上方显示的全屏宽的图片。你可以提供一张图或几张图循环显示。如果未提供图片，则默认显示纯色背景(Home page)
name        | 显示在导航栏的名称
favicon     | 在tab bar显示的图标
url         | 网站的hostname
social-network-links    | 社交媒体链接。你可以现在使用哪些软件。
livere      | 评论插件（建议中国国内使用）
disque      | 评论插件（中国国内需翻墙）

### 添加自己的内容

你可以写markdown文件(`.md`)或者直接写HTML文件来向你的网站添加页面。你可以查看此网站的文件或者参考[Markdown语法介绍](http://www.markdown.cn/)来学习如何写markdown文件。

你添加到[`_posts`](./_posts)目录的任何文件，都会被当做一篇博客。你可以查看此目录下已有的文件，学习如何写一篇博客。当你成功添加发布自己的博客后，你就可以删除[`_posts`](./_posts)目录下原来的示例博客。

为使你新发布的页面使用定义好的模板而不仅仅只是纯文本文件，你需要在每个页面上方添加[YAML front matter](https://jekyllrb.com/docs/front-matter/)。在这里给每个页面添加一些参数，如标题、副标题。如果你不想使用任何参数，你需要添加个空的YAML front matter:

```
---
---
```

如果你想使用参数，那就在这两行之间添加他们。例如:

```
---
title: Contact me
subtitle: Here you'll find all the ways to get in touch with me
---
```

**注意: 每个页面都要添加YAML front matter，即两行三个破折号。**    

如果你不添加YAML，那么你的页面将不会应用模板。

下面是**Trice Jekyll**支持的主要的YAML front matter参数说明。

Parameter   | Description
----------- | -----------
title       | 页面或博客名称
subtitle    | 名称下面显示的一段简短的描述
category    | 博客分类。会显示在Blog页面的右侧
tags        | 一组标签，在方括号中用逗号隔开。例如: `[android, flutter, web]`
bigimg      | 在页面上方显示的全屏宽的图片。你可以提供一张图或几张图循环显示。如果未添加此参数，则显示一张默认随机图片。
comments    | 如果要添加评论功能，使用`comments: true`。评论功能在blog post中是默认开启的，如果要在特定的post中关闭评论，使用`comments: false`。评论功能只有在`_config.yml`文件中至少配置了一个(diqus, livere)插件，才可以使用。
social-share | 如果你不想显示分享按钮，使用`social-share: false`(分享功能默认开启)。
layout      | 页面的类型(博客文章页面默认是`post`，其他页面是`page`。
no-post-nav | 如果`layout`参数是`post`，则默认在页面右侧有文章的导航栏。如果不想显示导航栏，使用`no-post-nav: true`。
gh-repo   | 如果你想在页面上方显示GitHub按钮，则设置GitHub repo name (eg. `cuiyiming007/Trice-Jekyll`). 你还需要通过`gh-badge`指定那种按钮显示。
gh-badge  | 选择显示哪种GitHub按钮: `[star, watch, fork, follow]`。你还需要使用`gh-repo`指定Github repo。

## 感谢

这个模板并不是从零开始。在这里特别感谢:
- [Dean Attali](https://github.com/daattali)他的项目[beautiful-jekyll](https://github.com/daattali/beautiful-jekyll), from whom I've taken several ideas and code snippets, as well as some documenation tips.
- [DONGChuan](https://github.com/DONGChuan)他的项目[Yummy-Jekyll](https://github.com/DONGChuan/Yummy-Jekyll), from which I've used some configurations in config_config.yml and the templating code for posts and pagination.

## Contributions

如果您发现任何错误或想以任何方式做出贡献，请随时创建pull request/open an issue//给我发消息。 欢迎任何评论！

如果您fork/clone此项目用作您网站的模板，请您将此项目的链接保留在页脚中，我将不胜感激。希望得到大家的认可:)