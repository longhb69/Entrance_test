def top_two(arr):
    arr.sort()
    return sum(arr[-2:])

print(top_two([1, 4, 2, 3, 5]))
print(top_two([1, 2]))
print(top_two([]))
print(top_two([100]))
