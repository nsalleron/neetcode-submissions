class Solution {
    /**
     * @param {number[]} people
     * @param {number} limit
     * @return {number}
     */
    numRescueBoats(people, limit) {
        const sortedPeople = people.sort((a, b) => a - b)
        let l = 0
        let r = people.length - 1

        let sumOfBoat = 0
        let currentWeight = 0

        while (l < r){
            const leftWeight = sortedPeople[l]
            const rightWeight = sortedPeople[r]
            
            currentWeight = leftWeight + rightWeight

            if(currentWeight <= limit) {
                sumOfBoat += 1
                r--
                l++
            } else {
                sumOfBoat += 1
                r--
            }
        }

        if(l === r){
            sumOfBoat += 1
        }


        return sumOfBoat



    }
}
