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
        const sArray = []
        const tArray = []
        for(let i = 0; i < s.length; i++){
            sArray.push(s.charCodeAt(i))
            tArray.push(t.charCodeAt(i))
        }
        
        const ts = tArray.sort((a,b) => a - b ).toString()
        const ss = sArray.sort((a,b) => a - b ).toString()


        return ts == ss
    }
}
