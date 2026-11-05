class WordTree {
    children: Map<string,WordTree>
    word: boolean;
    constructor() {
        this.children = new Map()
        this.word = false;
    }
}

class WordDictionary {
    root: WordTree;
    constructor() {
        this.root = new WordTree();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word: string): void {
        let current = this.root;
        for (let c of word) {
            if (!current.children.has(c)) {
                current.children.set(c,new WordTree())
            }
            current = current.children.get(c);
        }
        current.word = true
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word: string): boolean {
        return this.dfs(word, 0, this.root)
    }

    dfs(word: string, j: number, root: WordTree){
        let current = root

        for(let i = j; i < word.length; i++){
            const c = word[i]
            if(c === '.'){
                for (const child of current.children.values()){
                    if(child !== null && this.dfs(word, i + 1, child)){
                        return true
                    }
                }
                return false
            } else {
                if(!current.children.get(c)){
                    return false
                }
                current = current.children.get(c)
            }
        }
        return current.word
    }
}
