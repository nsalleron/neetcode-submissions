class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures: number[]): number[] {

        const monotonicStack = []
        const res = new Array(temperatures.length).fill(0)
        for(let i = 0; i < temperatures.length ; i ++){
            const t = temperatures[i]
            while(monotonicStack.length > 0 && t > monotonicStack[monotonicStack.length -1][0]){
                const [, stackIndex] = monotonicStack.pop()
                res[stackIndex] = i - stackIndex 
            }
            monotonicStack.push([t, i])
        }

        return res

    }
}
