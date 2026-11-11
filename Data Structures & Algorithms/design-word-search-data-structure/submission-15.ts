class WordTrie {
    children = new Map<string, WordTrie>();
    word = false;
}

class WordDictionary {
    root: WordTrie;
    constructor() {
        this.root = new WordTrie();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word: string): void {
        let current = this.root;
        for (let c of word) {
            if (!current.children.has(c)) {
                current.children.set(c, new WordTrie());
            }
            current = current.children.get(c);
        }
        current.word = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word: string): boolean {
        let current = this.root;
        return this.dfs(word,current)
    }

    dfs(word: string, previous: WordTrie) {
        let current = previous
        for (let i = 0; i < word.length; i++) {
            let c = word[i]
            if(c === '.'){
                for(let wt of current.children.values()){
                    const res = this.dfs(word.slice(i+1), wt)
                    if(res){
                        return true
                    }
                }
            }
            if (!current.children.has(c)) {
                return false
            }
            current = current.children.get(c);
        }
        return current.word
    }
}
