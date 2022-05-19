import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        List lista = new ArrayList();

        NumeroPrimo numeroPrimo = new NumeroPrimo();

        System.out.println("Digite a quantidade de numeros: ");
        int n = scanner.nextInt();
        int cont = 0;
        int i = 1;

        while(cont < n){
            if(numeroPrimo.numeroPrimo(i)){
                cont++;
                lista.add(i);
            }
            i++;
        }

        System.out.print(lista);
    }
}
