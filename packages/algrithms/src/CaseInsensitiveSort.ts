/**
 * javascript 默认的排序是大写字母70排在小写字母96的前面
 */

const inSensitive = [
  'Alpha',
  'beta',
  'Gamma',
  'delta'
];

const bar = inSensitive.slice();
inSensitive.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
 console.log("inSensitive ", inSensitive);
 bar.sort((a, b) => {

   a = a.toLowerCase();
   b = b.toLowerCase();
   if (a > b) {
     return 1;
   } else if( a === b){
     return 0;
   } else {
     return -1;
   }
 })
 console.log("bar ", bar);



















