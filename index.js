// add solution here

function theBeatlesPlay(musicians,instruments) {
  var plays = []
  for (var i = 0; i < 4; i++) {
    plays.push(musicians[i]+" plays "+instruments[i])
}
return plays
}
function johnLennonFacts(facts) {
  var i = 0
  while (i < facts.length) {
    facts[i] += "!!!"
    i++
  }
  return facts 
}
function iLoveTheBeatles(number) {
  var texts = []
  //var stmnt = "I love the Beatles!"
  var sntnc 
  if (number.length === 7) {
    var i = 0
   do {
   //var i = 0
   texts.push("I love the Beatles!") 
   i++
   }
   while (i <= number.length) 
   sntnc = texts 
  }
  else {
    sntnc = "I love the Beatles!" 
  }
  return sntnc
}