class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points: number[][], k: number): number[][] {
        const map = new Map()
        const minHeap = new MinPriorityQueue()
        for(let i = 0; i < points.length; i++){
            const [x1, y1] = points[i]
            const value = Math.sqrt(Math.pow(x1 - 0, 2) + Math.pow(y1 - 0, 2));

            if(!map.has(value)){
                map.set(value, [])
            }
            const previous = map.get(value)
            previous.push(points[i])
            map.set(value, previous)

            minHeap.enqueue(value)
        }

        const res = []
        while(k > 0){
            const val = minHeap.dequeue()
            const elements = map.get(val)
            while(elements.length > 0){
                res.push(elements.pop())
                k--
            }
        }

        return res

    }
}
