class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const map = new Map()

        for(let str of strs){
            const key = str.split('').sort((a,b) => a.charCodeAt(0) - b.charCodeAt(0)).join()
            map.set(key, [...(map.get(key) ?? []), str])
        }

        console.log(map)

        return [...map.values()]

    }
}
