# Barra de Progressao Mais Eficiente para anuncios 
 Um projeto simples, mas que ressalta a importância da matemática na programação, unindo matemática, marketing e, claro, programação.
 
<p align="center">
  <img src="https://github.com/Filipemrr/Fake-progressBar/blob/Projects/ezgif.com-video-to-gif.gif" alt="Texto alternativo da imagem" width="600">
</p>


## Proposito
  * Causar o efeito que a barra de progressao esta progredindo mais rapido do que o normal no começo,(dando uma falsa impressao para o espectador que o video eh curto) e mais lento ao passo que chegue ao fim.
    
  * Esse efeito aumenta consideravelmente o "watch time" do video, essa pequena feature pode aumentar a taxa de conversao e margem de lucro da pagina, caso o video que estaja sendo exposto seja um video de vendas.
    
  * Demonstrar a importancia da matematica como ferramenta indispensavel para programadores

    ---

## Entenda a logica progressao tradicional

Sabemos Que uma barra de progressao tradicional (como aquela vermelha do youtube)
eh dada pela razao entre (P = Progressao, e tudo em segundos):

          P    =   Instante atual / duracao total do video
> Note que o valor de P sempre estara entre 0.0 e 1.0, Pois "Instante atual" sempre sera menor que duracao total, mas, sempre sera maior que 0.

O valor de Instante atual eh atualizado a cada milisegundo, entao a variavel P vai sendo atualizada constantemente dando uma sensacao de crescimento constante, como se fosse uma barra de carregamento. 


Por Exemplo, Se o video tiver 60 segundos no total: 

    P/ Instante Atual = 0  | P = 0 , entao o video ainda nao comecou
    P/ Instante Atual = 15 | P = 0.25, entao 25% do video ja passou 
    P/ Instante Atual = 30 | P = 0.5, entao 50% do video ja passou
    P/ Instante Atual = 60 | P = 1, entao o video terminou
  
  ---

## Nova Barra de progressao 

A barra de progressao que eu desenvolvi, inicia de maneira rapida e diminui sua velocidade quanto mais P se aproxima de 1. (video abaixo)

##  Logica Matematica por tras do problema 

Precisamos pensar nos calculos em funcao de P, pois esse eh o valor que vai ser atualizado a todo momento, lembrado que 0<P<1.

- Minha funcao vai definir a velocidade com que o P cresce.
  
- Mas para nossa barra funcionar, a funcao precisa respeitar as seguintes regras:

      Quando P = 0, f(p) = 0
      Quando P = 1, f(p) = 1
      A inclinacao da curva precisa comecar mais acentuada e terminar mais branda

- Pensei em usar funcao do segundo grau, voce tambem pode usar uma funcao exponencial, porem acho que eh bem mais facil usar funcao do segundo grau em JavaScript.

### Usando x^2 + 2x temos:
<p align="center">
  <img src="https://github.com/Filipemrr/Fake-progressBar/blob/Projects/Screenshot%202023-09-04%20at%2019.35.06.png" alt="Texto alternativo da imagem" width="600">
</p>

       - Note que quando x = 0, f(x) passa pela origem
       - Note tambem que, quando x = 1, f(x) = 1
       - A concavidade eh virada para baixo, pois dessa maneira, dentro do intervalo entre 0 e 1, a funcao eh crescente.
  
  
---

## Criando o Player

No Trecho de codigo abaixo eu apenos pego a div do player, e configuro a pagina para exibir o video, para mais detalhes consulte a documentacao do react player, que foi a lib que eu usei nesse projeto -> https://www.npmjs.com/package/react-player
```
<div className="playerWrapper">
        <ReactPlayer
          playing
          onDuration={(d) => setDuration(d)}
          progressInterval={100}
          onProgress={(p) => {
            setPlayed(p.playedSeconds);
            setLoaded(p.loadedSeconds);
          }}
          config={{
            youtube: {
              playerVars: { showinfo: 1 },
            },
          }}
          url="https://www.youtube.com/watch?v=YLslsZuEaNE"
          controls={true} // Adicione esta linha para exibir os controles, incluindo a barra de volume
        />

```

## Inserindo a barra de progresao
Como citei anteriormente, a barra de progressao pode ser feita dividindo o instante atual do video, pela duracao total do mesmo, estou chamando uma funcao que vai ser explicada abaixo e passando como parametro um numero entre 0 e 1 que representa quanto do video ja foi consumido, essa funcao eh chamada milhares de vezes em um unico minuto, dando o efeito de uma barra progredindo.

```
<ProgressBar progress={barra_de_progressao(played / duration)}>
          <div />
        </ProgressBar>
```

## A Funcao 
A funcao eh dada por

```
function barra_de_progressao(x) {
  return -(x * x)+(2*x)
}
```

### Resumo 
Eh incrivel como esse problema consegue ser ao mesmo tempo complexo, ao ponto de precisar de conhecimento em diferentes areas para ser resolvido, porem, sua aplicacao se baseia em uma funcao de apenas 1 linha.
