class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const map = new Map()
        for(let c of nums){
            map.set(c, (map.get(c) || 0) + 1)
        }

        const freq = Array.from({length: nums.length + 1}, () => [])
        for(let [k, v] of map){
            freq[v].push(k)
        }
        
        const result = []
        for(let i = freq.length - 1; i > 0; i--){
            const currentFreq = freq[i]
            while(currentFreq.length > 0){
                result.push(currentFreq.pop())
            }
            if(result.length === k){
                return result
            }
        }

    }
}
