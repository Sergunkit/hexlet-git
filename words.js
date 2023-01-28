export default (sentence) => {
    if (sentence.length == 0) { return {}; }
    const sentence1 = sentence.toLowerCase().split(' ');
    const result = {};
   
    for (const word of sentence1) {
      result[word] = (result[word] ?? 0) + 1;
    }
    return result;
};
