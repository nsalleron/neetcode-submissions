class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const res = Array.from({length: temperatures.length}, () => 0)
        const stack = [] // Pair, index + temp

        for(let i = 0; i < temperatures.length; i++){
            const t = temperatures[i]
            while(stack.length > 0 && t > stack[stack.length -1][1]){
                const [index, _] = stack.pop()
                res[index] = i - index


            }
            stack.push([i, t])
        }

        return res




    }
}
