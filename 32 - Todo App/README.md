# Frontend Mentor - Todo app solution
## Table of contents

  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size (Done)
- See hover states for all interactive elements on the page (Done)
- Add new todos to the list (Done)
- Mark todos as complete (Done)
- Delete todos from the list (Done)
- Filter by all/active/complete todos (Done)
- Clear all completed todos (Done)
- Toggle light and dark mode (Done)
- **Bonus**: Drag and drop to reorder items on the list (Didn't add it.)

### Screenshot

![](1.png)

### Links

- Solution URL: [Here](https://github.com/azimifardous/50-Project-Challenges-of-Fundamentals-of-HTML-CSS-JS.git)
- Live Site URL: [Here](https://todo-app-ch.netlify.app/)

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- Vanilla JavaScript

### What I learned

I've learned and practice so many lessons throughout this project. My main goal of doing this project was practicing and working on my javascript skills. Therefore, I practiced and learned the following topics in JS:
- Arrays
- Functions
- Working with Booleans
- Conditions
- Events and Event Listeners
- The DOM

```js
Array.prototype.insert = function (index, item) {
    this.splice(index, 0, item);
};

function renderTask(arr) {
    let listStr = ""

    for (let i = 0; i < arr.length; i++) {
        listStr += `
        <li class="item">
            <div class="task-item">
                <button class="doneBtn" onclick='completeTask("${arr[i]}")'>
                    <img src="/images/icon-check.svg" alt="" class="check-ico">
                </button>
            <span class="task">${arr[i]}</span>
            </div>
            <button class="deleteBtn" onclick='deleteItem("${arr[i]}")'>
                <img src="/images/icon-cross.svg" alt="">
            </button>
        </li>`
    }
    listItemsEl.innerHTML = listStr
};
```

### Continued development

I am gonna continue learning javascript and dive deep down into more and more topics and lessons of it. You're gonna see much more of these kinds of projects throughout my javascript journey.

### Useful resources

- [StackOverFlow](https://stackoverflow.com/) - This helped me for figuring things out and find the solution and answers to the topics that I was stucked on. I really liked this platform and it's community and will use it going forward.
- [MDN](https://developer.mozilla.org/en-US/) - This is an amazing resource for developers which is all about documenting web technologies, including CSS, HTML, & JS, since 2005. I really recommend using this.

## Author

- Frontend Mentor - [@azimifardous](https://www.frontendmentor.io/profile/azimifardous)
- Twitter - [@azimifardous](https://www.twitter.com/azimifardous)
- Github - [@azimifardous](https://www.github.com/azimifardous)

