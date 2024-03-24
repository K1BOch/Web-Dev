def is_leap(a):
    return ((a % 4 == 0 and a % 100 != 0) or (a % 400 == 0))

year = int(input())
print(is_leap(year))