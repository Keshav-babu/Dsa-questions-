list=[4,5,3,7,9,0]
list=[1,2,3,4,5]
end=len(list)-1
start=0
while start<end:
    list[start],list[end]=list[end],list[start]
    start +=1
    end -=1
print(list)