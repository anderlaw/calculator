//
//
var outputTxt = 0;//默认为0
var inputTxt = ''
$('[data-key]').on('click',(e)=>{
  //AC，equal需要特殊处理
  var key = e.target.dataset.key
  if(key === 'AC'){
    //clear All
    outputTxt = 0;
    inputTxt = '';
  }else if(key === 'equal'){

    try {
      outputTxt = eval(inputTxt)
    } catch (error) {
      outputTxt = '错误'
    } 
  }else{
    inputTxt += key
  }
  play()
  updateView()

})
function updateView(){
  $('.output-box').text(outputTxt)
  $('.input-box').text(inputTxt)
}
function play(){
  $('#tips')[0].play();
}
