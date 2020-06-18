/* I just thought one day, I wonder how autocorrects/spellcheckers work! I'm sure it's not really like this, but I it would be a good start to one, and gave me an opportunity to write my first API call! My autocorrect currently deals with accidental sawps, accidental duplication of a letterr, and hitting a nearby key by accidenr. Only one error per word, and currently only single words.*/


async function APILookup(word) {
        try {
        let myFetch = await fetch("https://wordsapiv1.p.rapidapi.com/words/"+word, {
                                    "method": "GET",
                                    "headers": {
                                    "x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
                                    "x-rapidapi-key": "4f5ebd9360msh7de66bb7d7e552cp1a6b81jsne17aa5143a0c"
                                    }
                            })
        return myFetch.status === 200;
                        }  
        catch(err) {
            console.error(err);
        }
    }

function mostCommonLookup(word) {
    return true
}


async function undoSwaps (str, isWord) {
    
    for( let i = 0; i < str.length-1; i++) {
        let testArr = str.split("");
        testArr[i] = str.charAt(i+1);
        testArr[i+1] = str.charAt(i);
        let testString = testArr.join("");
        let newIsWord = await isWord(testString)
        if (newIsWord) {
            return testString
        }
    }
}

async function deleteRepeats (str, IsWord) {
    for( let i = 0; i < str.length-1; i++) {
        var testArr = str.split("");
        if (testArr[i] == testArr[i+1]) {
            testArr.splice(i,1);
            let newIsWord = await isWord(testArr.join("")) 
            if(newIsWord) {
                i = str.length-1;
            }
        }
    }
    const newString = testArr.join("");
    var newIsWord = await isWord(newString);
    if(newIsWord) {
        return newString
    }
}

const qwertyProximities = {
    q: ["a","s", "w"],
    w: ["q","a","s","e"],
    e: ["w","s","d","f","r"],
    r: ["e","d","f","g","t"],
    t: ["r","f","g","h","y"], 
    y: ["t", "g", "h", "j", "u"],
    u: ["y", "h", "j", "k", "i"],
    i: ["u","j","k","l","o"],
    o: ["i","k","l"],
    p: ["o","l"],
    a: [,"q","w","s","z"],
    s: ["q","a","z","x","d","e","w"],
    d: ["w","s","x","c","f","r","e"],
    f: ["d","c","v","g","t","r","e"],
    g: ["f","v","b","h","y","t","r"],
    h: ["g","b","n","j","u","y","t"],
    j: ["h","n","m","k","i","u","y"],
    k: ["j","m",",","l","o","i","u"],
    l: ["k",",",".",";","p","o","i"],
    z: ["a","s","x"],
    x: ["z","s","d","c"],
    c: ["x","d","f","v"],
    v: ["c","f","g","b"],
    b: ["v","g","h","n"],
    n: ["b","h","j","m"],
    m: ["n","j","k",","],
    1: ["q","w"],
    2: ["q","w","e"],
    3: ["w", "e", "r"],
    4: ["e","r","t"],
    5: ["r","t","y"],
    6: ["t","y","u"],
    7: ["y","u","i"],
    8: ["u","i","o"],
    9: ["i","o","p"],
    0: ["o","p"],
    "-": ["p"],
    "[": ["p"],
    ";": ["l", "p"],
    ".": ["l"],
    ",": ["m","k","l"],
    "\\": ["z","a"] 
}
async function qwertyProblems (input, isWord) {
    const str = input.toLowerCase();
    for(let i = 0; i < str.length; i++) { //loop through the letters of the word
        var testArr = str.split("");
        var currentChar = str.charAt(i);

        for (let j = 0; j < qwertyProximities[currentChar].length; j++) { //loop through the proximal letters on the qwerty keyboard
            testArr.splice(i,1,qwertyProximities[currentChar][j]);
            const newString = testArr.join("");
            var newIsWord = await isWord(newString);
            if(newIsWord) {
                return newString
            }
            
        }
    }
}


async function autoCorrect (str) {
    if(str.match(/ /)) {
        return "One word at a time please, I'm still learning!"
    }
    
    
    //Check if it's spelled correctly
    var newIsWord = await mostCommonLookup(str);
    if(newIsWord) {
        return `Well done, you spelled ${str} correctly`
    };
    
    var newIsWord = await APILookup(str);
    if(newIsWord) {
        return `Well done, you spelled ${str} correctly`
    };

    //Check word with the 1000 most common words first
    const repeatsCommon = await deleteRepeats(str, mostCommonLookup);
    if (repeatsCommon) {
        return `I think you'll find that's spelled "${repeatsCommon}"`
    }
    
    const swapsCommon = await undoSwaps(str, mostCommonLookup);
    if (swapsCommon) {
        return `I think you'll find that's spelled "${swapsCommon}"`
    }

    const qwertyCommon = await qwertyProblems(str, mostCommonLookup);
    if (qwertyCommon) {
        return `I think you'll find that's spelled "${qwertyCommon}"`
    }


    //Now check word with the API
    const repeatsAPI = await deleteRepeats(str, APILookup);
    if (repeatsAPI) {
        return `I think you'll find that's spelled "${repeatsAPI}"`
    }
    
    const swapsAPI = await undoSwaps(str, APILookup);
    if (swapsAPI) {
        return `I think you'll find that's spelled "${swapsAPI}"`
    }

    const qwertyAPI = await qwertyProblems(str, APILookup);
    if (qwertyAPI) {
        return `I think you'll find that's spelled "${qwertyAPI}"`
    }

   
return "That spelling is so bad I can't fix it"
}

/*

//Button functionality

async function run(input) {
    $("#output").html("Ooo, let me think about that...");
    const output = await autoCorrect(input);
    $("#output").html(output);
    console.log(`you inputted ${input}`)
}

$("#correct").on("click", function() {run($("#input").val())});
*/
async function log () {
const toLog = await autoCorrect("ood")
console.log(toLog);
}
log();