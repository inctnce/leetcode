import "strconv"

func isPalindrome(x int) bool {
    str := strconv.Itoa(x)
    
    if x < 0 { return false }
    
    for i:= 0; i < len(str)/2; i++ {
        if str[i] != str[len(str) - 1 - i] {
            return false
        }
    }
    return true
}
