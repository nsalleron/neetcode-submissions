class Solution {
    /**
     * @param {number[]} asteroids
     * @return {number[]}
     */
    asteroidCollision(asteroids) {
        const stack = []

        for(let c of asteroids){
            while(stack.length !== 0 && c < 0 && stack[stack.length - 1 ] > 0){
                let diff = c + stack[stack.length - 1 ]
                if(diff < 0){
                    stack.pop()
                } else if (diff > 0){
                    c = 0
                } else {
                    c = 0
                    stack.pop()
                }
            }
            if(c !== 0) stack.push(c)
        }

        return stack
    }
}
