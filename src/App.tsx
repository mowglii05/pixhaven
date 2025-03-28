import React, { useEffect, useState } from 'react';
import {
  Monitor,
  ShoppingCart,
  Search,
  Settings,
  Github,
  Twitter,
  Linkedin,
  CheckCircle2,
  ChevronDown,
  Mail,
  Phone,
  MapPin,
  Code2,
  Zap,
  Users,
  Rocket,
  Code,
  Pencil,
  Lightbulb
} from 'lucide-react';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container header-content">
          <a href="/" className="logo orbitron">
            <Code2 className="logo-icon" />
            PixHaven
          </a>
          <nav>
            <ul className="nav-menu">
              <li className='orbitron'><a href="#accueil" className="nav-link">Accueil</a></li>
              <li className='orbitron'><a href="#services" className="nav-link">Nos services</a></li>
              <li className='orbitron'><a href="#portfolio" className="nav-link">Portfolio</a></li>
              <li><a href="#process" className="nav-link orbitron">Notre process</a></li>
              <li className='orbitron'><a href="#contact" className="nav-link">Contact</a></li>
            </ul>
          </nav>
          <a href="#contact" className="cta-button">Demander un devis</a>
        </div>
      </header>

      <section id="accueil" className="hero">
        <div className="container hero-content">
          <span className="hero-badge">Agence Web Créative</span>
          <h1 className="hero-title orbitron">Des sites web modernes et performants.</h1>
          <p className="hero-subtitle kod">Nous créons des expériences digitales uniques pour votre business.</p>
          <div className="button-group">
            <a href="#services" className="cta-button">Voir nos services</a>
            <a href="#contact" className="cta-button">Nous contacter</a>
          </div>
        </div>
        <ChevronDown
          className="scroll-indicator"
          onClick={() => scrollToSection('stats')}
          size={32}
        />
      </section>

      <section id="stats" className="stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">150+</div>
              <p>Projets réalisés</p>
            </div>
            <div className="stat-item">
              <div className="stat-number">98%</div>
              <p>Clients satisfaits</p>
            </div>
            <div className="stat-item">
              <div className="stat-number">5</div>
              <p>Années d'expérience</p>
            </div>
            <div className="stat-item">
              <div className="stat-number">24/7</div>
              <p>Support client</p>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="services">
        <div className="container">
          <h2 className="section-title">Nos Services</h2>
          <p className="section-subtitle">
            Des solutions sur mesure pour répondre à tous vos besoins digitaux
          </p>
          <div className="services-grid">
            <div className="service-card">
              <Monitor className="service-icon" />
              <h3 className="service-title">Web Design Responsive</h3>
              <p>Des sites web adaptés à tous les écrans, du mobile au desktop.</p>
              <ul className="service-features">
                <li><CheckCircle2 size={16} className="feature-icon" /> Design moderne et intuitif</li>
                <li><CheckCircle2 size={16} className="feature-icon" /> Optimisé pour mobile</li>
                <li><CheckCircle2 size={16} className="feature-icon" /> Expérience utilisateur optimale</li>
              </ul>
            </div>
            <div className="service-card">
              <ShoppingCart className="service-icon" />
              <h3 className="service-title">E-commerce</h3>
              <p>Solutions de vente en ligne personnalisées et performantes.</p>
              <ul className="service-features">
                <li><CheckCircle2 size={16} className="feature-icon" /> Paiement sécurisé</li>
                <li><CheckCircle2 size={16} className="feature-icon" /> Gestion des stocks</li>
                <li><CheckCircle2 size={16} className="feature-icon" /> Analytics avancés</li>
              </ul>
            </div>
            <div className="service-card">
              <Search className="service-icon" />
              <h3 className="service-title">Optimisation SEO</h3>
              <p>Amélioration du référencement pour plus de visibilité.</p>
              <ul className="service-features">
                <li><CheckCircle2 size={16} className="feature-icon" /> Audit SEO complet</li>
                <li><CheckCircle2 size={16} className="feature-icon" /> Optimisation technique</li>
                <li><CheckCircle2 size={16} className="feature-icon" /> Suivi des performances</li>
              </ul>
            </div>
            <div className="service-card">
              <Settings className="service-icon" />
              <h3 className="service-title">Maintenance</h3>
              <p>Support technique et mises à jour régulières.</p>
              <ul className="service-features">
                <li><CheckCircle2 size={16} className="feature-icon" /> Mises à jour de sécurité</li>
                <li><CheckCircle2 size={16} className="feature-icon" /> Sauvegardes régulières</li>
                <li><CheckCircle2 size={16} className="feature-icon" /> Support réactif</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="portfolio">
        <div className="container">
          <h2 className="section-title">Notre Portfolio</h2>
          <p className="section-subtitle">Découvrez nos dernières réalisations</p>

          <div className="portfolio-filters">
            <button className="filter-button active">Tous</button>
            <button className="filter-button">E-commerce</button>
            <button className="filter-button">Sites Vitrines</button>
            <button className="filter-button">Applications Web</button>
          </div>

          <div className="portfolio-grid">
            <div className="portfolio-card">
              <img
                src="https://images.unsplash.com/photo-1517292987719-0369a794ec0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Project 1"
                className="portfolio-image"
              />
              <div className="portfolio-overlay">
                <h3>Site E-commerce Mode</h3>
                <p>Design moderne et expérience utilisateur optimisée</p>
                <div className="portfolio-tags">
                  <span className="portfolio-tag">E-commerce</span>
                  <span className="portfolio-tag">UI/UX</span>
                </div>
              </div>
            </div>
            <div className="portfolio-card">
              <img
                src="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Project 2"
                className="portfolio-image"
              />
              <div className="portfolio-overlay">
                <h3>Application Web SaaS</h3>
                <p>Interface intuitive et performances optimales</p>
                <div className="portfolio-tags">
                  <span className="portfolio-tag">SaaS</span>
                  <span className="portfolio-tag">React</span>
                </div>
              </div>
            </div>
            <div className="portfolio-card">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Project 3"
                className="portfolio-image"
              />
              <div className="portfolio-overlay">
                <h3>Site Vitrine Restaurant</h3>
                <p>Design élégant et navigation fluide</p>
                <div className="portfolio-tags">
                  <span className="portfolio-tag">Site Vitrine</span>
                  <span className="portfolio-tag">Responsive</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="process" className="process">
        <div className="container">
          <h2 className="section-title">Notre Process</h2>
          <p className="section-subtitle">
            Une méthodologie éprouvée pour des résultats garantis
          </p>

          <div className="process-steps">
            {[
              {
                num: 1,
                icon: <Lightbulb/> ,
                title: "Consultation",
                desc: "Analyse de vos besoins et objectifs",
              },
              {
                num: 2,
                icon: <Pencil/> ,
                title: "Conception",
                desc: "Design et architecture du projet",
              },
              {
                num: 3,
                icon: <Code/> ,
                title: "Développement",
                desc: "Création et tests approfondis",
              },
              {
                num: 4,
                icon: <Rocket/>,
                title: "Lancement",
                desc: "Mise en ligne et optimisation",
              },
            ].map((step, i) => (
              <div key={i} className="process-step">
                <div className="step-number">{step.icon}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
            {/* <div className="process-line"></div> */}
          </div>
        </div>
      </section>
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">Contactez-nous</h2>
          <p className="section-subtitle">Discutons de votre projet</p>

          <div className="contact-grid">
            <form className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Nom</label>
                <input type="text" id="name" className="form-input" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" className="form-input" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" className="form-textarea" rows={6} required></textarea>
              </div>
              <button type="submit" className="cta-button">Envoyer</button>
            </form>

            <div className="contact-info">
              <h3>Informations</h3>
              <div className="contact-method">
                <Mail className="contact-icon" />
                <p>contact@pixhaven.fr</p>
              </div>
              <div className="contact-method">
                <Phone className="contact-icon" />
                <p>+33 1 23 45 67 89</p>
              </div>
              <div className="contact-method">
                <MapPin className="contact-icon" />
                <p>Paris, France</p>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9914406081893!2d2.292292615674431!3d48.85837007928757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sTour%20Eiffel!5e0!3m2!1sfr!2sfr!4v1647856687721!5m2!1sfr!2sfr"
                width="100%"
                height="300"
                style={{ border: 0, borderRadius: '8px', marginTop: '2rem' }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-content">
          <div>
            <h3>PixHaven</h3>
            <p>Création de sites web sur mesure</p>
          </div>
          <div>
            <h3>Liens rapides</h3>
            <ul className="footer-links">
              <li><a href="#accueil" className="footer-link">Accueil</a></li>
              <li><a href="#services" className="footer-link">Services</a></li>
              <li><a href="#portfolio" className="footer-link">Portfolio</a></li>
              <li><a href="#contact" className="footer-link">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3>Suivez-nous</h3>
            <div className="social-icons">
              <a href="#" className="social-icon"><Github /></a>
              <a href="#" className="social-icon"><Twitter /></a>
              <a href="#" className="social-icon"><Linkedin /></a>
            </div>
          </div>
        </div>
        <div className="copyright">
          © {new Date().getFullYear()} PixHaven. Tous droits réservés.
        </div>
      </footer>
    </>
  );
}

export default App;
