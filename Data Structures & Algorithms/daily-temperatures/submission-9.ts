class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures: number[]): number[] {
        const stack = []
        const res = Array(temperatures.length).fill(0)

        for(let i = 0; i < temperatures.length; i++){
            const t = temperatures[i]

            while(stack.length > 0 && t > stack[stack.length - 1][0]){
                const [, tempIndex] = stack.pop()
                res[tempIndex] = i - tempIndex

            }
            stack.push([t, i])
        }

        return res
    }
}
