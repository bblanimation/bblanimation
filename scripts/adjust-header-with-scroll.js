// Begin HEADER ADJUSTMENT WITH SCROLL
var docEl = document.documentElement,
    $divL = document.getElementsByClassName('BG_light')[0];
    $divD = document.getElementsByClassName('BG_dark')[0];

var aL = 0.575,
    aD = 0.8,
    b = 0.9,
    c = 0.25,
    maxOfScroll = 180;
    
window.onscroll = function(){
   var sTop = (this.pageYOffset || docEl.scrollTop)  - (docEl.clientTop || 0);
   v = Math.pow(Math.min(maxOfScroll,sTop)/maxOfScroll,c);
   if ($divL) {
     $divL.style.opacity = (aL + (b - aL) * v).toString();
   }
   else if ($divD) {
     $divD.style.opacity = (aD + (b - aD) * v).toString();
   }
 };
// End HEADER ADJUSTMENT WITH SCROLL
