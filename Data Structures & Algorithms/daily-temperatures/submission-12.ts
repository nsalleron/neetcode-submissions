class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures: number[]): number[] {
        const stack = []
        const res = new Array(temperatures.length).fill(0)
        for(let i = 0; i < temperatures.length; i++){
            const currentTemp = temperatures[i]

                while(stack.length > 0 && currentTemp > stack[stack.length - 1][0]){
                    const [,previousTempIndex] = stack.pop()
                    res[previousTempIndex] = i - previousTempIndex
                }
            stack.push([currentTemp, i])
        }
        
        return res
    }
}
