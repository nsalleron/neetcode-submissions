class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s: string, t: string): string {
        const window = new Map()
        const tCount = new Map()

        for(let c of t){
            tCount.set(c, (tCount.get(c) || 0) + 1)
        }

        let have = 0
        const need = t.length

        let res = []
        let resCount = Number.MAX_SAFE_INTEGER

        let l = 0
        for(let r = 0; r < s.length; r++){
            window.set(s[r], (window.get(s[r]) || 0) + 1)
            if(tCount.has(s[r]) && window.get(s[r]) <= tCount.get(s[r])){
                have ++
            }

            while(have === need){
                if((r - l + 1) < resCount){
                    res.pop()
                    res.push([l, r])
                    resCount = (r - l + 1) 
                }

                window.set(s[l], (window.get(s[l]) || 0) - 1)
                if(tCount.has(s[l]) && window.get(s[l]) < tCount.get(s[l])){
                    have--
                }
                l++
            }
        }

        console.log({window, tCount, have, need})

        const result = res.pop()
        if(result){
            return s.slice(result[0], result[1] + 1)
        }

        return ""
    }
}
