document.addEventListener('DOMContentLoaded', function() {
    // Menu mobile
    const menuToggle = document.getElementById('menu-toggle');
    const navbar = document.getElementById('navbar');
    
    menuToggle.addEventListener('click', function() {
        navbar.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });
    
    // Animation du header au scroll
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Fermer le menu mobile en cliquant sur un lien
    const navLinks = document.querySelectorAll('.navbar a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navbar.classList.remove('active');
            menuToggle.classList.remove('active');
        });
    });
    
    // Modale pour les projets
    const projectCards = document.querySelectorAll('.project-card');
    const modal = document.getElementById('project-modal');
    const closeModal = document.querySelector('.close-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const modalGallery = document.querySelector('.modal-gallery');
    
    // Données des projets
    const projectsData = {
        1: {
            title: "Boutique en ligne 'LuxeMode'",
            description: "L'Hôpital Saint-Vincent est un site web vitrine présentant un établissement médical d'excellence, offrant des soins de qualité dans un environnement moderne et humain. Le site, développé avec HTML, CSS et JavaScript, met en avant les services médicaux (cardiologie, neurologie, pédiatrie, etc.), une équipe de professionnels expérimentés, et un service d'urgences 24h/24. Avec une interface responsive et intuitive, il permet aux visiteurs de prendre rendez-vous en ligne, de consulter les horaires, et d'accéder aux informations de contact. La conception élégante, combinée à des fonctionnalités pratiques, renforce la crédibilité de l'établissement et facilite l'accès aux soins pour les patients.",
            images: [
                "images/img-hopital.png",
                "images/img-hopital1.png",
            ],
            technologies: ["HTML/CSS", "JavaScript", "React", "Node.js", "MongoDB"]
        },
        2: {
            title: "Application 'FitTrack'",
            description: "**CréaVision** est un blog créatif moderne conçu pour inspirer et partager des idées dans les domaines du design, de la photographie et de la création artistique. Développé avec HTML, CSS et JavaScript, le site met en avant des articles thématiques, un portfolio visuel et une approche personnelle de l'auteur, Alex. Avec une interface élégante et responsive, il propose une navigation intuitive, des fonctionnalités sociales intégrées et une newsletter pour engager la communauté. L'esthétique soignée et le contenu qualitatif en font une plateforme de référence pour les passionnés de créativité.",
            images: [
                "images/img-blog.png",
                "images/img-blog1.png",
            ],
            technologies: ["React Native", "Firebase", "Redux", "UI/UX"]
        },
        3: {
            title: "Identité Visuelle 'Café Aroma'",
            description: "**AutoVision** est un site web spécialisé dans la vente de véhicules neufs et d'occasion, offrant une expérience utilisateur optimisée pour trouver et acheter des voitures en toute confiance. Développé avec HTML, CSS et JavaScript, le site propose un catalogue de plus de 500 véhicules vérifiés, des outils de recherche avancée, des solutions de financement sur mesure (crédit, LOA) et des services exclusifs comme la reprise ou l'essai gratuit. Avec une interface intuitive et responsive, AutoVision met en avant des fiches véhicules détaillées, des promotions attractives et un accompagnement personnalisé pour simplifier l'achat automobile.",
            images: [
                "images/img-auto.png",
                "images/img-auto1.png",
            ],
            technologies: ["Branding", "Illustration", "Print Design", "Packaging"]
        },
        4: {
            title: "Site Corporate 'TechSolutions'",
            description: "**Architectura** est une agence d'architecture spécialisée dans la conception de bâtiments industriels, commerciaux et résidentiels haut de gamme. Le site web, développé avec HTML, CSS et JavaScript, présente un portfolio de 200+ projets réalisés, des services complets (conception, construction Batimat, rénovation) et une approche durable de l'architecture. Avec une interface élégante et moderne, il met en valeur les réalisations via une galerie visuelle, des témoignages clients et un formulaire de contact pour des devis personnalisés. La structure claire et les visuels inspirants reflètent l'expertise et la créativité de l'agence.",
            images: [
                "images/img-architecture.png",
                "images/img-architecture1.png",
            ],
            technologies: ["WordPress", "PHP", "JavaScript", "SEO", "UI/UX"]
        }
    };
    
    // Ouvrir la modale avec les données du projet
    projectCards.forEach(card => {
        card.addEventListener('click', function(e) {
            if (e.target.classList.contains('btn-project')) {
                const projectId = card.getAttribute('data-project');
                const project = projectsData[projectId];
                
                modalTitle.textContent = project.title;
                modalDescription.textContent = project.description;
                
                // Vider et remplir la galerie
                modalGallery.innerHTML = '';
                project.images.forEach(image => {
                    const img = document.createElement('img');
                    img.src = image;
                    img.alt = project.title;
                    modalGallery.appendChild(img);
                });
                
                // Mettre à jour les technologies
                const techContainer = document.querySelector('.modal-technologies');
                techContainer.innerHTML = '';
                project.technologies.forEach(tech => {
                    const span = document.createElement('span');
                    span.textContent = tech;
                    techContainer.appendChild(span);
                });
                
                // Afficher la modale avec animation
                modal.style.display = "block";
                document.body.style.overflow = "hidden";
                
                setTimeout(() => {
                    modal.classList.add('show');
                }, 10);
            }
        });
    });
    
    // Fermer la modale
    closeModal.addEventListener('click', function() {
        modal.classList.remove('show');
        
        setTimeout(() => {
            modal.style.display = "none";
            document.body.style.overflow = "auto";
        }, 300);
    });
    
    // Fermer la modale en cliquant à l'extérieur
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.classList.remove('show');
            
            setTimeout(() => {
                modal.style.display = "none";
                document.body.style.overflow = "auto";
            }, 300);
        }
    });
    
    // Animation des éléments au scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.about-container, .card, .project-card, .contact-container');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Initialiser les éléments avec une opacité 0 pour l'animation
    document.querySelectorAll('.about-container, .card, .project-card, .contact-container').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'all 0.6s ease';
    });
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Exécuter une première fois au chargement
});





// Gestion du formulaire Google Forms
const contactForm = document.getElementById('google-form');
contactForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Empêche la redirection par défaut
    
    // Afficher un indicateur de chargement
    const submitBtn = this.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Envoi en cours...';
    submitBtn.disabled = true;

    // Envoi des données via Fetch API
    fetch(this.action, {
        method: 'POST',
        body: new URLSearchParams(new FormData(this)),
        mode: 'no-cors'
    })
    .then(() => {
        // Succès
        this.reset(); // Réinitialise le formulaire
        showCustomAlert('success', 'Message envoyé avec succès !');
    })
    .catch(() => {
        // Erreur
        showCustomAlert('error', 'Une erreur est survenue. Veuillez réessayer.');
    })
    .finally(() => {
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
    });
});

// Fonction pour afficher des alertes stylisées
function showCustomAlert(type, message) {
    const alertDiv = document.createElement('div');
    alertDiv.className = `custom-alert ${type}`;
    alertDiv.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
        <span>${message}</span>
    `;
    
    document.body.appendChild(alertDiv);
    
    // Disparaît après 5 secondes
    setTimeout(() => {
        alertDiv.classList.add('fade-out');
        setTimeout(() => alertDiv.remove(), 500);
    }, 5000);
}