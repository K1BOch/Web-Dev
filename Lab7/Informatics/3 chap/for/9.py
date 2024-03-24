import math
a = int(input())
counter = 0
for i in range(1, int(math.sqrt(a)) + 1):
    if a % i == 0:
        counter += 1
        if i != a // i:
            counter += 1
print(counter)