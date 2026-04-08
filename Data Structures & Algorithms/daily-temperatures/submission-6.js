class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const res = Array.from({length: temperatures.length}, () => 0)
        const stack = [] // pair temp, index
        for(let i = 0; i < temperatures.length; i++){
            const currentTemp = temperatures[i]
            while(stack.length > 0 && stack[stack.length - 1][0] < currentTemp){
                const [_, index] = stack.pop()
                res[index] = i - index
            }
            stack.push([currentTemp, i])
        }

        return res
    }
}
