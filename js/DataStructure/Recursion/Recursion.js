/*
*
* Recursive Approach (Bonus)
*
* */
function reverseArray(arr, start = 0, end = arr.length - 1) {
    if (start >= end) return arr; // Base case

    // Swap elements
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;

    // Recur for the remaining part
    return reverseArray(arr, start + 1, end - 1);
}
console.log(reverseArray([10, 3, 7, 1, 9])); // Output: [9, 1, 7, 3, 10]

function factorial(n) {
    // Base case: factorial of 1 is 1
    if (n === 1) return 1;

    // Recursive case: n! = n * (n-1)!
    return n * factorial(n - 1);
}

console.log(factorial(2)); // Output: 120
/*
* factorial(5)
    return 5 * factorial(4)
        return 4 * factorial(3)
            return 3 * factorial(2)
                return 2 * factorial(1)
                    return 1 (base case)
                return 2 * 1 = 2
            return 3 * 2 = 6
        return 4 * 6 = 24
    return 5 * 24 = 120
* */

function sum(n) {
    // Base case: sum of 1 is 1
    if (n === 1) return 1;

    // Recursive case: sum(n) = n + sum(n-1)
    return n + sum(n - 1);
}
console.log(sum(5)); // Output: 15

/*
* sum(5)
    return 5 + sum(4)
        return 4 + sum(3)
            return 3 + sum(2)
                return 2 + sum(1)
                    return 1 (base case)
                return 2 + 1 = 3
            return 3 + 3 = 6
        return 4 + 6 = 10
    return 5 + 10 = 15
* */

// The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones
function fibonacci(n) {
    // Base cases: fibonacci(0) = 0, fibonacci(1) = 1
    if (n < 2) return n;

    // Recursive case: fibonacci(n) = fibonacci(n-1) + fibonacci(n-2)
    return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(6)); // Output: 8
/* fibonacci(6)
return fibonacci(5) + fibonacci(4)
    return fibonacci(4) + fibonacci(3)
        return fibonacci(3) + fibonacci(2)
            return fibonacci(2) + fibonacci(1)
                return fibonacci(1) + fibonacci(0)
                    return 1 (base case)
                    return 0 (base case)
                return 1 + 0 = 1
            return 1 + 1 = 2
        return 2 + 1 = 3
    return 3 + 2 = 5
return 5 + 3 = 8
* */
