const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  let newCase =[];
  let newString=[];
  for (let x = 0; x <= tutorials.length-1; x++){
    newString = tutorials[x].split(" ");
    newString = newString.map(function(z){ return z[0].toUpperCase()+ z.slice(1)});
    newCase[x] = newString.join(' ');
  }
  
  return newCase;
}

console.log(titleCased());