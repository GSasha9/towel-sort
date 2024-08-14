
module.exports = function towelSort (matrix) {
  if(!matrix || matrix.length == 0){
    return [];
  }
  let result = matrix[0];
  for(let i = 1; i < matrix.length; i++){
    console.log(i % 2);
    i % 2 != 0 ? result = result.concat(matrix[i].reverse()) : result = result.concat(matrix[i]);
  }
  return result;
}
