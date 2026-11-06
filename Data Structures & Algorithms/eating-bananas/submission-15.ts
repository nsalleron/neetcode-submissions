class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles: number[], h: number): number {
        let l = 1
        let r = Math.max(...piles)

        let maxNumberOfBananaBelowThelimit = Number.MAX_SAFE_INTEGER

        while(l <= r){
            const kNumberOfBanana = Math.floor((l + r) / 2)

            let numberOfHours = 0
            for(let p of piles){
                numberOfHours += Math.ceil(p / kNumberOfBanana)
            }

            if(numberOfHours <= h){
                maxNumberOfBananaBelowThelimit = Math.min(maxNumberOfBananaBelowThelimit, kNumberOfBanana)
                r = kNumberOfBanana - 1
            } else {
                l = kNumberOfBanana + 1
            }
        }

        return maxNumberOfBananaBelowThelimit
    }
}
