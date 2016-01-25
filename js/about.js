var lisaFlip = document.getElementById('lisa');
var joeFlip = document.getElementById('joe');
var marsFlip = document.getElementById('marshall');
var kyleFlip = document.getElementById('kyle');

lisaFlip.addEventListener('click', flip);
joeFlip.addEventListener('click', flip);
marsFlip.addEventListener('click', flip);
kyleFlip.addEventListener('click', flip);

function flip() {
  console.log('The click has been received!');
}
