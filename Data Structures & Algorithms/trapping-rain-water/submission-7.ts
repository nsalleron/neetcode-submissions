class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height: number[]): number {
        let l = 0
        let r = height.length - 1

        let maxLeft = height[0]
        let maxRight = height[height.length -1]

        let res = 0

        while(l < r){
            if(maxLeft <= maxRight){
                l++
                maxLeft = Math.max(height[l], maxLeft)
                res += maxLeft - height[l]
            } else {
                r--
                maxRight = Math.max(height[r], maxRight)
                res += maxRight - height[r]
            }
        }

        return res

    }
}
