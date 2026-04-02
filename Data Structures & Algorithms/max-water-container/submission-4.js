class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let l = 0
        let r = heights.length - 1
        let maxArea = 0
        while(l < r){
            const heightLeft = heights[l]
            const heightRight = heights[r]
            const product = (r - l) * Math.min(heightLeft, heightRight)

            if(product > maxArea){
                maxArea = product
            }
            
            if(heightLeft < heightRight){
                l++
            } else {
                r--
            }
        }

        return maxArea
    }
}