class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */

    validTree(n: number, edges: number[][]): boolean {
        if(edges.length > n - 1){
            return false
        }

        const adjList = Array.from({length: n}, () => [])
        for(let [src, dest] of edges){
            adjList[src].push(dest)
            adjList[dest].push(src)
        }

        const visited = new Set()

        const dfs = (current, parent) => {
            if(visited.has(current)){
                return false
            }

            visited.add(current)

            for(let nei of adjList[current]){
                if(nei === parent) continue
                if(visited.has(nei)) return false

                dfs(nei, current)
            }

            return true
        }


        return dfs(0, -1) && visited.size === n // cas en dehors
    }
}
