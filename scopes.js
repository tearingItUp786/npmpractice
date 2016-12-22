// LESSON 1: LEXICAL SCOPE (look at the definition from Kyle's workshop)
// function foo() {
//     var bar;
// }

function foo() {
  var bar = false;
  quux = 1;
  function zip(){
    bar = true;
    var quux;
  }
  return zip;
}
