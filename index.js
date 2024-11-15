// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
// Example 2:

// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.

let prices = [7, 1, 5, 3, 6, 4, 7]
const GetProfit = (prices) => {
  let minPrice = Infinity
  let maxPrice = 0
  let maxProfit = 0
  for (let i = 0; i < prices.length; i++) {
    minPrice = Math.min(minPrice, prices[i])
    maxPrice = prices[i] - minPrice
    maxProfit = Math.max(maxProfit, maxPrice)
  }

  return maxProfit
}

var containsDuplicate = function (nums = []) {
  let uniqSet = new Set()
  for (let i = 0; i < nums.length; i++) {

    if (uniqSet.has(nums[i])) {
      return true
    }
    uniqSet.add(nums[i])
  }
  return false
};
console.log(containsDuplicate(prices))
function maxSubArray(nums) {
  // debugger
  let maxSum = nums[0];
  let currentSum = nums[0];

  // Track start and end indices of the maximum subarray
  let maxStart = 0;    // Start index of the maximum sum subarray
  let maxEnd = 0;      // End index of the maximum sum subarray
  let currentStart = 0; // Temporary start index of the current subarray

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > currentSum + nums[i]) {
      // Start a new subarray at the current element
      currentSum = nums[i];
      currentStart = i; // Update the start index of the current subarray
    } else {
      // Extend the current subarray
      currentSum += nums[i];
    }

    if (currentSum > maxSum) {
      maxSum = currentSum;
      maxStart = currentStart; // Update start index of max subarray
      maxEnd = i;               // Update end index of max subarray
    }
  }

  // Retrieve the subarray using the start and end indices
  const maxSubarray = nums.slice(maxStart, maxEnd + 1);
  console.log(`Max Subarray:`, maxSubarray);
  return maxSum;
}

let nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubArray(nums));

// function nextGreatestLetter(arr = [2, 3, 5, 8, 8, 8, 8, 8, 11], target = 8) {

//   let ans = [-1, -1]
//   let first = getFirstAndLast(arr, target, true)
//   let second = getFirstAndLast(arr, target)
//   ans[0] = first
//   ans[1] = second
//   function getFirstAndLast(arr, target, firstOccurence = false) {
//     // debugger
//     let ans = -1
//     let start = 0
//     let end = arr.length - 1

//     while (start <= end) {
//       let mid = Math.floor((start + end) / 2)
//       if (target < arr[mid]) {
//         end = mid - 1
//       } else if (target > arr[mid]) {
//         start = mid + 1
//       } else {
//         ans = mid
//         if (firstOccurence) {
//           end = mid - 1
//         } else {
//           start = mid + 1
//         }
//       }

//     }

//     return ans

//   }


//   return ans
// }
// console.log(nextGreatestLetter())
function nextGreatestLetter(arr , target = 400) {
  let start = 0
  let end = 1
  while (target > arr[end]) {
    // if (start < target) {
      start = end + 1
      end = end * 2
    // }
  }


  let ans = getFirstAndLast(arr, target, start, end)

  function getFirstAndLast(arr, target, start, end) {
    let ans = -1
    while (start <= end) {
      let mid = Math.floor((start + end) / 2)
      if (target < arr[mid]) {
        end = mid - 1
      } else if (target > arr[mid]) {
        start = mid + 1
      } else {
        return mid
      }
    }
    return ans
  }
  return ans
}
let arr = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
  41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
  61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80,
  81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100,
  101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120,
  121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140,
  141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160,
  161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180,
  181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200,
  201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220,
  221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240,
  241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 256, 257, 258, 259, 260,
  261, 262, 263, 264, 265, 266, 267, 268, 269, 270, 271, 272, 273, 274, 275, 276, 277, 278, 279, 280,
  281, 282, 283, 284, 285, 286, 287, 288, 289, 290, 291, 292, 293, 294, 295, 296, 297, 298, 299, 300,
  301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 312, 313, 314, 315, 316, 317, 318, 319, 320,
  321, 322, 323, 324, 325, 326, 327, 328, 329, 330, 331, 332, 333, 334, 335, 336, 337, 338, 339, 340,
  341, 342, 343, 344, 345, 346, 347, 348, 349, 350, 351, 352, 353, 354, 355, 356, 357, 358, 359, 360,
  361, 362, 363, 364, 365, 366, 367, 368, 369, 370, 371, 372, 373, 374, 375, 376, 377, 378, 379, 380,
  381, 382, 383, 384, 385, 386, 387, 388, 389, 390, 391, 392, 393, 394, 395, 396, 397, 398, 399, 400,
  401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 419, 420,
  421, 422, 423, 424, 425, 426, 427, 428, 429, 430, 431, 432, 433, 434, 435, 436, 437, 438, 439, 440,
  441, 442, 443, 444, 445, 446, 447, 448, 449, 450, 451, 452, 453, 454, 455, 456, 457, 458, 459, 460,
  461, 462, 463, 464, 465, 466, 467, 468, 469, 470, 471, 472, 473, 474, 475, 476, 477, 478, 479, 480,
  481, 482, 483, 484, 485, 486, 487, 488, 489, 490, 491, 492, 493, 494, 495, 496, 497, 498, 499, 500,
  501, 502, 503, 504, 505, 506, 507, 508, 509, 510, 511, 512, 513, 514, 515, 516, 517, 518, 519, 520,
  521, 522, 523, 524, 525, 526, 527, 528, 529, 530, 531, 532, 533, 534, 535, 536, 537, 538, 539, 540,
  541, 542, 543, 544, 545, 546, 547, 548, 549, 550, 551, 552, 553, 554, 555, 556, 557, 558, 559, 560,
  561, 562, 563, 564, 565, 566, 567, 568, 569, 570, 571, 572, 573, 574, 575, 576, 577, 578, 579, 580,
  581, 582, 583, 584, 585, 586, 587, 588, 589, 590, 591, 592, 593, 594, 595, 596, 597, 598, 599, 600,
  601, 602, 603, 604, 605, 606, 607, 608, 609, 610, 611, 612, 613, 614, 615, 616, 617, 618, 619, 620,
  621, 622, 623, 624, 625, 626, 627, 628, 629, 630, 631, 632, 633, 634, 635, 636, 637, 638, 639, 640,
  641, 642, 643, 644, 645, 646, 647, 648, 649, 650, 651, 652, 653, 654, 655, 656, 657, 658, 659]

