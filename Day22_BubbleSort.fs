// cerner_2tothe5th_2022

let rec getHighest list = 
    match list with
    | hd1::hd2::tl -> let hd = if hd1 > hd2 then hd1 else hd2 in getHighest (hd::tl)
    | hd1 :: [] -> hd1
    | _ -> failwith "unknown pattern"

let bubbleSort list = 
    let rec innerBubbleSort sorted = function
    | [] -> sorted
    | l -> 
        let x = getHighest l
        let (a, b) = List.partition (fun i -> i = x) l
        innerBubbleSort (a @ sorted) b
    innerBubbleSort [] list

[<EntryPoint>]
let main args = 
    let input = [10; 7; 1; 0; -1; 9; 33; 12; 6; 2; 3; 33; 34;]
    let output = bubbleSort input
    printfn "%s" (List.fold (fun acc x -> acc + " " + x.ToString()) "" output)
    0