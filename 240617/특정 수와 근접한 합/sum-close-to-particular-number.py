from itertools import combinations

N, S = map(int, input().strip().split())
arr_input = input().strip()

if arr_input:
    arr = list(map(int, arr_input.split()))
else:
    arr = []

combs = list(combinations(arr, N - 2))
diffs = []

for comb in combs:
    diffs.append(abs(S - sum(comb)))

print(min(diffs))