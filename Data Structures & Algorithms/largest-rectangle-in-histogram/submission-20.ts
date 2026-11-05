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
            while(stack.length > 0 && stack[stack.length -1][0] >= heights[i]){
                const [h, startIndex] = stack.pop()
                maxArea = Math.max(maxArea, h * (i - startIndex))
                start = startIndex
            }

            stack.push([heights[i], start])
        }


        for(let [h, index] of stack){
            maxArea = Math.max(maxArea, h * (heights.length - index))
        }

        return maxArea
    }
}
