/*Write a function that gets a string number and a fret of a 6-string guitar in 'standard tuning' and return the corresponding note. For this challenge we use a 24 fret model.

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

const notes =["C", "C#/Db", "D", "D#/Eb", "E", "F", "F#/Gb", "G", "G#/Ab", "A", "A#/Bb", "B"]

//Name the guitar string by the index of the array, notes
const strings = [4,11,7,2,9,4];

function stringFret(string, fret) {
    if (string>=1 && string <= strings.length && fret <= 24 && fret >= 0) {
        const str = string - 1;
        return notes[(strings[str] + fret)%notes.length];
    } else {
        return "Invalid input"
    }
}
