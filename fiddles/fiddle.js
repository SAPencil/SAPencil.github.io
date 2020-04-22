var num = 628;

var firstDig = (num - num%Math.pow(10,(num.toString().length)-1))/Math.pow(10,(num.toString().length)-1);



console.log(firstDig);

var toSub = num%Math.pow(10,(num.toString().length)-1);
console.log(toSub);