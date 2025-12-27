document.addEventListener('DOMContentLoaded', function() {
    const menuCategoryButtons = document.querySelectorAll('.menu-category-btn');
    const menuItems = document.querySelectorAll('.menu-item');

    menuCategoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            menuCategoryButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to the clicked button
            this.classList.add('active');

            const selectedCategory = this.getAttribute('data-category');

            // Show or hide menu items based on category
            menuItems.forEach(item => {
                const itemCategory = item.getAttribute('data-category');
                if (selectedCategory === 'all' || itemCategory === selectedCategory) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // Initially show all menu items or a default category
    // For this example, we'll assume the "Appetizers" are shown by default
    // If you want to show all, uncomment the next two lines and comment out the subsequent block.
    // menuCategoryButtons.forEach(btn => btn.classList.remove('active'));
    // document.querySelector('.menu-category-btn[data-category="appetizers"]').classList.add('active');
    // menuItems.forEach(item => item.style.display = 'block');


    // Set the 'all' button to be active by default if it exists, or the first button
    const defaultActiveButton = document.querySelector('.menu-category-btn[data-category="appetizers"]') || document.querySelector('.menu-category-btn');
    if (defaultActiveButton) {
        defaultActiveButton.classList.add('active');
        const initialCategory = defaultActiveButton.getAttribute('data-category');
        menuItems.forEach(item => {
            if (item.getAttribute('data-category') === initialCategory) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});