class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const counts: Record<string, number> = {}
        for(let e of nums){
            if(!counts[e]){
                counts[e] = 0
            }
            counts[e]++
        }
        
        const results = Object.entries(counts).sort((a, b) => b[1] - a[1] )
        
        return results.slice(0, k).map(e => parseInt(e[0]))
    }
}
