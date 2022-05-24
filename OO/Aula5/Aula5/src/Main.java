public class Main {
    public static void main(String[] args) {
        UsuarioJogo usuario1 = new UsuarioJogo("Rodrigo", "Rodrigo");
        UsuarioJogo usuario2 = new UsuarioJogo("Paloma", "Palominha");


        System.out.println(usuario1.getNome());
        System.out.println(usuario2.getNome());


        usuario1.setNome("Andre");

        System.out.println(usuario1.getNome());

        usuario1.aumentarPontuacao();
        usuario1.subirNivel();
        usuario1.subirNivel();
        usuario2.aumentarPontuacao();
        usuario2.aumentarPontuacao();
        usuario2.aumentarPontuacao();

        usuario2.bonus(15);
        usuario1.bonus(50);

        System.out.println("pontuacao do(a): "+ usuario1.getNome() + " foi de: " + usuario1.getPontuacao()
                + " e nivel foi de: " + usuario1.getNivel());
        System.out.println("pontuacao do(a): "+ usuario2.getNome() + " foi de: " + usuario2.getPontuacao()
                + " e nivel foi de: " + usuario2.getNivel());

//        Gabriel Rizzo, Vinicius Almeida, Andre Jose

    }
}
