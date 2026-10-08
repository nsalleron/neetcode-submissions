class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const res = new Map()
        
        for (let s of strs){
            const count = new Array(26).fill(0)
            for (let c of s){
                count[c.charCodeAt(0) - 'a'.charCodeAt(0)] ++
            }
            const key = count.join()
            if(res.has(key)){
                res.set(key,[...res.get(key), s])
            }else{
                res.set(key,[s])
            }
        }
        console.log(res.values())
        return Array.from(res.values());
    }
}
