import './styles.css';

const dishes = [
  [
    'Jollof Rice & Chicken',
    'A classic Nigerian plate, prepared for a satisfying everyday meal.',
  ],
  ['Pepper Soup', 'A warming, boldly seasoned favourite.'],
  ['Grilled Chicken', 'Tender grilled chicken with a smoky finish.'],
  ['Fried Rice', 'Colourful fried rice served with your choice of protein.'],
  ['Shawarma', 'A quick favourite for lunch, dinner or late-night cravings.'],
  [
    'Chef’s Special',
    'A flexible feature slot for Palm Avenue’s current special.',
  ],
];

const app = document.querySelector<HTMLDivElement>('#app');
if (!app) throw new Error('App root not found');

app.innerHTML = `
<header class="nav">
  <a class="brand" href="#home"><span class="seal">PA</span><span>PALM AVENUE<small>RESTAURANT</small></span></a>
  <nav><a href="#menu">Menu</a><a href="#story">About</a><a href="#visit">Visit</a></nav>
  <a class="nav-call" href="tel:+2347069947930">0706 994 7930</a>
</header>

<section class="hero" id="home">
  <div class="hero-shade"></div>
  <div class="hero-content">
    <p class="kicker">WUSE · ABUJA · FAMILY RESTAURANT</p>
    <h1>Good food.<br><i>Good times.</i></h1>
    <p class="lead">A warm restaurant experience in the heart of Wuse, serving guests from lunch through the late night.</p>
    <div class="actions"><a class="btn gold" href="tel:+2347069947930">Call to order</a><a class="btn clear" href="#menu">See the menu</a></div>
    <p class="hours"><b>OPEN DAILY</b> · Mon–Sat 11 AM–3 AM · Sun 12 PM–3 AM</p>
  </div>
  <div class="demo">DEMO CONCEPT<br><span>Website preview</span></div>
</section>

<section class="story" id="story">
  <div><p class="kicker">WELCOME TO PALM AVENUE</p><h2>Your table,<br><i>your moment.</i></h2></div>
  <div class="story-copy"><p>Palm Avenue Restaurant is listed on Sani Abacha Way in Wuse, Abuja, with delivery available and late-night opening hours.</p><p>This demo gives guests a simple place to discover the restaurant, view featured dishes, call directly and get directions.</p></div>
</section>

<section class="menu" id="menu">
  <div class="section-top"><div><p class="kicker">FEATURED DISHES</p><h2>Made for<br><i>every craving.</i></h2></div><span>DEMO MENU · PRICES TO BE CONFIRMED</span></div>
  <div class="grid">${dishes.map((d, i) => `<article><b>0${i + 1}</b><div><h3>${d[0]}</h3><p>${d[1]}</p></div><strong>—</strong></article>`).join('')}</div>
</section>

<section class="late">
  <div><p class="kicker">OPEN LATE</p><h2>From lunch<br><i>to late night.</i></h2></div>
  <div><span class="big">3AM</span><p>Listed closing time<br>Monday–Saturday</p><a href="tel:+2347069947930">Call 0706 994 7930 →</a></div>
</section>

<section class="visit" id="visit">
  <div><p class="kicker">FIND PALM AVENUE</p><h2>Come<br><i>say hello.</i></h2><p class="address">Sani Abacha Way, Wuse, Abuja 904101, Federal Capital Territory, Nigeria.</p><div class="actions"><a class="btn gold" target="_blank" rel="noreferrer" href="https://www.google.com/maps/search/?api=1&query=Palm%20Avenue%20Restaurant%2C%20Sani%20Abacha%20Way%2C%20Wuse%2C%20Abuja">Get directions</a><a class="btn outline" href="tel:+2347069947930">Call restaurant</a></div></div>
  <div class="location-card"><div class="pin">P</div><b>PALM AVENUE</b><span>WUSE · ABUJA</span></div>
</section>

<footer><b>PALM AVENUE RESTAURANT</b><span>Sani Abacha Way, Wuse, Abuja</span><span>© 2026 Demo Concept</span></footer>
`;
