---
title: 'The difference between a cookie, sessionStorage and localStorage.'
excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. At imperdiet dui accumsan sit amet nulla facilities morbi tempus.'
coverImage: '/assets/blog/cookies/cookie.jpeg'
date: '2023-01-02'
ogImage:
  url: '/assets/blog/hello-world/cover.jpg'
---

Cookies, `localStorage`, and `sessionStorage` are all ways of storing data on the client that the client can both read and modify. All of these can only store values as strings. 

## Cookies

Cookies can be initiated by both the client and the server. The server uses the `Set-Cookie` header to initiate a cookie. Additionally, cookies are automatically sent to the server with every HTTP request via a `Cookie` header. A cookie's expiration can be manually set, and persistence across browser sessions will depend on this expiration. The capacity for a cookie is 4kb per domain and the client can access it from any window in the browser.

## `localStorage` & `sessionStorage`

Unlike cookies, `localStorage` and `sessionStorage` are both initiated by the client only. `localStorage` lasts forever while `sessionStorage` expires on tab close. `localStorage` also persists across browser sessions, while `sessionStorage` does not. The client can acess `localStorage` from any window while `sessionStorage` can only be accessed from the same tab. Both have a capacity of 5MB.
