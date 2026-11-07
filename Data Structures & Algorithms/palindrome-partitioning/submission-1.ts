class Solution {
    /**
     * @param {string} s
     * @return {string[][]}
     */
    partition(s: string): string[][] {
        const res = []
        const part = []
        
        const backtracking = (index: number) => {
            if(index >= s.length){
                res.push([...part])
            }

            for(let j = index; j < s.length; j++){
                if(this.isPalindrome(s, index, j)){
                    part.push(s.slice(index, j + 1))
                    backtracking(j + 1)
                    part.pop()
                }
            }

        }

        backtracking(0)
        return res
    }

    isPalindrome(s:string, i: number, j: number): boolean {
        while(i < j){
            if(s[i] !== s[j]){
                return false
            }
            i++
            j--
        }

        return true
    }
}
