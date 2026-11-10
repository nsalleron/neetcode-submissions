class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points: number[][], k: number): number[][] {
        const minHeap = new MinPriorityQueue((item: number[]) => item[0])
        for(let i = 0; i < points.length; i++){
            const [x1, y1] = points[i]
            const value = Math.sqrt(Math.pow(x1 - 0, 2) + Math.pow(y1 - 0, 2));
            minHeap.enqueue([value, x1, y1])
        }

        const res = []
        while(k > 0){
            const [_, x1, y1] = minHeap.dequeue()
            res.push([x1,y1])
            k--
        }

        return res

    }
}
