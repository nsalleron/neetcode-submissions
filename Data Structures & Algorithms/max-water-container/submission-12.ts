class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let l = 0
        let r = heights.length - 1

        let maxArea = 0

        while(l < r) {
            const currentHeight = Math.min(heights[l], heights[r])
            const currentWith = r - l
            const currentArea = currentHeight * currentWith

            maxArea = Math.max(maxArea, currentArea)

            if(heights[l] <= heights[r]){
                l++
            } else {
                r--
            }
        }

        return maxArea
    }
}
