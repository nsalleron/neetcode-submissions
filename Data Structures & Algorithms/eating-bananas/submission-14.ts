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

            let numberOfHoursRequired = 0
            for(let p of piles){
                numberOfHoursRequired += Math.ceil(p / m)
            }

            if(numberOfHoursRequired <= h){
                res = Math.min(res, m)
            }

            if( numberOfHoursRequired > h){
                l = m + 1
            } else {
                r = m - 1
            }
        }

        return res
    }
}
