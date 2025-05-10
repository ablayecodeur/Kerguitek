document.addEventListener('DOMContentLoaded', function() {
   

    // Animation du header au scroll
    const header = document.querySelector('header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Filtrage des projets
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            const filterValue = this.getAttribute('data-filter');
            portfolioItems.forEach(item => {
                if (filterValue === 'all' || item.getAttribute('data-category').includes(filterValue)) {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'translateY(0)';
                    }, 100);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
        });
    });

    // Charger plus de projets
    const loadMoreBtn = document.getElementById('load-more-btn');
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', function() {
            this.textContent = 'Chargement...';
            this.disabled = true;
            setTimeout(() => {
                this.textContent = 'Tous les projets sont chargés';
                this.disabled = true;
                this.style.opacity = '0.6';
            }, 1500);
        });
    }

    // Modal pour les projets
    const projectModal = document.getElementById('project-modal');
    const closeModal = document.querySelector('.close-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const modalGallery = document.querySelector('.modal-gallery');
    const modalTechnologies = document.querySelector('.modal-technologies');
    const projectLink = document.getElementById('project-link');
    const viewButtons = document.querySelectorAll('.btn-view');

    // Données complètes des projets avec chartes graphiques pour les logos
    const projectsData = {
        "Hôpital Jamm dji": {
            description: "L'Hôpital Saint-Vincent est un site web vitrine présentant un établissement médical d'excellence, offrant des soins de qualité dans un environnement moderne et humain. Le site, développé avec HTML, CSS et JavaScript, met en avant les services médicaux (cardiologie, neurologie, pédiatrie, etc.), une équipe de professionnels expérimentés, et un service d'urgences 24h/24. Avec une interface responsive et intuitive, il permet aux visiteurs de prendre rendez-vous en ligne, de consulter les horaires, et d'accéder aux informations de contact. La conception élégante, combinée à des fonctionnalités pratiques, renforce la crédibilité de l'établissement et facilite l'accès aux soins pour les patients.",
            images: [
                "images/img-hopital.png",
            ],
            technologies: ["HTML5", "CSS3", "JavaScript", "WordPress", "SEO"],
            link: "#",
            date: "Mars 2023",
            client: "Hôpital Saint-Vincent",
            location: "Dakar, Sénégal"
        },
        "Calebasse Locale": {
            description: 'Logo pour Calebasse Locale. La charte graphique combine le vert et l’orange pour symboliser l’agriculture et la chaleur locale. Le logo représente une lettre "C" stylisée intégrant une calebasse remplie de couscous, une feuille et un épi de mil. Cela évoque la tradition, l’ancrage local et la valorisation des produits du terroir. La typographie est simple, en capitales, avec un contraste de couleurs brune et verte soulignant l’authenticité et la naturalité.',
            images: [
                "images/calebasse-locale.jpeg",
            ],
            technologies: ["Logo Design", "Branding", "Charte Graphique", "Print"],
            link: "#",
            date: "Janvier 2023",
            client: "Calebasse Locale",
            location: "Thiès, Sénégal"
        },
        "KNS": {
            description: "Logo pour KNS. La charte graphique utilise le vert pour représenter l’espoir et la croissance, associé au gris pour la stabilité et le sérieux. Le logo montre des bâtiments et des toitures stylisés, symbolisant l'immobilier et l’industrie. En dessous, des icônes illustrent la diversité des services : automobile, sonorisation, alimentation, construction. La typographie est classique et majuscule, affirmant la fiabilité de l’entreprise.",
            images: [
                "images/kns.jpeg",
            ],
            technologies: ["Logo Design", "Brand Identity", "Stationery"],
            link: "#",
            date: "Février 2023",
            client: "KNS Digital",
            location: "Dakar, Sénégal"
        },
        "MaamSama": {
            description: "Architectura** est une agence d'architecture spécialisée dans la conception de bâtiments industriels, commerciaux et résidentiels haut de gamme. Le site web, développé avec HTML, CSS et JavaScript, présente un portfolio de 200+ projets réalisés, des services complets (conception, construction Batimat, rénovation) et une approche durable de l'architecture. Avec une interface élégante et moderne, il met en valeur les réalisations via une galerie visuelle, des témoignages clients et un formulaire de contact pour des devis personnalisés. La structure claire et les visuels inspirants reflètent l'expertise et la créativité de l'agence.",
            images: [
                "images/img-architecture.png",
                
            ],
            technologies: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL"],
            link: "#",
            date: "Avril 2023",
            client: "MaamSama Artisanat",
            location: "Dakar, Sénégal"
        },
        "ACT": {
            description: "Logo pour ACT (Africa Construction et Transport). La charte graphique combine le noir pour la solidité et le bleu pour la fiabilité. Le logo intègre la carte de l’Afrique coiffée d’un casque de chantier, symbole du secteur du BTP. Une grue et un bâtiment illustrent les domaines de la construction et du transport urbain. La typographie est forte et moderne, reflétant stabilité et ambition.",
            images: [
                "images/act.jpeg",
            ],
            technologies: ["Logo Design", "Brand Guidelines", "Visual Identity"],
            link: "#",
            date: "Novembre 2022",
            client: "ACT Sénégal",
            location: "Dakar, Sénégal"
        },
        "Creation de contenus": {
            description: "CréaVision** est un blog créatif moderne conçu pour inspirer et partager des idées dans les domaines du design, de la photographie et de la création artistique. Développé avec HTML, CSS et JavaScript, le site met en avant des articles thématiques, un portfolio visuel et une approche personnelle de l'auteur, Alex. Avec une interface élégante et responsive, il propose une navigation intuitive, des fonctionnalités sociales intégrées et une newsletter pour engager la communauté. L'esthétique soignée et le contenu qualitatif en font une plateforme de référence pour les passionnés de créativité.",
            images: [
                "images/img-blog.png",
            ],
            technologies: ["WordPress", "CSS3", "PHP", "SEO"],
            link: "#",
            date: "Mai 2023",
            client: "Content Creator SN",
            location: "Dakar, Sénégal"
        },
        "Arafat Menuiserie Construction": {
            description: 'Logo pour ACM (Arafat Construction Métallique). La charte graphique utilise le noir pour la robustesse et le jaune pour la visibilité et l’énergie. Le logo représente une maison stylisée, symbolisant l’expertise en construction. Les lettres "A", "C", "M" sont intégrées dans des blocs verticaux évoquant des matériaux de construction. La typographie est lisible et moderne, affirmant le sérieux de l’entreprise.',
            images: [
                "images/amc.jpeg",
            ],
            technologies: ["Logo Design", "Branding", "Signage"],
            link: "#",
            date: "Décembre 2022",
            client: "Arafat Menuiserie",
            location: "Pikine, Sénégal"
        },
        "Groupe Financier WAO": {
            description: "AutoVision** est un site web spécialisé dans la vente de véhicules neufs et d'occasion, offrant une expérience utilisateur optimisée pour trouver et acheter des voitures en toute confiance. Développé avec HTML, CSS et JavaScript, le site propose un catalogue de plus de 500 véhicules vérifiés, des outils de recherche avancée, des solutions de financement sur mesure (crédit, LOA) et des services exclusifs comme la reprise ou l'essai gratuit. Avec une interface intuitive et responsive, AutoVision met en avant des fiches véhicules détaillées, des promotions attractives et un accompagnement personnalisé pour simplifier l'achat automobile.",
            images: [
                "images/img-auto.png",
            ],
            technologies: ["HTML5", "CSS3", "JavaScript", "React"],
            link: "#",
            date: "Juillet 2023",
            client: "Groupe WAO",
            location: "Dakar, Sénégal"
        }
    };

    // Ouvrir la modal avec les données du projet
    viewButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const projectCard = this.closest('.portfolio-item');
            const projectName = projectCard.querySelector('h3').textContent;
            const project = projectsData[projectName];

            if (project) {
                modalTitle.textContent = projectName;
                modalDescription.textContent = project.description;
                projectLink.href = project.link;

                // Mettre à jour les métadonnées
                document.querySelector('.project-date').innerHTML = `<i class="far fa-calendar-alt"></i> ${project.date}`;
                document.querySelector('.project-client').innerHTML = `<i class="far fa-user"></i> Client: ${project.client}`;
                document.querySelector('.project-location').innerHTML = `<i class="fas fa-map-marker-alt"></i> ${project.location}`;

                // Vider et remplir la galerie
                modalGallery.innerHTML = "";
                project.images.forEach(image => {
                    const img = document.createElement('img');
                    img.src = image;
                    img.alt = projectName;
                    modalGallery.appendChild(img);
                });

                // Mettre à jour les technologies
                modalTechnologies.innerHTML = "";
                project.technologies.forEach(tech => {
                    const span = document.createElement('span');
                    span.textContent = tech;
                    modalTechnologies.appendChild(span);
                });

                // Afficher la modal avec animation
                projectModal.style.display = "block";
                document.body.style.overflow = "hidden";
                setTimeout(() => {
                    projectModal.classList.add('show');
                }, 10);
            }
        });
    });

    // Fermer la modal
    closeModal.addEventListener('click', function() {
        projectModal.classList.remove('show');
        setTimeout(() => {
            projectModal.style.display = "none";
            document.body.style.overflow = "auto";
        }, 300);
    });

    // Fermer la modal en cliquant à l'extérieur
    window.addEventListener('click', function(e) {
        if (e.target === projectModal) {
            projectModal.classList.remove('show');
            setTimeout(() => {
                projectModal.style.display = "none";
                document.body.style.overflow = "auto";
            }, 300);
        }
    });

    // Animation des éléments au scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.portfolio-item, .filters-section, .cta-section');
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
    document.querySelectorAll('.portfolio-item, .filters-section, .cta-section').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'all 0.6s ease';
    });

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Exécuter une première fois au chargement
});