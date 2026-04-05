class Solution {
    /**
     * @param {number[]} asteroids
     * @return {number[]}
     */
    asteroidCollision(asteroids) {
        const stack = []
        if (asteroids.length > 0) stack.push(asteroids.shift())

        while(asteroids.length !== 0){
            const newAsteroid = asteroids.shift()
            let lastAsteroid = stack.pop()

            if(lastAsteroid === undefined) {
                stack.push(newAsteroid)
                continue
            }

            if(lastAsteroid > 0 && newAsteroid < 0){
                //fight which one bigger?
                const lastAbs = Math.abs(lastAsteroid)
                const newAbs = Math.abs(newAsteroid)

                if(lastAbs === newAbs){ //nobodyWin

                } else {
                    let winner = Math.max(Math.abs(lastAsteroid), Math.abs(newAsteroid))
                    if(winner === lastAbs){
                        stack.push(lastAsteroid)
                    } else {
                        asteroids.unshift(newAsteroid)
                    }
                }
            } else {
                stack.push(lastAsteroid, newAsteroid)
            }
        }

        return stack
    }
}
