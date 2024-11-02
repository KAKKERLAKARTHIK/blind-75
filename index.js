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