class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures: number[]): number[] {
        const stack = []

        const res = new Array(temperatures.length).fill(0)
        
        for(let i = 0; i < temperatures.length; i++){
            while(stack.length > 0 &&
                stack[stack.length - 1][0] < temperatures[i]
            ) {
                const [, index] = stack.pop()
                res[index] = i - index
            }

            stack.push([temperatures[i], i])
        }

        return res

    }
}
