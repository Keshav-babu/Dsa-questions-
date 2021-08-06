list=[1,2,3,4,5,6,7,8,12,13,1555555,10,-1]
out=[list[0],list[0]]
len=len(list)
start=0
while start<len:
    if(out[0]>list[start]):
        out[0]=list[start]
    
    if(out[1]<list[start]):
        out[1]=list[start]
    start +=1
print(out)