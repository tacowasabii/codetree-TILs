def permutation(n):
    if n == 1:
        return [[1], [2], [3], [4]]
    tmp = []
    for i in permutation(n - 1):
        for j in range(1, 5):
            tmp.append(i + [j])
    return tmp

def calc(exp):
    result = int(exp[0])

    for i in range(2, len(exp), 2):
        num = int(exp[i])
        if exp[i - 1] == '+':
            result += num
        elif exp[i - 1] == '-':
            result -= num
        else:
            result *= num
    return result

expression = input()
idx = 0
alps = {}

for i in expression:
    if (ord('a') <= ord(i) <= ord('f') and i not in alps):
        alps[i] = idx
        idx += 1

result = float('-inf')
for perm in permutation(len(alps)):
    new_exp = ""
    for s in expression:
        if s in alps:
            new_exp += str(perm[alps[s]])
        else:
            new_exp += s
    result = max(result, calc(new_exp))

print(result)