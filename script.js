const sidebar = document.querySelector('.sidebar');
const hamburgerBtn = document.getElementById('hamburger-btn');
const closeBtn = document.getElementById('close-btn');
const overlay = document.getElementById('overlay');

hamburgerBtn.addEventListener('click', () => {
	sidebar.classList.toggle('active');
	overlay.classList.toggle('active');
});

closeBtn.addEventListener('click', () => {
	sidebar.classList.remove('active');
	overlay.classList.remove('active');
});

overlay.addEventListener('click', () => {
	sidebar.classList.remove('active');
	overlay.classList.remove('active');
});

const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const themeText = document.getElementById('theme-text');
const html = document.documentElement;

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', savedTheme);
updateThemeUI(savedTheme);

themeToggle.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeUI(newTheme);
});

function updateThemeUI(theme) {
    if (theme === 'dark') {
        themeIcon.src = 'assets/sun.svg';
        themeText.textContent = 'Light Mode';
    } else {
        themeIcon.src = 'assets/moon.svg';
        themeText.textContent = 'Dark Mode';
    }
}