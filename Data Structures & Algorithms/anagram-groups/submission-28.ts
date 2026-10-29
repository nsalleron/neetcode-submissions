class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const map = new Map()

        for(let str of strs){
            const freq = new Array(26).fill(0)

            for(let c of str){
                freq[c.charCodeAt(0) - 97] ++
            }

            const key = freq.join()

            map.set(key, [...(map.get(key) ?? []), str])
        }


        return [...map.values()]

    }
}
