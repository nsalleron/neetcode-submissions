class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s: string, t: string): string {
        const countT = new Map();
        const countS = new Map();

        for (let i = 0; i < t.length; i++) {
            countT.set(t[i], (countT.get(t[i]) || 0) + 1);
        }

        let have = 0;

        let need = countT.size;

        let resLen = Number.MAX_SAFE_INTEGER;
        let res = null;

        let l = 0;
        for (let r = 0; r < s.length; r++) {
            const valR = s[r];

            countS.set(valR, (countS.get(valR) || 0) + 1);
            if (countT.has(valR) && countT.get(valR) === countS.get(valR)) {
                have++;
            }

            while (have === need) {
                if (r - l + 1 < resLen) {
                    res = [l, r];
                    resLen = r - l + 1;
                }

                const valL = s[l];
                countS.set(valL, (countS.get(valL) || 0) - 1);
                if (countT.has(valL) && countS.get(valL) < countT.get(valL)) {
                    have--;
                }
                
                l++;
            }
        }

        return res ? s.slice(res[0], res[1] + 1) : "";
    }
}