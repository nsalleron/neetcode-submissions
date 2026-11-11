class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points: number[][], k: number): number[][] {
        const heap = new MaxPriorityQueue((a) => a[0]);

        for (let [x, y] of points) {
            const dist = x * x + y * y;
            heap.push([dist, x, y]);
            if (heap.size() > k) {
                heap.dequeue();
            }
        }

        return heap.toArray().map((e) => [e[1], e[2]]);
    }
}
