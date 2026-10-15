class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target: number, position: number[], speed: number[]): number {
        const posSpeed = position.map((p, i) => [p, speed[i]])
        posSpeed.sort((a, b) => b[0] - a[0]); // hyper important de faire selon la position.
        const stack = []

        for(let [p, s] of posSpeed){
            stack.push((target - p) / s) // # Sauvegarde uniquement "du temp" pour reach target
          
            if(stack.length >= 2 && stack[stack.length -1] <= stack[stack.length - 2]){ //Comparaison dès qu'il y a 2 elements mini
                stack.pop()
            }
        }




        return stack.length



    }
}
