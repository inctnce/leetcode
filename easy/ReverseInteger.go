import ("math")

func getSize(x int) int {
  size :=0
  for math.Abs(float64(x)) > 0 { 
        x /= 10
        size++
    }
  return size
}

func reverse(x int) int {
  size := getSize(x)
    
  result := 0
  for i:=1; i < size+1; i++ {
    result += (x%10)
    result *= 10
    x = x/10
  }
  result/=10

    if  float64(result) >= math.Pow(-2.0,31.0) && float64(result) <= math.Pow(2.0,31.0)-1.0 {
        return result
    }
    
  return 0
}