class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const map = {}
        const freq = Array.from({length: nums.length + 1}, () => [])

        for(let num of nums){
            map[num] = (map[num] || 0) + 1
        }
        
        
        for(let k in map){
            freq[map[k]].push(k)
        }


        const res = []
        for(let i = freq.length - 1; i > 0; i--){
            
            if(freq[i].length > 0){
                for(let j = 0; j < freq[i].length; j++){
                    res.push(freq[i][j])

                    if(res.length === k){
                return res
            }
                }
            }
        }
        return []

    }
}
