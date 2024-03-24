//You have an array of elemetn return the index of the targe value in the array
export function search(arr, target, start = 0, end = arr.length - 1) {

    if (start > end) {
        console.log('Not found');
        return -1;
    }

    const middle = Math.floor((start + end) / 2);

    if (arr[middle] === target) {
        console.log(`${target} Found at index ${middle}`);
        return middle;
    }

    if (arr[middle] > target) {
        return search(arr, target, start, middle - 1);
    }

    if (arr[middle] < target) {
        return search(arr, target, middle + 1, end)
    }
}
const arr = ['a', 'b', 'c', 'd', 'x', 'y', 'z']
console.log(search(arr, 'x'))    