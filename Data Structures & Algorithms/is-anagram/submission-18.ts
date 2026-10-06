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

        const sMap = new Map()
        const tMap = new Map()

        for(let i = 0; i < s.length; i++){
            const charS = s[i]
            const charT = t[i]

            sMap.has(charS) ? sMap.set(charS, sMap.get(charS) + 1 ) : sMap.set(charS, 1)
            tMap.has(charT) ? tMap.set(charT, tMap.get(charT) + 1 ) : tMap.set(charT, 1)
        }

        console.log(sMap)
        console.log(tMap)

      
        for(const [k, v] of sMap){
            if(tMap.has(k)){
                if(v !== tMap.get(k)){
                    return false
                }
            } else {
                return false
            }
        }

        return true




    }
}
