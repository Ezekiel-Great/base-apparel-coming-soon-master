# Frontend Mentor - Base Apparel coming soon page solution

This is a solution to the [Base Apparel coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/base-apparel-coming-soon-page-5d46b47f8db8a7063f9331a0). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
 
- [Author](#author)




## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty
  - The email address is not formatted correctly

### Screenshot

![Alt text](<images/Base-Apparel-coming-soon-page - Mobile-view.png>)
##### Mobile-view
![Alt text](<images/Base-Apparel-coming-soon-page -Desktop-view.png>)
##### Desktop-view

### Links

- Solution URL: [ Base-apparel-master](https://github.com/Ezekiel-Great/base-apparel-master)
- Live Site URL: [base-apparel-master Live site URL](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox


### What I learned
- Email- validation

```html
<form onsubmit="return validateEmail()"class="input" novalidate >
    <input type="email" id="email" name="email" placeholder="Email Address" required>
    <img src="images\icon-error.svg" alt="icon-error" class="error">
    <button type="submit">
      <img src="images\icon-arrow.svg" alt="arrow">
    </button>
</form>
<p class="validationMessage"></p>
```

```js
function validateEmail() {
  const emailInput = document.getElementById("email");
  const validationMessage = document.querySelector(".validationMessage");
  const erorIcon = document.querySelector(".error");

  // Regular expression to validate email format
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(emailInput.value)) {
    validationMessage.textContent = "Please provide a valid email ";
    validationMessage.style.color = "hsl(0, 93%, 68%)";
    erorIcon.style.display = "block";
    emailInput.style.border = " 2px solid var(--Soft-Red)";
    return false;
  }

  validationMessage.textContent = "";
    erorIcon.style.display = "none";
  return true;
}
```




## Author

- Frontend Mentor - [@Ezekiel-Great](https://www.frontendmentor.io/profile/Ezekiel-Great)
- Twitter - [@yeshua_codeit](https://www.twitter.com/yeshua_codeit )
# base-apparel-coming-soon-master
