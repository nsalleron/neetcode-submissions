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
                const [previousSize, previousIndex ] = stack.pop()
                maxArea = Math.max(maxArea, (i - previousIndex) * previousSize)
                start = previousIndex
            }

            stack.push([heights[i], start])
        }

        console.log(stack)

        while(stack.length > 0){
            const [size, index] = stack.pop()
            maxArea = Math.max(maxArea, (heights.length - index) * size)
        }

        return maxArea

    }
}
