class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {

        let l = 0
        let r = heights.length - 1
        let res = 0
        while(l < r){
            const maxLeft = heights[l]
            const maxRight = heights[r]

            const height = Math.min(maxLeft, maxRight)
            const dist = r - l

            res = Math.max(res, height * dist)

            if(maxLeft < maxRight){
                l++
            }else{
                r--
            }
        }

        return res
    }
}
