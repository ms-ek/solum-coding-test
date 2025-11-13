package app;
import java.util.Scanner;

public class App {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int nbTestCases = Integer.parseInt(scanner.nextLine());

        for (int i = 0; i < nbTestCases; i++) {
            try {
                String line = scanner.nextLine();
                String[] lineParts = line.split("\\s+");
                int energyValue = Integer.parseInt(lineParts[0]);
                int nbOfWaves = Integer.parseInt(lineParts[1]);
                int totalEnergy = (nbOfWaves % 2 == 0) ? 0 : energyValue;
                System.out.println(totalEnergy);
            } catch (Exception e) {
                System.out.println("Error: Invalid test case. Please enter two integers separated by a space");
            }
        }

        scanner.close();
    }
}
