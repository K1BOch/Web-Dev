a = int(input())
b = int(input())
a = str(a)
counter = 0
for dig in a:
    if int(dig) == b:
        counter += 1
print(counter)
