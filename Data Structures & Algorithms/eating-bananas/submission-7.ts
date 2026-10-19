class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles: number[], h: number): number {
        let l = 1
        let r = Math.max(...piles)

        let res = r
        while(l <= r) {
            const eatingCapacity = Math.floor((l + r) / 2)

            let hoursOfEating = 0
            for(let pile of piles){
                hoursOfEating += Math.ceil(pile / eatingCapacity)
            }
           
            if(hoursOfEating > h){
                l = eatingCapacity + 1
            } else {
                res = Math.min(res, eatingCapacity)
                r = eatingCapacity - 1
            }
        }

        return res
    }
}
