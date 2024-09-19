package Java;
public class SuperKeyword {
    public static void main(String[] args) {
        Horse h1 = new Horse();
        System.out.println(h1.color);
        h1.legs();
    }
}
class Animal {
    String color = "brown";
    Animal(){
        System.out.println("Animal constructor called...");
    }
    void eat(){
        System.out.println("Eat");
    }
}
class Horse extends Animal{
    void legs(){
        System.out.println("Four legs");
    }
    Horse (){
        super.color = "Red";    // Access properties
        super.eat();            // access function
        System.out.println("Horse constructor called...");
    }
}