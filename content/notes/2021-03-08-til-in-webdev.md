---
title: TIL in Web Dev
description: Resizable square div
date: 2020-03-08
tags:
 - webdev
 - html
 - css
---

Say you have a parent element of a known width but full or unknown height, and say you want to have a child element that is square and fills the available width of its parent, regardless of the actual value - do the following:

```scss
.square {
  width: auto;

  &::after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }
}
```

This works a treat!
