var arr=[{songNmae:"Guilty or Sin?",url:"./audio/guilty.mpeg",img:"./img/ts.png"},
    {songNmae:"cold/mess",url:"./audio/cold.mpeg",img:"./img/coldmess.jfif"},
    {songNmae:"Waqt ki Baatein",url:"./audio/dreamNote.mpeg",img:"./img/dreamnote.jpg"}
]
var a = document.querySelector("#all-songs")
var poster=document.querySelector("#left")
var play=document.querySelector("#play")
var back=document.querySelector("#back")
var forward=document.querySelector("#forward")
var audio =  new Audio()

var selectedSong=0

function mainFun(){
var clutter=""
arr.forEach(function(elem,index){
    clutter+=` <div class="songcard" id=${index}>   
                   <div class="part1">
                        <img src=${elem.img} alt="">
                        <h2>${elem.songNmae}</h2>
                    </div>
                    <h6>3:46</h6>
                </div>`
})

a.innerHTML=clutter
audio.src=arr[selectedSong].url
poster.style.backgroundImage =`url(${arr[selectedSong].img})`

}
mainFun()
a.addEventListener("click",function(dets){
    selectedSong=dets.target.id 
    mainFun()
    play.innerHTML=`<i class="ri-pause-fill"></i>`
    flag=1
    audio.play()
})
var flag=0
play.addEventListener("click",function(){
    if(flag==0){
    play.innerHTML=`<i class="ri-pause-fill"></i>`
    mainFun()
    audio.play()
    flag=1
    }
    else{
        play.innerHTML=`<i class="ri-play-fill"></i>`
        mainFun()
        audio.pause()
        flag=0
    }
})

forward.addEventListener("click",function(){
    if(selectedSong<arr.length-1){
        selectedSong++
         mainFun()
         audio.play()
    }
    else{
        forward.style.opacity = 0.4
    }
})

back.addEventListener("click",function(){
    if(selectedSong>0){
        selectedSong--
         mainFun()
         audio.play()
    }
    else{
        back.style.opacity = 0.4
    }
})