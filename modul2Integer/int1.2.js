/* Berilgan ifodani hisoblang:
Input : a; b . ( a sonni 0< a <1000 va b sonni 0< b <1000 faqat shu oraliqda oling. )
Output : natijani chiqaring.    */

let a = 8, b= 5;

let natija = Math.sqrt(Math.sqrt((Math.pow(a,3) - Math.pow(b,3)) + (Math.pow(a,3) + Math.pow(b,3))))

console.log(natija)   // 5.656854249492381