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
            const leftHeight = heights[l]
            const rightHeight = heights[r]
            const product = (r - l) * Math.min(leftHeight,rightHeight)

            if(product > maxArea){
                maxArea = product
            }

            if (leftHeight < rightHeight){
                l++
            } else {
                r--
            }
        }

        return maxArea
    }
}
