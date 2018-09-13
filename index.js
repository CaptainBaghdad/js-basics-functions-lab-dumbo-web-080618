// Code your solution in this file!

function distanceFromHqInBlocks(block){
   if(block > 42 ){
     return block - 42;
     
   }
   else{
     return 42 - block;
   }
  
}


function distanceFromHqInFeet(block){
  
   if(block > 42 ){
      return (block - 42) * 264;
     
   }
   else{
     return (42 - block) * 264;
   }
   
  
}


function distanceTravelledInFeet(start, stop){
  if(start > stop){
  return (start - stop) * 264;    
  }
  else{
    return (stop - start) * 264;
  }
  
}

function calculatesFarePrice(start, stop){
  
  var feet  = distanceTravelledInFeet(start, stop);
    if (feet <= 400) {
    return 0;
  }
   else if(feet > 400 && feet <= 2000){
     return feet * 0.02;
     
   }
}


