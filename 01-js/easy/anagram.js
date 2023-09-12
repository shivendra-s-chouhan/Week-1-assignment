/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
 if(str1.length != str2.length){
    return false;
  }
  // for(let i = 0; i < str1.length; i++){
  //     if(str2.includes(str1[i] && str1.includes(str2[i]))){
  //         continue;
  //     }else{
  //         false;
  //     }
  // }
  let str1Lowercase = str1.toLowerCase();
  let str2Lowercase = str2.toLowerCase();
  let str1New = str1Lowercase.split('').sort().join('');
  let str2New = str2Lowercase.split('').sort().join('');
  if(str1New === str2New){
      return true;
  }else{
      return false;
  }
}

module.exports = isAnagram;
