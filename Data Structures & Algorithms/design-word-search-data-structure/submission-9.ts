class WordTrie {
    children: Map<string, WordTrie>;
    word: boolean;

    constructor() {
        this.children = new Map();
        this.word = false;
    }
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
        current.word = true
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word: string): boolean {
        let current = this.root;
        for (let i = 0; i < word.length; i++) {
            let currentLetter = word[i];
            if(currentLetter === '.'){
                for(let c of current.children.keys()){
                    if(this.search(word.slice(0, i) + c + word.slice(i + 1))){
                        currentLetter = c
                        break
                    }
                }
            }
            if(!current.children.has(currentLetter)){
                return false
            } 
            current = current.children.get(currentLetter)
        }

        return current.word
    }
}
