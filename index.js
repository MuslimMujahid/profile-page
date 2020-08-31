let switcher = document.querySelector('input[type=checkbox]')

switcher.addEventListener('click', function() {
    let root = document.documentElement
    if (switcher.checked) {
        root.style.setProperty('--body-color', `var(--body-color-dark)`);
        root.style.setProperty('--card-color', `var(--card-color-dark)`);
        root.style.setProperty('--headline-color', `var(--headline-color-dark)`);
        root.style.setProperty('--paragraph-color', `var(--paragraph-color-dark)`);
        root.style.setProperty('--link-color', `var(--link-color-dark)`);
        
    } else {
        root.style.setProperty('--body-color', `var(--body-color-light)`);
        root.style.setProperty('--card-color', `var(--card-color-light)`);
        root.style.setProperty('--headline-color', `var(--headline-color-light)`);
        root.style.setProperty('--paragraph-color', `var(--paragraph-color-light)`);
        root.style.setProperty('--link-color', `var(--link-color-light)`);
    }
})