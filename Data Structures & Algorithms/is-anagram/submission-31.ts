class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if(s.length !== t.length){
            return false
        }

        const array = Array(26).fill(0)
        for(let i = 0; i < s.length; i++){
            array[s[i].charCodeAt(0) - 'a'.charCodeAt(0) ] ++
            array[t[i].charCodeAt(0) - 'a'.charCodeAt(0) ] --
        }

        return array.every((e) => e === 0)


    }
}
