/*Write a function that gets a string number and a fret of a 6-string guitar in 'standard tuning' and return the corresponding note. For this challenge we use a 24 fret model.
[Sam note: I initially just wrote a function which returns the note as a string. Then I got curious about audio files and html so I recorded myself playing guitar (sorry for the audio quality!) and got it to play a note instead!]
The notes are:

C, C#/Db, D, D#/Eb, E, F, F#/Gb, G, G#/Ab, A, A#/Bb, B
Try not to use a 2 dimensional array. Look at the image on the bottom to see the note names on the guitar neck.

Examples
stringFret(2, 10) ➞ "A"

stringFret(0, 16) ➞ "Invalid input"

stringFret(2, 19) ➞ "F#/Gb"

stringFret(3, 0) ➞ "G"
Notes
If the string or fret number isn't correct return "Invalid input".*/

const notes =["a C", "a C#/Db", "a D", "a D#/Eb", "an E", "an F", "an F#/Gb", "a G", "a G#/Ab", "an A", "an A#/Bb", "a B"]

//Name the guitar string by the index of the array, notes
const strings = [4,11,7,2,9,4];

function stringFret(string, fret) {
    if (string>=1 && string <= strings.length && fret <= 24 && fret >= 0) {
        const str = string - 1;
        return notes[(strings[str] + fret)%notes.length];
    } else {
        return null
    }
}
console.log(stringFret(2,0));
