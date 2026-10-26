class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1: string, s2: string): boolean {
        if(s1.length > s2.length){
            return false
        }

        const s1Count = new Array(26).fill(0)
        const s2Count = new Array(26).fill(0)

        for(let i = 0; i < s1.length; i++){
            s1Count[s1[i].charCodeAt(0) - 97] ++
            s2Count[s2[i].charCodeAt(0) - 97] ++
        }

        let matches = 0
        for(let i = 0; i < 26; i++){
            if(s1Count[i] === s2Count[i]){
                matches++
            }
        }

        let l = 0
        for(let r = s1.length; r < s2.length; r++){
            // console.log({ str: s2.slice(l, r + 1), matches, s1Count, s2Count})

            if(matches === 26){
                return true
            }
            const valR = s2[r].charCodeAt(0) - 97
            s2Count[valR] ++
            if(s1Count[valR] === s2Count[valR]){
                matches ++
            } else if (s1Count[valR] + 1 === s2Count[valR]){
                matches --
            }

            const valL = s2[l].charCodeAt(0) - 97
            s2Count[valL] --
            if(s1Count[valL] === s2Count[valL]){
                matches ++
            } else if (s1Count[valL] - 1 === s2Count[valL]){
                matches --
            }
            l++
        }


        return matches === 26

    }
}
