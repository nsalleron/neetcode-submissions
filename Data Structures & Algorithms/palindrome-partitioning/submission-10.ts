class Solution {
    /**
     * @param {string} s
     * @return {string[][]}
     */
    partition(s: string): string[][] {
        const res = []

        const part = []

        const dfs = (index) => {
            if(index === s.length){
                return res.push([...part])
            }

            for(let i = index; i < s.length; i++){
                const str = s.slice(index, i + 1)
                if(this.isPalindrome(str)){
                    part.push(str)
                    dfs(i + 1)
                    part.pop()
                }
            }
        }

        dfs(0)


        return res
    }

    isPalindrome(s: string){
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
