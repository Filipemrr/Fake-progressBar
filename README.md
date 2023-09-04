# Barra de Progressao Mais Eficiente para anuncios 
 Um projeto simples, mas que ressalta a importância da matemática na programação, unindo matemática, marketing e, claro, programação.



## Proposito
  * Causar efeito que a barra de progressao progrida mais rapido do que o normal no começo, e mais lento ao passo que chegue ao fim.
    
  * Usar Javascript | react-player | express
    
  * Demonstrar a importancia da matematica como ferramenta indispensavel para programadores

## Barra de progressao tradicional

Sabemos Que uma barra de progressao tradicional (como aquela vermelha do youtube)
eh dada pela razao entre (P = Progressao, e tudo em segundos):

          P    =   Instante atual / duracao total do video
> Note que o valor de P sempre estara entre 0.0 e 1.0, Pois "Instante atual" sempre sera menor que duracao total, mas, sempre sera maior que 0.

---

O valor de Instante atual eh atualizado a cada milisegundo, entao a variavel P vai sendo atualizada constantemente dando uma sensacao de crescimento constante, como se fosse uma barra de carregamento. 


Por Exemplo, Se o video tiver 60 segundos no total: 

    P/ Instante Atual = 0  | P = 0 , entao o video ainda nao comecou
    P/ Instante Atual = 15 | P = 0.25, entao 25% do video ja passou 
    P/ Instante Atual = 30 | P = 0.5, entao 50% do video ja passou
    P/ Instante Atual = 60 | P = 1, entao o video terminou
  
  

## Nova Barra de progressao 

A barra de progressao que eu desenvolvi, inicia de maneira rapida e diminui sua velocidade quanto mais P se aproxima de 1. (video abaixo)

##  Logica Matematica por tras do problema 

Precisamos pensar nos calculos em funcao de P, pois esse eh o valor que vai ser atualizado a todo momento, lembrado que 0<P<1.

- Vou fazer o calculo em funcao do valor de P, minha funcao vai definir a meneira/velocidade com que o P cresce.
  
- Mas para nossa barra funcionar, a funcao precisa respeitar as seguintes regras:

      Quando P = 0, f(p) = 0
      Quando P = 1, f(p) = 1
      A inclinacao da curva precisa comecar mais acentuada e terminar mais branda

- Pensei em usar funcao do segundo grau, pode usar uma funcao exponencial tambem, porem acho que eh bem mais facil usar funcao do segundo grau em JavaScript.

  ![Texto alternativo da imagem](file:///Users/filiperaposo/Desktop/Screenshot%202023-09-04%20at%2019.35.06.png)

<p align = "center >   
 <img widht="470" src = "/Fake-progressBar/Screenshot 2023-09-04 at 19.35.06.png">
</p>  
