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



const mostCommonWords = ["as","I","his","that","he","was","for","on","are","with","they","be","at","one","have","this","from","by","hot","word","but","what","some","is","it","you","or","had","the","of","to","and","a","in","we","can","out","other","were","which","do","their","time","if","will","how","said","an","each","tell","does","set","three","want","air","well","also","play","small","end","put","home","read","hand","port","large","spell","add","even","land","here","must","big","high","such","follow","act","why","ask","men","change","went","light","kind","off","need","house","picture","try","us","again","animal","point","mother","world","near","build","self","earth","father","any","new","work","part","take","get","place","made","live","where","after","back","little","only","round","man","year","came","show","every","good","me","give","our","under","name","very","through","just","form","sentence","great","think","say","help","low","line","differ","turn","cause","much","mean","before","move","right","boy","old","too","same","she","all","there","when","up","use","your","way","about","many","then","them","write","would","like","so","these","her","long","make","thing","see","him","two","has","look","more","day","could","go","come","did","number","sound","no","most","people","my","over","know","water","than","call","first","who","may","down","side","been","now","find","head","stand","own","page","should","country","found","answer","school","grow","study","still","learn","plant","cover","food","sun","four","between","state","keep","eye","never","last","let","thought","city","tree","cross","farm","hard","start","might","story","saw","far","sea","draw","left","late","run","don’t","while","press","close","night","real","life","few","north","book","carry","took","science","eat","room","friend","began","idea","fish","mountain","stop","once","base","hear","horse","cut","sure","watch","color","face","wood","main","open","seem","together","next","white","children","begin","got","walk","example","ease","paper","group","always","music","those","both","mark","often","letter","until","mile","river","car","feet","care","second","enough","plain","girl","usual","young","ready","above","ever","red","list","though","feel","talk","bird","soon","body","dog","family","direct","pose","leave","song","measure","door","product","black","short","numeral","class","wind","question","happen","complete","ship","area","half","rock","order","fire","south","problem","piece","told","knew","pass","since","top","whole","king","street","inch","multiply","nothing","course","stay","wheel","full","force","blue","object","decide","surface","deep","moon","island","foot","system","busy","test","record","boat","common","gold","possible","plane","stead","dry","wonder","laugh","thousand","ago","ran","check","game","shape","equate","hot","miss","brought","heat","snow","tire","bring","yes","distant","fill","east","paint","language","among","unit","power","town","fine","certain","fly","fall","lead","cry","dark","machine","note","wait","plan","figure","star","box","noun","field","rest","correct","able","pound","done","beauty","drive","stood","contain","front","teach","week","final","gave","green","oh","quick","develop","ocean","warm","free","minute","strong","special","mind","behind","clear","tail","produce","fact","space","heard","best","hour","better","true","during","hundred","five","remember","step","early","hold","west","ground","interest","reach","fast","verb","sing","listen","six","table","travel","less","morning","ten","simple","several","vowel","toward","war","lay","against","pattern","slow","center","love","person","money","serve","appear","road","map","rain","rule","govern","pull","cold","notice","voice","energy","hunt","probable","bed","brother","egg","ride","cell","believe","perhaps","pick","sudden","count","square","reason","length","represent","art","subject","region","size","vary","settle","speak","weight","general","ice","matter","circle","pair","include","divide","syllable","felt","grand","ball","yet","wave","drop","heart","am","present","heavy","dance","engine","position","arm","wide","sail","material","fraction","forest","sit","race","window","store","summer","train","sleep","prove","lone","leg","exercise","wall","catch","mount","wish","sky","board","joy","winter","sat","written","wild","instrument","kept","glass","grass","cow","job","edge","sign","visit","past","soft","fun","bright","gas","weather","month","million","bear","finish","happy","hope","flower","clothe","strange","gone","trade","melody","trip","office","receive","row","mouth","exact","symbol","die","least","trouble","shout","except","wrote","seed","tone","join","suggest","clean","break","lady","yard","rise","bad","blow","oil","blood","touch","grew","cent","mix","team","wire","cost","lost","brown","wear","garden","equal","sent","choose","fell","fit","flow","fair","bank","collect","save","control","decimal","ear","else","quite","broke","case","middle","kill","son","lake","moment","scale","loud","spring","observe","child","straight","consonant","nation","dictionary","milk","speed","method","organ","pay","age","section","dress","cloud","surprise","quiet","stone","tiny","climb","cool","design","poor","lot","experiment","bottom","key","iron","single","stick","flat","twenty","skin","smile","crease","hole","jump","baby","eight","village","meet","root","buy","raise","solve","metal","whether","push","seven","paragraph","third","shall","held","hair","describe","cook","floor","either","result","burn","hill","safe","cat","century","consider","type","law","bit","coast","copy","phrase","silent","tall","sand","soil","roll","temperature","finger","industry","value","fight","lie","beat","excite","natural","view","sense","capital","won’t","chair","danger","fruit","rich","thick","soldier","process","operate","practice","separate","difficult","doctor","please","protect","noon","crop","modern","element","hit","student","corner","party","supply","whose","locate","ring","character","insect","caught","period","indicate","radio","spoke","atom","human","history","effect","electric","expect","bone","rail","imagine","provide","agree","thus","gentle","woman","captain","guess","necessary","sharp","wing","create","neighbor","wash","bat","rather","crowd","corn","compare","poem","string","bell","depend","meat","rub","tube","famous","dollar","stream","fear","sight","thin","triangle","planet","hurry","chief","colony","clock","mine","tie","enter","major","fresh","search","send","yellow","gun","allow","print","dead","spot","desert","suit","current","lift","rose","arrive","master","track","parent","shore","division","sheet","substance","favor","connect","post","spend","chord","fat","glad","original","share","station","dad","bread","charge","proper","bar","offer","segment","slave","duck","instant","market","degree","populate","chick","dear","enemy","reply","drink","occur","support","speech","nature","range","steam","motion","path","liquid","log","meant","quotient","teeth","shell","neck","oxygen","sugar","death","pretty","skill","women","season","solution","magnet","silver","thank","branch","match","suffix","especially","fig","afraid","huge","sister","steel","discuss","forward","similar","guide","experience","score","apple","bought","led","pitch","coat","mass","card","band","rope","slip","win","dream","evening","condition","feed","tool","total","basic","smell","valley","nor","double","seat","continue","block","chart","hat","sell","success","company","subtract","event","particular","deal","swim","term","opposite","wife","shoe","shoulder","spread","arrange","camp","invent","cotton","born","determine","quart","nine","truck","noise","level","chance","gather","shop","stretch","throw","shine","property","column","molecule","select","wrong","gray","repeat","require","broad","prepare","salt","nose","plural","anger","claim","continent"]

function mostCommonLookup(str) {
    if (mostCommonWords.some((element) => str == element)) {
        return true
    }

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

async function deleteRepeats (str, isWord) {
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

    $("#output").html("That's not a word I know. Give me a few seconds to consult the dictionary");
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

//Button functionality

async function run(input) {
    $("#output").html("Ooo, let me think about that...");
    const output = await autoCorrect(input);
    $("#output").html(output);
    console.log(`you inputted ${input}`)
}

$("#correct").on("click", function() {run($("#input").val())});


/* Test
async function log () {
const toLog = await autoCorrect("graonla")
console.log(toLog);
}
log();
*/