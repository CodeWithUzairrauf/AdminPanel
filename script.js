// Add click event listeners to all navigation items
document.querySelectorAll('nav ul li').forEach(item => {
    item.addEventListener('click', () => {
        // Remove active class from all items
        document.querySelectorAll('nav ul li').forEach(i => i.classList.remove('active'));
        // Add active class to clicked item
        item.classList.add('active');
    });
});

// Add hover effect to project cards
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-5px)';
        card.style.transition = 'transform 0.3s ease';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});

// Add click event listeners to project action buttons
document.querySelectorAll('.project-actions i').forEach(icon => {
    icon.addEventListener('click', (e) => {
        e.stopPropagation();
        icon.style.color = '#1992d4';
        setTimeout(() => {
            icon.style.color = '#64748b';
        }, 200);
    });
});

// Add functionality to the search bar
const searchInput = document.querySelector('.search-bar input');
searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        const description = card.querySelector('p').textContent.toLowerCase();
        
        if (title.includes(searchTerm) || description.includes(searchTerm)) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
});

// Add functionality to action buttons
document.querySelectorAll('.action-buttons button').forEach(button => {
    button.addEventListener('click', () => {
        const action = button.textContent.toLowerCase();
        alert(`${action} action triggered!`);
    });
});

// Add notification functionality
const notificationBell = document.querySelector('.mdi-bell-ring');
let notificationCount = 0;

notificationBell.addEventListener('click', () => {
    notificationCount++;
    alert(`You have ${notificationCount} new notification${notificationCount !== 1 ? 's' : ''}!`);
});

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const sidebar = document.getElementById('sidebar');
    if (menuToggle && sidebar) {
        menuToggle.addEventListener('click', function(e) {
            sidebar.classList.toggle('active');
            sidebar.classList.toggle('inactive');
        });
        // Optional: close sidebar when clicking outside
        document.addEventListener('click', function(e) {
            if (sidebar.classList.contains('active') && !sidebar.contains(e.target) && !menuToggle.contains(e.target)) {
                sidebar.classList.remove('active');
                sidebar.classList.add('inactive');
            }
        });
    }
});
