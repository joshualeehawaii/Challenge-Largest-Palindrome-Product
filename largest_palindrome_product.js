/*  function(digits)
 *
 *  @param {Number} digits         the amount of digits in each multiplicand
 *
 *  @return {Object} an object containing the two factors used to produce
 *                   the palindromeNumber and the palindromeNumber itself.
 */
module.exports = function(digits){
  var factor_0 = 0;
  var factor_1 = 0;
  var palindromeNumber = 0;
  var result = 0;
  var small = 10;
  var large = 999;

  var i, n, m, d, inf, sup, limit, number = 0;
  for (i = 1; i < digits; i += 1) {
      number = 10 * number + 9;
  }
  inf = number;
  sup = 10 * number + 9;
  console.log('this is inf = ', inf);
  console.log('this is sup = ', sup);

  for(var a = 0; a <= small; a++) {
    for(var b = 0; b <= large; b++) {
      //console.log('this is i = ', i);
      //console.log('this is j = ', j);
      result = a * b;
      //console.log('result = ',result);
    }
  }

  return {
    factor_0 : factor_0,
    factor_1 : factor_1,
    palindromeNumber : palindromeNumber
  };
};