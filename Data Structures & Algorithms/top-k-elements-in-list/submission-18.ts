class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const count = {}
        const freq = Array.from({length: nums.length + 1}, () => [])

        for(let num of nums){
            count[num] = (count[num] || 0) + 1
        }

        for(let k in count){
            freq[count[k]].push(parseInt(k))
        }

        const res = []
        for(let i = freq.length - 1; i > 0; i--) {
            const tab = freq[i]
            for(let j = 0; j < tab.length; j++){
                
                res.push(tab[j])
                if(res.length === k){
                    return res
                }
            }
        }


        return []
    }
}
