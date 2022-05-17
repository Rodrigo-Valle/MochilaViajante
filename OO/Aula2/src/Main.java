import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Digite o numero que deseja testar se é primo: ");
        int numeroPrimo = scanner.nextInt();

        numeroPrimo(numeroPrimo);

        System.out.println("Digite o primeiro numero: ");
        int numero1 = scanner.nextInt();

        System.out.println("Digite o segundo numero: ");
        int numero2 = scanner.nextInt();

        System.out.println("Digite o terceiro numero: ");
        int numero3 = scanner.nextInt();

        System.out.println("o maior numero é: " + maiorDeTres(numero1, numero2, numero3));



    }

    static void numeroPrimo (int numero) {
        if(numero == 1 || numero == 2 || numero == 3) {
            System.out.println("esse numero é primo");
            return;
        }
        if(numero % 2 != 0) {
            for (int i = 3; i < numero; i++) {
                if(numero % i == 0) {
                    System.out.println("esse numero não é primo");
                    return;
                } else {
                    System.out.println("esse numero é primo");
                    return;
                }
            }
        } else {
            System.out.println("esse numero não é primo");
        }
    }

    static int maiorDeTres(int x, int y, int z) {
        if(x > y && x > z) {
            return x;
        } else if (y > z) {
            return y;
        } else {
            return z;
        }
    }
}

//Cristian Fernandes,
//Kened e Gabriel Rizzo
