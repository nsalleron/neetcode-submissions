class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        const normalizedS = s.split('').filter(this.isChar).join().toLowerCase()
        console.log(normalizedS)
        let l = 0
        let r = normalizedS.length -1
        while(l < r){
            if(normalizedS[l] !== normalizedS[r]){
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
