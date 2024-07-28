from itertools import combinations

def distance(point1, point2):
    return (point1[0] - point2[0]) ** 2 + (point1[1] - point2[1]) ** 2

n, m = map(int, input().split())
points = []
for _ in range(n):
    points.append(list(map(int, input().split())))

combs = list(combinations(points, m))
ans = float('inf')

for comb in combs:
    dist = 0
    for i in range(len(comb)):
        for j in range(i + 1, len(comb)):
            dist = max(dist, distance(comb[i], comb[j]))
    ans = min(ans, dist)

print(ans)