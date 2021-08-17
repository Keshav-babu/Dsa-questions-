arr= [1,4,45,6,10,8]
sum=15
for i in range(0,len(arr)-2):
    temp=sum-arr[i]
    for j in range(i+1,len(arr)-1):
        temp=temp-arr[j]
        for k in range(j+1,len(arr)):
            if temp-arr[k]==0:
                print(arr[i],arr[j],arr[k])

arr.sort()
print(arr)    