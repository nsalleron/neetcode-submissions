class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if(s.length !== t.length){
            return false 
        }
        let sSort = s.split('').sort().join()
        let tSort = t.split('').sort().join()

        return sSort === tSort
    }
}
