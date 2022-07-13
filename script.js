//Challenge 1: Your Age in Days

function ageInDays() {
  var birthYear = prompt('What year were you born....Good friend?');
  var ageInDayss = (2022 - birthYear) * 365;
  var h1 = document.createElement('h1');
  var textAnswer = document.createTextNode('You are ' + ageInDayss + ' days old.')
  h1.setAttribute('id', 'ageInDays');
  h1.appendChild(textAnswer);
  document.getElementById('flex-box-result').appendChild(h1);
}

function reset() {
  document.getElementById('ageInDays').remove();
}

// put the prompt in first to see it pop right away.
//Now function ageInDays() and put the var info inside the {}
//Then go back to the HTML and add onclick="ageInDays()" to the click me button
// varable name can't be the same as a function so if we have function ageInDays give var different name ageInDayss
//console.log(ageInDays)
