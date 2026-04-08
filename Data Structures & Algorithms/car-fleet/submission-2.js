class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const cars = [];
        for(let i = 0; i < position.length ; i++){
            cars.push([position[i], speed[i]]);
        }
        
        // Sort cars by position descending (closest to target first)
        cars.sort((a, b) => b[0] - a[0]);

        const stack = [];
        for (let i = 0; i < cars.length; i++) {
            // Calculate time needed to reach destination: (target - pos) / speed
            const time = (target - cars[i][0]) / cars[i][1];
            
            // If stack is empty or current car takes LONGER than the fleet ahead,
            // it forms a new fleet.
            if (stack.length === 0 || time > stack[stack.length - 1]) {
                stack.push(time);
            }
            // If time <= stack top, it catches up and becomes part of that fleet
        }

        return stack.length;
    }
}
