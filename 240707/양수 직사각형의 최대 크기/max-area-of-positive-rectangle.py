n, m = map(int, input().split())
table = [list(map(int, input().split())) for _ in range(n)]
ans = -1

for i in range(1, n + 1):
    for j in range(1, m + 1):
        for row in range(n - i + 1):
            for col in range(m - j + 1):
                flag = True
                for k in range(row, row + i):
                    for l in range(col, col + j):
                        if table[k][l] <= 0:
                            flag = False
                if flag:
                    ans = max(ans, i * j)

print(ans)