import random

while True:
    aleatorio = random.randrange(0, 5)
    escolhaPc = ""
    print("1)Pedra")
    print("2)Papel")
    print("3)Tesoura")
    print("4)Lagarto")
    print("5)Spock")
    print("6)Sair do Programa")
    opcao = int(input("O que você escolhe: "))

    if opcao == 1:
        escolhaUsuario = "pedra"
    elif opcao == 2:
        escolhaUsuario = "papel"
    elif opcao == 3:
        escolhaUsuario = "tesoura"
    elif opcao == 4:
        escolhaUsuario = "lagarto"
    elif opcao == 5:
        escolhaUsuario = "spock"
    elif opcao == 6:
        print("Nos vemos!")
        break
    else:
        print("Valor Invalido")
        continue

    print("Tua escolha: ", escolhaUsuario)
    if aleatorio == 0:
        escolhaPc = "pedra"
    elif aleatorio == 1:
        escolhaPc = "papel"
    elif aleatorio == 2:
        escolhaPc = "tesoura"
    elif aleatorio == 3:
        escolhaPc = "lagarto"
    elif aleatorio == 4:
        escolhaPc = "spock"
    print("PC escolheu: ", escolhaPc)
    print("...")

    if (escolhaPc == "pedra" or escolhaPc == "spock") and escolhaUsuario == "papel":
        if escolhaPc == "pedra":
            print("Ganhou, papel cobre pedra")
        else:
            print("Ganhou, papel refuta Spock")
    elif (escolhaPc == "papel" or escolhaPc == "lagarto") and escolhaUsuario == "tesoura":
        if escolhaPc == "papel":
            print("Ganhou, tesoura corta papel")
        else:
            print("Ganhou, tesoura decapita lagarto")
    elif (escolhaPc == "tesoura" or escolhaPc == "lagarto") and escolhaUsuario == "pedra":
        if escolhaPc == "tesoura":
            print("Ganhou, pedra amassa tesoura")
        else:
            print("Ganhou, pedra esmaga lagarto")
    elif (escolhaPc == "spock" or escolhaPc == "papel") and escolhaUsuario == "lagarto":
        if escolhaPc == "spock":
            print("Ganhou, lagarto envenena spock")
        else:
            print("Ganhou, lagarto come papel")
    elif (escolhaPc == "tesoura" or escolhaPc == "pedra") and escolhaUsuario == "spock":
        if escolhaPc == "tesoura":
            print("Ganhou, spock quebra tesoura")
        else:
            print("Ganhou, spock vaporiza pedra")

    if escolhaUsuario == "pedra" and (escolhaPc == "papel" or escolhaPc == "spock"):
        if escolhaPc == "papel":
            print("Perdeu, papel cobre pedra")
        else:
            print("Perdeu, spock vaporiza pedra")
    elif escolhaUsuario == "papel" and (escolhaPc == "tesoura" or escolhaPc == "lagarto"):
        if escolhaPc == "tesoura":
            print("Perdeu, tesoura corta papel")
        else:
            print("Perdeu, lagarto come papel")
    elif escolhaUsuario == "tesoura" and (escolhaPc == "pedra" or escolhaPc == "spock"):
        if escolhaPc == "pedra":
            print("Perdeu, pedra amassa tesoura")
        else:
            print("Perdeu, spock quebra tesoura")
    elif escolhaUsuario == "spock" and (escolhaPc == "lagarto" or escolhaPc == "papel"):
        if escolhaPc == "lagarto":
            print("Perdeu, lagarto envenena spock")
        else:
            print("Perdeu, papel refuta spock")
    elif escolhaUsuario == "lagarto" and (escolhaPc == "tesoura" or escolhaPc == "pedra"):
        if escolhaPc == "tesoura":
            print("Perdeu, tesoura decapita lagarto")
        else:
            print("Perdeu, pedra esmaga lagarto")
    elif escolhaPc == escolhaUsuario:
        print("Empate")
    again = input("Jogar novamente? s/n: ")
    if 's' in again:
        continue
    elif 'n' in again:
        print("Nos vemos!")
        break
    else:
        print("Valor Invalido")