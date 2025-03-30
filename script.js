document.addEventListener('DOMContentLoaded', function() {
    var navLinks = document.querySelectorAll('nav a:not(.logo-container)');
    var sections = document.querySelectorAll('main section');

    function showSection(target) {
        sections.forEach(function(section) {
            section.classList.remove('active');
        });
        var targetSection = document.querySelector(target);
        if (targetSection) {
            targetSection.classList.add('active');
        }
        history.pushState(null, '', target);
    }

    navLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            showSection(link.getAttribute('href'));
        });
    });

    var currentHash = window.location.hash;
    if (currentHash) {
        showSection(currentHash);
    } else {
        document.querySelector('#home').classList.add('active');
    }

    /* Traduzioni multilingua */
    const translations = {
      it: {
        nav: {
          home: "Home",
          "chi-sono": "Chi sono",
          tools: "Tools",
          progetti: "CTF",
          contattaci: "Contatti",
          impostazioni: "Impostazioni",
          logo: "Terronia"
        },
        home: {
          title: "CIAOOO!!!",
          text: "Ti do il benvenuto nella pagina personale di max, buona permanenza .Dalle impostazioni puoi modificare la lingua e il tema"
        },
        "chi-sono": {
          title: "Chi Sono?",
          text: "Piacere, io sono Massimiliano, o were, come preferisci. Sono un ragazzo di 17 anni e attualmente continuo gli studi presso il liceo scientifico A.Einstein di Palermo. Coltivo una grande passione per l'informatica e la tecnologia in generale, sia a livello hardware che software. Anche se faccio parte di questo mondo da pochi mesi (circa 4), sono dedito ad imparare e mi sto lentamente formando per lavorare in ambito di cyber sicurezza nel futuro."
        },
        tools: {
          title: "Tools",
          text: "All'interno di questa sezione verranno riportati una serie di tools per la risoluzione di CTF per la cybersicurezza con tanto di descrizione."
        },
        progetti: {
          title: "CTF",
          text: "Le CTF (Capture The Flag) sono sfide di sicurezza informatica in cui si affrontano enigmi per migliorare le proprie competenze tecniche. L'obiettivo è scoprire delle 'flag' nascoste risolvendo problemi di crittografia, reverse engineering, sicurezza web e molto altro."
        },
        contatti: {
          title: "Contatti"
        },
        impostazioni: {
          title: "Impostazioni",
          labelLanguage: "Cambia lingua:",
          labelTheme: "Tema:",
          themeToggle: "Chiaro/Scuro"
        },
        footer: "2025 Italia, tutti i diritti sono miei"
      },
      en: {
        nav: {
          home: "Home",
          "chi-sono": "About",
          tools: "Tools",
          progetti: "CTF",
          contattaci: "Contacts",
          impostazioni: "Settings",
          logo: "Terronia"
        },
        home: {
          title: "Welcome",
          text: "Welcome to my personal page, enjoy your stay"
        },
        "chi-sono": {
          title: "About Me",
          text: "Nice to meet you, I'm Massimiliano, or were if you prefer. I'm a 17-year-old currently studying at A.Einstein Scientific High School in Palermo. I have a great passion for IT and technology in general, both hardware and software. Although I've been in this field for only about 4 months, I am dedicated to learning and slowly training to work in cybersecurity in the future."
        },
        tools: {
          title: "Tools",
          text: "This section contains several tools for solving CTF challenges in cybersecurity, with detailed descriptions."
        },
        progetti: {
          title: "CTF",
          text: "CTFs (Capture The Flag) are cybersecurity challenges where you solve puzzles to discover hidden flags by cracking cryptography, reverse engineering, web security, and more."
        },
        contatti: {
          title: "Contacts"
        },
        impostazioni: {
          title: "Settings",
          labelLanguage: "Change language:",
          labelTheme: "Theme:",
          themeToggle: "Light/Dark"
        },
        footer: "© 2025 terroni. All rights reserved."
      }
    };

    function updateLanguage(lang) {
        document.querySelectorAll('nav a:not(.logo-container)').forEach(function(anchor) {
            let href = anchor.getAttribute('href').substring(1);
            if (translations[lang].nav[href]) {
                anchor.textContent = translations[lang].nav[href];
            }
        });
        var logoSpan = document.querySelector('.logo-container span');
        if (logoSpan) {
            logoSpan.textContent = translations[lang].nav.logo;
        }
        Object.keys(translations[lang]).forEach(function(key) {
            if (["nav", "footer"].includes(key)) return;
            var section = document.getElementById(key);
            if (section) {
                var h2 = section.querySelector('h2');
                if (h2) h2.textContent = translations[lang][key].title;
                var p = section.querySelector('p');
                if (p) p.textContent = translations[lang][key].text;
            }
        });
        var settingsSection = document.getElementById('impostazioni');
        if (settingsSection) {
            var h2 = settingsSection.querySelector('h2');
            if (h2) h2.textContent = translations[lang].impostazioni.title;
            var labelLang = settingsSection.querySelector('label[for="language-select"]');
            if (labelLang) labelLang.textContent = translations[lang].impostazioni.labelLanguage;
            var labelTheme = settingsSection.querySelector('label[for="theme-toggle"]');
            if (labelTheme) labelTheme.textContent = translations[lang].impostazioni.labelTheme;
            var themeToggle = document.getElementById('theme-toggle');
            if (themeToggle) themeToggle.textContent = translations[lang].impostazioni.themeToggle;
        }
        var footerP = document.querySelector('footer p');
        if (footerP) footerP.textContent = translations[lang].footer;
    }
    var languageSelect = document.getElementById('language-select');
    if (languageSelect) {
        languageSelect.addEventListener('change', function() {
            updateLanguage(this.value);
        });
    }
    var themeToggleBtn = document.getElementById('theme-toggle');
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', function() {
            document.body.classList.toggle('dark-mode');
        });
    }
    if (languageSelect) {
        updateLanguage(languageSelect.value);
    }
});
