class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target: number, position: number[], speed: number[]): number {
        const stack = []
        const posWithSpeed = position.map((e, i) =>[e,speed[i]]).sort((a, b) => a[0] - b[0])

        console.log(posWithSpeed)

        for(let i = 0; i< posWithSpeed.length; i++){
            const currentArrivalTime = ((target - posWithSpeed[i][0]) / posWithSpeed[i][1])
            while(stack.length > 0 && stack[stack.length - 1] <= currentArrivalTime){ //On forme un groupe
                stack.pop()
            }
            stack.push(currentArrivalTime)
        }


        return stack.length
    }
}
