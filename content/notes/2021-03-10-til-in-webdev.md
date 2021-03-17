---
title: TIL in Web Dev
description: Image hover with text overlay
date: 2020-03-08
tags:
 - webdev
 - html
 - css
---

Say you want to have a gallery image that displays only the image statically, but on hover shows text and dims/colors the background. In the HTML:

```html
<div class="img__wrap">
  <img class="img__img" src="http://placehold.it/257x200.jpg" />
  <p class="img__description">This image looks super neat.</p>
</div>
```

And then in the CSS:

```css
.img__wrap {
  position: relative;
  height: 200px;
  width: 257px;
}

.img__description {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(29, 106, 154, 0.72);
  color: #fff;
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.2s, visibility 0.2s;
}

.img__wrap:hover .img__description {
  visibility: visible;
  opacity: 1;
}
```
