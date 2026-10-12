class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let currentMaxArea = 0
        let l = 0
        let r = heights.length - 1

        while(l < r){

            const diffRightLeft = r - l
            const heighestPossibleValue = Math.min(heights[l], heights[r])

            const newMaxArea = diffRightLeft * heighestPossibleValue

            if(currentMaxArea < newMaxArea){
                currentMaxArea = newMaxArea
            }

            if(heights[l] <= heights[r]){
                l++
            } else {
                r--
            }
            
        }

        return currentMaxArea
    }
}
