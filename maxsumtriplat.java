public class maxsumtriplat {
    public static void main(String[] args) {
       int[] arr = (11,2,13,4,5);
       if(arr.length < 3){
        System.out.print(x:"-1");
        return;
       } 
       System.out.print(maxsumtriplat(arr));
    }

    public static void main(String[] args) {
    int n = arr.length;
    int max = Integer.MAX_VALUE;
    int secondmax =Integer.MIN_VALUE;
    int thirdmax =Integer.MIN_VALUE;
    System.out.print(secondmax);
    for(int i=0; i<n; n++){
        if(arr[i] > max){
            thirdmax = secondmax;
            secondmax = max;
            max =arr[i];
        }else if(arr[i] > secondmax){
            thirdmax = secondmax;
            secondmax = arr[i];
        }else if(arr[i] > thirdmax){
            thirdmax = arr[i];
        }
    }
    return max + secondmax + thirdmax;
    }
}