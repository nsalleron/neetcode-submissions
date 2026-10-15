class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const map = {}
        for(let str of strs){
            let key = new Array(26).fill(0)

            for(let c of str){
                key[c.charCodeAt(0) - 'a'.charCodeAt(0)]++
            }

            if(map[key.join(',')]){
                map[key.join(',')].push(str)
            }else{
                map[key.join(',')] = [str]
            }
        }

        return Object.values(map)
    }
}
