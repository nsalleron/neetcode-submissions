class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target: number, position: number[], speed: number[]): number {
        const sortedCar = position.map((e, i) => [e, speed[i] ]).sort((a, b) => a[0] - b[0])
        const stack = []

        for(let [position, speed] of sortedCar ){
            const celerity = (target - position) / speed
            while(stack.length > 0 && stack[stack.length - 1] <= celerity){
                stack.pop()
            }
            stack.push(celerity)
        }

        console.log(stack)

        return stack.length
    }
}
