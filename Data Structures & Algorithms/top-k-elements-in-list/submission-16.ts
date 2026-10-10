class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {

        const count = {}

        const freq: number[][] = Array.from(  { length: nums.length + 1 },  () => []);

        for(let i = 0; i < nums.length; i++){
            count[nums[i]] = (count[nums[i]] || 0) + 1
        }

        for (let k in count){
            freq[count[k]].push(parseInt(k))
        }
        

        const res = []
        for(let i = freq.length - 1; i > 0; i--){
            for(let e of freq[i]){
                res.push(e)
                if(res.length == k){
                    return res
                }
            }
               
        }


        return res
    }
}
