function Stopwatch(){
    let startTime,endTime,running,duration=0
    this.start=function(){
        if(running){
            throw new Error("Stopwatch is already started")
        }
        running=true
        startTime=new Date()
    }

    this.stop=function(){
        if(!running){
            throw new Error("Stopwatch is not started")
        }
        running=false
        endTime=new Date()
        const seconds1=(endTime.getTime()-startTime.getTime())/1000
        duration+=seconds1
    }
    this.reset=function(){
        startTime=null
        endTime=null
        running=false
        duration=0
    }
    this.show=function(){
        console.log(duration)
    }
    // Object.defineProperty(this,'duration',{
    //     get:function(){return duration}
    // })
    
}
let s1=new Stopwatch
s1.start()
s1.stop()
s1.show()

