class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        const isAcceptableLetter = (e: string) => {
            if(e <= 'z' && e >= 'a' || e >= '0' && e <= '9'){
                return true
            }
            return false
        }
    

        const sNormalized = s.toLowerCase().split("").filter((e) => isAcceptableLetter(e))

        let l = 0
        let r = sNormalized.length - 1

        while(l < r){
            const letterL = sNormalized[l]
            const letterR = sNormalized[r]

            if(letterL !== letterR){
                return false
            }
            l++
            r--
        }
        return true
    }
}
