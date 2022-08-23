//console.log();
const darkTheme = document.getElementById('dark');
const lightTheme = document.getElementById('light');

const setDarkMode = () => {
    document.querySelector('body').classList = 'dark';
    localStorage.setItem('colorMode', 'dark');
};

const setLightMode = () => {
    document.querySelector('body').classList = 'light';
    localStorage.setItem('colorMode', 'light');
};

const colorModeFromLocalStorage = () => {
    return localStorage.getItem('colorMode');
};

const colorModeFromPreferences = () => {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ?
        'dark' :
        'light' // If preference is set or does not match anything (light is default)
};

const loadAndUpdateColor = () => {
    // local storage has precedence over the prefers-color-scheme
    const color = colorModeFromLocalStorage() || colorModeFromPreferences();
    color == 'dark' ? darkTheme.click() : lightTheme.click();
};

// when the inputs are clicked, check which radio button is checked and changes the color
const radioButtons = document.querySelectorAll('.toggle__wrapper input');
radioButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        darkTheme.checked ? setDarkMode() : setLightMode();
    });
});

// when the prefers-color-scheme changes, this event reflects the media query, if it matches, the new color is dark, else it is light
window.matchMedia('(prefers-color-scheme: dark)')
    .addEventListener('change', (event) => {
        event.matches ? darkTheme.click() : lightTheme.click();
    });

// Load the right color on startup - localStorage has precedence
loadAndUpdateColor();