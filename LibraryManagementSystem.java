import java.util.Scanner;
public class LibraryManagementSystem {
    public static void main(String[] args)
    {
        System.out.println("====================");
        System.out.println("LIBRARY MANAGEMENT SYSTEM");
        System.out.println("====================");
        System.out.println("1. Add Book");
        System.out.println("2.View Book");
        System.out.println("3.Update Book");
        System.out.println("4.Delete Book");
        System.out.println("5.Search Book");
        System.out.println("6. Exit");

Scanner sc= new Scanner(System.in);
System.out.print("Enter your choice: ");
int choice = sc.nextInt();
if (choice==1) {
    System.out.println("Add Book Selected");

}  else if (choice ==2)
    {
        System.out.println("View Books Selected");
    } else if (choice ==3) 
        {
            System.out.println("Update Book Selected");

        }    else if (choice ==4)
        {
            System.out.println("Delete Book Selected");

        } else if (choice ==5)
        {
            System.out.println("Search Book Selected");

        } else if (choice ==6)
        {
            System.out.println("Thank You!");

        } else 
        {
            System.out.println("Invalid Choice");

        }
        sc.close();
    }
}