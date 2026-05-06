class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    searchInsert(nums, target) {
        /**
        * @param {number[]} tab
        * @param {number} offset
        * @return {number}
        */
        const find = (tab, offset) => {
            if (tab.length === 0) return offset;
            const m = Math.floor(tab.length / 2)

            if(tab[m] > target){
                return find(tab.slice(0, m), offset)
            } else if (tab[m] < target){
                return find(tab.slice(m + 1), offset + m + 1)
            } else {
                return offset + m
            }

        }

        return find(nums, 0)


    }
}