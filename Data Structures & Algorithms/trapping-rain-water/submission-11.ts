class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height: number[]): number {
        
        let maxLeft = height[0]
        let maxRight = height[height.length - 1]

        let l = 0
        let r = height.length - 1

        let res = 0

        while(l < r){
            if(maxLeft <= maxRight){
                l++
                maxLeft = Math.max(maxLeft, height[l])
                res += maxLeft - height[l]
            } else {
                r--
                maxRight = Math.max(maxRight, height[r])
                res += maxRight - height[r]
            }
        }

        return res
    }
}
