// Skin Problems Data - English
const skinProblemsData = {
    acne: { title: 'Acne', content: '<h3>Definition</h3><p>Acne is a common skin condition where oil glands produce excess sebum and pores become clogged.</p>' },
    pimples: { title: 'Pimples', content: '<h3>Definition</h3><p>Pimples are inflamed red bumps on skin usually filled with pus.</p>' },
    blackheads: { title: 'Blackheads', content: '<h3>Definition</h3><p>Blackheads are accumulation of oil and dead cells in open pores.</p>' },
    whiteheads: { title: 'Whiteheads', content: '<h3>Definition</h3><p>Whiteheads are closed pores with accumulated oil and dead cells.</p>' },
    eczema: { title: 'Eczema', content: '<h3>Definition</h3><p>Eczema is a chronic skin disease that causes itching and inflammation.</p>' },
    psoriasis: { title: 'Psoriasis', content: '<h3>Definition</h3><p>Psoriasis is an autoimmune disease with excessive skin cell growth.</p>' },
    darkspots: { title: 'Dark Spots', content: '<h3>Definition</h3><p>Dark spots form when melanin accumulates in certain skin parts.</p>' },
    wrinkles: { title: 'Wrinkles', content: '<h3>Definition</h3><p>Wrinkles are fine or deep lines in skin that increase with age.</p>' },
    dryskin: { title: 'Dry Skin', content: '<h3>Definition</h3><p>Dry skin lacks sufficient moisture causing itching and roughness.</p>' },
    oilyskin: { title: 'Oily Skin', content: '<h3>Definition</h3><p>Oily skin has excess sebum production making it shiny and sticky.</p>' },
    sensitiveskin: { title: 'Sensitive Skin', content: '<h3>Definition</h3><p>Sensitive skin is easily affected by chemicals and environmental factors.</p>' },
    fungal: { title: 'Fungal Infection', content: '<h3>Definition</h3><p>Fungal infection is caused by fungi that thrive in warm moist areas.</p>' }
};
function openModal(key){const m=document.getElementById('problemModal');document.getElementById('modalTitle').textContent=skinProblemsData[key].title;document.getElementById('modalBody').innerHTML=skinProblemsData[key].content;m.classList.add('show');document.body.style.overflow='hidden';}
function closeModal(){document.getElementById('problemModal').classList.remove('show');document.body.style.overflow='auto';}
window.onclick=function(e){const m=document.getElementById('problemModal');if(e.target==m)closeModal();};
function toggleFaq(el){const item=el.closest('.faq-item');const open=item.classList.contains('open');document.querySelectorAll('.faq-item.open').forEach(i=>i.classList.remove('open'));if(!open)item.classList.add('open');}
function scrollToSection(id){const el=document.getElementById(id);if(el)el.scrollIntoView({behavior:'smooth',block:'start'});}
function changeLanguage(lang){localStorage.setItem('preferredLanguage',lang);document.querySelectorAll('.lang-btn').forEach(btn=>btn.classList.remove('active'));event.target.classList.add('active');alert('Language feature: Coming soon!');}
function toggleDarkMode(){document.body.classList.toggle('dark-mode');const isDarkMode=document.body.classList.contains('dark-mode');localStorage.setItem('darkMode',isDarkMode?'enabled':'disabled');const btn=document.querySelector('.theme-toggle');if(btn){btn.innerHTML=isDarkMode?'☀️ Light':'🌙 Dark';}}
document.addEventListener('DOMContentLoaded',function(){const darkMode=localStorage.getItem('darkMode');if(darkMode==='enabled'){document.body.classList.add('dark-mode');}const themeBtn=document.querySelector('.theme-toggle');if(themeBtn){themeBtn.innerHTML=document.body.classList.contains('dark-mode')?'☀️ Light':'🌙 Dark';}const hamburger=document.querySelector('.hamburger');const menu=document.querySelector('.nav-menu');if(hamburger){hamburger.addEventListener('click',function(){menu.classList.toggle('active');});document.querySelectorAll('.nav-link').forEach(link=>{link.addEventListener('click',function(){menu.classList.remove('active');});});}setActiveNavLink();});
function setActiveNavLink(){const currentPage=window.location.pathname.split('/').pop()||'index.html';document.querySelectorAll('.nav-link').forEach(link=>{link.classList.remove('active');const href=link.getAttribute('href');if(href===currentPage||(href==='#home'&&(currentPage==='index.html'||currentPage===''))){link.classList.add('active');}});}
const opts={threshold:0.1,rootMargin:'0px 0px -100px 0px'};const obs=new IntersectionObserver(function(entries){entries.forEach(entry=>{if(entry.isIntersecting){entry.target.style.opacity='1';entry.target.style.transform='translateY(0)';}});},opts);document.querySelectorAll('.problem-card, .solution-card, .prevention-item, .tip-item').forEach(el=>{el.style.opacity='0';el.style.transform='translateY(20px)';el.style.transition='opacity 0.6s ease, transform 0.6s ease';obs.observe(el);});
