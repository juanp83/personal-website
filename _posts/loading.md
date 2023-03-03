---
title: "It's a good idea to position CSS links between head tags and JS script tags just before the closing body tag."
excerpt: 'Placing css links in the head ensures that the browser has access to styles immediately. This results in faster loading. Placing script blocks just before the closing body tag allows the html and css to render before render blocking scripts are run.'
coverImage: '/assets/blog/loading/loading.jpeg'
date: '2023-01-12'
ogImage:
  url: '/assets/blog/hello-world/cover.jpg'
---

## Proper css link placement

It's a good idea to place css `<link>` elements in the `<head>` of a webpage. 

When a page first loads, html and css are parsed at the same time. Just like html creates the DOM (document object model), the css creates the CSSOM (CSS object model). Both are required to create the interface of the website. Placing css `<link>` elements in the `<head>` ensures that the browser has access to stylesheets when the page starts rendering. This results in faster loading and a quick "first meaningful paint" of the website. This is called progressive rendering and it is a metric used to measure a websites performance. 

## Proper script placement

`<script>` elements prevent html parsing while they are being downloaded and executed, which means that a `<script>` can slow down the loading of a "first meaningful paint". Placing `<script>` blocks just before the closing `</body>` allows the html and css to render before scripts are run.