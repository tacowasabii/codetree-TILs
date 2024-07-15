n = int(input())
grid = [list(map(int, input().split(" "))) for _ in range(n)]

def changePosition(x, y, direction):
    dx = [1, 0, -1, 0]
    dy = [0, -1, 0, 1]

    if grid[x][y] == 2:
        direction = 3 - direction
    elif grid[x][y] == 1:
        if direction == 0 or direction == 2:
            direction += 1
        else:
            direction -= 1
    x += dx[direction]
    y += dy[direction]
    
    return x, y, direction

def calcTime(x, y, direction):
    time = 1
    while 0 <= x < n and 0 <= y < n:
        x, y, direction = changePosition(x, y, direction)
        time += 1
    return time

time = 0
for i in range(n):
    time = max(time, calcTime(0, i, 0), calcTime(i, n - 1, 1), calcTime(n - 1, i, 2), calcTime(i, 0, 3))

print(time)