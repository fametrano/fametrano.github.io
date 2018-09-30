---
layout: default
---

Bitcoin (maximalist) & Blockchain Technology at Digital Gold Institute,
Milano Bicocca, and Politecnico di Milano.
Hayek Money promoter,
[QuantLib](https://quantlib.org) founder,
Interest Rate Derivatives Adjunct Professor at Milano Bicocca.
Springsteen fan, husband, father of three.


Here you can find informations about:

* my university [courses]({{ site.baseurl }}/courses/),
including slides, code, videos, etc.

* my past and forthcoming [activities]({{ site.baseurl }}/activities/)
as speaker, trainer, lecturer and my articles, interviews, videos, etc.

* and, of course, my [blog]({{ site.baseurl }}/blog/)!

# Latest blog posts

{% for post in site.posts %}
  <article class="post">

    <span class="date">{{ post.date }}</span>

    <h2><a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a></h2>

    <div class="entry">
      {{ post.excerpt }}
    </div>

    <a href="{{ site.baseurl }}{{ post.url }}" class="read-more">Read More</a>
  </article>
{% endfor %}

[All blog posts]({{ site.baseurl }}/blog/)
