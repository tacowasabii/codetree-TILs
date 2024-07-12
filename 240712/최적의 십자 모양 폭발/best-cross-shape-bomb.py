from copy import deepcopy

def bomb(arr, n, row, col):
    new_arr = deepcopy(arr)
    power = int(new_arr[row][col])
    
    for i in range(n):
        for j in range(n):
            if ((i > row - power and i < row + power and j == col) or (j > col - power and j < col + power and i == row)):
                new_arr[i][j] = '0'
    
    for j in range(n):
        tmp = []
        for i in range(n):
            if new_arr[i][j] != '0':
                tmp.append(new_arr[i][j])
        tmp = ['0'] * (n - len(tmp)) + tmp
        for i in range(n):
            new_arr[i][j] = tmp[i]
    
    return new_arr

n = int(input())
arr = [input().split() for _ in range(n)]
ans = 0

for i in range(n):
    for j in range(n):
        new_arr = bomb(arr, n, i, j)
        cnt = 0
        for x in range(n):
            for y in range(n - 1):
                if new_arr[x][y] != '0' and new_arr[x][y] == new_arr[x][y + 1]:
                    cnt += 1
                if new_arr[y][x] != '0' and new_arr[y][x] == new_arr[y + 1][x]:
                    cnt += 1
        ans = max(ans, cnt)

print(ans)