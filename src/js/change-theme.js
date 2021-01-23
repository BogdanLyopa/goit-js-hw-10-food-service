import Theme from '../theme.json';
const refs = {
  switchTheme: document.getElementById('theme-switch-toggle'),
  body: document.querySelector('body'),
};

refs.switchTheme.addEventListener('input', changeTheme);

function changeTheme() {
  if (refs.switchTheme.checked) {
    refs.body.classList.replace(Theme.LIGHT, Theme.DARK);
    localStorage.setItem('Theme', JSON.stringify(Theme.DARK));
  } else {
    refs.body.classList.replace(Theme.DARK, Theme.LIGHT);
    localStorage.setItem('Theme', JSON.stringify(Theme.LIGHT));
  }
}

const currentTheme = localStorage.getItem('Theme');
const parseTheme = JSON.parse(currentTheme);
refs.body.classList.add(parseTheme);
if (parseTheme === Theme.DARK) {
  refs.switchTheme.checked = true;
}
