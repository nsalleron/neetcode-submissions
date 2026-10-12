class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        let l = 0
        let r = s.length -1
        while(l < r){
             while(l < r && !this.isChar(s[l])){
                l++
            }
             while(l < r && !this.isChar(s[r])){
                r--
            }

            if(s[l].toLowerCase() !== s[r].toLowerCase()){
                return false
            }
            l++
            r--
        }
        return true

    }

    isChar(s: string){
        if(s >= 'a' && s <= 'z'){
            return true
        } else if ( s >= '0' && s <= '9'){
            return true
        } else if (s >= 'A' && s <= 'Z'){
            return true
        }
        return false
    }
}
