const bars = document.querySelector('.bars')
const overlay =document.querySelector('#overlay');
const sidebar = document.querySelector('#sidebar');
console.log(bars);
 
function toggleSidebar () {
[sidebar , overlay].forEach(function (e){
e.classList.toggle('active');
})
}
[bars, overlay].forEach(function(e){
    e.addEventListener('click', toggleSidebar);
})
