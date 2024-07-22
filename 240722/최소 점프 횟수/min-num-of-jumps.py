n = int(input())
arr = list(map(int, input().split()))

stack = [[0, 0]]
ans = float('inf')

while stack:
    [idx, num] = stack.pop()
    if idx >= n - 1:
        ans = min(ans, num)
    else:
        for i in range(1, arr[idx] + 1):
            stack.append([idx + i, num + 1])

if ans == float('inf'):
    print(-1)
else:
    print(ans)