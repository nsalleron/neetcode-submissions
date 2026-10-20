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
            const m = Math.floor((l + r ) / 2)

            let numberOfHoursToEatAllBananas = 0
            for(let pile of piles){
                numberOfHoursToEatAllBananas += Math.ceil( pile / m)
            }
            
            if(numberOfHoursToEatAllBananas <= h){
                res = Math.min(res, m)
            }

            if(numberOfHoursToEatAllBananas > h){
                l = m + 1 
            } else {
                r = m - 1
            }

        }

        return res

    }
}
