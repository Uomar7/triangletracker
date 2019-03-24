function calc() {

  var lengthA = [parseFloat(document.querySelector("#sideA").value)]
  var lengthB = [parseFloat(document.querySelector("#sideB").value)]
  var lengthC = [parseFloat(document.querySelector("#sideC").value)]

  var ab = lengthA.concat(lengthB);

  var abc = ab.concat(lengthC) ;

  var sorted = abc.sort(function (d, e) {
return d - e;
})

var a = sorted[0]
var b = sorted[1]
var c = sorted[2]

var lengthab = a + b;

var respond;

if(lengthab < c){
  	respond = "ERROR! Your values can not  make a triangle"
  }
else if(a === b && b === c && a > 0 && b > 0 && c > 0){
  console.log('Your dimensions produce an Equilateral Triangle')
  respond = 'Your dimensions produce an Equilateral Triangle'
}else if(a === b && b !== c || a !== b && b === c && a > 0 && b > 0 && c > 0){
  console.log('Your dimensions produce an Isosceles Triangle')
  respond = 'Your dimensions produce an Isosceles Triangle'
}else if(a !== b && b!== c && (Number.isInteger(a) === true || Number.isInteger(b) === true || Number.isInteger(c) === true) && a > 0 && b > 0 && c > 0){
  console.log('Your dimensions produce a Scalene Triangle')
  respond = 'Your dimensions produce a Scalene Triangle'
}else { respond = "Invalid measurements. Kindly use numbers and not words. Have fun!!"};


document.querySelector("#result").innerHTML = respond

}
