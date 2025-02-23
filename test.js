function processNumbers(arr) {
    if (!Array.isArray(arr)) {
      throw new Error('Parameter must be an array.');
    }
  
    if (!arr.every(item => typeof item === 'number')) {
      throw new Error('All elements in the array must be numbers.');
    }
  
    console.log('Valid number array:', arr);
  }
  
  processNumbers([1, 2, 3]);    // ✅ Valid
  processNumbers([1, '2', 3]);  // ❌ Error (string inside array)
  processNumbers('not array');  // ❌ Error
  processNumbers([]);           // ✅ Empty array is considered valid
  