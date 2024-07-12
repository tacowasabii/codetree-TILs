from copy import deepcopy

def bomb(arr, n, row, col):
    new_arr = deepcopy(arr)
    power = int(new_arr[row][col])
    for j in range(n):
        tmp = []
        for i in range(n):
            if not ((i == row and j > col - power and j < col + power) or (j == col and i > row - power and i < row + power)):
                tmp.append(new_arr[i][j])
        tmp = ['0'] * (n - len(tmp)) + tmp

        for i in range(n):
            new_arr[i][j] = tmp[i]
    
    return new_arr

n = int(input())
arr = [input().split(" ") for _ in range(n)]
ans = 0

for i in range(n):
    for j in range(n):
        new_arr = bomb(arr, n, i, j)
        cnt = 0
        for k in range(n):
            for v in range(n - 1):
                if new_arr[k][v] != '0' and new_arr[k][v] == new_arr[k][v + 1]:
                    cnt += 1
                if new_arr[v][k] != '0' and new_arr[v][k] == new_arr[v + 1][k]:
                    cnt += 1
        ans = max(ans, cnt)

print(ans)