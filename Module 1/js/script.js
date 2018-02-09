const a = 'йцукенгшщзхъ';
const b = 'фывапролджэё';
const c = 'ячсмитьбю';

const aLength = a.length;
const bLength = b.length;
const cLength = c.length;

const aChar0 = a.charAt(0);
const bChar0 = b.charAt(0);
const cChar0 = c.charAt(0);
const aCharLast = a.charAt(aLength-1);
const bCharLast = b.charAt(bLength-1);
const cCharLast = c.charAt(cLength-1);

const d = a.indexOf("]");
const f = a.indexOf("[");

const z = `a = ${a}
b = ${b}
c = ${c}
aLength = ${aLength}
bLength = ${bLength}
cLength = ${cLength}
aChar0 = ${aChar0}
bChar0 = ${bChar0}
cChar0 = ${cChar0}
aCharLast = ${aCharLast}
bCharLast = ${bCharLast}
cCharLast = ${cCharLast}
d = ${d}
f = ${f}`;

console.log(z);