var input = document.querySelector('.percent')
var run = document.querySelector('.run-btn')

//this will allow the user to press the enter key to input a valid starting percentage
input.addEventListener("keyup", (event)=>{
  if (event.keyCode === 13) {
        enterPercentToUpdate()
      }
})

run.onclick= runProgressBar

function enterPercentToUpdate(){
  const bar = document.querySelector('.bar')
  const percent = parseInt(input.value)
  //this will check if the input is a valid percent
  if(isNaN(percent)
    || (100 < percent)
    || (percent< 0)){
    alert("You must enter a number between 0-100")
  }else{
    //clear any transition values if user has previously clicked on "run" button
    bar.style.transition = "none"
    bar.style.width = `${percent}%`
  }
}

function runProgressBar(){
  const bar = document.querySelector('.bar')
  let currentPerecent = parseInt(bar.style.width)
  // catching edge case that bar.style.width is not initalizing to 0 without starting input
  if(isNaN(currentPerecent)){
    currentPerecent = 0
  }
  // calculation to have the progress bar run at 10ms per 1%
  let seconds = (100- currentPerecent) * 0.01
  bar.style.transition = `${seconds}s linear width`
  bar.style.width = "100%"
}
