class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {

        const normalizedS = s.toLowerCase()

        let l = 0
        let r = normalizedS.length - 1
    
        while(l < r){
            while(l < r && !this.isAcceptedChar(normalizedS[l])){
                l++
            }
            while(l < r && !this.isAcceptedChar(normalizedS[r])){
                r--
            }

            if(normalizedS[l] !== normalizedS[r]){
                return false
            } 
            
            l++
            r--
            
        }

        return true
    }


    isAcceptedChar(c: string){
        return c >= 'a' && c <= 'z' || c >= '0' && c <= '9'
    } 
}
