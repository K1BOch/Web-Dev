nums = input().split()
for i in range(1, len(nums)):
    if int(nums[i]) > int(nums[i-1]):
        print(nums[i], end = " ")