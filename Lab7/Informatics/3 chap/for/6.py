a = int(input())
a = str(a)
reva = ""
for dig in a[::-1]:
    reva += dig
print(int(reva))