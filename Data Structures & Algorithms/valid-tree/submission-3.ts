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

        let front = 0
        const q = []
        q.push([0, -1]) //on commence forcement au node 0

        visited.add(0)
        while(q.length > front){
            const [node, parent] = q[front++]
            for(const nei of adjList[node]){ //on recupere les voisins du noeud init
                if(nei === parent) continue // ? pas compris ce cas
                if(visited.has(nei)) return false // on a un cycle

                visited.add(nei)//on visite
                q.push([nei, node]) //on ajout les childs du noeud parent
            }
        }


        return visited.size === n // cas en dehors
    }
}
