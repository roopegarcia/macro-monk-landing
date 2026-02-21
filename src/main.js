import { inject } from '@vercel/analytics';
import './style.css';
import noSpamDonut from './assets/images/no-spam-donut-sticker.png';

inject();

const appUrl = 'https://app.macromonk.fi/';
const googleGIcon = `
  <svg class="google-g-icon" viewBox="0 0 533.5 544.3" aria-hidden="true" focusable="false">
    <path fill="#4285f4" d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272v104.8h147.1c-6.1 33.9-25.4 63.8-53.8 82.8v68h86.9c51-47 80.3-116.3 80.3-200.3z" />
    <path fill="#34a853" d="M272 544.3c73.5 0 135.5-24.1 180.7-65.6l-86.9-68c-24.2 16.5-55.4 25.9-93.8 25.9-71.1 0-131.3-48-152.9-112.5H29.5v70.1C75.8 485.9 168.3 544.3 272 544.3z" />
    <path fill="#fbbc04" d="M119.1 324.1c-10.8-31.9-10.8-66.3 0-98.2v-70.1H29.5c-38.7 77-38.7 161.4 0 238.4l89.6-70.1z" />
    <path fill="#ea4335" d="M272 107.7c40.8-.6 80.2 14.8 110.5 43.6l82.3-82.3C405.1 24.2 340.8-.4 272 0 168.3 0 75.8 58.4 29.5 150.1l89.6 70.1C140.7 155.7 200.9 107.7 272 107.7z" />
  </svg>
`;

