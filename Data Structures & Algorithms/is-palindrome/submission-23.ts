class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        const lowerCaseS = s.toLowerCase()
        let l = 0
        let r = lowerCaseS.length - 1

        while(l < r){
            while(l < r && !this.isAuthorizedChar(lowerCaseS[l])){
                l++
            }
            while(l < r && !this.isAuthorizedChar(lowerCaseS[r])){
                r--
            }


            if(lowerCaseS[l] !== lowerCaseS[r]){
                return false
            }
            l++
            r--
        }



        return true
    }



    isAuthorizedChar(s: string): boolean{
        return (s >= 'a' && s <= 'z' || s >= 'A' && s <= 'Z' || s >= '0' && s <= '9')
    }
}
