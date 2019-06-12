---
layout: post
title: Markdown语法
category: Example
#no-post-nav: true
---

&#160; &#160; &#160; &#160;介绍基本Markdown语法，和一些只对本主题有效的特殊用法。  

---
你可以参考[Markdown语法介绍](http://www.markdown.cn/)来学习如何写markdown文件。

You can write regular [markdown](http://markdowntutorial.com/) here and Jekyll will automatically convert it to a nice webpage.  I strongly encourage you to [take 5 minutes to learn how to write in markdown](http://markdowntutorial.com/) - it'll teach you how to transform regular text into bold/italics/headings/tables/etc.

---
**这是加粗效果**  
**Here is some bold text**
```
**这是加粗效果**

**Here is some bold text**
```
---
## 这是二级标题

## Here is a secondary heading

```
## 这是二级标题

## Here is a secondary heading
```
---
这是表格:  
Here's a useless table:

| Number | Next number | Previous number |
| :----  |:--- | :--- |
| Five | Six    | Four |
| Ten  | Eleven | Nine |
| Seven| Eight  | Six  |
| Two  | Three  | One  |
```
| Number | Next number | Previous number |
| :----  |:--- | :--- |
| Five | Six    | Four |
| Ten  | Eleven | Nine |
| Seven| Eight  | Six  |
| Two  | Three  | One  |
```
---
插入图片：  
insert a pic:

![Android](/assets/images/myself.jpg)
```
![Android](/assets/images/myself.jpg)
```
---
这是代码块：  
Here's a code chunk:

~~~
var foo = function(x) {
  return(x + 5);
}
foo(3)
~~~

And here is the same code with syntax highlighting:

```javascript
var foo = function(x) {
  return(x + 5);
}
foo(3)
```

And here is the same code yet again but with line numbers:

{% highlight javascript linenos %}
var foo = function(x) {
  return(x + 5);
}
foo(3)
{% endhighlight %}

---

## Boxes

你可以像下面那样插入通知、警告、错误框：  
You can add notification, warning and error boxes like this:

### Notification

{: .box-note}
**Note:** This is a notification box.

```
{: .box-note}
**Note:** This is a notification box.
```

### Warning

{: .box-warning}
**Warning:** This is a warning box.

```
{: .box-warning}
**Warning:** This is a warning box.
```

### Error

{: .box-error}
**Error:** This is an error box.

```
{: .box-error}
**Error:** This is an error box.
```
