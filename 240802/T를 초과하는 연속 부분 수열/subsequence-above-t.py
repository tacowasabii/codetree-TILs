n, t = map(int, input().split())
arr = list(map(int, input().split()))
ans = 0

for i in range(len(arr)):
    length = 0
    for j in range(i, len(arr)):
        if arr[j] > t:
            length += 1
        else:
            break
    ans = max(ans, length)
print(ans)