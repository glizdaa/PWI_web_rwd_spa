function navigateTo(page) {
    document.getElementById('main-content').innerHTML = `<h1>${page.charAt(0).toUpperCase() + page.slice(1)}</h1><p>This is the ${page} page.</p>`;
}

// Load home page by default
navigateTo('home');
