var generator = new Random(1);
var sD = 50;
var mean = 200;


var colourSD = 353;
var colourMean = -160;


var draw = function() {
    noStroke();
var x = generator.nextGaussian()*sD+mean;
var y = generator.nextGaussian()*sD+mean;
var r = generator.nextGaussian()*colourSD+colourMean;
var g = generator.nextGaussian()*colourSD+colourMean;
var b = generator.nextGaussian()*colourSD+colourMean;
fill(r, g, b);
ellipse(x, y, 10, 10);

};
