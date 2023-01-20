let array = [5,6,2,1,3,11,9,8]
let array1 = [5,6,2,1,3,10]
let array2 = [5,6,2,1,3,-10,3,2,5]
let array3 = [1,2,3,4,5,6,7,8,9,10]
console.log( array);
console.log('Merge: -->',mergeSort(array));

console.log(array1);
console.log('Merge: -->',mergeSort(array1));
console.log( array2);
console.log('Merge: -->',mergeSort(array2));

console.log( array3);
console.log('Merge: -->',mergeSort(array3));

  function mergeSort(array){
    let newArray = [];
      if(array.length < 2 )
        return array;
     let arrayHolder1 = (mergeSort(array.slice(0,array.length/2))) 
     let arrayHolder2 = (mergeSort(array.slice(array.length/2)));
  if(arrayHolder1.length>1 || arrayHolder2.length>1){
  while(arrayHolder1.length != 0 && arrayHolder2.length !=0){
        if(arrayHolder1[0] < arrayHolder2[0]){
            newArray.push(arrayHolder1.shift());
        }
        else{
          newArray.push(arrayHolder2.shift());
        }
         if(arrayHolder1.length == 0 ){
           return newArray.concat(arrayHolder2);
        }
         if(arrayHolder2.length == 0){
         return newArray.concat(arrayHolder1);
        }
      }
}
     else if(arrayHolder1[0] > arrayHolder2[0]){
         return   arrayHolder2.concat(arrayHolder1);
     } 
     return  arrayHolder1.concat(arrayHolder2);
   

  }

