class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles: number[], h: number): number {
        let l = 1
        let r = Math.max(...piles)

        let res = Number.MAX_SAFE_INTEGER
        
        while(l <= r){
            const m = Math.floor((l + r) / 2)
            
            let totalHoursToEatBanana = 0
            for(let pile of piles){
                totalHoursToEatBanana += Math.ceil(pile / m)
            }


            if(totalHoursToEatBanana > h){
                l = m + 1
            } else {
                res = Math.min(res, m)

                r = m - 1
            }
        }

        return res 
    }
}
