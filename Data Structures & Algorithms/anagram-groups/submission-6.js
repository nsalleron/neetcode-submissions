class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map()
        const aCharValue = 'a'.charCodeAt(0)

        for(let s of strs) {
            const freqArray = new Array(26).fill(0)
            for(let c of s){
                const key = c.charCodeAt(0) - aCharValue
                freqArray[key] += 1
            }
            const key = freqArray.join(',')
            map.set(key, [...(map.get(key) ?? []), s])
        }

        return Array.from(map.values())

    }
}
