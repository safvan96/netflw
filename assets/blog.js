/* Blog Engine — Net Flow
   Hash routing: #slug → detail view, no hash → list view
*/
(function(){
  'use strict';
  var lang = (typeof PMI18n!=='undefined' ? PMI18n.get() : document.documentElement.lang) || 'en';
  var posts = (window.BLOG_POSTS || {})[lang] || (window.BLOG_POSTS || {}).en || [];
  var container = document.getElementById('blog-container');
  if(!container) return;

  function renderList(){
    var h = '<div class="sec-head sec-head--center reveal">';
    h += '<span class="eyebrow eyebrow--center" data-i18n="Resources & Insights">Resources & Insights</span>';
    h += '<h2 data-i18n="Latest articles from our laboratory & field">Latest articles from our laboratory & field</h2>';
    h += '</div>';
    h += '<div class="blog-grid" style="margin-top:42px">';
    posts.forEach(function(p){
      h += '<article class="blog-card reveal">';
      h += '<div class="blog-card-img">';
      if(p.image){
        h += '<img src="'+p.image+'" alt="'+esc(p.title)+'" loading="lazy">';
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
      h += '<a href="#'+p.slug+'" class="blog-card-link" data-i18n="Read more →">Read more →</a>';
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

    var h = '<a href="#" class="blog-back" onclick="location.hash=\'\';return false;" data-i18n="← Back to articles">← Back to articles</a>';
    h += '<article class="blog-detail">';
    h += '<span class="blog-tag">'+esc(post.category)+'</span>';
    h += '<h1>'+esc(post.title)+'</h1>';
    h += '<div class="blog-meta">';
    h += '<span>'+formatDate(post.date)+'</span>';
    h += '<span>Safvan Uçucu · Net Flow</span>';
    h += '</div>';
    if(post.image){
      h += '<img src="'+post.image+'" alt="'+esc(post.title)+'" style="width:100%;border-radius:var(--r-lg);margin-bottom:32px" loading="lazy">';
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

  function esc(s){
    var d=document.createElement('div');d.textContent=s;return d.innerHTML;
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

  // Homepage blog preview
  window.renderBlogPreview = function(target, count){
    if(!target) return;
    var items = posts.slice(0, count||3);
    var h = '';
    items.forEach(function(p){
      var blogPage = {en:'blog-en.html',tr:'blog.html',ar:'blog-ar.html',ru:'blog-ru.html',fr:'blog-fr.html'}[lang]||'blog-en.html';
      h += '<article class="blog-card reveal">';
      h += '<div class="blog-card-img">';
      if(p.image){
        h += '<img src="'+p.image+'" alt="'+esc(p.title)+'" loading="lazy">';
      } else {
        h += '<div style="width:100%;height:100%;background:linear-gradient(135deg,var(--navy-900),#1565C0);display:flex;align-items:center;justify-content:center">';
        h += '<svg viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.3)" stroke-width="1.5" width="48" height="48"><path d="M12 2l3 6 6 .9-4.5 4.3 1 6.3L12 17l-5.5 2.5 1-6.3L3 8.9 9 8z"/></svg>';
        h += '</div>';
      }
      h += '</div>';
      h += '<div class="blog-card-body">';
      h += '<span class="blog-tag">'+esc(p.category)+'</span>';
      h += '<h3><a href="'+blogPage+'#'+p.slug+'" style="color:inherit;text-decoration:none">'+esc(p.title)+'</a></h3>';
      h += '<p>'+esc(p.excerpt)+'</p>';
      h += '<a href="'+blogPage+'#'+p.slug+'" class="blog-card-link" data-i18n="Read more →">Read more →</a>';
      h += '</div>';
      h += '</article>';
    });
    target.innerHTML = h;
    var els=target.querySelectorAll('.reveal');
    setTimeout(function(){for(var i=0;i<els.length;i++) els[i].classList.add('in');},100);
  };
})();
