function toggleSidebar() {
    var sidebar = document.getElementById('sidebar');
    var navIcon = document.getElementById('nav-icon');
    if (sidebar.style.display === 'block') {
        sidebar.style.display = 'none';
        navIcon.innerHTML = `
            <rect x="10" y="20" width="80" height="10"></rect>
            <rect x="10" y="45" width="80" height="10"></rect>
            <rect x="10" y="70" width="80" height="10"></rect>
        `; // Hamburger icon
    } else {
        sidebar.style.display = 'block';
        navIcon.innerHTML = `
            <line x1="20" y1="20" x2="80" y2="80" stroke="white" stroke-width="10"/>
            <line x1="20" y1="80" x2="80" y2="20" stroke="white" stroke-width="10"/>
        `; // Close icon
    }
}

function handleResize() {
    var sidebar = document.getElementById('sidebar');
    var navIcon = document.getElementById('nav-icon');
    if (window.innerWidth > 768) {
        sidebar.style.display = 'block';
        navIcon.innerHTML = `
            <rect x="10" y="20" width="80" height="10"></rect>
            <rect x="10" y="45" width="80" height="10"></rect>
            <rect x="10" y="70" width="80" height="10"></rect>
        `; // Hamburger icon
    } else {
        sidebar.style.display = 'none';
        navIcon.innerHTML = `
            <rect x="10" y="20" width="80" height="10"></rect>
            <rect x="10" y="45" width="80" height="10"></rect>
            <rect x="10" y="70" width="80" height="10"></rect>
        `; // Hamburger icon
    }
}

window.addEventListener('resize', handleResize);
window.addEventListener('load', handleResize);