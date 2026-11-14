class Twitter {
    followers: Map<number, Set<number>>;
    tweets: Map<number, [number, number][]>;
    olderCounter: number;

    constructor() {
        this.followers = new Map();
        this.tweets = new Map();
        this.olderCounter = 0;
    }

    /**
     * @param {number} userId
     * @param {number} tweetId
     * @return {void}
     */
    postTweet(userId: number, tweetId: number): void {
        const listOfTweets = this.tweets.get(userId) ?? [];
        listOfTweets.push([this.olderCounter--, tweetId]);
        this.tweets.set(userId, listOfTweets);
    }

    /**
     * @param {number} userId
     * @return {number[]}
     */
    getNewsFeed(userId: number): number[] {
        this.follow(userId, userId);
        const minHeap = new MinPriorityQueue((a) => a[0]);

        for (let f of this.followers.get(userId)) {
            const tweets = this.tweets.get(f) ?? [];
            const index = tweets.length - 1;
            if (tweets[index]) {
                const [count, tweetId] = tweets[index];
                minHeap.enqueue([count, tweetId, f, index - 1]);
            }
        }

        const res = [];
        while (minHeap.size() > 0 && res.length < 10) {
            const mostRecentTweet = minHeap.dequeue();
            if (mostRecentTweet) {
                const [, tweetId, follow, nextTweet] = mostRecentTweet;
                res.push(tweetId);
                const tweets = this.tweets.get(follow);

                if (nextTweet >= 0 && tweets[nextTweet] !== undefined) {
                    const [nextCount, nextTweetId] = tweets[nextTweet];
                    minHeap.enqueue([nextCount, nextTweetId, follow, nextTweet-1]);
                }
            }
          
        }

        return res;
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    follow(followerId: number, followeeId: number): void {
        const setOfFollowee = this.followers.get(followerId) ?? new Set();
        setOfFollowee.add(followeeId);
        this.followers.set(followerId, setOfFollowee);
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    unfollow(followerId: number, followeeId: number): void {
        const setOfFollowee = this.followers.get(followerId) ?? new Set();
        setOfFollowee.delete(followeeId);
        this.followers.set(followerId, setOfFollowee);

    }
}
