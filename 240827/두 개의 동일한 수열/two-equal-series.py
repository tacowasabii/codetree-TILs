n = int(input())
a = sorted(list(map(int, input().split())))
b = sorted(list(map(int, input().split())))

if a == b:
    print("Yes")
else:
    print("No")