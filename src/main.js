import './style.css';

const appUrl = 'https://app.macromonk.fi/';

const copy = {
  en: {
    openApp: 'Open app',
    eyebrow: 'For lifters, athletes, and precision nerds',
    h1: 'Track macros and training without getting sold every 30 seconds.',
    lede:
      'Most trackers pretend to be free, then choke your setup with tiny limits, ads, and endless "buy Pro" popups. Macro Monk stays clean: practical logging, serious tracking, zero manipulative funnel.',
    startTracking: 'Start tracking',
    seeDifference: 'See the difference',
    differenceTitle: 'What makes Macro Monk different',
    card1Title: 'No fake scarcity',
    card1Body:
      'You are not boxed into "3 custom meals" just to force an upgrade. Log real life, not a demo version of your life.',
    card2Title: 'No ad bombardment',
    card2Body:
      'No feed spam, no interstitial junk, no "watch this ad to continue" pattern. Your focus stays on training.',
    card3Title: 'Built for people who already know',
    card3Body:
      'Macro Monk assumes you understand macros, progression, and consistency. It gives control instead of handholding fluff.',
    bodyCompTitle: 'Body composition tracking that makes sense',
    bodyCompBody:
      'Daily scale weight jumps are noisy. Macro Monk tracks a running 7-day average, calculates weekly changes, and estimates lean body mass when you log body-fat %.',
    bodyCompPoint1: 'Running 7-day averages to smooth daily noise',
    bodyCompPoint2: 'Weekly change calculations for real trend insight',
    bodyCompPoint3: 'Lean body mass tracking when body-fat % is logged',
    quote:
      '"Macro Monk is the tracker I wanted: direct, fast, and respectful of people who are serious about results."',
    tryMacroMonk: 'Try Macro Monk'
  },
  fi: {
    openApp: 'Avaa sovellus',
    eyebrow: 'Nostajille, urheilijoille ja tarkkuusnörteille',
    h1: 'Seuraa makroja ja treeniä ilman jatkuvaa myyntipainetta.',
    lede:
      'Useimmat trackerit väittävät olevansa ilmaisia, mutta rajoittavat käyttöä pienillä limiteillä, mainoksilla ja loputtomilla "osta Pro" -kehotuksilla. Macro Monk pysyy puhtaana: käytännöllinen kirjaus, vakava seuranta, ei manipuloivaa myyntifunnelia.',
    startTracking: 'Aloita seuranta',
    seeDifference: 'Katso ero',
    differenceTitle: 'Miksi Macro Monk on erilainen',
    card1Title: 'Ei tekaistua niukkuutta',
    card1Body:
      'Et jää jumiin "3 omaa ateriaa" -rajoihin vain siksi, että sinut pakotetaan ostamaan lisäversio. Kirjaa oikeaa arkea, ei demoversiota elämästäsi.',
    card2Title: 'Ei mainostulitusta',
    card2Body:
      'Ei feed-spämmiä, ei häiritseviä välimainoksia, ei "katso mainos jatkaaksesi" -mallia. Fokus pysyy treenissä.',
    card3Title: 'Tehty niille, jotka jo tietävät',
    card3Body:
      'Macro Monk olettaa, että ymmärrät makrot, progression ja johdonmukaisuuden. Saat hallintaa ilman turhaa höttöä.',
    bodyCompTitle: 'Järkevä kehonkoostumuksen seuranta',
    bodyCompBody:
      'Päivittäinen paino heittelee paljon. Macro Monk seuraa liukuvaa 7 päivän keskiarvoa, laskee viikkokohtaiset muutokset ja arvioi rasvattoman massan, kun kirjaat rasvaprosentin.',
    bodyCompPoint1: 'Liukuva 7 päivän keskiarvo vähentää päivittäistä kohinaa',
    bodyCompPoint2: 'Viikkokohtaiset muutokset näyttävät oikean trendin',
    bodyCompPoint3: 'Rasvattoman massan seuranta, kun rasvaprosentti on kirjattu',
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
            <a class="button ghost" href="#difference">${t.seeDifference}</a>
          </div>
        </div>

        <div class="hero-visual reveal-delay">
          <div class="logo-frame">
            <img src="/macro-monk-favicon.png" alt="Macro Monk emblem" />
          </div>
        </div>
      </section>

      <section id="difference" class="difference container reveal">
        <h2>${t.differenceTitle}</h2>
        <div class="grid">
          <article class="card">
            <h3>${t.card1Title}</h3>
            <p>${t.card1Body}</p>
          </article>
          <article class="card">
            <h3>${t.card2Title}</h3>
            <p>${t.card2Body}</p>
          </article>
          <article class="card">
            <h3>${t.card3Title}</h3>
            <p>${t.card3Body}</p>
          </article>
        </div>
      </section>

      <section class="body-comp container reveal-delay">
        <h2>${t.bodyCompTitle}</h2>
        <p class="body-comp-lede">${t.bodyCompBody}</p>
        <ul class="body-comp-list">
          <li>${t.bodyCompPoint1}</li>
          <li>${t.bodyCompPoint2}</li>
          <li>${t.bodyCompPoint3}</li>
        </ul>
      </section>

      <section class="promise container reveal-delay">
        <p class="quote">${t.quote}</p>
        <a class="button primary" href="${appUrl}" target="_blank" rel="noreferrer">${t.tryMacroMonk}</a>
      </section>

      <footer class="footer container">
        <p class="footer-copy">© 2026 Roope Garcia. All rights reserved.</p>
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
