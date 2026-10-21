class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1: string, s2: string): boolean {
        let map = new Map()


        for(let c of s1){
            map.set(c, (map.get(c)||0) + 1)
        }

        const windowSize = s1.length


        let l = 0
        for(let r = 0; r < s2.length; r++){
            if(map.has(s2[r])){
                map.set(s2[r], map.get(s2[r]) - 1)
            }

            if([...map.values()].every((e) => e === 0)){
                return true
            }

            if((r - l + 1) === windowSize){
                if(map.has(s2[l])){
                    map.set(s2[l], map.get(s2[l]) + 1)
                }
                l++
            }
        }

        return false
    }
}
