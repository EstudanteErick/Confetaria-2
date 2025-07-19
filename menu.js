// Optimized menu functions
function menuShow(){const m=document.querySelector('.mobile-menu'),i=document.querySelector('.mobile-menu-icon');m.classList.toggle('open');i.classList.toggle('active')}
function scrollToSection(id){const el=document.getElementById(id);if(el){const h=document.querySelector('header').offsetHeight;window.scrollTo({top:el.offsetTop-h,behavior:'smooth'})}}

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