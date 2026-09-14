/* Blog Engine — Net Flow
   Hash routing: #slug → detail view, no hash → list view
   renderBlogPreview is global for homepage carousel
*/

/* ---- Homepage carousel renderer (must be global) ---- */
window.renderBlogCarousel = function(target){
  if(!target) return;
  var lang = (typeof PMI18n!=='undefined' ? PMI18n.get() : document.documentElement.lang) || 'en';
  var posts = (window.BLOG_POSTS || {})[lang] || (window.BLOG_POSTS || {}).en || [];
  if(!posts.length) return;
  var blogPage = {en:'blog-en.html',tr:'blog.html',ar:'blog-ar.html',ru:'blog-ru.html',fr:'blog-fr.html'}[lang]||'blog-en.html';

  var h = '<div class="blog-ticker-track">';
  // Duplicate posts for seamless infinite scroll
  var items = posts.concat(posts).concat(posts);
  items.forEach(function(p){
    h += '<a href="'+blogPage+'#'+p.slug+'" class="blog-ticker-card">';
    h += '<div class="blog-ticker-img">';
    if(p.image){
      h += '<img src="'+esc(p.image)+'" alt="'+esc(p.title)+'" loading="lazy">';
    } else {
      h += '<div class="blog-ticker-placeholder"></div>';
    }
    h += '<div class="blog-ticker-overlay"></div>';
    h += '</div>';
    h += '<div class="blog-ticker-content">';
    h += '<span class="blog-ticker-tag">'+esc(p.category)+'</span>';
    h += '<h3>'+esc(p.title)+'</h3>';
    h += '<p>'+esc(p.excerpt.length>100 ? p.excerpt.substring(0,100)+'…' : p.excerpt)+'</p>';
    h += '</div>';
    h += '</a>';
  });
  h += '</div>';
  target.innerHTML = h;

  // Set animation duration based on item count
  var track = target.querySelector('.blog-ticker-track');
  if(track){
    var cardCount = posts.length;
    track.style.animationDuration = (cardCount * 8) + 's';
  }

  // Mouse drag support (desktop)
  var isDragging = false, startX = 0, scrollLeft = 0;
  target.addEventListener('mousedown', function(e){
    isDragging = true;
    startX = e.pageX - target.offsetLeft;
    scrollLeft = target.scrollLeft;
    if(track) track.style.animationPlayState = 'paused';
    e.preventDefault();
  });
  target.addEventListener('mousemove', function(e){
    if(!isDragging) return;
    var x = e.pageX - target.offsetLeft;
    target.scrollLeft = scrollLeft - (x - startX);
  });
  target.addEventListener('mouseup', function(){ isDragging = false; });
  target.addEventListener('mouseleave', function(){ isDragging = false; });

  // Touch drag support
  var touchStartX = 0, touchScrollLeft = 0;
  target.addEventListener('touchstart', function(e){
    touchStartX = e.touches[0].pageX;
    touchScrollLeft = target.scrollLeft;
    if(track) track.style.animationPlayState = 'paused';
  }, {passive:true});
  target.addEventListener('touchmove', function(e){
    var x = e.touches[0].pageX;
    target.scrollLeft = touchScrollLeft - (x - touchStartX);
  }, {passive:true});

  // Arrow buttons
  var arrowL = document.getElementById('blogArrowL');
  var arrowR = document.getElementById('blogArrowR');
  var scrollAmt = 370;
  if(arrowL) arrowL.addEventListener('click', function(){
    if(track) track.style.animationPlayState = 'paused';
    target.scrollBy({left: -scrollAmt, behavior:'smooth'});
  });
  if(arrowR) arrowR.addEventListener('click', function(){
    if(track) track.style.animationPlayState = 'paused';
    target.scrollBy({left: scrollAmt, behavior:'smooth'});
  });
};

function esc(s){
  var d=document.createElement('div');d.textContent=s;return d.innerHTML;
}

