const toast=document.getElementById('toast');let toastTimer;
function notify(message){if(!toast)return;toast.textContent=message;toast.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>toast.classList.remove('show'),1800)}
document.querySelectorAll('[data-color]').forEach(button=>button.addEventListener('click',async()=>{try{await navigator.clipboard.writeText(button.dataset.color);notify(button.dataset.color+' copied')}catch{notify(button.dataset.color)}}));
const newPassword=document.getElementById('new-password'),passwordRules=document.getElementById('password-rules');
if(newPassword&&passwordRules){newPassword.addEventListener('focus',()=>{passwordRules.hidden=false;newPassword.setAttribute('aria-describedby','password-rules')});newPassword.addEventListener('blur',()=>{if(!newPassword.value){passwordRules.hidden=true;newPassword.removeAttribute('aria-describedby')}})}
const copyLink=document.getElementById('copyLink');if(copyLink)copyLink.addEventListener('click',async()=>{try{await navigator.clipboard.writeText(location.href);notify('Page link copied')}catch{notify('Page link unavailable')}});
const localLinks=[...document.querySelectorAll('.nav a[href*="#"]')];
if('IntersectionObserver'in window){const sections=[...document.querySelectorAll('main section[id]')];const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){localLinks.forEach(link=>{const url=new URL(link.href);link.classList.toggle('active',url.pathname===location.pathname&&url.hash==='#'+entry.target.id)})}}),{rootMargin:'-18% 0px -72% 0px'});sections.forEach(section=>observer.observe(section))}

const requestForm=document.getElementById('addition-request-form');
if(requestForm){
  const result=document.getElementById('request-result'),preview=document.getElementById('request-preview'),status=document.getElementById('request-status');
  const readRequest=()=>Object.fromEntries(new FormData(requestForm).entries());
  const makeRequest=()=>{
    const data=readRequest();
    return `# Design system addition request\n\n- **Submitted:** ${new Date().toLocaleDateString()}\n- **Title:** ${data.title}\n- **Type:** ${data.type}\n- **Products or teams affected:** ${data.impact||'Not specified'}\n- **Requestor:** ${data.contact||'Not specified'}\n\n## User or team need\n${data.problem}\n\n## Proposed addition and usage\n${data.proposal}\n`;
  };
  const filename=()=>{
    const title=readRequest().title||'design-system-request';
    const safe=title.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'').slice(0,60)||'design-system-request';
    return `${safe}-request.md`;
  };
  const download=()=>{
    const blob=new Blob([preview.value],{type:'text/markdown;charset=utf-8'}),url=URL.createObjectURL(blob),link=document.createElement('a');
    link.href=url;link.download=filename();document.body.append(link);link.click();link.remove();URL.revokeObjectURL(url);
  };
  requestForm.addEventListener('submit',event=>{event.preventDefault();preview.value=makeRequest();result.hidden=false;status.textContent='Your request is ready. Download or copy it, then share it through your team’s normal intake channel.';result.scrollIntoView({behavior:'smooth',block:'nearest'})});
  document.getElementById('download-request').addEventListener('click',download);
  document.getElementById('copy-request').addEventListener('click',async()=>{
    try{await navigator.clipboard.writeText(preview.value);status.textContent='Request copied. Share it through your team’s normal intake channel.'}
    catch{preview.focus();preview.select();status.textContent='Select and copy the request text above to share it.'}
  });
}
