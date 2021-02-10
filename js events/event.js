let mouse = document.getElementById('mouse');
let mouseouts = document.getElementById('mouseouts');
let clicks = document.getElementById('clicks');
let dblclick = document.getElementById('dblclick');
let focuss = document.getElementById('focuss');
let blurs = document.getElementById('blurs');

function mouseover() {
   let mouses = mouse.style.backgroundColor ='red';
  return mouses;

    
}
function mouseouter() {
    return mouseouts.style.backgroundColor='brown';
 }
 function clicker() {
    return clicks.style.backgroundColor='pink';
 }
 function dbclicker() {
    return dblclick.style.backgroundColor='orange';
 }
 function focuser() {
    return focuss.style.backgroundColor='grey';
 }

 function blurer() {
    return blurs.style.textTransform='uppercase';
 }