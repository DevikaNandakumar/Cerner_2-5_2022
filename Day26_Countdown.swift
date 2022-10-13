// cerner_2tothe5th_2022

func countDown(number: Int) {
  print(number)
  if number == 0 {
  print("Countdown Stops")
  }
  else {
    countDown(number: number - 1)
  }
}

print("Countdown:")
countDown(number:5)