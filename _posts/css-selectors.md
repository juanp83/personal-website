---
title: 'How a browser reads css'
excerpt: 'Browsers read css selectors from right to left. A browswer will search for elements in the DOM according to the key selector (the rightmost selector) followed by its parent elements to find matches.'
coverImage: '/assets/blog/css-selectors/css-selector.webp'
date: '2023-01-21'
ogImage:
  url: '/assets/blog/css-selectors/css-selector.webp'
---

Browsers read css selectors from right to left. A browswer will search for elements in the DOM according to the key selector (the rightmost selector) followed by its parent elements to find matches. To write more efficient css, you can write shorter selector chains. The shorter the chain the faster the browser can find a match in the DOM. 

For example, if you have the following selector chain:

`.modal p span`

The broswer will first search instances of `<span>` then find its parent `<p>` then finally traverse up to the parent with class 'modal'. Once it has determined that the `<span>` is a child of `<p>` which in turn is a child of class modal, only then does the broswer know that the `<span>` matches the selector.

