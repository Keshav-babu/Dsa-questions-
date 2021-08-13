arr2=[1,2,3,4,5,0]
arr1=[1,2,3,8,5,0,9,12,11]
union=arr1
intersection=[]

for i in range (0,len(arr2)):
    str=True
    for j in range(0,len(arr1)):
        if arr2[i]==arr1[j]:
            str =False
            break
    if str:
        union.append(arr2[i])
    else:
        intersection.append(arr2[i])
print(union,intersection)
    