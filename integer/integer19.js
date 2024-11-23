/* Uch xonali a butun son berilgan. Uning raqamlari yig'indisi va raqamlari
ko'paytmasini toping.
Input : a .
Output : raqamlari yig’indisi va raqamlari ko’paytmasi.
*/

let uchXonaliSon = 123;

let yuzliklarXonasidagiSon = (Math.floor(uchXonaliSon/100));                 // 1

let unliklarXonasidagiSon = (Math.ceil(uchXonaliSon / 100));               // 2  mana shu to'g'ri ishlamayapti ???

let birlarXonasidagiSon = uchXonaliSon%10;  // 3

console.log(yuzliklarXonasidagiSon);
console.log(unliklarXonasidagiSon);
console.log(birlarXonasidagiSon);

console.log (yigindi = yuzliklarXonasidagiSon + unliklarXonasidagiSon + birlarXonasidagiSon);     // 6

console.log (kupaytmasi = yuzliklarXonasidagiSon * unliklarXonasidagiSon * birlarXonasidagiSon);  // 6