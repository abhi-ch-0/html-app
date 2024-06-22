// List of nav items
const navItems = [
    { name: 'Home', link: '#' },
    { name: 'Bookmarks', link: '#' }
];

// List of cards
const cards = [
    { text: 'Card 1', link: 'https://example.com/1' },
    { text: 'Card 2', link: 'https://example.com/2' },
    { text: 'Card 3', link: 'https://example.com/3' }
];

// Function to generate nav items
function generateNavItems() {
    const navItemsContainer = document.getElementById('nav-items');
    navItems.forEach(item => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = item.link;
        a.textContent = item.name;
        li.appendChild(a);
        navItemsContainer.appendChild(li);
    });
}

// Function to generate cards
function generateCards() {
    const cardContainer = document.getElementById('card-container');
    cards.forEach(card => {
        const cardDiv = document.createElement('div');
        cardDiv.className = 'card';
        cardDiv.textContent = card.text;
        cardDiv.onclick = () => {
            window.location.href = card.link;
        };
        cardContainer.appendChild(cardDiv);
    });
}

// Function to toggle sidebar visibility
function toggleSidebar() {
    var sidebar = document.getElementById('sidebar');
    var navIcon = document.getElementById('nav-icon');
    if (sidebar.style.display === 'flex' || sidebar.style.display === '') {
        sidebar.style.display = 'none';
        navIcon.innerHTML = `
            <rect x="10" y="20" width="80" height="10"></rect>
            <rect x="10" y="45" width="80" height="10"></rect>
            <rect x="10" y="70" width="80" height="10"></rect>
        `; // Hamburger icon
    } else {
        sidebar.style.display = 'flex';
        navIcon.innerHTML = `
            <line x1="20" y1="20" x2="80" y2="80" stroke="white" stroke-width="10"/>
            <line x1="20" y1="80" x2="80" y2="20" stroke="white" stroke-width="10"/>
        `; // Close icon
    }
}

// Function to handle window resize event
function handleResize() {
    var sidebar = document.getElementById('sidebar');
    var navIcon = document.getElementById('nav-icon');
    if (window.innerWidth > 768) {
        sidebar.style.display = 'flex';
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

// Initialize the page
window.addEventListener('resize', handleResize);
window.addEventListener('load', () => {
    handleResize();
    generateNavItems(); // Generate nav items on page load
    generateCards(); // Generate cards on page load
});