if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
} else {
    document.documentElement.classList.remove('dark')
}
function darktheme() { localStorage.removeItem('theme'); localStorage.theme = 'dark'; console.log(localStorage.theme); location.reload() }
function lighttheme() { localStorage.theme = 'light'; localStorage.theme = 'light'; console.log(localStorage.theme); location.reload() }