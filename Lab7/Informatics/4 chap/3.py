nums = input().split()
counter = 0
for num in nums:
    if int(num) > 0:
        counter += 1
print(counter)