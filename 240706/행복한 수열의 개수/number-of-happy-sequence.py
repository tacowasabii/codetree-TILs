n, m = map(int, input().split())
matrix = []
for _ in range(n):
    matrix.append(list(map(int, input().split())))
ans = 0

for i in range(n):
    cnt = 1
    maxCnt = 1
    for j in range(1, n):
        if matrix[i][j] != matrix[i][j - 1]:
            cnt = 1
        else:
            cnt += 1
        maxCnt = max(cnt, maxCnt)
    if maxCnt >= m:
        ans += 1
    
    cnt = 1
    maxCnt = 1
    for j in range(1, n):
        if matrix[j][i] != matrix[j - 1][i]:
            cnt = 1
        else:
            cnt += 1
        maxCnt = max(cnt, maxCnt)
    if maxCnt >= m:
        ans += 1
print(ans)