package app;
import java.util.Scanner;

public class App {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int nbTestCases = Integer.parseInt(scanner.nextLine());

        for (int i = 0; i < nbTestCases; i++) {
            try {
                long nbPropulsionUnits = Long.parseLong(scanner.nextLine());
                if (nbPropulsionUnits % 2 !=0 || nbPropulsionUnits < 4) {
                    System.out.println(-1);
                    continue;
                }

                long maxCrafts;
                if (nbPropulsionUnits % 4 == 0) {
                    maxCrafts = nbPropulsionUnits / 4;
                } else {
                    maxCrafts = (nbPropulsionUnits - 6) / 4 + 1;
                }
                long minCrafts = (nbPropulsionUnits + 5) / 6;

                System.out.println(minCrafts + " " + maxCrafts);
            } catch (Exception e) {
                System.out.println("Error: Invalid test case. Please enter one integer.");
            }
        }

        scanner.close();
    }
}
