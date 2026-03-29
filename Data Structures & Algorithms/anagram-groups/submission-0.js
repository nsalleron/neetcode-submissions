class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map()
        for(let i = 0; i < strs.length ; i++){
            const currentWord = strs[i].split("").sort((a,b) => a.localeCompare(b)).join("")
            if(map.has(currentWord)){
                map.set(currentWord, [...map.get(currentWord), strs[i]])
            }else{
                map.set(currentWord, [strs[i]])
            }
        }

        return Array.from(map.values())
    }
}
