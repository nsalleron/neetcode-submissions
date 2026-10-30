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
        const countS1 = new Array(26).fill(0)
        const window = new Array(26).fill(0)

        for(let i = 0; i < s1.length; i++){
            countS1[s1[i].charCodeAt(0) - 97] ++
            window[s2[i].charCodeAt(0) - 97] ++
        }

        let matches = 0
        for(let i = 0; i < 26; i++){
            if(countS1[i] === window[i]){
                matches ++
            }
        }

        let l = 0
        for(let r = s1.length; r < s2.length; r++){
            if(matches === 26){
                return true
            }
  
            const indexR = s2[r].charCodeAt(0) - 97
            window[indexR] ++
            if(window[indexR] === countS1[indexR]){
                matches ++
            } else if (window[indexR] - 1 === countS1[indexR]){
                matches --
            }

            const indexL = s2[l].charCodeAt(0) - 97
            window[indexL] --
            if(window[indexL] === countS1[indexL]){
                matches ++
            } else if (window[indexL] + 1 === countS1[indexL]){
                matches --
            }
            l++
        }

        return matches === 26 

    }
}
