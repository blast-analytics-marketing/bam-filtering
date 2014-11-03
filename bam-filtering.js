/**
 * An array of filters that support nested heavly nested attributes
 * @version v0.0.1 - 2014-10-14 
 * @link https://github.com/a8m/angular-filter
 * @author Joshua S. Github: Naysayer
 * @license MIT License, http://www.opensource.org/licenses/MIT
 * Brought to you by Blast Analytics and Marketing
 */

(function ( window, angular, undefined ) {

'use strict';

// first argument is the object, the second is an array of strings 
function checkNested(obj /*, [level1, level2, ... levelN]*/) {
  // we take in the arguments, convert them into an array, then flatten that 
  // array. By doing this we can accept arrays as a second argument. 
  var args = Array.prototype.slice.call(arguments),
      flatArgs = [].concat.apply([], args),
      obj = flatArgs.shift();

  for (var i = 0; i < flatArgs.length; i++) {
    if (!obj || !obj.hasOwnProperty(flatArgs[i])) {
      return false;
    }
    obj = obj[flatArgs[i]];
  }
  return true;
};

function accessNestedAttributes(obj /*, [level1, level2, ... levelN]*/) {
  var args = Array.prototype.slice.call(arguments),
      flatArgs = [].concat.apply([], args),
      obj = flatArgs.shift();

  for (var i = 0; i < flatArgs.length; i++) {
    obj = obj[flatArgs[i]];
  }
  return obj;
};

function nestedAttributeStringWordCount(item, fields) {
  return String(accessNestedAttributes(item, fields)).split(" ").length;
};

/**
  The argument is a callback function. Needs to return a boolean in order
  for the filter to function properyly. 
 */
function numericBaseFilter(callback){
  return function(items, fields, numberValue) {

    numberValue = parseFloat(numberValue);
    
    if (typeof numberValue == "number" && isNaN(numberValue)) {
      return items;
    };

    return filterForDesiredItems(items, fields, numberValue, callback);    
  };
};

function filterForDesiredItems(items, fields, numberValue, callback){
  var filtered = [];

  angular.forEach(items, function(item) {
    if (checkNested(item, fields)) {

      if ( callback(item, fields, numberValue) ) {
        filtered.push(item);
      };

    };
  });
  return filtered;
};

angular.module('bam.numericalComparisonFilters', [])
  .filter('bamGreaterThan', function() {
    return numericBaseFilter(function(item, fields, numberValue){
      return accessNestedAttributes(item, fields) > numberValue;
    });
  })
  .filter('bamLessThan', function() {
    return numericBaseFilter(function(item, fields, numberValue){
      return accessNestedAttributes(item, fields) < numberValue;
    });
  });
 
angular.module('bam.wordCountFilters', [])
  .filter('bamWordCountGreaterThan', function() {
    return numericBaseFilter(function(item, fields, numberValue){
      return nestedAttributeStringWordCount(item, fields) > numberValue;
    });
  })
  .filter('bamWordCountLessThan', function() {
    return numericBaseFilter(function(item, fields, numberValue){
      return nestedAttributeStringWordCount(item, fields) < numberValue;
    });
  });

angular.module('bam.filtering', [

  'bam.numericalComparisonFilters',
  'bam.wordCountFilters'

]);
})( window, window.angular );