arr=[1,2,3,4,5,6,7,8,9,0]
rot_from=7
out=[]
for i in range(rot_from,len(arr)):
    out.append(arr[i])
for j in range(0,rot_from):
    out.append(arr[j])
print(out)