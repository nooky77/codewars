// Find the number of arguments passed to the function

const args_count = (...args) => args.length;

console.log(args_count(1, 2), 2);
console.log(args_count(), 0);
console.log(args_count("A", "B", "C"), 3);
console.log(args_count(["foo", "bar"]), 1);
