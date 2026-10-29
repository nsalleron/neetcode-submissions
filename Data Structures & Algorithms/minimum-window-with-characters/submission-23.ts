class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s: string, t: string): string {
        const window = new Map()
        const tMap = new Map()

        for(let c of t){
            tMap.set(c, (tMap.get(c) || 0) + 1)
        }

        let have = 0
        let need = tMap.size

        let res = Number.MAX_SAFE_INTEGER
        let resIndexes: [number, number] | null = null

        let l = 0
        for(let r = 0; r < s.length; r++){
            const valR = s[r]
            window.set(valR, (window.get(valR) || 0) + 1)

            if(tMap.has(valR) && window.get(valR) === tMap.get(valR)){
                have ++
            }

            while(have === need){
                if((r - l + 1) < res){
                    resIndexes = [l, r]
                    res = r - l + 1
                }

                const valL = s[l]
                window.set(valL, (window.get(valL) || 0) - 1)

                if(tMap.has(valL) && window.get(valL) < tMap.get(valL)){
                    have --

                }

                l++
            }

        }
        if(resIndexes){
            return s.slice(resIndexes[0], resIndexes[1] + 1)
        }
        return ""
    }
}