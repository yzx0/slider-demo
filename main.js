let $imgs = $('#menu img')
let $lis = $('#menu ul li')
let current = 0

setInterval(() => {
  goToSlider(current)
  current +=1
  if(current > 3){
    current = 0
  }
}, 2000);

$lis.eq(0).on('click',()=>{
  current = 0
  goToSlider(current)
})
$lis.eq(1).on('click',()=>{
  current = 1
  goToSlider(current)
})
$lis.eq(2).on('click',()=>{
  current = 2
  goToSlider(current)
})
$lis.eq(3).on('click',()=>{
  current = 3
  goToSlider(current)
})
 

function goToSlider(current){
  $('#imgWrapper').css({transform:`translateX(${-(current * 920)}px)`})
  $lis.eq(current).addClass('active')
  .siblings().removeClass('active')
}