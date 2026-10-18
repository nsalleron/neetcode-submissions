class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights: number[]): number {
        const stack = []
        let res = 0

        for(let i = 0; i < heights.length; i++){
            let start = i
            while(stack.length > 0 && stack[stack.length - 1][0] >= heights[i]){
                const [height, index] = stack.pop()
                res = Math.max(res, (i - index) * height)
                start = index
            }
            stack.push([heights[i], start])
        }

        for(let [height, index] of stack){
            res = Math.max(res,(heights.length - index) * height)
        }

        return res

    }
}
