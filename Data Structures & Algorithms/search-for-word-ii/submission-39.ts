class Trie {
    children = new Map<string, Trie>()
    word = false
}

class Solution {
    root = new Trie()
    directions = [
        [1,0] ,
        [-1,0],
        [0,1],
        [0,-1]
    ]
    /**
     * @param {character[][]} board
     * @param {string[]} words
     * @return {string[]}
     */
    findWords(board: string[][], words: string[]): string[] {
        for(let w of words){
            this.addWord(w)
        }


        const ROWS = board.length
        const COLS = board[0].length
        const visited = new Set()
        const part = []
        const res = []

        const dfs = (r: number, c: number, current: Trie) => {
            const key = `${r},${c}`
            
            if(r < 0 || c < 0 || r === ROWS || c === COLS || visited.has(key)){
                return
            }

            let currentChar = board[r][c]
            
            current = current.children.get(currentChar)
            if(current === undefined){
                return
            }
            part.push(currentChar)

            if(current.word){
                res.push(part.join(""))
                current.word = false
            }

            visited.add(key)

            for(let [rP, cP] of this.directions){
                const newRow = r + rP
                const newCol = c + cP
                dfs(newRow, newCol, current)
                
            }
            part.pop()
            visited.delete(key)
        }

        for(let r = 0; r < ROWS; r++){
            for(let c = 0; c < COLS; c++){
                if(this.root.children.has(board[r][c])){
                    dfs(r, c, this.root)
                }
            }
        }
        return res
    }

    addWord(word: string): void{
        let current = this.root
        for(let c of word){
            if(!current.children.has(c)){
                current.children.set(c, new Trie())
            }
            current = current.children.get(c)
        }
        current.word = true
    }
}
