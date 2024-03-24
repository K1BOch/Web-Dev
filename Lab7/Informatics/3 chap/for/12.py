a = input()
num = 0
for i in range(len(a)):
    dig = int(a[-(i+1)])
    num += dig * (2 ** i)
print(num)
