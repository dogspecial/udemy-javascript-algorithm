function validAnagram(word1, word2){
    if (word1.length !== word2.length) {
        return false;
    }

    const anagram1 = {};
    const anagram2 = {};

    for (const word of word1) {
        anagram1[word] = (anagram1[word] || 0) + 1;
    }

    for (const word of word2) {
        anagram2[word] = (anagram2[word] || 0) + 1;
    }

    console.log(anagram1)
    console.log(anagram2)

    const keys = Object.keys(anagram1);

    for (const key of keys) {
        if (anagram1[key] !== anagram2[key]) {
            console.log('anagram not match!')
            return false;
        }
    }

    console.log('anagram match!')
    return true;


  }
  
  validAnagram('anagram', 'nagarae');
  