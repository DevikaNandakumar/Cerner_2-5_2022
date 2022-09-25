// cerner_2tothe5th_2022

package main
import "fmt"

func main() {
    var num int
    fmt.Scanln(&num)
    if num < 0 {
        fmt.Println(num, "is negative")
    } else {
        fmt.Println(num, "is positive")
    }
}
