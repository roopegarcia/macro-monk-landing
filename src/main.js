import './style.css';
import noSpamDonut from './assets/images/no-spam-donut-sticker.png';

const appUrl = 'https://app.macromonk.fi/';

const copy = {
  en: {
    openApp: 'Open app',
    eyebrow: 'For lifters and athletes',
    h1: 'Track macros and training without getting sold every 30 seconds.',
    lede:
      'Most trackers pretend to be free, then choke your setup with tiny limits, ads, and endless "buy Pro" popups. Macro Monk stays clean: practical logging, serious tracking, zero manipulative funnel.',
    authLine: 'Google auth, no password-lost hassle.',
    stickerAlt: 'No-spam tracking sticker',
    startTracking: 'Start tracking',
    seeDifference: 'See the difference',
    differenceTitle: 'See the difference',
    differenceStep1: 'Set your macro and calorie target, then choose your phase: Cut, Bulk, or Maintain.',
    differenceStep2: 'Eat and enjoy life.',
    differenceStep3: 'Macros and calories update so you know exactly how much is left for the day.',
    differenceBody1:
      'Build your own food database so you do not rely on vague and often wrong nutrition values. No pre-made database dependencies. Just your own values. No one is going to cap your items and push a fake Pro wall.',
    differenceBody2:
      'Copy previous day meals (because we both know you are eating mostly the same foods every day). Consistency is everything, and this is a long-term game.',
    pricingTitle: 'Simple pricing',
    pricingIntro: 'Stripe payment. No hidden layers.',
    monthlyPlan: 'Monthly',
    monthlyPrice: '€8/month',
    yearlyPlan: 'Yearly',
    yearlyPrice: '€69/year',
    freeTrial: 'Free trial for 7 days.',
    bodyCompTitle: 'Body composition and phase tracking that make sense',
    bodyCompBody:
      'Daily scale weight jumps are noisy. Macro Monk tracks running 7-day averages, calculates weekly changes, lets you run your diet phase (Cut, Bulk, or Maintain), and gives feedback on how your progress is going.',
    bodyCompPoint1: 'Running 7-day averages to smooth daily noise',
    bodyCompPoint2: 'Weekly change calculations for real trend insight',
    bodyCompPoint3: 'Phase selection with progress feedback: Cut, Bulk, or Maintain',
    bodyCompPoint4: 'Lean body mass tracking when body-fat % is logged',
    quote:
      '"Macro Monk is the tracker I wanted: direct, fast, and respectful of people who are serious about results."',
    tryMacroMonk: 'Try Macro Monk'
  },
  fi: {
    openApp: 'Avaa sovellus',
    eyebrow: 'Treenaajille ja urheilijoille',
    h1: 'Seuraa makroja ja treeniä ilman mainoksia.',
    lede:
      'Useimmat trackerit väittävät olevansa ilmaisia, mutta rajoittavat käyttöä pienillä limiteillä, mainoksilla ja loputtomilla "osta Pro" -kehotuksilla. Macro Monk pysyy puhtaana: käytännöllinen kirjaus, vakava seuranta, ei manipuloivaa myyntifunnelia.',
    authLine: 'Google-kirjautuminen, ei salasanasäätöä.',
    stickerAlt: 'Ei spämmimyyntiä -tarra',
    startTracking: 'Aloita seuranta',
    seeDifference: 'Katso ero',
    differenceTitle: 'Katso ero',
    differenceStep1: 'Aseta makro- ja kaloritavoitteesi, ja valitse vaihe: rasvanpoltto, lihaskasvu tai ylläpito.',
    differenceStep2: 'Syö hyvin ja elä normaalisti.',
    differenceStep3: 'Makrot ja kalorit päivittyvät, joten tiedät tarkasti paljonko päivälle on jäljellä.',
    differenceBody1:
      'Rakenna oma ruokadatasi, jotta et ole epämääräisten ja usein väärien ravintoarvojen varassa. Ei valmiiden tietokantojen pakkoa. Vain omat arvosi. Kukaan ei rajoita item-määriä ja pakota Pro-seinän taakse.',
    differenceBody2:
      'Kopioi edellisen päivän ateriat (koska molemmat tiedämme, että syöt useimmiten samoja ruokia joka päivä). Johdonmukaisuus on kaikki kaikessa, ja tämä on pitkä peli.',
    pricingTitle: 'Yksinkertainen hinnoittelu',
    pricingIntro: 'Maksut Stripellä. Ei piilokerroksia.',
    monthlyPlan: 'Kuukausi',
    monthlyPrice: '8 €/kk',
    yearlyPlan: 'Vuosi',
    yearlyPrice: '69 €/vuosi',
    freeTrial: '7 päivän ilmainen kokeilu.',
    bodyCompTitle: 'Järkevä kehonkoostumuksen ja vaiheen seuranta',
    bodyCompBody:
      'Päivittäinen paino heittelee paljon. Macro Monk seuraa liukuvaa 7 päivän keskiarvoa, laskee viikkokohtaiset muutokset, tukee vaiheita (rasvanpoltto, lihaskasvu, ylläpito) ja antaa palautetta siitä, miten eteneminen sujuu.',
    bodyCompPoint1: 'Liukuva 7 päivän keskiarvo vähentää päivittäistä kohinaa',
    bodyCompPoint2: 'Viikkokohtaiset muutokset näyttävät oikean trendin',
    bodyCompPoint3: 'Vaihevalinta ja etenemisen palaute: rasvanpoltto, lihaskasvu tai ylläpito',
    bodyCompPoint4: 'Rasvattoman massan seuranta, kun rasvaprosentti on kirjattu',
    quote:
      '"Macro Monk on tracker, jonka itse halusin: suora, nopea ja kunnioittava ihmisille, jotka suhtautuvat tuloksiin vakavasti."',
    tryMacroMonk: 'Kokeile Macro Monkia'
  }
};

