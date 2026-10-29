class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s: string, t: string): string {
        const window = new Map();
        const countT = new Map();

        for (let c of t) {
            countT.set(c, (countT.get(c) || 0) + 1);
        }

        let need = countT.size;
        let have = 0;

        let res = [];
        let resCount = Number.MAX_SAFE_INTEGER;

        let l = 0;
        for (let r = 0; r < s.length; r++) {
            const val = s[r];
            window.set(val, (window.get(val) || 0) + 1);

            if (countT.has(val) && window.get(val) === countT.get(val)) {
                have++;
            }

            while (have === need) {
                if(resCount > (r - l + 1)){
                    res.pop()
                    res.push([l, r])
                    resCount = r - l + 1
                }

                window.set(s[l], (window.get(s[l]) || 0) - 1)
                if(countT.has(s[l]) && window.get(s[l]) < countT.get(s[l])){
                    have -= 1
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
