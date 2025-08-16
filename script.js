const navLinks = document.querySelectorAll('header nav a');

const activePage = () => {
    navLinks.forEach(link => {
        link.classList.remove('active');
    });
};

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        activePage();
        link.classList.add('active');
        const targetId = link.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
    });
});

const projectsButton = document.querySelectorAll('.projectsButton');

projectsButton.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
        const projects = document.querySelectorAll('.prjt');

        // Remove active class from all project buttons and project containers
        projectsButton.forEach(button => {
            button.classList.remove('active');
        });
        projects.forEach(project => {
            project.classList.remove('active');
        });

        // Add active class to the clicked button and corresponding project container
        btn.classList.add('active');
        if (projects[idx]) {
            projects[idx].classList.add('active');
        }
    });
});

// Set the home section and link as active by default on page load
document.addEventListener('DOMContentLoaded', () => {
    activePage();
    document.querySelector('header nav a[href="#home"]').classList.add('active');
});

// Add to existing script.js
const menuIcon = document.getElementById('menuIcon');
const nav = document.querySelector('header nav');

menuIcon.addEventListener('click', () => {
    nav.classList.toggle('active');
});

// Ensure nav closes when a link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        activePage();
        link.classList.add('active');
        const targetId = link.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
        nav.classList.remove('active'); // Close dropdown
    });
});