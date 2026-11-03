class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height: number[]): number {
        let res = 0;
        let maxLeft = 0;
        let maxRight = 0;

        let l = 0;
        let r = height.length - 1;

        while (l < r) {
            const minHeight = Math.min(maxLeft, maxRight);
            let currentHeight = height[maxLeft <= maxRight ? l : r];
            let trappedWater = minHeight - currentHeight;

            // console.log({trappedWater, minHeight, currentHeight})

            if (trappedWater > 0) {
                res += trappedWater;
            }

            maxLeft = Math.max(maxLeft, height[l]);
            maxRight = Math.max(maxRight, height[r]);

            if (maxLeft <= maxRight) {
                l++;
            } else {
                r--;
            }
        }

        return res;
    }
}
