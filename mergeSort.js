let array = [5,6,2,1,3,11,9,8]
let array1 = [5,6,2,1,3,10]
let array2 = [5,6,2,1,3,-10,3,2,5,]
console.log('Orignal', array);
console.log('Merge: :)',mergeSort(array));

console.log('Orignal', array1);
console.log('Merge: :)',mergeSort(array1));
console.log('Orignal', array2);
console.log('Merge: :)',mergeSort(array2));



  function mergeSort(array){
    let newArray = [];
      if(array.length < 2 )
        return array;
     let arrayHolder1 = (mergeSort(array.slice(0,array.length/2))) 
     let arrayHolder2 = (mergeSort(array.slice(array.length/2)));
if(arrayHolder1.length>1 || arrayHolder2.length>1 ){
let i = 0; let inner = 0;
  while(arrayHolder1.length != 0 && arrayHolder2.length !=0){
        if(arrayHolder1[i] < arrayHolder2[inner]){
            newArray.push(arrayHolder1.shift());
        }
        else{
          newArray.push(arrayHolder2.shift());
        }
         if(arrayHolder1.length == 0 && arrayHolder2[0] != 'undefined'){
          let breaks = arrayHolder2.length;
          for(i = 0; i< breaks;i++){
            newArray.push(arrayHolder2.shift());
          }
        }
         if(arrayHolder2.length == 0 && arrayHolder1[0] != 'undefined'){
          let breaks = arrayHolder1.length;
          for(i = 0; i< breaks;i++)
          newArray.push(arrayHolder1.shift());
        }
       
      }
  return newArray;
}
     else if(arrayHolder1[0] > arrayHolder2[0]){
    return   arrayHolder2.concat(arrayHolder1);

     } else {
     return  arrayHolder1.concat(arrayHolder2);
     }

  }

