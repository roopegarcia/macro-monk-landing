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
    featureGuideTitle: 'Feature guide without the overwhelm',
    snapNutrition: 'Nutrition logging',
    snapMetrics: 'Body metrics + LBM',
    snapTrends: 'Weekly + rolling trends',
    snapPhase: 'Phase coaching',
    snapGoals: 'Goal tracking',
    formulaCaloriesLabel: 'Calories auto-calc',
    formulaLbmLabel: 'Lean body mass',
    formulaTrendLabel: 'Weekly trend',
    panelNutritionTitle: 'Nutrition tracking',
    panelNutritionLine1: 'Log protein, carbs, and fat per meal item.',
    panelNutritionLine2: 'Optionally override calories per item.',
    panelNutritionLine3: 'Daily totals show eaten and remaining vs target.',
    panelMetricsTitle: 'Body metrics and LBM',
    panelMetricsLine1: 'Log daily weight (kg), body fat % (optional), and waist (cm, optional).',
    panelMetricsLine2: 'LBM is shown when body fat % exists for that day.',
    panelMetricsLine3: 'Missing body fat % means no LBM value for that day.',
    panelTrendsTitle: 'Weekly and rolling trends',
    panelTrendsLine1: 'Weekly view averages each metric across Mon-Sun.',
    panelTrendsLine2: 'Rolling view averages selected day plus previous 6 days.',
    panelTrendsLine3: 'Averages reduce noise from water, sodium, meal timing, and stress.',
    panelPhaseTitle: 'Phase tracking (Cut / Bulk / Maintenance)',
    panelPhaseLine1: 'Phase is optional and can be left unset.',
    panelPhaseLine2: 'Weekly trend uses current 7-day average minus previous 7-day average.',
    panelPhaseLine3: 'Trend unit is shown as kg/week.',
    panelGoalsTitle: 'Goals and timelines',
    panelGoalsLine1: 'Set goal weight and optional goal body fat %.',
    panelGoalsLine2: 'Dashboard shows distance to goal and estimated weeks to goal.',
    panelGoalsLine3: 'Estimated target date is shown when enough data exists.',
    panelPracticeTitle: 'Practical logging notes',
    panelPracticeLine1: 'Use morning weigh-ins under similar conditions.',
    panelPracticeLine2: 'Log consistently for better trend quality.',
    panelPracticeLine3: 'Treat phase ranges as guidance, not medical advice.',
    phaseRangesTitle: 'Phase target ranges (kg/week)',
    phaseCutTitle: 'Cut',
    phaseCutRange: '-0.50 to -0.25',
    phaseCutNote: 'Below range: too fast. Above range: too slow.',
    phaseBulkTitle: 'Bulk',
    phaseBulkRange: '+0.10 to +0.25',
    phaseBulkNote: 'Above +0.30 triggers heavier warning.',
    phaseMaintainTitle: 'Maintenance',
    phaseMaintainRange: '-0.20 to +0.20',
    phaseMaintainNote: 'Inside range: maintaining perfectly.',
    featureGuideCta: 'Feature guide',
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
    featureGuideTitle: 'Ominaisuudet',
    snapNutrition: 'Makrojen kirjaus',
    snapMetrics: 'Kehomittarit + rasvaton massa',
    snapTrends: 'Viikko- ja liukuvat trendit',
    snapPhase: 'Vaiheohjaus',
    snapGoals: 'Tavoitteet',
    formulaCaloriesLabel: 'Kalorit lasketaan automaattisesti',
    formulaLbmLabel: 'Rasvaton massa',
    formulaTrendLabel: 'Viikkotrendi',
    panelNutritionTitle: 'Makrojen seuranta',
    panelNutritionLine1: 'Kirjaa proteiini, hiilarit ja rasva per ateria.',
    panelNutritionLine2: 'Voit halutessasi yliajaa kalorit.',
    panelNutritionLine3: 'Päivän yhteenvedossa näkyy syöty ja jäljellä vs tavoite.',
    panelMetricsTitle: 'Kehomittarit ja rasvaton massa',
    panelMetricsLine1: 'Kirjaa päivittäin paino (kg), rasvaprosentti (valinnainen) ja vyötärö (valinnainen).',
    panelMetricsLine2: 'Rasvaton massa näkyy, kun rasvaprosentti on kirjattu samalle päivälle.',
    panelMetricsLine3: 'Jos rasvaprosentti puuttuu, rasvatonta massaa ei lasketa kyseiselle päivälle.',
    panelTrendsTitle: 'Viikko- ja liukuvat trendit',
    panelTrendsLine1: 'Viikkonäkymä keskiarvoistaa arvot ma-su ajalta.',
    panelTrendsLine2: 'Liukuva näkymä käyttää valittua päivää + 6 edellistä päivää.',
    panelTrendsLine3: 'Keskiarvot vähentävät veden, suolan, ateriarytmin ja stressin kohinaa.',
    panelPhaseTitle: 'Vaiheseuranta (rasvanpoltto / lihaskasvu / ylläpito)',
    panelPhaseLine1: 'Vaihe on valinnainen ja sen voi jättää asettamatta.',
    panelPhaseLine2: 'Viikkotrendi on nykyinen 7 päivän keskiarvo miinus edellinen 7 päivän keskiarvo.',
    panelPhaseLine3: 'Trendin yksikkö on kg/viikko.',
    panelGoalsTitle: 'Tavoitteet ja aikataulu',
    panelGoalsLine1: 'Aseta tavoitepaino ja halutessa tavoiterasvaprosentti.',
    panelGoalsLine2: 'Näkymä näyttää matkan tavoitteeseen ja arvion viikkojen määrästä.',
    panelGoalsLine3: 'Arvioitu tavoitepäivä näkyy, kun dataa on riittävästi.',
    panelPracticeTitle: 'Käytännön kirjausvinkit',
    panelPracticeLine1: 'Punnitse aamulla samankaltaisissa olosuhteissa.',
    panelPracticeLine2: 'Kirjaa usein, jotta trenditarkkuus paranee.',
    panelPracticeLine3: 'Käytä vaiherajoja ohjenuorana, ei lääketieteellisenä neuvona.',
    phaseRangesTitle: 'Vaiheiden tavoitealueet (kg/viikko)',
    phaseCutTitle: 'Rasvanpoltto',
    phaseCutRange: '-0.50 ... -0.25',
    phaseCutNote: 'Alapuolella: liian nopeasti. Yläpuolella: liian hitaasti.',
    phaseBulkTitle: 'Lihaskasvu',
    phaseBulkRange: '+0.10 ... +0.25',
    phaseBulkNote: 'Yli +0.30 antaa vahvemman varoituksen.',
    phaseMaintainTitle: 'Ylläpito',
    phaseMaintainRange: '-0.20 ... +0.20',
    phaseMaintainNote: 'Alueella pysyminen tarkoittaa onnistunutta ylläpitoa.',
    featureGuideCta: 'Ominaisuudet',
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

      <section id="feature-guide" class="feature-guide container reveal-delay">
        <h2>${t.featureGuideTitle}</h2>

        <div class="snapshot-grid">
          <article class="snapshot-card">${t.snapNutrition}</article>
          <article class="snapshot-card">${t.snapMetrics}</article>
          <article class="snapshot-card">${t.snapTrends}</article>
          <article class="snapshot-card">${t.snapPhase}</article>
          <article class="snapshot-card">${t.snapGoals}</article>
        </div>

        <div class="formula-grid">
          <article class="formula-card">
            <p class="formula-label">${t.formulaCaloriesLabel}</p>
            <code>calories = protein*4 + carbs*4 + fat*9</code>
          </article>
          <article class="formula-card">
            <p class="formula-label">${t.formulaLbmLabel}</p>
            <code>lbm = weight_kg * (1 - body_fat_percent/100)</code>
          </article>
          <article class="formula-card">
            <p class="formula-label">${t.formulaTrendLabel}</p>
            <code>weekly_trend = current_7d_avg - previous_7d_avg</code>
          </article>
        </div>

        <div class="guide-accordion">
          <details open>
            <summary>${t.panelNutritionTitle}</summary>
            <ul>
              <li>${t.panelNutritionLine1}</li>
              <li>${t.panelNutritionLine2}</li>
              <li>${t.panelNutritionLine3}</li>
            </ul>
          </details>
          <details>
            <summary>${t.panelMetricsTitle}</summary>
            <ul>
              <li>${t.panelMetricsLine1}</li>
              <li>${t.panelMetricsLine2}</li>
              <li>${t.panelMetricsLine3}</li>
            </ul>
          </details>
          <details>
            <summary>${t.panelTrendsTitle}</summary>
            <ul>
              <li>${t.panelTrendsLine1}</li>
              <li>${t.panelTrendsLine2}</li>
              <li>${t.panelTrendsLine3}</li>
            </ul>
          </details>
          <details>
            <summary>${t.panelPhaseTitle}</summary>
            <ul>
              <li>${t.panelPhaseLine1}</li>
              <li>${t.panelPhaseLine2}</li>
              <li>${t.panelPhaseLine3}</li>
            </ul>
          </details>
          <details>
            <summary>${t.panelGoalsTitle}</summary>
            <ul>
              <li>${t.panelGoalsLine1}</li>
              <li>${t.panelGoalsLine2}</li>
              <li>${t.panelGoalsLine3}</li>
            </ul>
          </details>
          <details>
            <summary>${t.panelPracticeTitle}</summary>
            <ul>
              <li>${t.panelPracticeLine1}</li>
              <li>${t.panelPracticeLine2}</li>
              <li>${t.panelPracticeLine3}</li>
            </ul>
          </details>
        </div>

        <article class="phase-ranges">
          <h3>${t.phaseRangesTitle}</h3>
          <div class="phase-ranges-grid">
            <div class="phase-range-card">
              <p class="phase-name">${t.phaseCutTitle}</p>
              <p class="phase-value">${t.phaseCutRange}</p>
              <p class="phase-note">${t.phaseCutNote}</p>
            </div>
            <div class="phase-range-card">
              <p class="phase-name">${t.phaseBulkTitle}</p>
              <p class="phase-value">${t.phaseBulkRange}</p>
              <p class="phase-note">${t.phaseBulkNote}</p>
            </div>
            <div class="phase-range-card">
              <p class="phase-name">${t.phaseMaintainTitle}</p>
              <p class="phase-value">${t.phaseMaintainRange}</p>
              <p class="phase-note">${t.phaseMaintainNote}</p>
            </div>
          </div>
        </article>
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
