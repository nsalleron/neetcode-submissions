class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1: string, s2: string): boolean {
        if (s1.length > s2.length) return false

        const countS1 = new Array(26).fill(0)
        const countS2 = new Array(26).fill(0)

        for(let i = 0; i < s1.length; i++){
            countS1[s1[i].charCodeAt(0) - 97] ++
            countS2[s2[i].charCodeAt(0) - 97] ++
        }

        let matches = 0

        for(let i = 0; i < countS1.length; i++){
            if(countS1[i] === countS2[i]){
                matches ++
            }
        }

        let l = 0
        for(let r = s1.length; r < s2.length; r++){
            if(matches === 26){
                return true
            }
     
            const indexR = s2[r].charCodeAt(0) - 97
            countS2[indexR]++
            if(countS1[indexR] === countS2[indexR]){
                matches ++
            } else if (countS1[indexR] + 1 === countS2[indexR]) {
                matches --
            }

            const indexL = s2[l].charCodeAt(0) - 97
            countS2[indexL]--
            if(countS1[indexL] === countS2[indexL]){
                matches ++
            } else if (countS1[indexL] - 1 === countS2[indexL]) {
                matches --
            }

            l++
        }

        return matches === 26


    }
}
