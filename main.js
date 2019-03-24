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
  	respond = "ERROR! Not a triangle"
  } else if(a === b && b !== c || a !== b && b === c && a > 0 && b > 0 && c > 0){
  console.log('Isosceles Triangle')
  respond = 'Isoceles Triangle'
  }else if(a === b && b === c && a > 0 && b > 0 && c > 0){
  console.log('Equilateral Triangle')
  respond = 'Equilateral Triangle'
  }





}
