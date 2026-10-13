class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {

        let l = 0
        let r = heights.length - 1
        let maxArea = 0
        while(l < r){
            const currentMinHeight = Math.min(heights[l], heights[r])
            const currentDist = r - l

            maxArea = Math.max(maxArea, currentMinHeight * currentDist)

            if(heights[l] > heights[r])
                r--
            else
                l++

        }

        return maxArea
    }
}
