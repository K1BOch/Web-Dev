a = int(input())
b = int(input())
if b == 1:
    if a == 1:
        print("YES")
    else:
        print("NO")
else:
    if (b != a and a != 1) or (b == a and a != 1):
        print("YES")
    else:
        print("NO")    