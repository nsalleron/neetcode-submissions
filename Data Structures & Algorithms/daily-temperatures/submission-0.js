class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const stack = []
        for(let i = 0; i < temperatures.length ; i++){
            let l = i
            let r = l + 1
            let foundTemperature = false
            while(r < temperatures.length + 1){
                if(temperatures[r] > temperatures[l]){
                    foundTemperature = true
                    break
                }else {
                    r++
                }
            }
            if(foundTemperature){
                stack.push(r - l)
            } else {
                stack.push(0)
            }
        }
        return stack 
    }
}
