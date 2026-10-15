class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums: number[], target: number): number {
        let l = 0
        let r = nums.length - 1

        //let toto = 0
        while(l < (r + 1)){
            //toto ++
            const mid = Math.floor((r - l) / 2)
            const value = nums[l + mid]
            //console.log(l,r, mid, value)

            if(value < target){
                l = (l+mid) + 1
            } else if (value > target){
                r = r - 1
            } else if (value === target){
                return l + mid
            }



            //if(toto === 5)
            //    break





        }

        return - 1
    }
}