/* ---- Blog page engine ---- */
(function(){
  'use strict';
  var lang = (typeof PMI18n!=='undefined' ? PMI18n.get() : document.documentElement.lang) || 'en';
  var posts = (window.BLOG_POSTS || {})[lang] || (window.BLOG_POSTS || {}).en || [];
  var container = document.getElementById('blog-container');
  if(!container) return;

  function renderList(){
    var UI = {
      eyebrow:{en:'Resources & Insights',tr:'Kaynaklar & İçgörüler',ar:'الموارد والرؤى',ru:'Ресурсы и аналитика',fr:'Ressources & perspectives'},
      heading:{en:'Latest articles from our laboratory & field',tr:'Laboratuvarımızdan ve sahadan son yazılar',ar:'أحدث المقالات من مختبرنا والميدان',ru:'Последние статьи из нашей лаборатории и с объектов',fr:'Derniers articles de notre laboratoire et du terrain'},
      readMore:{en:'Read more →',tr:'Devamını oku →',ar:'اقرأ المزيد →',ru:'Читать далее →',fr:'Lire la suite →'},
      backTo:{en:'← Back to articles',tr:'← Yazılara dön',ar:'← العودة إلى المقالات',ru:'← Назад к статьям',fr:'← Retour aux articles'}
    };
    var h = '<div class="sec-head sec-head--center reveal">';
    h += '<span class="eyebrow eyebrow--center">'+(UI.eyebrow[lang]||UI.eyebrow.en)+'</span>';
    h += '<h2>'+(UI.heading[lang]||UI.heading.en)+'</h2>';
    h += '</div>';
    h += '<div class="blog-grid" style="margin-top:42px">';
    posts.forEach(function(p){
      h += '<article class="blog-card reveal">';
      h += '<div class="blog-card-img">';
      if(p.image){
        h += '<img src="'+esc(p.image)+'" alt="'+esc(p.title)+'" loading="lazy">';
      } else {
        h += '<div style="width:100%;height:100%;background:linear-gradient(135deg,var(--navy-900),#1565C0);display:flex;align-items:center;justify-content:center">';
        h += '<svg viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.3)" stroke-width="1.5" width="48" height="48"><path d="M12 2l3 6 6 .9-4.5 4.3 1 6.3L12 17l-5.5 2.5 1-6.3L3 8.9 9 8z"/></svg>';
        h += '</div>';
      }
      h += '</div>';
      h += '<div class="blog-card-body">';
      h += '<span class="blog-tag">'+esc(p.category)+'</span>';
      h += '<h3><a href="#'+p.slug+'" style="color:inherit;text-decoration:none">'+esc(p.title)+'</a></h3>';
      h += '<p>'+esc(p.excerpt)+'</p>';
      h += '<a href="#'+p.slug+'" class="blog-card-link">'+(UI.readMore[lang]||UI.readMore.en)+'</a>';
      h += '</div>';
      h += '</article>';
    });
    h += '</div>';
    container.innerHTML = h;
    if(typeof PMI18n!=='undefined') PMI18n.apply();
    revealAll();
  }

  function renderDetail(slug){
    var post = null;
    for(var i=0;i<posts.length;i++){if(posts[i].slug===slug){post=posts[i];break;}}
    if(!post){renderList();return;}

    var backText = {en:'← Back to articles',tr:'← Yazılara dön',ar:'← العودة إلى المقالات',ru:'← Назад к статьям',fr:'← Retour aux articles'};
    var h = '<a href="#" class="blog-back" onclick="location.hash=\'\';return false;">'+(backText[lang]||backText.en)+'</a>';
    h += '<article class="blog-detail">';
    h += '<span class="blog-tag">'+esc(post.category)+'</span>';
    h += '<h1>'+esc(post.title)+'</h1>';
    h += '<div class="blog-meta">';
    h += '<span>'+formatDate(post.date)+'</span>';
    h += '<span>Safvan Uçucu · Net Flow</span>';
    h += '</div>';
    if(post.image){
      h += '<img src="'+esc(post.image)+'" alt="'+esc(post.title)+'" style="width:100%;border-radius:var(--r-lg);margin-bottom:32px" loading="lazy">';
    }
    h += '<div class="blog-detail-content">'+post.content+'</div>';
    h += '</article>';

    // Schema markup
    h += '<script type="application/ld+json">'+JSON.stringify({
      "@context":"https://schema.org",
      "@type":"Article",
      "headline":post.title,
      "datePublished":post.date,
      "author":{"@type":"Person","name":"Safvan Uçucu"},
      "publisher":{"@type":"Organization","name":"Net Flow","url":"https://netflw.com"},
      "description":post.excerpt
    })+'<\/script>';

    container.innerHTML = h;
    if(typeof PMI18n!=='undefined') PMI18n.apply();
    window.scrollTo(0,0);
  }

  function route(){
    var hash = location.hash.replace('#','');
    if(hash) renderDetail(hash);
    else renderList();
  }

  function formatDate(ds){
    var d=new Date(ds);
    var months={en:['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
                fr:['jan.','fév.','mars','avr.','mai','juin','juil.','août','sept.','oct.','nov.','déc.'],
                tr:['Oca','Şub','Mar','Nis','May','Haz','Tem','Ağu','Eyl','Eki','Kas','Ara'],
                ar:['يناير','فبراير','مارس','أبريل','مايو','يونيو','يوليو','أغسطس','سبتمبر','أكتوبر','نوفمبر','ديسمبر'],
                ru:['янв.','февр.','март','апр.','май','июнь','июль','авг.','сент.','окт.','нояб.','дек.']};
    var m = (months[lang]||months.en)[d.getMonth()];
    return d.getDate()+' '+m+' '+d.getFullYear();
  }

  function revealAll(){
    var els=container.querySelectorAll('.reveal');
    for(var i=0;i<els.length;i++) els[i].classList.add('in');
  }

  window.addEventListener('hashchange', route);
  route();
})();
