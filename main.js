const bars = document.querySelector('.bars')
const overlay =document.querySelector('#overlay');
const overlayImage =document.querySelector('.overlay');
const sidebar = document.querySelector('#sidebar');
const gallery = document.querySelector('#check');
 
function toggleSidebar () {
[sidebar , overlay].forEach(function (e){
e.classList.toggle('active');
})
}
[bars, overlay].forEach(function(e){
    e.addEventListener('click', toggleSidebar);
})
 
document.addEventListener('DOMContentLoaded' , ()=>{
    const overlay = document.querySelector('#imageModal');
    const close = document.querySelector('.close');
    const modalImg = document.querySelector('#modalImg');
    const gallery =document.querySelectorAll('.gallery-image');
    gallery.forEach((e)=>{
        e.addEventListener('click', (e)=>{
            modalImg.src=e.target.src;
            overlay.style.display='block';
        });
        overlay.addEventListener('click', (e)=>{
            if(e.target===overlay){
                overlay.style.display='none';
            }
        })
        close.addEventListener('click', ()=>{
            overlay.style.display='none';
        });
    })
});