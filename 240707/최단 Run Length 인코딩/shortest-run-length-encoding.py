def RLE(arr):
    result = ""
    alp = arr[0]
    cnt = 1

    for i in range(1, len(arr)):
        if arr[i] != arr[i - 1]:
            result += alp
            result += str(cnt)
            alp = arr[i]
            cnt = 1
        else:
            cnt += 1
    result += alp
    result += str(cnt)

    return len(result)

arr = list(input().strip())
n = len(arr)
ans = 100

for i in range(n):
    rotated = [arr[(i + j) % n] for j in range(n)]
    ans = min(ans, RLE(rotated))

print(ans)