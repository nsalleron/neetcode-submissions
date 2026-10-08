class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const hash = new Map()
        let i = 0
        while(i < strs.length){
            const current = strs[i]
            const key = current.split('').sort().join('')
            if(hash.has(key)){
                const newValue = [...hash.get(key), strs[i]]
                hash.set(key, newValue)
            } else {
                hash.set(key, [current])
            }
            i++
        }

        return [...hash.values()]
    }
}
