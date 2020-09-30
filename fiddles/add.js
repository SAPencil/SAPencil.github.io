//Ok, fair enough, this seems like the simplest thing a programmer can do. But I hasten to add, that for this challenge I have not used the + operator once (ok, apart from defining for loops). If you like, I'm exploring what adding really is to a computor. 

function decToReverseBin (num) {

    let output = [];
    let mutableNum = num;
    let currentPlace = 1;

    while (mutableNum > 0) {
        if( mutableNum%(currentPlace*2) === 0 ) {
            output.push(0);
        } else {
            output.push(1);
            mutableNum -= currentPlace
        }
        currentPlace *= 2;
    }
    return output;
}


function reverseBintoDec (arr) {
    let output = 0;
    let currentPlace = 1;
    for(let i=0; i<arr.length; i++) {
        output += arr[i]*currentPlace;
        currentPlace *=2;
    }
    return output;
}

function add (num1, num2) {
    const arr1 = decToReverseBin(num1);
    const arr2 = decToReverseBin(num2);

    let sumArr =[];
    let carry = 0;

    for (let i=0; i<=Math.max(arr1.length, arr2.length); i++) {
        if(arr1[i] && arr2[i] && carry) {
            sumArr.push(1);
        } else if ((arr1[i] && arr2[i]) || (arr1[i] && carry) || (arr2[i] && carry)) {
            sumArr.push(0);
            carry = 1;
        } else if (arr1[i] || arr2[i] || carry) {
            sumArr.push(1);
            carry = 0;
        } else {
            sumArr.push(0);
        }
    }
    return (reverseBintoDec(sumArr));
}


console.log(add(21,504));