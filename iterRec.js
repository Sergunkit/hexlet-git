const smallestDivisor = (num) => {
    // BEGIN (write your solution here)
    if (num === 1) { return 1; }
    const iter = (num, count) => {
      if (num === count) { return count; }
      if (num % count !== 0) { return iter(num, count + 1); }
      return count;
    }
    return iter(num, 2);
};
console.log(smallestDivisor(51));
