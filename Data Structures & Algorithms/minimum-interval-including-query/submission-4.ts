class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} sortedQueries
     * @return {number[]}
     */
    minInterval(intervals: number[][], queries: number[]): number[] {
        intervals.sort((a, b) => a[0] - b[0]); 
        const sortedQueries = [...queries].sort((a,b) => a - b)
        const heap = new PriorityQueue((a,b) => a[0] - b[0])

            let i = 0

        const res = {}
        for(let q of sortedQueries){
            while(i < intervals.length && intervals[i][0] <= q){
                let [l, r] = intervals[i++]
                heap.enqueue([r-l + 1, r])
            }

            while(heap.size() > 0 && heap.front()[1] < q)
                heap.dequeue()

            res[q] = heap.size() > 0 ? heap.front()[0] : -1

        }

        return queries.map((e) => res[e])


    }
}
