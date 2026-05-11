document.addEventListener('DOMContentLoaded', () => {
    
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const navLinks = document.getElementById('nav-links');
    const navItems = document.querySelectorAll('.nav-link');

    const toggleMenu = () => {
        navLinks.classList.toggle('active');
        const isExpanded = mobileBtn.getAttribute('aria-expanded') === 'true';
        mobileBtn.setAttribute('aria-expanded', !isExpanded);
        mobileBtn.innerHTML = isExpanded ? '☰' : '✕';
    };

    mobileBtn.addEventListener('click', toggleMenu);

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                toggleMenu();
            }
        });
    });

    const form = document.getElementById('contact-form');
    const successMsg = document.getElementById('success-message');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        let isValid = true;
        
        const nameInput = document.getElementById('name');
        const nameError = document.getElementById('name-error');
        if (nameInput.value.trim().length < 3) {
            nameError.style.display = 'block';
            nameInput.setAttribute('aria-invalid', 'true');
            isValid = false;
        } else {
            nameError.style.display = 'none';
            nameInput.removeAttribute('aria-invalid');
        }

        const emailInput = document.getElementById('email');
        const emailError = document.getElementById('email-error');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value.trim())) {
            emailError.style.display = 'block';
            emailInput.setAttribute('aria-invalid', 'true');
            isValid = false;
        } else {
            emailError.style.display = 'none';
            emailInput.removeAttribute('aria-invalid');
        }

        const messageInput = document.getElementById('message');
        const messageError = document.getElementById('message-error');
        if (messageInput.value.trim().length === 0) {
            messageError.style.display = 'block';
            messageInput.setAttribute('aria-invalid', 'true');
            isValid = false;
        } else {
            messageError.style.display = 'none';
            messageInput.removeAttribute('aria-invalid');
        }

        if (isValid) {
            form.style.display = 'none';
            successMsg.style.display = 'block';
            
            setTimeout(() => {
                form.reset();
                form.style.display = 'flex';
                successMsg.style.display = 'none';
            }, 5000);
        }
    });
});