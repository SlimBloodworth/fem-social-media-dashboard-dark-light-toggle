# Frontend Mentor - Social media dashboard with theme switcher solution

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

This is a solution to the [Social media dashboard with theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/social-media-dashboard-with-theme-switcher-6oY8ozp_H). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

I also did a code-along with Jessica [on her CoderCoder 5 part YouTube series building this Frontend Mentor Project](https://www.youtube.com/playlist?list=PLUWqFDiirlsu5az5EIyxe8ZddyNO_kDuP) which uses gulp and Sass.

### The challenge

The challenge is to build out this Social Media Dashboard and get it looking as close to the design as possible to the designs inside the `/design` folder for both mobile and a desktop version of the design.

Use any tools of choice to complete the challenge.

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Toggle color theme to their preference

### Screenshots

#### Mobile

![Mobile Dark](/images/FEM-dk-lt-toggle-dk-mobile.png)

---

![Mobile Light](/images/FEM-lt-dk-toggle-lt-mobile.png)

#### Tablet

![Tablet Dark](/images/FEM-dk-lt-toggle-dk-tablet.png)

---

![Tablet Light](/images/FEM-lt-dk-toggle-lt-tablet.png)

#### Desktop

![Desktop Dark](/images/FEM-dk-lt-toggle-dk-desk.png)

---

 ![Desktop Light](/images/FEM-lt-dk-toggle-lt-desk.png)

### Links

- [Live Site](https://slimbloodworth.github.io/fem-social-media-dashboard-dark-light-toggle/)

## My process

I started by setting up a GitHub repository for this project from my GitHub desktop app. I then downloaded the starter files for the project from Frontend Mentor and created a 'notes.md' file to make notes and gather resources I would need for the project.

I then downloaded gulp-sass, set up the folders and files I thought I might need and organized my workflow. I did **A LOT** of research with this project as I went along, some of which you will find under [Useful resources](#useful-resources).
I then set up my gulp configuration in 'gulp.js' to set up my gulp workflow.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Sass
- JavaScript
- Mobile-first workflow
- [Gulp](https://www.npmjs.com/package/gulp-sass) - gulp-sass. Compiles Sass files into CSS.

### What I learned

I learned quite a bit from this project! One of my favorite things is the [px to em function](https://css-tricks.com/snippets/sass/px-to-em-functions/) which was a HUGE time saver and made everything so much easier to work with. It saved me from having calculator hell.

Example function px to em:

```scss
@use 'sass:math';
@function rem($pixels, $content: 16) {
    @return (math.div($pixels, $content)) * 1rem;
}
```

This was the first time I've used gulp and learning to set it up and troubleshooting the necessary updates was a lesson in itself.
I learned what will and what will not work with a legend tag vs. a label tag:

```scss
 .toggle {
    display: grid;
    grid-template-columns: 1fr rem(48);
    gap: rem(4.8) rem(8);
    border: none;
    margin: 0;

    legend {
        font-size: rem(14);
        grid-column: 1 / 2;
        float: left;
        align-self: center;
    }
 }
```

I learned differences in using radio buttons vs. checkboxes. There were a number of things which were fantastic takeaways from this project.

### Continued development

I would like to go back and do some design improvements. I'd like to change the toggle button legend to 'Mode' and use sun/moon icons on the toggle itself to show dark/light theme choices similar to what I did in [this CodePen](https://codepen.io/slimbloodworth/pen/bGvKGMe). I would also like to have the overview cards in a dropdown on mobile and tablet to reduce the amount of scrolling, as well as organize the overview cards lined under their appropriate large cards on desktop which would better follow [Gestalt Principles](https://www.interaction-design.org/literature/article/the-law-of-similarity-gestalt-principles-1) and make this design more user-centered. I might also add some scale on hover for the cards on desktop. I will be drawing up some ideas in Figma and adding the link to the Figma designs to this Readme.md file.

### Useful resources

- [A Complete guide To Dark Mode on the Web](https://css-tricks.com/a-complete-guide-to-dark-mode-on-the-web/)
- [How To Detect Preferred Color Scheme](https://www.freecodecamp.org/news/how-to-detect-a-users-preferred-color-scheme-in-javascript-ec8ee514f1ef/)
- [JavaScript Radio Button Tutorial](https://javascripttutorial.net/javascript-dom/javascript-radio-button)
- [Local Storage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
- [HTML Accessibility MarkUp](https://scottaohara.github.io/a11y_styled_form_controls/src/radio-button--switch/)
- [Screen Reader hiding elements visually](https://www.accessibility-developer-guide.com/examples/hiding-elements/visually/)
- [Prefers color scheme media query](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme)
-[px to em functions](https://css-tricks.com/snippets/sass/px-to-em-functions/) - This was SUCH a useful function to use and made EVERYTHING so much easier.

## Author

- My GitHub - [Michelle Renee](https://github.com/SlimBloodworth)
- Frontend Mentor - [@SlimBloodworth](https://www.frontendmentor.io/profile/SlimBloodworth)
- CodePen - [@slimbloodworth](https://codepen.io/slimbloodworth)
- LinkedIn - [Michelle Renee Bloodworth](https://www.linkedin.com/in/michelle-renee-bloodworth-99b455187/)
- Twitter - [@SlimBloodworth](https://twitter.com/SlimBloodworth)
- FaceBook - [Creative Software Solutions](https://www.facebook.com/profile.php?id=100073842390690)

## Acknowledgments

- Thanks to Jessica at [CoderCoder](https://www.youtube.com/c/TheCoderCoder/featured) for putting such a thorough program together and making it fun to learn. I really picked up so much from her in this series.

- Always a big thanks to the cats at [Frontend Mentor](https://www.frontendmentor.io/challenges) for so many great project ideas and the awesome community that gives solid feedback and support.

- Thanks to everyone whom I borrowed research from in my [Useful resources](#useful-resources).
