arr =[1,2,-3,-4,8]
#arr[0], arr[3]=arr[3],arr[0]
#print(arr)
j=0
for i in range (0, len(arr)):
    if(arr[i]<0):
        arr[j],arr[i]=arr[i],arr[j]
        j=j+1
print(arr)