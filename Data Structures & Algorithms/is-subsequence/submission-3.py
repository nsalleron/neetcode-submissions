class Solution:
    def isSubsequence(self, s: str, t: str) -> bool:
        indexOfS = 0
        for i in range(len(t)):
            if indexOfS == len(s): return True
            if t[i] == s[indexOfS]:
                indexOfS += 1
        return indexOfS == len(s)