let YourChoice = 0
let YourScore = 0
let ComputerScore = 0

function play(){
  
  let Computer = Math.floor(Math.random() * 3)+1;
  if (YourChoice == 1 && Computer == 1){
  alert('You both chose the same, Its a TIE!!')
}
  else if (YourChoice == 1 && Computer == 2){
  alert('You chose Rock and Computer chose Paper, Computer WINSS!!')
  ComputerScore += 1
}
  else if (YourChoice == 1 && Computer == 3){
  alert('You chose Rock and Computer chose Scissors, You WINN!!')
  YourScore += 1
}
  else if (YourChoice == 2 && Computer == 2){
  alert('You both chose the same, Its a TIE!!')
}
  else if (YourChoice == 2 && Computer == 1){
  alert('You chose Paper and Computer chose Rock, You WIN!!')
  YourScore += 1
}
  else if (YourChoice == 2 && Computer == 3){
  alert('You chose Paper and Computer chose Scissors, Computer WINSS!!')
  ComputerScore += 1
}
  else if (YourChoice == 3 && Computer == 3){
  alert('You both chose the same, Its a TIE!!')
}
  else if (YourChoice == 3 && Computer == 1){
  alert('You chose Scissors and Computer chose Rock, Computer WINSS!!')
  ComputerScore += 1
}
  else if (YourChoice == 3 && Computer == 2){
  alert('You chose Scissors and Computer chose Paper, You WINN!!')
  YourScore += 1
}

}

