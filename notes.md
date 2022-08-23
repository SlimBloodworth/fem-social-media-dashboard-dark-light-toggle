# Functional Requirements and Notes

## RESOURCES
 CoderCoder FEM Social Media dashboard Part One -- https://www.youtube.com/watch?v=iL4irerdGdU&list=PLUWqFDiirlsu5az5EIyxe8ZddyNO_kDuP&index=3

CoderCoder FEM Social Media dashboard Part Two -- https://www.youtube.com/watch?v=nI0BfXFjI1I&list=PLUWqFDiirlsu5az5EIyxe8ZddyNO_kDuP&index=2

CoderCoder FEM Social Media dashboard Part Three -- https://www.youtube.com/watch?v=n3hkpnOFr0A&list=PLUWqFDiirlsu5az5EIyxe8ZddyNO_kDuP&index=3

CoderCoder FEM Social Media dashboard Part Four -- https://www.youtube.com/watch?v=_oP3lHzVZ8I&list=PLUWqFDiirlsu5az5EIyxe8ZddyNO_kDuP&index=5&t=519s

CoderCoder FEM Social Media dashboard Part Five -- https://www.youtube.com/watch?v=-3WV1CjeF10&list=PLUWqFDiirlsu5az5EIyxe8ZddyNO_kDuP&index=6

px to em functions: https://css-tricks.com/snippets/sass/px-to-em-functions/

## Notes
Light/Dark mode toggle -- takes system pref by default, but can override with toggle.

A Complete Guide To Dark mode on the Web: https://css-tricks.com/a-complete-guide-to-dark-mode-on-the-web/

JS Arrow Functions: https://developer.mozilla.org/en-US/docs/Web/Javascript/Reference/Functions/Arrow_Functions

Local Storage: https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage

How to detect preferred color scheme: https://www.freecodecamp.org/news/how-to-detect-a-users-preferred-color-scheme-in-javascript-ec8ee514f1ef/

How to detect dark mode using JS: https://flaviocopes.com/javascript-detect-dark-mode/

Use fieldset, legend, radio inputs

JavaScript radio Button Tutorial: https://javascripttutorial.net/javascript-dom/javascript-radio-button

Switching between Light/Dark mode via JS and Prefers-color-scheme media query: https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme

CSS Custom Properties (Variables): https://css-tricks.com/updating-a-css-variable-with-javascript/

Accessibility

- Use correct heading tags
- Screen reader-only text for card titles/usernames: https://www.accessibility-developer-guide.com/examples/hiding-elements/visually/
- Keyboard tab through

What HTML markup (accessibility): https://scottaohara.github.io/a11y_styled_form_controls/src/radio-button--switch/

## BEM Notes

- Block = card (parent)
- Element = icon, platform, count, change (child)
- Modifier = --facebook, --twitter, --instagram, --youtube, --up, --down
card
card__platform
card__icon(card__icon--facebook, etc)
card__username
card__count(card__count--big, card__count--small)
card__label
card__change(card__change--up, card__change--down)
