const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5]; // clone and add

console.log(arr2); // [1, 2, 3, 4, 5]

//Useful for merging arrays: and objects

const ab = [1, 2];
const ba = [3, 4];
const cd = [...ab, ...ba]; // [1, 2, 3, 4]

const user4 = { name: 'Alice', age: 30 };
const updatedUser = { ...user4, age: 31, city: 'Seattle' };

console.log(updatedUser);
// { name: 'Alice', age: 31, city: 'Seattle' }


