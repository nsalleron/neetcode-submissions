class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        const filterdString = s.split('').filter(this.isAuthorizedChar).join('').toLocaleLowerCase()
        let l = 0
        let r = filterdString.length - 1

        while(l < r){
            if(filterdString[l] !== filterdString[r]){
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
