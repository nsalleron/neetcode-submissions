class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortArray(nums) {
        if (!nums || nums.length <= 1) return nums;

        const temp = new Array(nums.length)

        const mergeSort = (arr, l, r) => {
            if(l == r){
                return arr
            }

            const m = Math.floor((r + l) / 2)
            mergeSort(arr, l, m)
            mergeSort(arr, m+1, r)


            merge(arr, l, m, r, temp)
        }

        const merge = (arr, l, m, r, temp) => {
            for(let i = l; i <= r; i++ ){
                temp[i] = arr[i]
            }

            let i = l
            let j = m + 1
            let k = l

            while(i <= m && j <= r){
                if(temp[i] <= temp[j]){
                    arr[k++] = temp[i++]
                } else {
                    arr[k++] = temp[j++]
                }
            } 

            while(i <= m){
                arr[k++] = temp[i++]
            }

            while(j <= r){
                arr[k++] = temp[j++]
            }

        }





        //mergeSort + merge


        mergeSort(nums, 0, nums.length - 1)
        return nums

    }
}
