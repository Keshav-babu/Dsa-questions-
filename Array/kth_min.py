list=[7,8,6,5,9,0,-1]

k=3
# kth min of list is 6 1st min is 0 2nd min is 5 (k=3) 3rd min is 6
kth_min=0
for j in range(0,k):
    temp=list[0]
    for i in range (0,len(list)):
        if(list[i]<temp):
            temp=list[i]
    kth_min=temp
    list.remove(temp)
print(kth_min)
list1=[1,2,-1,2,-10,-13]
list1.sort()
#[-13,-12,-1,1,2,2]
print(list1[k-1])