const copy = {
  en: {
    openApp: 'Open app',
    eyebrow: 'For lifters and athletes',
    h1: 'Track macros and training without getting sold every 30 seconds.',
    lede:
      'Most trackers pretend to be free, then choke your setup with tiny limits, ads, and endless "buy Pro" popups. Macro Monk stays clean: practical logging, serious tracking, zero manipulative funnel.',
    googleCta: 'Continue with Google',
    authLine: 'No password-lost hassle.',
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
    pricingIntro: 'Stripe payment. No hidden layers. Gift cards available with the same amounts.',
    monthlyPlan: '30 days',
    monthlyPrice: '10 €',
    yearlyPlan: '365 days',
    yearlyPrice: '99 €',
    freeTrial: 'Free trial for 7 days.',
    bodyCompTitle: 'Body composition and phase tracking that make sense',
    bodyCompBody:
      'Daily scale weight jumps are noisy. Macro Monk tracks running 7-day averages, calculates weekly changes, lets you run your diet phase (Cut, Bulk, or Maintain), and gives feedback on how your progress is going.',
    bodyCompPoint1: 'Running 7-day averages to smooth daily noise',
    bodyCompPoint2: 'Weekly change calculations for real trend insight',
    bodyCompPoint3: 'Phase selection with progress feedback: Cut, Bulk, or Maintain',
    bodyCompPoint4: 'Lean body mass tracking when body-fat % is logged',
    featureGuideTitle: 'Features built for real progress',
    featureCard1Title: 'Daily dashboard with actionable coaching',
    featureCard1Body: 'Should you train today? Get a clear recommendation and "Coach" guidance.',
    featureCard2Title: 'Smart recovery system',
    featureCard2Body:
      'Sleep, readiness, stress, soreness, and cardio/training load are combined into one daily decision.',
    featureCard3Title: 'Phase intelligence',
    featureCard3Body:
      'Cut, bulk, and maintenance check-ins with progress insights, phase-start tracking, and a macro calculator.',
    featureCard4Title: 'Fast meal logging built for lifters',
    featureCard4Body: 'Reusable favorite meals, quick add/edit, and your own personal food database.',
    featureCard5Title: 'Real trend signal',
    featureCard5Body: 'Weekly and rolling 7-day averages reduce daily noise and guide better adjustments.',
    featureCard6Title: 'Practical for mobile daily use',
    featureCard6Body: 'Installable web app (PWA), iOS-friendly UX, and clean one-hand navigation.',
    featureCard7Title: 'Privacy-first and user-controlled',
    featureCard7Body: 'Simple account flow, exportable data, and a transparent policy.',
    featureGuideCta: 'Feature guide',
    quote:
      '"Macro Monk is the tracker I wanted: direct, fast, and respectful of people who are serious about results."',
    catchPhrase:
      'If you truly want to take the next step forward after you are out of tools, tracking your eating will take you to the next level.',
    tryMacroMonk: 'Try Macro Monk'
  },
  fi: {
    openApp: 'Avaa sovellus',
    eyebrow: 'Treenaajille ja urheilijoille',
    h1: 'Seuraa makroja ja treeniä ilman mainoksia.',
    lede:
      'Useimmat trackerit väittävät olevansa ilmaisia, mutta rajoittavat käyttöä pienillä limiteillä, mainoksilla ja loputtomilla "osta Pro" -kehotuksilla. Macro Monk pysyy puhtaana: käytännöllinen kirjaus, helppo seuranta. Elä normaalisti, treenaa, stressaa, koita nukkua ja toista. ',
    googleCta: 'Jatka Googlella',
    authLine: 'Ei salasanasäätöä.',
    stickerAlt: 'Ei spämmimyyntiä -tarra',
    startTracking: 'Aloita seuranta',
    seeDifference: 'Katso ero',
    differenceTitle: 'Katso ero',
    differenceStep1: 'Aseta makro- ja kaloritavoitteesi, ja valitse vaihe: rasvanpoltto, lihaskasvu tai ylläpito.',
    differenceStep2: 'Syö hyvin ja elä normaalisti.',
    differenceStep3: 'Makrot ja kalorit päivittyvät, joten tiedät tarkasti paljonko päivälle on jäljellä.',
    differenceBody1:
      'Rakenna oma ruokadatasi, jotta et ole epämääräisten ja usein väärien ravintoarvojen varassa. Ei valmiiden tietokantojen pakkoa. Vain omat arvosi. Ei rajoituksia tuotteiden määrien luonnissa, ei myöskään PRO versiota.',
    differenceBody2:
      'Kopioi edellisen päivän ateriat (koska molemmat tiedämme, että syöt useimmiten samoja ruokia joka päivä). Johdonmukaisuus on kaikki kaikessa, ja tämä on pitkä peli, for life.',
    pricingTitle: 'Yksinkertainen hinnoittelu',
    pricingIntro: 'Maksut Stripellä. Ei piilokuluja Lahjakortit saatavilla samoilla hinnoilla.',
    monthlyPlan: '30 päivää',
    monthlyPrice: '10 €',
    yearlyPlan: '365 päivää',
    yearlyPrice: '99 €',
    freeTrial: '7 päivän ilmainen kokeilu.',
    bodyCompTitle: 'Järkevä kehonkoostumuksen ja vaiheen seuranta',
    bodyCompBody:
      'Päivittäinen paino heittelee paljon. Macro Monk seuraa liukuvaa 7 päivän keskiarvoa, laskee viikkokohtaiset muutokset, tukee vaiheita (rasvanpoltto, lihaskasvu, ylläpito) ja antaa palautetta siitä, miten eteneminen sujuu.',
    bodyCompPoint1: 'Liukuva 7 päivän keskiarvo vähentää päivittäistä kohinaa',
    bodyCompPoint2: 'Viikkokohtaiset muutokset näyttävät oikean trendin',
    bodyCompPoint3: 'Vaihevalinta ja etenemisen palaute: rasvanpoltto, lihaskasvu tai ylläpito',
    bodyCompPoint4: 'Rasvattoman massan seuranta, kun rasvaprosentti on kirjattu',
    featureGuideTitle: 'Ominaisuudet oikeaan etenemiseen',
    featureCard1Title: 'Päivittäinen dashboard + valmennus',
    featureCard1Body: 'Pitäisikö treenata tänään? Saat suosituksen ja "Coach" -ohjauksen.',
    featureCard2Title: 'Fiksu palautumisjärjestelmä',
    featureCard2Body:
      'Uni, valmius, stressi, lihaskipu ja cardio/treenikuorma yhdistetään yhdeksi päivän päätökseksi.',
    featureCard3Title: 'Vaiheäly',
    featureCard3Body:
      'Cut, bulk ja ylläpito -check-init, etenemisen insightit, vaiheen aloituksen seuranta ja makrolaskuri.',
    featureCard4Title: 'Nopea ateriakirjaus treenaajille',
    featureCard4Body: 'Uudelleenkäytettävät suosikkiateriat, nopeat lisäys/muokkaus-toiminnot ja oma ruokadata.',
    featureCard5Title: 'Oikea trendsignaali',
    featureCard5Body: 'Viikko- ja liukuvat 7 päivän keskiarvot vähentävät kohinaa ja tukevat säätöjä.',
    featureCard6Title: 'Käytännöllinen mobiilissa',
    featureCard6Body: 'Asennettava web-app (PWA), iOS-ystävällinen UX ja selkeä yhden käden navigointi.',
    featureCard7Title: 'Yksityisyys ensin',
    featureCard7Body: 'Selkeä tili- ja kirjautuminen, vietävä data ja läpinäkyvä tietosuojalinja.',
    featureGuideCta: 'Ominaisuudet',
    quote:
      '"Macro Monk on tracker, jonka itse halusin: suora, nopea ja kunnioittava ihmisille, jotka suhtautuvat tuloksiin vakavasti."',
    catchPhrase:
      'Jos haluat oikeasti ottaa seuraavan askeleen eteenpäin silloin kun muut työkalut eivät enää riitä, syömisen seuranta vie sinut seuraavalle tasolle.',
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
          <p class="hero-catchphrase">${t.catchPhrase}</p>
          <p class="lede">${t.lede}</p>
          <div class="hero-actions">
            <a class="button primary" href="${appUrl}" target="_blank" rel="noreferrer">${t.startTracking}</a>
            <a class="button ghost" href="#see-the-difference">${t.seeDifference}</a>
            <a class="button ghost" href="#feature-guide">${t.featureGuideCta}</a>
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
        <div class="difference-auth">
          <a class="google-auth-button" href="${appUrl}" target="_blank" rel="noreferrer" aria-label="${t.googleCta}">
            ${googleGIcon}
            <span>${t.googleCta}</span>
          </a>
          <p class="auth-line">${t.authLine}</p>
        </div>
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

      <section id="feature-guide" class="feature-guide container reveal-delay">
        <h2>${t.featureGuideTitle}</h2>

        <div class="feature-cards">
          <article class="feature-card">
            <h3>${t.featureCard1Title}</h3>
            <p>${t.featureCard1Body}</p>
          </article>
          <article class="feature-card">
            <h3>${t.featureCard2Title}</h3>
            <p>${t.featureCard2Body}</p>
          </article>
          <article class="feature-card">
            <h3>${t.featureCard3Title}</h3>
            <p>${t.featureCard3Body}</p>
          </article>
          <article class="feature-card">
            <h3>${t.featureCard4Title}</h3>
            <p>${t.featureCard4Body}</p>
          </article>
          <article class="feature-card">
            <h3>${t.featureCard5Title}</h3>
            <p>${t.featureCard5Body}</p>
          </article>
          <article class="feature-card">
            <h3>${t.featureCard6Title}</h3>
            <p>${t.featureCard6Body}</p>
          </article>
          <article class="feature-card">
            <h3>${t.featureCard7Title}</h3>
            <p>${t.featureCard7Body}</p>
          </article>
        </div>
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
