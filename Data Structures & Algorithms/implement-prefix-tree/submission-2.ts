class WordTrie {
    children = new Map<string,WordTrie>()
    word = false
}



class PrefixTree {
    root: WordTrie
    constructor() {
        this.root = new WordTrie()
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word: string): void {
        let current = this.root
        for(let c of word){
            if(!current.children.has(c)){
                current.children.set(c, new WordTrie)
            }
            current = current.children.get(c)
        }
        current.word = true
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word: string): boolean {
        let current = this.root
        for(let c of word){
            if(!current.children.has(c)){
                return false
            }
            current = current.children.get(c)
        }
        return current.word
    }


    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix: string): boolean {
        let current = this.root
        for(let c of prefix){
            if(!current.children.has(c)){
                return false
            }
            current = current.children.get(c)
        }
        return true
    }
}
