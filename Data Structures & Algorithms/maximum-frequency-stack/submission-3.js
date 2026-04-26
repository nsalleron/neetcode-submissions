class FreqStack {
    constructor() {
       this.cnt = new Map()
       this.maxCnt = 0
       this.stacks = new Map()
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
       const valCnt = 1 + (this.cnt.get(val) ?? 0)

       this.cnt.set(val, valCnt)
       if (valCnt > this.maxCnt){
            this.maxCnt = valCnt
       }
       if (!this.stacks.has(valCnt)) {
           this.stacks.set(valCnt, []);
       }
       this.stacks.get(valCnt).push(val);
    }

    /**
     * @return {number}
     */
    pop() {
      const res = this.stacks.get(this.maxCnt).pop()
      this.cnt.set(res, this.cnt.get(res) - 1 )
      if(this.stacks.get(this.maxCnt).length === 0){
        this.maxCnt -- ;

      }
      return res;
        
    }
}
