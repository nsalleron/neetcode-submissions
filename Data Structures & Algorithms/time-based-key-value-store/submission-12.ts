class TimeMap {
    keyStore: Map<string, [string, number][]>;
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key: string, value: string, timestamp: number): void {
        const arrKV = this.keyStore.get(key) ?? []
        arrKV.push([value, timestamp])
        this.keyStore.set(key, arrKV)
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key: string, timestamp: number): string {
        const arrKV = this.keyStore.get(key) ?? []

        let l = 0
        let r = arrKV.length - 1
        
        let maxTimestamp = -1 
        while(l <= r){
            const m = Math.floor((l + r) / 2)
            const arrTimestamp = arrKV[m][1]

            if(arrTimestamp <= timestamp){
                maxTimestamp = m
                l = m + 1
            } else {
                r = m - 1 
            }
            
        }
        return maxTimestamp === -1 ? "" : arrKV[maxTimestamp][0]
    }
}
