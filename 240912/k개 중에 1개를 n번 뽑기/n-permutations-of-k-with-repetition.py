k, n = map(int, input().split())
nums = [i for i in range(1, k + 1)]

def sol(k, n):
    if n == 1:
        return [[i] for i in range(1, k + 1)]
    else:
        tmp = []
        for i in range(1, k + 1):
            for j in sol(k, n - 1):
                tmp.append([i] + j)
        return tmp

for li in sol(k, n):
    print(*li)