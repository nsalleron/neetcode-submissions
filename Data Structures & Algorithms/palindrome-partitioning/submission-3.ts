class Solution {
    /**
     * @param {string} s
     * @return {string[][]}
     */
    partition(s: string): string[][] {
        const res = [];

        const dfs = (idx: number, current: string[]) => {
            if(idx === s.length){ //On a parcouru toute la string donc on push nos resultats
                res.push([...current])
            }

            for(let j = idx; j < s.length; j++){
                const word = s.slice(idx, j + 1) 
                if(this.isPalindrome(word)){
                    current.push(word)
                    dfs(j + 1, current)
                    current.pop()
                }
            }
        };

        dfs(0, []);

        return res;
    }

    isPalindrome(word: string) {
        if(word.length === 0) return false

        let l = 0;
        let r = word.length - 1;

        while (l <= r) {
            if (word[l] !== word[r]) {
                return false;
            }
            l++;
            r--;
        }

        return true;
    }
}
