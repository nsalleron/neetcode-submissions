class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s: string, t: string): string {
        const countT = new Map()
        const window = new Map()

        let len = Number.MAX_SAFE_INTEGER
        let res = ""

        for(let i = 0; i < t.length; i++){
            countT.set(t[i], (countT.get(t[i]) || 0) + 1)
        }

        let need = countT.size
        let have = 0 

        let l = 0
        for(let r = 0; r < s.length; r++){
            const valR = s[r]
            window.set(valR, (window.get(valR) || 0) + 1)

            if(countT.has(valR) && countT.get(valR) === window.get(valR)){
                have ++
            }

            while(have === need){
                if((r-l+1) < len){
                    res = s.slice(l, r + 1)
                    len = (r-l + 1)
                }

                const valL = s[l]
                window.set(valL, window.get(valL) - 1)
                if(countT.has(valL) && window.get(valL) < countT.get(valL)){
                    have --
                }
                l++
            }
        }

        return res

    }
}
