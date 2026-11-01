let count=0;
function addCart(){
 count++;
 document.getElementById('cartCount').textContent=count;
 const t=document.getElementById('toast');t.classList.add('show');
 setTimeout(()=>t.classList.remove('show'),1400);
}
document.querySelectorAll('a[href="#"]').forEach(a=>a.addEventListener('click',e=>e.preventDefault()));
