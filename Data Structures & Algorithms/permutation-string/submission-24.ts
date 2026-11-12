class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1: string, s2: string): boolean {
        if (s1.length > s2.length) return false;
       
        const countS1 = new Array(26).fill(0);
        const countS2 = new Array(26).fill(0);

        for (let i = 0; i < s1.length; i++) {
            countS1[s1[i].charCodeAt(0) - 97]++;
            countS2[s2[i].charCodeAt(0) - 97]++;
        }

        let have = 0;
        let need = 26;

        for (let i = 0; i < 26; i++) {
            if (countS1[i] === countS2[i]) {
                have++;
            }
        }

        let l = 0;
        for (let r = s1.length; r < s2.length; r++) {
            if (have === need) {
                return true;
            }
            const valR = s2[r].charCodeAt(0) - 97;
            countS2[valR]++;
            if (countS1[valR] === countS2[valR]) {
                have++;
            } else if (countS2[valR] - 1 === countS1[valR]) {
                have--;
            }

          
            const valL = s2[l].charCodeAt(0) - 97;
            countS2[valL]--;
            if (countS1[valL] === countS2[valL]) {
                have++;
            } else if (countS2[valL] + 1 === countS1[valL]) {
                have--;
            }
            l++;

            
        }
        return have === need;
    }
}