console.log(nextGreatestLetter(arr),'infinee')


function peakElement(arr = [0, 1, 2, 3, 4, 5, 4, 3, 2, 1]) {
  let start = 0
  let end = arr.length - 1
  while (start <= end) {

    let mid = Math.floor((start + end) / 2)
    console.log(arr[mid], arr[mid + 1])
    if (arr[mid] > arr[mid + 1]) {
      end = mid - 1
    } else if (arr[mid] < arr[mid + 1]) {
      start = mid + 1
    }

  }

  return start


}
console.log(peakElement())

const search = function (arr, target) {

  const pivot = (arr) => {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
      let mid = Math.floor((start + end) / 2);

      if (mid < end && arr[mid] > arr[mid + 1]) {
        return mid;
      }
      if (mid > start && arr[mid] < arr[mid - 1]) {
        return mid - 1;
      }
      if (arr[mid] < arr[start]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
    return -1;
  };


  const binarySearch = (arr, target, start, end) => {
    while (start <= end) {
      let mid = Math.floor((start + end) / 2);
      if (arr[mid] === target) {
        return mid;
      } else if (arr[mid] > target) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
    return -1;
  };


  let pivi = pivot(arr);

  if (pivi === -1) {
    return binarySearch(arr, target, 0, arr.length - 1);
  }


  let firstSearch = binarySearch(arr, target, 0, pivi);
  if (firstSearch !== -1) {
    return firstSearch;
  }
  return binarySearch(arr, target, pivi + 1, arr.length - 1);
};


let array = [3, 4, 5, 6, 7, 0, 1, 2];
let target = 1;
console.log(search(array, target));

// 2d array 
function flattenArray(arr, target) {

  let rows = arr.length;
  let cols = arr[0].length;
  let start = 0;
  let end = rows * cols - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    let row = Math.floor(mid / cols);
    let col = mid % cols;

    if (arr[row][col] === target) {
      return [row, col];
    } else if (arr[row][col] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return -1;  // Target not found
}

let arr1 = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16]
];

console.log(flattenArray(arr1, 10));
// bubble sorting
function bubble(arr) {
  for (let i = 0; i < arr.length; i++) {
    let isSwapped = true
    for (let j = 1; j < array.length - i; j++) {
      if (arr[j] < arr[j - 1]) {
        isSwapped = false
        let temp = arr[j - 1]
        arr[j - 1] = arr[j]
        arr[j] = temp
      }

    }
    if (isSwapped) {
      break
    }

  }
  return arr
}
// console.log(bubble([3,5,1,2,4]))


function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let lastIndex = arr.length - i - 1
    let maxElement = getMaxIndex(arr, 0, lastIndex)
    swapIndexes(arr, maxElement, lastIndex)
  }
  function getMaxIndex(arr, start, end) {
    let max = start
    for (let i = start; i <= end; i++) {

      if (arr[max] < arr[i]) {
        max = i
      }

    }
    return max
  }
  function swapIndexes(arr,first,last) {
    let temp = arr[first]
    arr[first] = arr[last]
    arr[last] = temp
  }
  return arr
}
console.log(selectionSort([3, 5, 1, 2, 4]))


function nextGreatestLetter1(arr  , target = 1000 ) {
  let start = 0
  let end = 1
  while (  target > arr[end]  ) {
    
      // let temp = end +1
      start = end + 1  

      end = end * 2

      // start = temp
       
    
  }


  let ans = getFirstAndLast(arr, target, start, end)

  function getFirstAndLast(arr, target, start, end) {
 
    let ans = -1
    while (start <= end) {
      let mid = Math.floor((start + end) / 2)
     if(arr[mid] === target){
      return mid 
     }else if ( arr[mid] > target){
      end = mid -1
     }else{
      start = mid +1
     }
    }
    return ans
  }
  return ans
}
let arr2 = [
  1, 2, 3, 4, 5, 6, 7, 8, 9]

console.log(nextGreatestLetter1(arr ),'infinee')