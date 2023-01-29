var myArray = ['1', '2', '3', '4', '5'];
myArray.splice(1, 3, 'a', 'b', 'c', 'd');
// myArray é agora ["1", "a", "b", "c", "d", "5"]
/* 
  Este código iniciou no índice um (ou onde o "2" estava),
  removeu 3 elementos a partir dali, e então inseriu todos 
  os elementos consecutivos em seus lugares. 
*/

console.log(myArray);

