class Solution {
    /**
     * @param {string} s
     * @param {string[]} wordDict
     * @return {boolean}
     */
    wordBreak(s: string, wordDict: string[]): boolean {

        const dfs = (word:string) => {
            if(word === s){
                return true
            }
            for(let anotherWord of wordDict){
                if(s.includes(word + anotherWord)){
                    return dfs(word + anotherWord)
                }
            }
            return false
        }

        for(let word of wordDict){
            if(dfs(word)){
                return true
            }
        }

        return false
    }
}
