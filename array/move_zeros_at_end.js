// // A JavaScript program to move all zeroes at the end of array
//
// // Function which pushes all zeros to end of an array.
// function pushZerosToEnd(arr, n)
// {
//     let count = 0; // Count of non-zero elements
//
//     // Traverse the array. If element encountered is non-
//     // zero, then replace the element at index 'count'
//     // with this element
//     for (let i = 0; i < n; i++)
//         if (arr[i] != 0)
//             arr[count++] = arr[i]; // here count is
//                                 // incremented
//
//     // Now all non-zero elements have been shifted to
//     // front and 'count' is set as index of first 0.
//     // Make all elements 0 from count to end.
//     while (count < n)
//         arr[count++] = 0;
// }
//
// // Driver code
//     let arr = [1, 9, 8, 4, 0, 0, 2, 7, 0, 6, 0, 9];
//     let n = arr.length;
//     pushZerosToEnd(arr, n);
//     document.write("Array after pushing all zeros to end of array :<br>");
//     for (let i = 0; i < n; i++)
//         document.write(arr[i] + " ");

//============================================================================================

// A JavaScript program to move all zeroes at the end of array

// Function which pushes all zeros to end of an array.
function pushZerosToEnd(arr, n)
{
    let count = 0; // Count of non-zero elements

    // Traverse the array. If element encountered is non-
    // zero, then replace the element at index 'count'
    // with this element
    for (let i = 0; i < n; i++){
        if(arr[i] != 0){
          let temp = arr[count];
          arr[count] = arr[i];
          arr[i] = temp;
          count++;
        }
    }

}

// Driver code
    let arr = [0,1, 9, 8, 4, 0, 0, 2, 7, 0, 6, 0, 9];
    let n = arr.length;
    pushZerosToEnd(arr, n);
    document.write("Array after pushing all zeros to end of array :<br>");
    for (let i = 0; i < n; i++)
        document.write(arr[i] + " ");
