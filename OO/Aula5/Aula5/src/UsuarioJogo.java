public class UsuarioJogo {
    private String nome;
    private String nickName;
    private Integer pontuacao = 0;
    private Integer nivel = 0;

    public UsuarioJogo(String nome, String nickName) {
        this.nome = nome;
        this.nickName = nickName;
    }

    public String getNome() {
        return this.nome;
    }

    public int getNivel() {
        return this.nivel;
    }

    public int getPontuacao() {
        return this.pontuacao;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    private void setNivel() {
        this.nivel++;
    }

    private void setPontuacao() {
        this.pontuacao++;
    }

    private void setPontuacao(int pontuacao) {
        this.pontuacao += pontuacao;
    }

    public void subirNivel() {
        setNivel();
    }

    public void aumentarPontuacao() {
        setPontuacao();
    }

    public void bonus(int pontuacao) {
        setPontuacao(pontuacao);
    }
}
