class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s: string, t: string): string {
        const window = new Map()
        const count = new Map()

        for(let c of t){
            count.set(c, (count.get(c) || 0) + 1)
        }

        let have = 0
        let need = count.size
    

        let resLength = Number.MAX_SAFE_INTEGER
        let res = []
        let l = 0
        for(let r = 0; r < s.length; r++){
            const rVal = s[r]
            window.set(rVal, (window.get(rVal) || 0) + 1)
            
            if(count.has(rVal) && window.get(rVal) === count.get(rVal)){
                have ++
            } 

            while(have === need){
                if((r - l + 1) < resLength){
                    res.pop()
                    res.push([l,r])
                    resLength = r - l + 1
                }

                const lVal = s[l]
                window.set(lVal, (window.get(lVal) || 0) - 1)

                if(count.has(lVal) && window.get(lVal) < count.get(lVal)){
                    have --
                }
                l++
            }
        }

        const result = res.pop()
        if(result){
            return s.slice(result[0], result[1] + 1)
        }

        return ""
    
    }
}
