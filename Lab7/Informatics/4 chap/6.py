nums = input().split()
counter = 0
for i in range(1, len(nums) - 1):
    if int(nums[i]) > int(nums[i - 1]) and int(nums[i]) > int(nums[i + 1]):
        counter += 1
print(counter)