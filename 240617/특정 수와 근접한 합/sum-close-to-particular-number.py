from itertools import combinations

N, S = map(int, input().split())
arr = list(map(int, input().split()))

combs = list(combinations(arr, N-2))
diffs = []

for i in combs:
    diffs.append(abs(S - sum(i)))

print(min(diffs))