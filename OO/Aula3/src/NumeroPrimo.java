public class NumeroPrimo {
    public boolean numeroPrimo (int numero) {
        if(numero == 2 || numero == 3) {
            return true;
        }
        if(numero % 2 != 0) {
            for (int i = 3; i < numero; i++) {
                if(numero % i == 0) {
                   return false;
                }
            }
            return true;
        } else {
            return false;
        }
    }
}
