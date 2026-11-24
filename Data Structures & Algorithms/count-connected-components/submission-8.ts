class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n: number, edges: number[][]): number {
        const par = Array.from({length: n}, (_, i) => i)
        const rank = Array.from({length: n}, () => 0)

        const find = (n) =>{
            let p = par[n]
            while(p !== par[p]){
                par[p] = par[par[p]]
                p = par[p]
            }

            return p
        }

        const union = (n1, n2) => {
            const p1 = find(n1)
            const p2 = find(n2) 

            if(p1 === p2){
                return false // same parent
            }

            if(rank[p1] > rank[p2]){
                par[p2] = p1
                rank[p1]++
            } else if (rank[p2] > rank[p1]){
                par[p1] = p2
                rank[p2]++
            } else {
                par[p2] = p1
                rank[p1]++
            }

            return true
        }

        let count = n
        for(let [u, v] of edges){
            if(union(u, v)){
                count--
            }
            
        }

        return count
    }
}
