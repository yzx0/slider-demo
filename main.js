
let allBotton = $("#allBotton > span ")

for(let i=0;i<allBotton.length;i++){
  $(allBotton[i]).on('click',(x) => {
    let index = $(x.currentTarget).index()
    let px = index * -300
    $('#warpper').css({
      transform:'translateX('+px+'px)'
    })
    
    n = index 
    activeBotton(allBotton.eq(n))
  })
}

let n = 0
let size = $('#warpper > img').length

playSlide(n % size)

var timerId = setTimer()

$('#window').on('mouseenter',() => {
  window.clearInterval(timerId)
})

$('#window').on('mouseleave',() => {
  timerId = setTimer()
})


function setTimer(){
return setInterval(() => {
  n += 1
  playSlide(n % size)
},3000)
  
}

function activeBotton($botton){
  $botton
  .addClass('pink')
  .siblings('.pink').removeClass('pink')
}


function playSlide(index){
  allBotton.eq(index).trigger('click')
}
