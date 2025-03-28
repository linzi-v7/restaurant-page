import './styles.css';
import { loadHomeContent } from './modules/home.js';
import { loadMenuContent } from './modules/menu.js';
import { loadAboutContent } from './modules/about.js';
import { loadContactContent } from './modules/contact.js';

const contentDiv = document.querySelector('#content');
const navArea = document.querySelector('header nav ul');

document.addEventListener('DOMContentLoaded', () =>
{
    loadHomeContent();
});

navArea.addEventListener('click', (event) =>
{
    const target = event.target;
    if (target.classList.contains('home'))
    {
        loadHomeContent();
    }
    else if (target.classList.contains('menu'))
    {
        loadMenuContent();
    }
    else if (target.classList.contains('contact'))
    {
        loadContactContent();
    }
    else if (target.classList.contains('about'))
    {
        loadAboutContent();
    }
});

