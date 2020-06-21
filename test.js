
// Sample code to perform I/O:

process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";

process.stdin.on("data", function (input) {
    stdin_input += input;                               // Reading input from STDIN
});

process.stdin.on("end", function () {
   main(stdin_input);
});

function main(input) {
    process.stdout.write(fredo(input));       // Writing output to STDOUT
}

// Warning: Printing unwanted or ill-formatted data to output will cause the test cases to fail


// Write your code here

function fredo (input) {
    const lines = input.split("\n");
    const size = lines[0];
    const ints = lines[1].split(" ");
    for(i=0; i<ints.length; i++) {
        ints[i] = parseInt(ints[i]);
    }
    const sum = ints.reduce((accumulator, currentValue) => accumulator + currentValue);
    const newInt = Math.ceil(sum/size);
    return console.log(newInt);

}