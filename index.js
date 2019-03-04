var r = document.getElementById("r")
var p = document.getElementById("p")
var s = document.getElementById("s")

choices = ["Rock", "Paper", "Scissors"]

r.addEventListener("click", function() {
  var c = choices[Math.floor(Math.random() * choices.length)]
  if (c === "Scissors") 
    {alert ("Rock! You win!")}
  else if (c === "Paper") 
    {alert ("Rock! You lose!")}
  else 
    {alert ("Rock! You burst. Try again!")}
})

p.addEventListener("click", function() {
  var c = choices[Math.floor(Math.random() * choices.length)]
  if (c === "Rock")
    {alert ("Paper! You win!")}
  else if (c === "Scissors") 
    {alert ("Paper! You lose!")}
  else 
    {alert ("Paper! You burst. Try again!")}
})

s.addEventListener("click", function() {
  var c = choices[Math.floor(Math.random() * choices.length)]
  if (c === "Paper") 
    {alert ("Scissors! You win!")}
  else if (c === "Rock")
    {alert ("Scissors! You lose!")}
  else 
    {alert ("Scissors! You burst. Try again!")}
})