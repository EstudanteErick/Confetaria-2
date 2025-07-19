// Toggle do menu mobile
function menuShow() {
    const menuMobile = document.querySelector('.mobile-menu');
    const menuIcon = document.querySelector('.mobile-menu-icon');
    
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        menuIcon.classList.remove('active');
    } else {
        menuMobile.classList.add('open');
        menuIcon.classList.add('active');
    }
}

// Fechar menu mobile ao clicar em um link
document.addEventListener('DOMContentLoaded', function() {
    const mobileLinks = document.querySelectorAll('.mobile-menu .nav-link');
    const menuMobile = document.querySelector('.mobile-menu');
    const menuIcon = document.querySelector('.mobile-menu-icon');
    
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuMobile.classList.remove('open');
            menuIcon.classList.remove('active');
        });
    });
    
    // Smooth scrolling para links internos
    const allLinks = document.querySelectorAll('a[href^="#"]');
    allLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Efeito de header transparente no scroll
    let lastScrollTop = 0;
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 100) {
            header.style.background = 'rgba(139, 69, 19, 0.98)';
        } else {
            header.style.background = 'rgba(139, 69, 19, 0.95)';
        }
        
        lastScrollTop = scrollTop;
    });
    
    // Animação do botão CTA
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', function() {
            const productsSection = document.getElementById('produtos');
            if (productsSection) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = productsSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    }
});