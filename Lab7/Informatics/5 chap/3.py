def xor(x, y):
    return int((x or y) and not (x and y))
x, y = input().split()
x = bool(int(x))
y = bool(int(y))
print(xor(x, y))