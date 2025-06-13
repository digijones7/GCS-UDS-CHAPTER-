// Wait until the page is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // === Smooth Scrolling for Navigation Links ===
  const navLinks = document.querySelectorAll('nav a');

  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      // Prevent default jump-to behavior
      e.preventDefault();

      // Get the target section ID from href
      const targetId = this.getAttribute('href').slice(1);
      const targetSection = document.getElementById(targetId);

      // Scroll to the section smoothly
      targetSection.scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // === Highlight Active Section in Navbar ===
  const sections = document.querySelectorAll('main section');

  window.addEventListener('scroll', () => {
    let scrollPos = document.documentElement.scrollTop || document.body.scrollTop;

    sections.forEach(section => {
      const top = section.offsetTop - 100;
      const bottom = top + section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollPos >= top && scrollPos < bottom) {
        // Remove active class from all links
        navLinks.forEach(link => link.classList.remove('active'));

        // Add active class to current section link
        document.querySelector(`nav a[href="#${id}"]`).classList.add('active');
      }
    });
  });

  // === Search Functionality (Optional enhancement) ===
  // This is a placeholder for future search feature
  // You could expand this with real search logic later
  // Example: Filtering course list or lecturer names
});
// Select all elements with the class 'collapsible-header'
document.querySelectorAll('.collapsible-header').forEach(header => {
  header.addEventListener('click', () => {
    // Toggle the 'active' class on the clicked header
    header.classList.toggle('active');

    // Get the next sibling element which contains the course list
    const content = header.nextElementSibling;

    // Toggle the display style of the content (show/hide)
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
});
