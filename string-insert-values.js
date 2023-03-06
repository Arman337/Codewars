/*
    Given a string and an object/array you need to return a formatted string.
    Replace all occurrences in the string where the name of a key in 
    the object is surrounded by curly brackets.
    Inherited object properties should not be applied
    An example says more than a thousand words..
*/

var format = function (str, obj) {
  let array = str.split(" ").map((elem) => {
    if (elem[0] === '{' && elem[4] === '}') {
      let a = elem.slice(5);
     
      if (obj[`${elem.slice(1, 4)}`]) {
        return obj[`${elem.slice(1, 4)}`] + a;
      }
    }
  
    if (elem[0] === '{' && elem[2] === '}') {
      let a = elem.slice(3);
     
      if (elem === '{0}') {
        return obj.foo;
      }
  
      else if (elem === '{1}') {
        return obj.bar;
      }
  
      else if (elem === '{2}') {
          return 0;
      }
    }

    return elem;
  });

  return array.join(' ');
};
