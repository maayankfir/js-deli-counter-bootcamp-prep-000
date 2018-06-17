
function takeANumber (katzDeliLine, customerName ) {
  katzDeliLine.push (customerName) ;
  return "Welcome, " + customerName + ". You are number " + katzDeliLine.length + " in line."
}

function nowServing (line) {
  if (0 === line) {
    return "There is nobody waiting to be served!"
  } else {
    var name = line[0]
    line.splice (0,1)
    return "Currently serving" + name + '.' ;
  }
}

function currentLine (katzDeliLine) {
  var katzDeliLine = []
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  } else {
    for {let i=0; i < katzDeliLine.length; i++ }
    katzDeliLine += (i + 1) + "." + katzDeliLine[i] + ","
  }
  katzDeliLine = line.slice (0, katzDeliLine.length-2)
  return "The line is currently: " + katzDeliLine
  }
}
