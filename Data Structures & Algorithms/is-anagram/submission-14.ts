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


        for(const char of s){
            if(t.includes(char)){
                t = t.replace(char,'')
            } else {
                return false
            }
        }

        console.log(s)
        console.log(t)

        return t.length === 0




    }
}
