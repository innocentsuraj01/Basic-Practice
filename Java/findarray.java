package Java;
import java.util.ArrayList;
import java.util.List;

public class findarray {
    public static void main(String[] args) {
        int[] arr = {1, 3, 20, 4, 1, 0};
        int target = 5; // The value to compare against

        List<Integer> greaterElements = findGreaterElements(arr, target);

        System.out.println("Elements greater than " + target + ": " + greaterElements);
    }

    public static List<Integer> findGreaterElements(int[] arr, int target) {
        List<Integer> result = new ArrayList<>();
        for (int num : arr) {
            if (num > target) {
                result.add(num);
            }
        }
        return result;
    }
}