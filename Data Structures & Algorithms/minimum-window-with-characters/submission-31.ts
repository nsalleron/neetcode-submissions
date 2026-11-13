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
            countT.set(t[i], (countT.get(t[i]) ?? 0) + 1);
        }

        let have = 0;
        let need = countT.size;
        let subStringLength = Number.MAX_SAFE_INTEGER;
        let substring = "";
        let l = 0;

        for (let r = 0; r < s.length; r++) {
            const valR = s[r];
            
            window.set(valR, (window.get(valR) || 0) + 1);
            if (countT.has(valR) && window.get(valR) === countT.get(valR)) {
                have++;
            }

            while (have === need) {
                if (r - l + 1 < subStringLength) {
                    substring = s.slice(l, r + 1);
                    subStringLength = r - l + 1;
                }

                const valL = s[l];
                window.set(valL, window.get(valL) - 1);
                if (countT.has(valL) && window.get(valL) < countT.get(valL)) {
                    have--;
                }
                l++;
            }
        }

        return substring;
    }
}
