class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target: number, position: number[], speed: number[]): number {
        const monotonicStack = []
        const posWithSpeed = position.map((pos, index) => [pos,speed[index]]).sort((a, b) => a[0] - b[0])


        for(let i = 0; i < posWithSpeed.length; i++){
            const [pos, speed] = posWithSpeed[i]
            const iterations = ((target - pos) / speed)
            while(monotonicStack.length > 0 && monotonicStack[monotonicStack.length - 1] <= iterations){
                monotonicStack.pop()
            }
            monotonicStack.push(iterations)
        }

        return monotonicStack.length
    

    }
}
