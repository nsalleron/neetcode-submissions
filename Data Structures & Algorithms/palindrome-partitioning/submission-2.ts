class Solution {
    /**
     * @param {string} s
     * @return {string[][]}
     */
    partition(s: string): string[][] {
        const result = [];
        const part = [];

        const dfs = (index: number) => {
            if (index >= s.length) {
                result.push([...part])
                return;
            }

            for(let j = index; j < s.length; j++){
                if(this.isPalindrome(index, j, s)){
                    part.push(s.slice(index, j+1))
                    dfs(j + 1)
                    part.pop()
                }
            }
        };

        dfs(0);

        return result;
    }

    isPalindrome(l: number, r: number, s: string) {
        while (l < r) {
            if (s[l] !== s[r]) {
                return false;
            }
            l++;
            r--;
        }
        return true;
    }
}