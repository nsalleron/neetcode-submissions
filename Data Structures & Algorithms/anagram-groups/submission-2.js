class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map()
        const aCharValue = "a".charCodeAt(0)
        for(let s of strs){
            const freq = Array.from({length: 6}, () => 0)
            for(let c of s){
                const key = c.charCodeAt(0) - aCharValue
                freq[key] += 1
            }
            const key = freq.join(',')
            map.set(key, [...(map.get(key) ?? []), s])

        }

        return Array.from(map.values())
    }


}
