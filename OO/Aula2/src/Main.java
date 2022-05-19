import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        MaiorDeTres maiorDeTres = new MaiorDeTres();
        NumeroPrimo testeNumeroPrimo = new NumeroPrimo();

        System.out.println("Digite o numero que deseja testar se é primo: ");
        int numeroPrimo = scanner.nextInt();

        testeNumeroPrimo.numeroPrimo(numeroPrimo);

        System.out.println("Digite o primeiro numero: ");
        int numero1 = scanner.nextInt();

        System.out.println("Digite o segundo numero: ");
        int numero2 = scanner.nextInt();

        System.out.println("Digite o terceiro numero: ");
        int numero3 = scanner.nextInt();

        System.out.println("o maior numero é: " + maiorDeTres.maiorDeTres(numero1, numero2, numero3));
    }
}

