const sequenceSum = (begin, end) => {
    // BEGIN (write your solution here)
    let curr = end;
    if (begin > curr) { return NaN };
    if (begin === curr) { return curr };
    return curr + sequenceSum(begin, curr - 1);
    // END
};
console.log(sequenceSum(3, 6))  