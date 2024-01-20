const getRandomSentence = (array) => {
    if (!Array.isArray(array) || array.length === 0) {
      throw new Error('Invalid array provided.');
    }
    const index = Math.floor(Math.random() * array.length); 

    return array[index];
  };
  
  export default getRandomSentence;