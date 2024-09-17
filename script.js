// For search form (can be customized to fit actual booking engine)
document.querySelector('.search-bar').addEventListener('submit', function(e) {
    e.preventDefault();
    alert("Search function coming soon!");
});

// Simple testimonial slider
let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial');
setInterval(() => {
    testimonials[currentTestimonial].style.display = 'none';
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    testimonials[currentTestimonial].style.display = 'block';
}, 5000);
