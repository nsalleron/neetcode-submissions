class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        let maxArea = 0
        let stack = [] // pair: (index, height)
        for(let i = 0; i < heights.length; i ++){
           let height = heights[i]
           let start = i
           while (stack.length !== 0 && stack[stack.length -1][1] > height){
                let [index, height] = stack.pop()
                maxArea = Math.max(maxArea, height * (i - index))
                start = index
           }
           stack.push([start, height])
        }

        for(let i = 0; i < stack.length; i ++){
            let [index, height] = stack[i]
            maxArea = Math.max(maxArea, height * (heights.length - index))
        }

        return maxArea
        
    }
}
