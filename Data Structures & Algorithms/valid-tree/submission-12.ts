class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n: number, edges: number[][]): boolean {
        const adj = {}
        for(let [src, dest] of edges){
            if(!adj[src]){
                adj[src] = []
            }
            if(!adj[dest]){
                adj[dest] = []
            }

            adj[src].push(dest)
            adj[dest].push(src)
        }
        const visited = new Set()

        const dfs = (node: number, prev: number) => {
            if(visited.has(node)){
                return false
            }

            visited.add(node)
            for(let nei of (adj[node] ?? [])){
                if(nei === prev) continue
                if(!dfs(nei, node)){
                    return false
                }
            }
            visited.delete(node)

            return true
        }

        for(let i = 0; i < n; i++){
            if(!dfs(i, -1)){
                return false
            }
        }
     
        return n === 1 ? true : n - 1 === edges.length
    }
}
