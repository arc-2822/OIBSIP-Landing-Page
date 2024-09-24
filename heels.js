document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    alert(`Thank you, ${name}. Your message has been sent!`);
})
    const ctaButton = document.querySelector('.cta-button');
    document.getElementById('shopNow').addEventListener('click', function() {
        document.getElementById('products').classList.remove('hidden');
        document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
});
document.getElementById('close').addEventListener('click', function() {
    const productsSection = document.getElementById('products');
    productsSection.classList.add('hidden'); 
});