module.exports = function solveEquation(equation) {
  var a = '';
  var b = '';
  var c = '';
  var str = '';
  var arr = [];
  var D = 0;
  for (let y = 0; y < equation.length; y++) {
      if (equation[y] != ' ') {
          str += equation[y];
      }

  }
  for (var i = 0; str[i] != '*'; i++) {
      a += str[i];
  }

  for (i += 4; str[i] != '*'; i++) {
      b += str[i];
  }
  for (i += 2; i < str.length; i++) {
      c += str[i];
  }
  a = +a;
  b = +b;
  c = +c;

  D = Math.pow(b, 2) - 4 * a * c;
  arr[0] = Math.round((-b + Math.round(Math.sqrt((D)))) / (2 * a));
  arr[1] = Math.round((-b - Math.round(Math.sqrt((D)))) / (2 * a));
  arr.sort(function(a, b){return a - b});
  return arr;
}
