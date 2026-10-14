class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures: number[]): number[] {
        const stack = []
        const res = new Array(temperatures.length).fill(0)

        for(let i = 0; i < temperatures.length ; i ++){
            const t = temperatures[i]
            while(stack.length > 0 && t > stack[stack.length -1 ][0]){
                const [, index] = stack.pop()
                res[index] = i - index
            }
            stack.push([t, i])
        }

        return res
    }
}
