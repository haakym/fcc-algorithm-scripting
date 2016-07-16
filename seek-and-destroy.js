// https://www.freecodecamp.com/challenges/seek-and-destroy

function destroyer(arr) {
  var destroyerArgs = Array.prototype.slice.call(arguments, 1);
  
  return arr.filter(function(val) {
    return !destroyerArgs.filter(function(arg) {
        return arg === val;
      }).length;  
  });
}
