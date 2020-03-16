module.exports = 
function countCats(backyard) {
  var count = 0;
  for (var i = 0; i < backyard.length; i++) {
    for (var j = 0; j < backyard[i].length; j++) {
      if (typeof(backyard[i][j]) == 'string') {
        if (backyard[i][j] == '^^') {
          count ++;
        }
    }
    }
  }
  return count;
}