class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        map = {}
        for i in range(len(nums)):
            result = target - nums[i]
            if result in map:
                return [map[result], i]
            map[nums[i]] = i
        return []


