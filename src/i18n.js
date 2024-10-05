import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        headingMain: "Hello, I'm Max!",
        headingText: {
          first: "I'm on my path to becoming a",
          second: "full-stack web developer",
          third: "currently exploring and creating projects to build my skills",
        },
        menu: {
          first: "about",
          second: "projects",
          third: "experience",
          fourth: "contact me",
        },
        about1: {
          first:
            "My journey into programming began during my first semester at university when I became fascinated with creating simple websites using",
          second: "HTML",
          third: "and",
          fourth: "CSS",
          fifth:
            "As I got deeper into it, I realized the limitations of these languages and wondered how large, complex websites were made. This curiosity led me to learn",
          sixth: "JavaScript",
          seventh:
            "a language I quickly grew to enjoy. Building increasingly complex projects, I discovered",
          eighth: "React",
          ninth: "and knew that web development was my passion",
        },
        about2: {
          first: "Today, my primary focus is on developing",
          second: "my own projects",
          third: "continuously improving my",
          fourth: "web development skills",
          fifth: "and immersing myself in",
          sixth: "constant learning",
          seventh:
            "When I'm not coding, you can find me hiking, fishing, or playing video games",
        },
        mainToolsHeading: "main tools I use",
        headingProject: "projects",
        projectInc:
          "It's nice to include the oldest projects here to show the imperfect beginnings.",
        chemSolver: {
          name: "ChemSolver",
          desc: "ChemSolver is a web app that simplifies chemistry with tools for chemical calculations, an interactive periodic table, and a unit converter. Logged-in users can save their work, view calculation history, and join discussions to share tips and advice. Perfect for students, educators, and chemistry enthusiasts.",
        },
        learningHelper: {
          name: "My Learning Helper",
          desc: "A website that boosts productivity with an hourly timer reminding you to take breaks. It also lets you create and manage daily to-do lists, helping you stay organized and focused.",
        },
        monsterWordsGame: {
          name: "Monster Words Game",
          desc: "An interactive typing game where you defeat monsters by typing their names. Clear all monsters to advance to the next level, and complete all levels to win. But beware—if a monster reaches the end, the game is over! All of that with Quake sound effects!",
        },
        randomFilm: {
          name: "Random Film",
          desc: "Website based on film database API generating random films based on your preference.",
        },
        ultimateBarberClub: {
          name: "Ultimate Barber Club",
          desc: "Barber shop website with calendar and ordering system.",
        },
        burgerLovers: {
          name: "Burger Lovers",
          desc: "Burger restaurant website with menu, cart and ordering system.",
        },
        headingExperience: "experience",
        itSupport: {
          name: "IT Support",
          company: "Hanya Corporation",
          desc: "Monitoring and maintaining the company computer systems, installing and configuring hardware and software, and solving technical problems",
          dateFrom: "feb 2024",
          now: "present",
        },
        resume: "My Resume",
        headingContactMe: "ready to build something amazing?",
        contactMeBtn: "Let's get to know each other!",
      },
    },
    cz: {
      translation: {
        headingMain: "Ahoj, já jsem Max!",
        headingText: {
          first: "Jsem na cestě stát se",
          second: "full-stack webovým vývojářem",
          third:
            "v současné době zkoumám a vytvářím projekty, abych si rozšířil své dovednosti",
        },
        menu: {
          first: "o mně",
          second: "projekty",
          third: "zkušenosti",
          fourth: "kontaktujte mě",
        },
        about1: {
          first:
            "Moje cesta k programování začala během prvního semestru na univerzitě, kdy mě zaujalo vytváření jednoduchých webových stránek pomocí",
          second: "HTML",
          third: "a",
          fourth: "CSS",
          fifth:
            "Když jsem se do toho dostal hlouběji, uvědomil jsem si omezení těchto jazyků a zajímalo mě, jak se vytvářejí velké a složité webové stránky. Tato zvědavost mě přivedla k tomu, že jsem se začal učit jazyk",
          sixth: "JavaScript",
          seventh:
            "který jsem si rychle oblíbil. Při vytváření stále složitějších projektů jsem objevil",
          eighth: "React",
          ninth: "a věděl jsem, že vývoj webových stránek je mou vášní",
        },
        about2: {
          first: "Dnes se soustředím především na vývoj",
          second: "vlastních projektů",
          third: "neustálé zlepšování svých dovedností v oblasti",
          fourth: "vývoje webových aplikací",
          fifth: "a",
          sixth: "neustálé vzdělávání",
          seventh:
            "Když zrovna nekóduji, můžete mě najít na túře, při rybaření nebo hraní videoher",
        },
        mainToolsHeading: "hlavní nástroje, které používám",
        headingProject: "projekty",
        projectInc:
          "Je hezké sem zahrnout i ty nejstarší projekty, které ukazují nedokonalé začátky.",
        chemSolver: {
          name: "ChemSolver",
          desc: "ChemSolver je webová aplikace, která zjednodušuje chemii pomocí nástrojů pro chemické výpočty, interaktivní periodické tabulky a převodníku jednotek. Přihlášení uživatelé si mohou ukládat práci, zobrazovat historii výpočtů a zapojit se do diskusí, kde mohou sdílet tipy a rady. Ideální pro studenty, učitele i nadšence do chemie.",
        },
        learningHelper: {
          name: "My Learning Helper",
          desc: "Webová stránka, která zvyšuje produktivitu pomocí hodinového časovače připomínajícího přestávky. Také vám umožňuje vytvářet a spravovat denní seznam úkolů, což vám pomůže zůstat organizovaní a soustředění.",
        },
        monsterWordsGame: {
          name: "Monster Words Game",
          desc: "Interaktivní hra na psaní, kde porážíte monstra tím, že píšete jejich jména. Zlikvidováním všech monster postoupíte do další úrovně, a po dokončení všech úrovní vyhráváte hru. Ale pozor — pokud monstrum dojde na konec, hra končí! To vše s Quake zvukovými efekty!",
        },
        randomFilm: {
          name: "Random Film",
          desc: "Webové stránky založené na API databáze filmů generující náhodné filmy na základě vašich preferencí.",
        },
        ultimateBarberClub: {
          name: "Ultimate Barber Club",
          desc: "Webové stránky holičství s kalendářem a objednávkovým systémem.",
        },
        burgerLovers: {
          name: "Burger Lovers",
          desc: "Webové stránky hamburgerové restaurace s menu, košíkem a objednávkovým systémem.",
        },
        headingExperience: "zkušenosti",
        itSupport: {
          name: "IT Support",
          company: "Hanya Corporation",
          desc: "Sledování a údržba počítačových systémů společnosti, instalace a konfigurace hardwaru a softwaru a řešení technických problémů",
          dateFrom: "únor 2024",
          now: "dosud",
        },
        resume: "Můj životopis",
        headingContactMe: "připraveni vytvořit něco úžasného?",
        contactMeBtn: "Poznejme se navzájem!",
      },
    },
  },
  fallbackLng: "en",

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
