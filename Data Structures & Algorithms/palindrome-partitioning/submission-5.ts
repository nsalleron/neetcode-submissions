class Solution {
    /**
     * @param {string} s
     * @return {string[][]}
     */
    partition(s: string): string[][] {

        const res = []

        const dfs = (idx: number, current: string[]) => {
            if(idx === s.length){
                res.push([...current])
            }

            for(let i = idx; i < s.length; i++){
                const word = s.slice(idx, i + 1)
                if(this.isPalindrome(word)){
                    current.push(word)
                    dfs(i + 1, current)
                    current.pop()
                }
            }
        }

        dfs(0, [])

        return res
    }

    isPalindrome(s: string,){
        let l = 0
        let r = s.length - 1

        while(l < r){
            if(s[l] !== s[r]){
                return false
            }
            l++
            r--
        }

        return true

    }
}
