func contains(s []int, e int) int {
    for i, a := range s {
        if a == e {
            return i
        }
    }
    return -1
}

func findPlace(s []int, e int) int {
    
    l := len(s)
    
    if e > s[l-1] {
        return l
    }
    
    if e < s[0] {
        return 0
    }
    
    for i:= 0; i < len(s)-1; i++ {
        if s[i] < e && s[i+1] > e {
            return i+1
        }
    }
    return -1
}

func searchInsert(nums []int, target int) int {
    a := contains(nums, target)
    
    if a != -1 {
        return a 
    }
    
    
    return findPlace(nums,target)
}
