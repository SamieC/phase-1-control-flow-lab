function scuberGreetingForFeet(x){
  if (x <= 400)
  return "This one is on me!"

  else if (x >= 400 && x <= 2000)
  return "That will be twenty bucks."

  else if (x >= 2000 && x < 2500)
  return "I will gladly take your thirty bucks."

  else if (x > 2500)
  return "No can do."

}

function ternaryCheckCity(y){
  if (y === "NYC")
  return "Ok, sounds good."

else if  (y = "NYC")
return "No go."
}

function switchOnCharmFromTip(z){
  if (z === "generous")
  return  "Thank you so much."

  else if (z === "not as generous")
  return "Thank you."

  else if (z = "anything else")
  return "Bye."
}