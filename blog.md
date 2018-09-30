---
layout: page
title: Blog with date 2
permalink: /blog/
---

<div class="posts">
  {% for post in site.posts %}
    <article class="post">

      <h1><a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a></h1>

      <span class="date">{{ page.date | %Y-%m-%d" }}</span>

      <div class="entry">
        {{ post.excerpt }}
      </div>

      <a href="{{ site.baseurl }}{{ post.url }}" class="read-more">Read More</a>
    </article>
  {% endfor %}

  <a href="{{ site.baseurl }}/blog/">All blog posts</a>

</div>
