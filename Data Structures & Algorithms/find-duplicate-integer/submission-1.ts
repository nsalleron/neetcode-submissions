class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums: number[]): number {
        let slow = 0
        let fast = 0


        while(true){
            slow = nums[slow]
            fast = nums[nums[fast]]
            
            if(slow === fast){
                break;
            }
        }

        let slowThatWillFindTheDuplicate = 0
        while(true){
            slow = nums[slow]
            slowThatWillFindTheDuplicate = nums[slowThatWillFindTheDuplicate]

            if(slow === slowThatWillFindTheDuplicate){
                return slow
            }
        }
    }
}
