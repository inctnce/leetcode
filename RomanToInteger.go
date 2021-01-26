func getRanks(s string) []int {
    ranks := make([]int,len(s))
        
    for i:=0; i < len(ranks); i++ {
        switch string(s[i]) {
            case "I": 
                ranks[i] = 1
            case "V":
                ranks[i] = 5
            case "X":   
                ranks[i] = 10
            case "L":
                ranks[i] = 50
            case "C":
                ranks[i] = 100
            case "D":
                ranks[i] = 500
            case "M":
                ranks[i] = 1000
            }
        } 
    return ranks
}

func romanToInt(s string) int {
        result := 0
        ranks := getRanks(s)
        len := len(ranks)
    
        for i:=0; i < len; i++ {
                 if i+1 < len && ranks[i] < ranks[i+1] {
                    result += ranks[i+1] - ranks[i]
                    i++
                    continue
                } 
            result += ranks[i]
        }
        return result
    return 0
}
