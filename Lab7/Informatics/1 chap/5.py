v = int(input())
t = int(input())
res = v*t
while res > 109:
    res = res - 109
while res < 0:
    res = res + 109
print(res)