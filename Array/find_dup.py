arr=[1,2,3,4,5,6,7,8,9,6]
arr.sort()
for i in range(0,len(arr)-1):
    if arr[i]==arr[i+1]:
        print(arr[i])
