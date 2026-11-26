class Solution {
    minInterval(intervals: number[][], queries: number[]): number[] {
        intervals = intervals.sort((a, b) => a[0] - b[0]);
        const minHeap = new PriorityQueue((a, b) => {
            if (a[0] === b[0]) {
                return a[1] - b[1];
            }
            return a[0] - b[0];
        });

        const sortedQueries = [...queries].sort((a, b) => a - b);
        const res: { [key: number]: number } = {};
        let i = 0;

        for (let q of sortedQueries) {
            while (i < intervals.length && intervals[i][0] <= q) {
                const [l, r] = intervals[i];
                minHeap.enqueue([r - l + 1, r]);
                i += 1;
            }

            while (!minHeap.isEmpty() && minHeap.front()[1] < q) {
                minHeap.dequeue();
            }
            res[q] = !minHeap.isEmpty() ? minHeap.front()[0] : -1;
        }

        return queries.map((q) => res[q]);
    }
}
