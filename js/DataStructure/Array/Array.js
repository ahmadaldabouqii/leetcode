// Problem: Reverse an Array Without Using Built-in Functions

/*
** Time Complexity: O(n)
* We only loop through half of the array (n/2 swaps), so it’s linear time.
*
** Space Complexity: O(1)
* We’re using a constant amount of extra space (just a few variables).
* */
function reverseArray(arr)
{
    let start = 0;
    let end = arr.length - 1;

    while (start < end)
    {
        const tmp = arr[start]
        arr[start] = arr[end]
        arr[end] = tmp

        start++
        end--
    }
    return arr;
}
console.log(reverseArray([1, 2, 3, 4, 5]));

/*
*
* Recursive Approach (Bonus)
*
* */
function __reverseArray(arr, start = 0, end = arr.length - 1) {
    if (start >= end) return arr; // Base case

    // Swap elements
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;

    // Recur for the remaining part
    return __reverseArray(arr, start + 1, end - 1);
}
console.log(__reverseArray([10, 3, 7, 1, 9])); // Output: [9, 1, 7, 3, 10]

function transformArray(nums) {
    for(let i = 0; i < nums.length; i++) {
        nums[i] = Number(!(nums[i] % 2 === 0))
    }
    console.log(nums.sort())
    return nums.sort();
}
transformArray([4,3,2,1])
