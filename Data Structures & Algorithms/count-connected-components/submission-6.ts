class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n: number, edges: number[][]): number {
        const parent = Array.from({length: n}, (_, i) => i)
        const ranking = Array.from({length:n}, () => 0)

        const find = (n) => {
            let p = parent[n]
            while(p !== parent[p]) {
                parent[p] = parent[parent[p]]
                p = parent[p]        
            }

            return p
        }

        const union = (node1: number, node2: number) => {
            const p1 = find(node1)
            const p2 = find(node2)

            if(p1 === p2){
                return false
            }

            if(ranking[p1] > ranking[p2]){
                parent[p2] = p1
                ranking[p1] ++ 
            } else if (ranking[p2] > ranking[p1]){
                parent[p1] = p2
                ranking[p2] ++
            } else {
                parent[p2] = p1
                ranking[p1] ++
            }

            return true
        }

        let count = n
        for(let [src, dest] of edges){
            if(union(src, dest)){
                count --
            }
        }

        return count


    }
}
