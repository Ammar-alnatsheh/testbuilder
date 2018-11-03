// Given a credit card number, this function should return a string with the
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy!
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.

  var number = cardNumber.length;
  if ( (number === 15) && (cardNumber.startsWith('34') || cardNumber.startsWith('37')) ){
    return 'American Express';
  } else if ( isDiscover(cardNumber) ){
    return 'Discover';
  }else if ( (number === 14) && (cardNumber.startsWith('38') || cardNumber.startsWith('39')) ){
    return 'Diner\'s Club';
  }else if ( isMasterCard(cardNumber) ){
    return 'MasterCard';
  }else if ( isMaestro(cardNumber) ){
    return 'Maestro';
  }else if ( isChinaUnionPay(cardNumber) ){
    return 'China UnionPay';
  }else if ( isSwitch(cardNumber) ){
    return 'Switch';
  }else if ( (number === 13 || number === 16 || number === 19 ) && cardNumber.startsWith('4') ){
    return 'Visa';
  }

};


function isDiscover(cardNumber) {
  var result = false;
  var prefix = ['6011', '644', '645', '646', '647', '648', '649', '65'];

  for (var i = 0; i < prefix.length; i++) {
    if (cardNumber.startsWith(prefix[i])) {
      result = true;
    }
  }

  if (cardNumber.length !== 16 && cardNumber.length !== 19) {
  	result = false;
  }
  return result;
}

function isMasterCard(cardNumber) {
  var result = false;
  var prefix = ['51', '52', '53', '54', '55'];

  for (var i = 0; i < prefix.length; i++) {
  	if (cardNumber.startsWith(prefix[i])) {
      result = true;
    }
  }

  if (cardNumber.length !== 16) {
  	result = false;
  }
  return result;
}

function isMaestro(cardNumber) {
  var result = false;
  var prefix = ['5018', '5020', '5038', '6304'];

  for (var i = 0; i < prefix.length; i++) {
  	if (cardNumber.startsWith(prefix[i])) {
      result = true;
    }
  }

  if (cardNumber.length < 12 || cardNumber.length > 19) {
  	result = false;
  }
  return result;
}

function isChinaUnionPay(cardNumber) {
  var result = false;
  //prefix1 622126-622925
  var prefix1 = parseInt(cardNumber.slice(0,6));
  if (prefix1 >= 622126 && prefix1 <= 622925){
    prefix1 = true;
  }else {
    prefix1 = false
  }
  //prefix2 624-626
  var prefix2 = parseInt(cardNumber.slice(0,3));
  if (prefix2 >= 624 && prefix2 <= 626){
    prefix2 = true;
  }else {
    prefix2 = false
  }
  //prefix3 6282-6288
  var prefix3 = parseInt(cardNumber.slice(0,4));
  if (prefix3 >= 6282 && prefix3 <= 6288){
    prefix3 = true;
  }else {
    prefix3 = false
  }

  result = prefix1 || prefix2 || prefix3 ;

  if (cardNumber.length < 16 || cardNumber.length > 19) {
    result = false;
  }
  return result;
}

function isSwitch(cardNumber) {
  var result = false;
  var prefix = ['4903', '4905', '4911', '4936', '4936', '564182', '633110', '6333', '6759'];

  for (var i = 0; i < prefix.length; i++) {
    if (cardNumber.startsWith(prefix[i])) {
      result = true;
    }
  }

  if (cardNumber.length !== 16 && cardNumber.length !== 18 && cardNumber.length !== 19) {
  	result = false;
  }

  return result;
}
