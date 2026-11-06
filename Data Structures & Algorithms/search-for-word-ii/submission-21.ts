class TrieNode {
    children: Map<string, TrieNode> = new Map()
    word = false
}

class Solution {
    root: TrieNode
    /**
     * @param {character[][]} board
     * @param {string[]} words
     * @return {string[]}
     */
    findWords(board: string[][], words: string[]): string[] {
        this.root = new TrieNode()

        const visited = new Set()
        const results = []
        for(let word of words){
            this.addWord(word)
        }

        const dfs = (row: number, col: number, currentNode: TrieNode, word: string) => {
            const KEY = `${row},${col}`

            if(
                row < 0 ||
                col < 0 ||
                row >= board.length  || 
                col >= board[0].length ||
                visited.has(KEY) ||
                currentNode == undefined
            ){
                return 
            }

            const current = currentNode.children.get(board[row][col])
            const newWord = word + board[row][col]

            if(current && current.word){
                results.push(newWord)
                current.word = false // avoid duplicates
            }

            visited.add(KEY)


            dfs(row + 1, col, current, newWord)
            dfs(row - 1, col, current, newWord)
            dfs(row, col + 1, current, newWord)
            dfs(row, col - 1, current, newWord) 

            visited.delete(KEY)  
        }

        for(let row = 0; row < board.length; row++){
            for(let col = 0; col < board[0].length; col++){
                dfs(row, col, this.root, "")
            }
        }

        return results

    }

    addWord(word:string){
        let current = this.root
        for(let c of word){
            if(!current.children.has(c)){
                current.children.set(c, new TrieNode())
            }
            current = current.children.get(c)
        }
        current.word = true
    }
}
