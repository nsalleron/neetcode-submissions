class Solution {
   
    isAlphanumeric(char) {
        return (
            (char >= 'a' && char <= 'z') ||
            (char >= 'A' && char <= 'Z') ||
            (char >= '0' && char <= '9')
        );
    }

    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let l = 0
        let r = s.length - 1
        while( l < r){
            while(l < r && !this.isAlphanumeric(s[l])){
                l++
            }
            while(l < r && !this.isAlphanumeric(s[r])){
                r--
            }
            if(s[l].toLocaleLowerCase() !== s[r].toLocaleLowerCase()){
                return false
            }
            l++
            r--
        }


        return true
    }
}
