class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s: string, t: string): string {  
        if(t.length === 0) return "" 
        
        let countT = new Map()
        let window = new Map()

        for(let c of t){
            countT.set(c, (countT.get(c) || 0) + 1)
        }

        let have = 0
        let need = countT.size

        let res = []
        let resLen = Number.MAX_SAFE_INTEGER

        let l = 0
        for(let r = 0; r < s.length; r++){
            let c = s[r]

            window.set(c, (window.get(c) || 0) + 1)
            if(countT.has(c) && (window.get(c) === countT.get(c))){
                have += 1
            } 

            while(have === need){
                if((r - l + 1) < resLen){
                    res.pop()
                    res.push([l, r])
                    resLen = (r - l + 1)
                }

                window.set(s[l], (window.get(s[l]) || 0) - 1)
                if(countT.has(s[l]) && window.get(s[l]) < countT.get(s[l])){
                    have -= 1
                }
                l += 1
            }
        }
        
        const maybeRes = res.pop()
        if(maybeRes){
            return s.slice(maybeRes[0], maybeRes[1] + 1)
        }

        return ""
    }
}
