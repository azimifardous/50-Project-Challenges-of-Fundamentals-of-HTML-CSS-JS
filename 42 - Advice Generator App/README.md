# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

### Screenshot

![](./design/desktop-preview.jpg)
![](./design/active-states.jpg)
![](./design/mobile-design.jpg)

### Links

- Solution URL: [Solution Here](https://github.com/azimifardous/50-Project-Challenges-of-Fundamentals-of-HTML-CSS-JS.git)
- Live Site URL: [Live Preview Here](https://quote-generator-ch.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- Vanilla JavaScript

### What I learned

I've learned and practiced "async-await" methods of fetching an API and getting data.

see below:
```js
async function generateQuote() {
    const response = await fetch('https://api.adviceslip.com/advice');
    const data = await response.json();
    adviceEl.innerHTML = `"${data.slip.advice}"`
    adviceNoEl.innerHTML = `Advice #${data.slip.id}`
}
```

### Useful resources

- [Advice Slip API](https://api.adviceslip.com) - Using this website to get all the random quotes.

## Author

- Frontend Mentor - [@azimifardous](https://www.frontendmentor.io/profile/azimifardous)
- Twitter - [@azimifardous](https://www.twitter.com/azimifardous)
