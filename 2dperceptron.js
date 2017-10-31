//Math.seed = 1.6;
Math.seed = 20;

Math.seededRandom = function(max, min) {
    max = max || 1;
    min = min || 0;

    Math.seed = (Math.seed * 9301 + 49297) % 233280;
    var rnd = Math.seed / 233280;

    return min + rnd * (max - min);
}

// function to generate random linear y = ax + b
// takes no parameters
// returns [a, b]
// a in [-5, 5] and b in [-100 100]
function linearSeparator() {
  let a = (Math.seededRandom() - 0.5) * 5;
  let b = (Math.seededRandom() - 0.5) * 100;
  console.log(a, b);
  return [a, b];
}

// generates an array with n elements
// each element is [(), boolean]
// where first element is the coordinates
// TO DO: change so first element can be any dim
// second element is classifier
function generatePoints(n){
  const [a, b] = linearSeparator();
  const retArray = []

  for(i = 0; i < n; i++){
    let x = (Math.seededRandom() - 0.5) * 1000;
    let y = (Math.seededRandom() - 0.5) * 1000;
    if (a * x + b - y >= 0){  // a * x + b  >= y
      retArray.push([[x, y], 1]);
    } else {
      retArray.push([[x,y], -1]);
    }
  }
  console.log(retArray);
  return retArray;
}


// dot product function for arrays
// returns zero if length isnt the same
function dot(x, y){
  let retValue = 0;

  if (x.length != y.length){
    return 0;
  }else {
    for(j = 0; j < x.length; j++){
      retValue += x[j] * y[j];
    }
    return retValue;
  }
}

function isGood(w, arrayTraining){
  // takes our guess vector w and arrayTraining
  // returns true if w successfully matches arrayTraining
  for(z = 1; z < arrayTraining.length; z++){
    if(Math.sign(dot(w, [1, ... arrayTraining[z][0]])) != arrayTraining[z][1]){
      return false; //continue
    }
  }
  return true; //all checked and is good
}

function perceptron(arrayTraining){
  w = [0.5, 0.5, 0.5];

  do{
    for(i = 0; i < arrayTraining.length; i++){
      if (Math.sign(dot(w, [1, ... arrayTraining[i][0]])) != arrayTraining[i][1]) {
        w[0] += 1 * arrayTraining[i][1];
        w[1] += arrayTraining[i][0][0] * arrayTraining[i][1];
        w[2] += arrayTraining[i][0][1] * arrayTraining[i][1];
        console.log('problem point:', arrayTraining[i]);
        console.log('new guess:', w);
        console.log('--');
        break;
      }
    }

  }while(!isGood(w, arrayTraining));

}


perceptron(generatePoints(15));
