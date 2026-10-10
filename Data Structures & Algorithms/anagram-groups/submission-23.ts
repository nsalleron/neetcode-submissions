class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const map = new Map()

        for(let str of strs){
            const arr = new Array(26).fill(0)
            for(let c of str){
                arr[c.charCodeAt(0) - 'a'.charCodeAt(0)] ++
            }

            const key = arr.join(',')
            if(!map.has(key)) map.set(key, [])
            map.get(key).push(str)
        }

        return Array.from(map.values())


    }
}
