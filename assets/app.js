const WA='6289624493600',wa=t=>`https://wa.me/${WA}?text=${encodeURIComponent(t)}`;
document.querySelectorAll('[data-wa]').forEach(a=>a.href=wa('Assalamualaikum, '+a.dataset.wa));
const qz=document.getElementById('quiz');
if(qz)qz.addEventListener('submit',e=>{e.preventDefault();const d=new FormData(qz),v=[...d.values()];
if(v.length<5){document.getElementById('hasil').innerHTML='<p>Jawab kelima pertanyaan dulu, ya.</p>';return}
const a=v.filter(x=>x=='a').length>2,n=a?'Asisten Umroh Mandiri':'Personal Planning';
document.getElementById('hasil').innerHTML=`<h3>Yang paling cocok: ${n}</h3><p>${a?'Rencana Anda sudah ada. Yang dibutuhkan adalah pendamping saat mencari, membandingkan, dan memesan.':'Anda belum punya gambaran utuh. Mulailah dengan rencana perjalanan, anggaran, dan checklist yang jelas.'}</p><p><a class="btn" href="${wa('saya habis mengisi Peta Kesiapan dan tertarik dengan '+n)}">Bahas ${n} via WhatsApp</a></p>`});
