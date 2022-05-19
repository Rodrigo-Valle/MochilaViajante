public class NumeroPrimo {
    public void numeroPrimo (int numero) {
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
}