const getInitialLang = () => {
  const stored = localStorage.getItem('lang');
  if (stored === 'fi' || stored === 'en') return stored;
  return navigator.language?.toLowerCase().startsWith('fi') ? 'fi' : 'en';
};

let currentLang = getInitialLang();

const render = () => {
  const t = copy[currentLang];

  document.documentElement.lang = currentLang;

  document.querySelector('#app').innerHTML = `
    <main class="site">
      <div class="backdrop" aria-hidden="true"></div>

      <header class="topbar container">
        <a class="brand" href="${appUrl}" target="_blank" rel="noreferrer">
          <img src="/macro-monk.png" alt="Macro Monk" />
        </a>

        <div class="top-actions">
          <div class="lang-switch" role="group" aria-label="Language selector">
            <button class="lang-btn ${currentLang === 'en' ? 'active' : ''}" data-lang="en">EN</button>
            <button class="lang-btn ${currentLang === 'fi' ? 'active' : ''}" data-lang="fi">FI</button>
          </div>
          <a class="button ghost" href="${appUrl}" target="_blank" rel="noreferrer">${t.openApp}</a>
        </div>
      </header>

      <section class="hero container">
        <div class="hero-copy reveal">
          <p class="eyebrow">${t.eyebrow}</p>
          <h1>${t.h1}</h1>
          <p class="lede">${t.lede}</p>
          <div class="hero-actions">
            <a class="button primary" href="${appUrl}" target="_blank" rel="noreferrer">${t.startTracking}</a>
            <a class="button ghost" href="#see-the-difference">${t.seeDifference}</a>
          </div>
        </div>

        <div class="hero-visual reveal-delay">
          <div class="logo-frame">
            <img src="/macro-monk-favicon.png" alt="Macro Monk emblem" />
          </div>
        </div>
      </section>

      <section id="see-the-difference" class="difference container reveal">
        <h2>${t.differenceTitle}</h2>
        <p class="difference-auth">${t.authLine}</p>
        <ol class="difference-steps">
          <li>${t.differenceStep1}</li>
          <li>${t.differenceStep2}</li>
          <li>${t.differenceStep3}</li>
        </ol>
        <p class="difference-note">${t.differenceBody1}</p>
        <p class="difference-note">${t.differenceBody2}</p>
      </section>

      <section class="pricing container reveal-delay">
        <h2>${t.pricingTitle}</h2>
        <p class="pricing-intro">${t.pricingIntro}</p>
        <div class="pricing-grid">
          <article class="price-card">
            <p class="plan-name">${t.monthlyPlan}</p>
            <p class="plan-price">${t.monthlyPrice}</p>
          </article>
          <article class="price-card">
            <p class="plan-name">${t.yearlyPlan}</p>
            <p class="plan-price">${t.yearlyPrice}</p>
          </article>
          <article class="price-card trial">
            <p class="plan-name">Trial</p>
            <p class="plan-price">${t.freeTrial}</p>
          </article>
        </div>
      </section>

      <section class="body-comp container reveal-delay">
        <h2>${t.bodyCompTitle}</h2>
        <div class="feature-sticker" aria-hidden="true">
          <img src="${noSpamDonut}" alt="${t.stickerAlt}" />
        </div>
        <p class="body-comp-lede">${t.bodyCompBody}</p>
        <ul class="body-comp-list">
          <li>${t.bodyCompPoint1}</li>
          <li>${t.bodyCompPoint2}</li>
          <li>${t.bodyCompPoint3}</li>
          <li>${t.bodyCompPoint4}</li>
        </ul>
      </section>

      <section class="promise container reveal-delay">
        <p class="quote">${t.quote}</p>
        <a class="button primary" href="${appUrl}" target="_blank" rel="noreferrer">${t.tryMacroMonk}</a>
      </section>

      <footer class="footer container">
        <p class="footer-copy">© 2026 Macro Monk. All rights reserved.</p>
      </footer>
    </main>
  `;

  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const nextLang = btn.dataset.lang;
      if (!nextLang || nextLang === currentLang) return;
      currentLang = nextLang;
      localStorage.setItem('lang', currentLang);
      render();
    });
  });
};

render();
