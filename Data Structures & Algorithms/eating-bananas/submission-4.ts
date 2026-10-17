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

        
        while(l <= r){
            const middle = Math.floor((l + r) / 2)

            let hours = 0
            for(let p of piles){
                hours += Math.ceil(p / middle)
            }

            console.log({
                l, r, middle, hours, res, h
            })

            if(hours <= h){
                res = Math.min(res, middle)
                r = middle - 1
            } else {
                l = middle + 1
            }
        }

        return res
    }
}
