from collections import defaultdict

n, m, t = map(int, input().split())
balls = []
directionDict = {
    'U': 0,
    'R': 1,
    'L': 2,
    'D': 3,
}

for i in range(m):
    r, c, d, w = input().split()
    balls.append({'r':int(r), 'c': int(c), 'd': directionDict[d], 'w': int(w), 'n': i})

def changePosition(r, c, direction):
    dr = [-1, 0, 0, 1]
    dc = [0, 1, -1, 0]

    nr = r + dr[direction]
    nc = c + dc[direction]

    if not (0 < nr <= n and 0 < nc <= n):
        direction = 3 - direction
    else:
        r = nr
        c = nc

    return r, c, direction

for _ in range(t):
    newPositions = defaultdict(list)
    
    for ball in balls:
        newR, newC, newD = changePosition(ball['r'], ball['c'], ball['d'])
        ball['r'] = newR
        ball['c'] = newC
        ball['d'] = newD

        key = f"{newR},{newC}"
        newPositions[key] = newPositions[key] + [ball]

    new_balls = []
    for group in newPositions.values():
        if len(group) == 1:
            new_balls.append(group[0])
        else:
            w = 0
            max_idx = 0
            n = 0
            for idx, ball in enumerate(group):
                w += ball['w']
                if ball['n'] > n:
                    n = ball['n']
                    max_idx = idx
            group[max_idx]['w'] = w
            new_balls.append(group[max_idx])

    balls = [*new_balls]
max_w = 0

for ball in balls:
    max_w = max(max_w, ball['w'])
print(len(balls), max_w)