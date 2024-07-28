from itertools import permutations

n = int(input())
matrix = []
for _ in range(n):
    matrix.append(list(map(int, input().split())))

perms = list(permutations([i for i in range(n)], n))

ans = 0

for perm in perms:
    points = []
    for i in range(n):
        points.append([perm[i], i])
    num = 10000
    for point in points:
        num = min(num, matrix[point[0]][point[1]])
    ans = max(ans, num)

print(ans)