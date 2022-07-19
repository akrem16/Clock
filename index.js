function dd () {
var date = new Date()
var hr = date.getHours();
var mn = date.getMinutes();
var sc = date.getSeconds();
var jj = date.getDay();
var MM = date.getMonth();
var yy = date.getFullYear();

// if(date.getSeconds() < 10 ){
//     return 0 + date.getSeconds()
// }
if(sc < 10){
    sc = '0' + sc
}
 if(hr > 12){
     hr = '0' + hr
 }
if(mn < 10){
    mn = '0' + mn
}

// switch(yy) {
// 	case 1:
// 		return 'lundi';
// 		break;
// 	case 2:
// 		return 'mardi';
// 		break;
// 	default:
// 		console.log( 'erreur' );
// 	}



document.querySelector(".JJ").textContent = jj ;
document.querySelector(".MM").textContent = MM + 1 ;
document.querySelector(".YYYY").textContent = yy ;
document.querySelector(".hh").textContent = hr ;
document.querySelector(".mm").textContent = mn ;
document.querySelector(".ss").textContent = sc ;


}
setInterval((dd) , 10)





