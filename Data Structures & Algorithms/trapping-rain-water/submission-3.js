class Solution {
    /**
     * @param {number[]}
     * @return {number}
     */
    trap(height) {
        // if(height.length === 0){
        //     return 0
        // }

        // height = [0,1,0,2,1,0,1,3,2,1,2,1]
        let l = 0
        let r = height.length - 1
        let maxL = height[l]
        let maxR = height[r]
        let res = 0
        while (l < r){
            if(maxL < maxR){
                l++
                maxL = Math.max(maxL, height[l])
                res += maxL - height[l]
            } else {
                r--
                maxR = Math.max(maxR, height[r])
                res += maxR - height[r]
            }
        }
        return res
    }
}