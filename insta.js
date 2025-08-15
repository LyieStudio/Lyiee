
// Advanced option: render Instagram feed using Basic Display API.
// 1) Get a USER_ID and ACCESS_TOKEN (long-lived) from Meta.
// 2) Set them below, then uncomment instafeed container and script in instagram.html.
// 3) This is a minimal example—production sites should cache responses server-side.

const USER_ID = "YOUR_USER_ID";
const ACCESS_TOKEN = "YOUR_LONG_LIVED_ACCESS_TOKEN";
const LIMIT = 6;

async function loadInsta(){
  const url = `https://graph.instagram.com/${USER_ID}/media?fields=id,media_url,permalink,thumbnail_url,caption,media_type&access_token=${ACCESS_TOKEN}&limit=${LIMIT}`;
  const res = await fetch(url);
  if(!res.ok){ console.error('Instagram fetch failed'); return; }
  const data = await res.json();
  const grid = document.getElementById('instafeed');
  if(!grid) return;
  grid.innerHTML = '';
  (data.data||[]).forEach(item => {
    if (!item.media_url) return;
    const a = document.createElement('a');
    a.href = item.permalink;
    a.target = "_blank";
    a.rel = "noopener";
    a.className = "card";
    const img = document.createElement('img');
    img.src = item.media_url;
    img.alt = (item.caption || 'Instagram post').slice(0,120);
    img.style.width = '100%';
    img.style.borderRadius = '14px';
    a.appendChild(img);
    grid.appendChild(a);
  });
}
document.addEventListener('DOMContentLoaded', loadInsta);
