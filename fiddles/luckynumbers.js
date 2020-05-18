
/* This one came from a task I did on an interview. Lucky numbers are numbers with at least one 6, or at least one 8, but not both.
The task is to return the number of lucky numbers between two numbers.
When I tried this solution, it worked, but was too slow with large numbers, so I didn't get full points! :(*/

function luckies(l,h) {
    numOfLuckies = 0;
    for (let i = l; i < h; i++ ) {
        var testNumber = i;
        var has8s = false;
        var has6s = false;

        while (testNumber > 0 && (has8s === false || has6s === false)) {
            if (testNumber%10 === 8) {
                has8s = true;
                } else if (testNumber%10 === 6) {
                has6s = true;
                }
            testNumber -= testNumber%10;
            testNumber /= 10;
        }
        if ((has6s && has8s === false) || (has8s && has6s === false)) {
            numOfLuckies ++;
        }
    }
    return numOfLuckies;
}

/* After the interivew, I had another think and tried to do a little bit more of the maths myself, rather than using brute force. I got as far as finding the number of luckies up to a particular power of 10.
    function factorial(n) {
        var output = 1;
        for (i = n; i > 0; i--) {
            output *= i;
        }
        return output;
    }

    function LuckiesOfLengthNorLess(n) {
        return Math.pow(9,(n-1))*factorial(n)*2;
    }

    */