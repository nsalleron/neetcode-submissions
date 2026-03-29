class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortArray(nums) {
         if (!nums || nums.length <= 1) return nums;

        const mergeSort = (arr, l, r) => {
            if(l == r){
                return arr
            }

            const m = Math.floor((l + r) / 2)
            mergeSort(arr, l, m, temp)
            mergeSort(arr, m + 1 , r,temp)

            merge(arr, l, m, r, temp)
        }

        const merge = (arr, l, m, r, temp) => {
            // Copy to temp
            for (let i = l; i <= r; i++) temp[i] = arr[i];


            let i = l;     // left part pointer in temp
            let j = m + 1; // right part pointer in temp
            let k = l;     // destination pointer in arr

            while (i <= m && j <= r) {
                if (temp[i] <= temp[j]) {
                  arr[k++] = temp[i++];
                } else {
                  arr[k++] = temp[j++];
                }
            }

            while (i <= m) arr[k++] = temp[i++];
            // No need to copy the remaining right part since it's already in place
            // (leftover right elements are already in arr from previous steps),
            // but to be safe, copy any remaining right part as well:
            while (j <= r) arr[k++] = temp[j++];
        }

        const n = nums.length;
        const temp = new Array(n);
        mergeSort(nums, 0, n - 1, temp);
        return nums;

    }
}
