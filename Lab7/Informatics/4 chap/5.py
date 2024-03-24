nums = input().split()
for i in range(1, len(nums)):
    if int(nums[i]) * int(nums[i-1]) > 0:
        print(nums[i - 1], nums[i])
        break