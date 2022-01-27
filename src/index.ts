for (let index = 1; index < 101; index++) {
 if (index%2===0&&index%3===0) {
    let multiplo2y3=index;
   console.log("Es múltiplo de dos y tres  " + multiplo2y3);
  } else if(index%2===0) {
    let multiplo2=index;
    console.log("Son multiplos de dos  " + multiplo2);
  
  }else if(index%3===0){
let multiplo3=index;
console.log("Son multiplos de tres  " + multiplo3);
  
  }
  
}
