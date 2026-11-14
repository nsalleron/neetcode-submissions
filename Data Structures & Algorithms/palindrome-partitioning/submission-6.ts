class Solution {
    /**
     * @param {string} s
     * @return {string[][]}
     */
    partition(s: string): string[][] {
        const res = []
        const dfs = (index: number, part: string[]) => {
            if(index >= s.length){
                return res.push([...part])
            }

            for(let i = index; i < s.length; i++){
                const w = s.slice(index, i + 1)
                if(this.isPalin(w)){
                    part.push(w)
                    dfs(i + 1, part)
                    part.pop()
                }
            }
            
        }

        dfs(0, [])

        return res
    }

    isPalin(s: string): boolean {
        console.log({s})
        let l = 0
        let r = s.length - 1 

        while(l < r) {
            if(s[l] !== s[r]){
                return false
            }

            l++
            r--
        }


        return true
    }
}
