list=[1, 0, 5, 8, 9, 2, 6, 7, 6, 8, 9]
# list=[1, 4, 3, 2, 6, 7]

num=0
cond=0
while cond<len(list)-1:
    num+=1
    cond=cond+list[cond]
    if cond <len(list):
        if list[cond]==0:
            num=-1
            break
print("jump = " +str(num))