// naive way
function addUpTo($n) {
    let total = 0;
    for (let i = 0; i <= $n; i++){
        total += i;
    }
    return total;
}
// console.log(addUpTo(3))
// console.log(addUpTo(100))

// more optimized solution
function addUpToBest($n) {
    return $n * ($n + 1) / 2;
}

// console.log(addUpTo(3))
// console.log(addUpTo(100))

// CHECK THE PERFORMANCE OF THESE FUNCTIONS

// records the timestamp (in milliseconds) at the start of the function execution,
// just before calling addUpToBest() function
let __t1 = performance.now();
// addUpTo(1000000000)
addUpToBest(1000000000)
// This records the timestamp after the function execution completes.
let __t2 = performance.now();

// The difference between the two timestamps (__t2 - __t1) gives you the time taken
// to execute the addUpToBest(1000000000) function.
// Dividing it by 1000 converts the time from milliseconds to seconds, which is then printed out.
console.log(`Time Elapsed: ${(__t2 - __t1) / 1000} seconds.`)
