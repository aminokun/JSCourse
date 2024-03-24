// Give an array of integers calculate the sum of the array

export function sum(arr) {
    let total = 0;

    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}
