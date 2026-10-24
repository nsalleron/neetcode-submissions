class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights: number[]): number {
        const stack = []
        let maxArea = 0

        for(let i = 0; i < heights.length; i++){
            let start = i
            while(stack.length > 0 && stack[stack.length - 1][0] > heights[i]){
                const [previousSize,index] = stack.pop()
                maxArea = Math.max(maxArea, (i - index) * previousSize)
                start = index
            }
            stack.push([heights[i], start])
        }

        while(stack.length > 0){
            const [height, index] = stack.pop()
            maxArea = Math.max(maxArea, (heights.length - index) * height)
        }

        return maxArea
    }
}
