function isSorted(inArray){
  for(let i = 1; i < inArray.length; i++){
    if(inArray[i] < inArray[i -1]) {return false;}
  }
  return true;
}


function bubbleSort(inArray){
  while(!isSorted(inArray)){
    for(let i = 1; i < inArray.length; i++){
      if(inArray[i] < inArray[i -1]){
        let tempVar = inArray[i - 1];
        inArray[i - 1] = inArray[i];
        inArray[i] = tempVar;
      }
    }
  }
  return inArray;
}

// since the last element is always the greatest after each pass
// we can skip the last n elements on the nth pass
function bubbleSortv2(inArray){
  let counter = 0;
  while(!isSorted(inArray)){
    for(let i = 1; i < inArray.length - counter; i++){
      if(inArray[i] < inArray[i -1]){
        let tempVar = inArray[i - 1];
        inArray[i - 1] = inArray[i];
        inArray[i] = tempVar;
      }
    }
    counter++;
  }
  return inArray;
}

function merge(leftArray, rightArray){
  const retArray = [];
  while(leftArray.length && rightArray.length){
    if(leftArray[0] < rightArray[0]){
      retArray.push(leftArray.shift());
    }else {
      retArray.push(rightArray.shift());
    }
  }

  while(leftArray.length){
    retArray.push(leftArray.shift());
  }

  while(rightArray.length){
    retArray.push(rightArray.shift());
  }

  return retArray;
}

function mergeSort(inArray){
  if(inArray.length < 2) {return inArray;}

  let mid = inArray.length / 2;
  let left = inArray.slice(0, mid);
  let right = inArray.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}


const a = [2, 1, 4, 5, 7, 6, 3];
console.log(bubbleSort(a));
console.log(bubbleSortv2(a));
console.log(mergeSort(a));
