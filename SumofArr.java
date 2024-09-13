public class SumofArr {
    public static void main(String[] args) {
     int arr[] = {5,10,15,25,28,40};
     int sum = 0;
     for (int i = 0; i < arr.length; i++) {
         sum = sum+arr[i];
     }
     System.out.println(sum);
    }
 }