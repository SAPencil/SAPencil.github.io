/*var num = 628;

var firstDig = (num - num%Math.pow(10,(num.toString().length)-1))/Math.pow(10,(num.toString().length)-1);



console.log(firstDig);

var toSub = 

console.log(toSub);
*/

fetch('https://api.github.com/users/ssaunier')
  .then(response => response.json())
  .then(data => {
    console.log(`My name is ${data.name} and I work at ${data.company}`);
  });