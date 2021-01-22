import './styles.css';
import './js/templating';
import './js/localstorage';

const switchTheme = document.getElementById('theme-switch-toggle');
switchTheme.addEventListener('input', handleInput);
const body = document.querySelector('.light-theme');

function handleInput() {
  if (switchTheme.checked) {
    body.classList.add('dark-theme');
    body.classList.remove('light-theme');
    localStorage.setItem('Theme', JSON.stringify(Theme.DARK));
  } else {
    body.classList.add('light-theme');
    body.classList.remove('dark-theme');
    localStorage.setItem('Theme', JSON.stringify(Theme.LIGHT));
  }
}

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const currentTheme = localStorage.getItem('Theme');
const parseTheme = JSON.parse(currentTheme);
body.classList.add(parseTheme);
if (parseTheme === Theme.DARK) {
  switchTheme.checked = true;
}
