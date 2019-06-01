function forLoop(array){
  for (let i = 0; i < 25; i++){
    if(i === 1){
      array.add(`I am ${i} strange loop.`);
    }else {
      array.add(`I am ${i} strange loops.`);
    }
  }
}