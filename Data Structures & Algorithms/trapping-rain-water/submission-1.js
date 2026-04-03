class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        // height = [0,1,0,2,1,0,1,3,2,1,2,1]
        const maxLeft = [0] 
        let currentLeftMax = 0;
        for (let i = 0; i < height.length - 1  ; i++) {
            currentLeftMax = Math.max(currentLeftMax, height[i]);
            maxLeft.push(currentLeftMax);
        }
        let currentMaxRight = 0;
        const maxRight = new Array(height.length);
        
        for (let i = height.length - 1; i >= 0; i--) {
            maxRight[i] = currentMaxRight;
            currentMaxRight = Math.max(currentMaxRight, height[i]);
        }


        const currentMinMax = new Array(height.length)
        for (let i = 0; i < height.length; i++) {
            currentMinMax[i] = Math.min(maxLeft[i], maxRight[i])
        }

        let i = 0
        let sum = 0
        while(i < currentMinMax.length){
            let water = currentMinMax[i] - height[i]
            if (water > 0) sum += water
            i++
        }

        return sum
    }
}