const input = '22609473723358817213362231473129450543623991425559419201504657713314511281933893332827398782184222702592918313405213490834433324702150491095736052134942096'; 

const len = input.length;
const doubles = [];
for(let i = 0; i < len-1; i++)
{
    doubles.push(input.slice(i,i+2));
}
let biggest = 0;
let biggies = [];
const freq = new Map();
for (const dbl of doubles) {
    freq.set(dbl, (freq.get(dbl) || 0) + 1);
}
for (const dbl of freq){
    if(dbl[1] > biggest){
        biggies = [];
        biggest = dbl[1];
        biggies.push(dbl[0]);
    }
    else if(dbl[1] === biggest){
        biggies.push(dbl[0]);
    }
}
console.log("Biggest number of repeats: ", biggest);
console.log("Numbers that repeats: ", biggies);
