class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s: string, t: string): string {
        if (t.length > s.length) {
            return "";
        }

        const countT = new Map();
        const window = new Map();

        for (let i = 0; i < t.length; i++) {
            countT.set(t[i], (countT.get(t[i]) || 0) + 1);
        }

        let have = 0;
        let need = countT.size;
        let maxLength = Number.MAX_SAFE_INTEGER;
        let res = "";
        let l = 0;
        
        for (let r = 0; r < s.length; r++) {
            const charR = s[r];
            window.set(charR, (window.get(charR) || 0) + 1);
            if (countT.has(charR) && window.get(charR) === countT.get(charR)) {
                have++;
            }

            while (have === need) {
                if (r - l + 1 < maxLength) {
                    maxLength = r - l + 1;
                    res = s.slice(l, r + 1);
                }

                const charL = s[l];
                window.set(charL, (window.get(charL) || 0) - 1);
                if (countT.has(charL) && window.get(charL) < countT.get(charL)) {
                    have--;
                }  

                l++;
            }
        }
        
        return res;
    }
}
