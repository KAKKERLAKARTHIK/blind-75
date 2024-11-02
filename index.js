// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
// Example 2:

// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.

let prices = [7,1,5,3,6,4,7]
const GetProfit=(prices)=>{
    let minPrice  = Infinity
    let maxPrice = 0
    let maxProfit = 0
 for(let i=0 ;i < prices.length ; i++){
    minPrice= Math.min(minPrice,prices[i])
    maxPrice = prices[i] - minPrice
    maxProfit=  Math.max(maxProfit,maxPrice)
 }

return maxProfit
}
 
var containsDuplicate = function(nums =[]) {
 let uniqSet = new Set()
    for(let i = 0 ; i < nums.length ; i++){
         
        if(uniqSet.has(nums[i])){
        return true
        }
        uniqSet.add(nums[i])
    }
    return false
};
console.log(containsDuplicate(prices))
function maxSubArray(nums) {
    debugger
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