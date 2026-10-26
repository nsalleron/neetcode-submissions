class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s: string, t: string): string {
        const countT = new Map()
        const window = new Map()

        let res = Number.MAX_SAFE_INTEGER
        let result = []

    
        for(let c of t){
            countT.set(c,(countT.get(c) || 0) + 1)
        }

         

        let have = 0
        let need = countT.size

        let l = 0
        for(let r = 0; r < s.length; r++){
            const valR = s[r]
            window.set(valR, (window.get(valR) || 0) + 1)
            if(countT.has(valR) && window.get(valR) === countT.get(valR)){
                have ++
            }

            while(have === need){
                if((r - l + 1) < res){
                    result.pop()
                    result.push([l, r])
                    res = (r - l + 1)
                }

                const valL = s[l]
                window.set(valL, (window.get(valL) || 0) - 1)
                if(countT.has(valL) && window.get(valL) < countT.get(valL)){
                    have --
                }
                l++
            }
        }

        const maybeResult = result.pop()
        if(maybeResult){
            return s.slice(maybeResult[0], maybeResult[1] + 1)
        } 

        return ""

    }
}
