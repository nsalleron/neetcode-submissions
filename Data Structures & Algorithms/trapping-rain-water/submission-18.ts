class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height: number[]): number {
        let l = 0
        let r = height.length - 1

        let maxLeft = 0
        let maxRight = 0

        let trappedWater = 0

        while(l <= r){
            let trap = 0
            if(maxLeft <= maxRight){
                maxLeft = Math.max(maxLeft, height[l])
                trap = Math.min(maxLeft, maxRight) - height[l]
                l++

            } else {
                maxRight = Math.max(maxRight, height[r])
                trap = Math.min(maxLeft, maxRight) - height[r]
                r--
            }

            if(trap > 0){
                trappedWater += trap
            }

        }

        return trappedWater

    }
}
