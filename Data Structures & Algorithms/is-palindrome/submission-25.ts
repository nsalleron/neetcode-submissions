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
    

        const sNormalized = s.toLowerCase()

        let l = 0
        let r = sNormalized.length - 1

        while(l < r){
            while(l < r && !isAcceptableLetter(sNormalized[l])){
                l++
            }
            while(l < r && !isAcceptableLetter(sNormalized[r])){
                r--
            }
            
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
