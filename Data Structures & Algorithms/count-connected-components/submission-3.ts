class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n: number, edges: number[][]): number {
        const par = {}
        const rank: Record<string, number> = {}
        let count = n

        for(let i = 0; i < n; i++){
            par[i] = i
            rank[i] = 0
        }

        const find = (n) => {
            let p = par[n]
            while( p !== par[p]){
                par[p] = par[par[p]]
                p = par[p]
            }
            return p
        }

        const union = (n1, n2) => {
            let p1 = find(n1)
            let p2 = find(n2)

            if(p1 === p2){
                return false
            }

            if(rank[p1] > rank[p2]){
                par[p2] = p1
            } else if (rank[p1] < rank[p2]){
                par[p1] = p2
            } else {
                par[p1] = p2
                rank[p2] += 1
            }
            return true
        }

        for(let [src, dest] of edges){
            if (union(src, dest)) {
                count -= 1
            }
        }

        return count
    }
}
