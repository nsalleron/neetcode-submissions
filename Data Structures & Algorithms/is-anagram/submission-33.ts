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

        const arrS = new Array(26).fill(26)
        const arrT = new Array(26).fill(26)

        for(let i = 0; i < s.length ; i++){
            arrS[s[i].charCodeAt(0) - 97] ++
            arrT[t[i].charCodeAt(0) - 97] ++
        }

        for(let i = 0; i < 26; i++){
            if(arrS[i] !== arrT[i]){
                return false
            }
        }

        return true


    }
}
