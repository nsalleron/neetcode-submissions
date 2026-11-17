class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points: number[][], k: number): number[][] {
        const maxHeap = new PriorityQueue((a, b) => b[0] - a[0])

        for(let point of points){
            const ed = Math.sqrt(point[0] ** 2 + point[1] ** 2)
            
            maxHeap.enqueue([ed, point])
            if(maxHeap.size() > k){
                maxHeap.dequeue()
            }
        }

        return maxHeap.toArray().map((e) => e[1])
    }
}
