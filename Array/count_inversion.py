arr=[2,4,1,3,5]
arr=[2,3,4,5,6]
count=0
if arr==arr.sort:
    print(count)
else:
    for i in range(0,len(arr)-1):
        for j in range(i+1,len(arr)):
            if arr[i]>arr[j]:
                count+=1
print(count)
