// cerner_2tothe5th_2022

public class Day5_LinearSearch{     
    public static void main(String a[]){    
        int[] arr= {10,20,30,50,70,90};    
        int key = 50;   
        int index = -1;
        for(int i=0; i<arr.length;  i++){    
            if(arr[i] == key){    
                index = i;    
            }    
        }    
        if(index == -1)
            System.out.println(key+" not found in the array ");    
        else
            System.out.println(key+" is found at index: "+index);    
    }    
}    
