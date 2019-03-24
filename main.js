function calc() {

  var lengthA = [parseFloat(document.querySelector("#sideA").value)]
  var lengthB = [parseFloat(document.querySelector("#sideB").value)]
  var lengthC = [parseFloat(document.querySelector("#sideC").value)]

  var ab = length1.concat(length2);

  var abc = ab.concat(length3) ;

  var sorted = abc.sort(function (d, e) {
return d - e;
})

}
