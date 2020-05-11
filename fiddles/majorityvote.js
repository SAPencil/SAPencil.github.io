function majorityVote(arr) {
	var popularity = {};
	for (i = 0; i < arr.length; i++) {
        if(popularity[arr[i]]) { //If you've already seen this element, add one to its popularity index
            popularity[arr[i]] += 1    
        } else { //If you haven't already seen this element, create a popularity property with its name
            popularity[arr[i]] = 1;
        }
    }
    //Find the majority property of popularity, and return it
    for (x in popularity) {
        if (popularity[x] > arr.length/2) {
            return x
        }
    }
    return null //If you haven't returned anything yet, return null

}
console.log(majorityVote(["A","B","B"]));

