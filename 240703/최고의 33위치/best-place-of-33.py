n = int(input())
matrix = []
for _ in range(n):
    matrix.append(list(map(int, input().split())))
ans = 0

for i in range(n - 2):
    for j in range(n - 2):
        Sum = 0
        for elem in matrix[i:i + 3]:
            Sum += sum(elem[j:j + 3])
        ans = max(ans, Sum)
print(ans)