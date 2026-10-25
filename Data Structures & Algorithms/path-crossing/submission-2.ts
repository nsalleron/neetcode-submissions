class Solution {
    /**
     * @param {string} path
     * @return {boolean}
     */
    isPathCrossing(path: string): boolean {
        let x = 0
        let y = 0
        
        const visited = new Set<string>()
        visited.add("0,0");
        for(let direction of path){
            switch(direction){
                case 'N':
                    y++
                    break;
                case 'S':
                    y--
                    break;
                case 'E':
                    x++
                    break;
                case 'W':
                    x--
            }

            const position = `${x},${y}`
            if(visited.has(position))
                return true
            visited.add(position)

        }
        return false
    }
}
