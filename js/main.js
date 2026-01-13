document.addEventListener('DOMContentLoaded', function() {
    
    // Mobile menu toggle
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileBtn) {
        mobileBtn.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#' || this.classList.contains('open-form-btn')) return;
            
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.08)';
        } else {
            navbar.style.boxShadow = 'none';
        }
    });

    const modal = document.getElementById('formModal');
    const closeBtn = document.getElementById('closeModal');
    const openBtns = document.querySelectorAll('.open-form-btn');

    openBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });

    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        });
    }
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    const contactForm = document.getElementById('contactForm');
    const formSuccess = document.getElementById('formSuccess');
    
    const whatsappNumber = '38344249198';

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const firstName = document.getElementById('firstName').value;
            const lastName = document.getElementById('lastName').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const message = document.getElementById('message').value;
            
            const whatsappMessage = `🎊 *KËRKESË E RE - Digital Invites*

👤 *Emri:* ${firstName} ${lastName}
📧 *Email:* ${email}
📱 *Tel:* ${phone}

💬 *Mesazhi:*
${message}`;
            
            const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
            
            window.open(whatsappUrl, '_blank');
            
            contactForm.classList.add('hidden');
            formSuccess.classList.add('show');
            
            setTimeout(() => {
                contactForm.reset();
            }, 1000);
        });
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            setTimeout(() => {
                if (contactForm) {
                    contactForm.classList.remove('hidden');
                    contactForm.reset();
                }
                if (formSuccess) {
                    formSuccess.classList.remove('show');
                }
            }, 300);
        });
    }

});
