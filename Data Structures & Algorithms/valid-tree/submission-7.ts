class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n: number, edges: number[][]): boolean {
        if(edges.length > n) {
            return false
        }

        const adjList = Array.from({length: n}, () => [])
        for(let [src, dest] of edges){
            adjList[src].push(dest)
            adjList[dest].push(src)
        }

        const visited = new Set()

        const dfs = (node, previous) => {
            if(visited.has(node)){
                return false
            }
            visited.add(node)

            for(let nei of adjList[node]){
                if(previous === nei) continue
                if(!dfs(nei, node)){
                    return false
                }
            }

            return true
        }

        

        return dfs(0, -1) && visited.size === n
    }
}
