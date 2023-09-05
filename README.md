# Barra de Progressão Mais Eficiente para Anúncios

Um projeto simples, mas que ressalta a importância da matemática na programação, unindo matemática, marketing e, claro, programação.

<p align="center">
  <img src="https://github.com/Filipemrr/Fake-progressBar/blob/Projects/ezgif.com-video-to-gif.gif" alt="Texto alternativo da imagem" width="600">
</p>

## Propósito
* Causar o efeito de que a barra de progressão está progredindo mais rápido do que o normal no começo (dando uma falsa impressão para o espectador de que o vídeo é curto) e mais lentamente à medida que se aproxima do fim.

* Esse efeito aumenta consideravelmente o "watch time" do vídeo; essa pequena feature pode aumentar a taxa de conversão e a margem de lucro da página, caso o vídeo que esteja sendo exibido seja um vídeo de vendas.

* Demonstrar a importância da matemática como ferramenta indispensável para programadores.

---

## Entenda a Lógica da Progressão Tradicional

Sabemos que uma barra de progressão tradicional (como aquela vermelha do YouTube) é dada pela razão entre (P = Progressão, e tudo em segundos):


          P    =   Instante atual / duracao total do video
          
> Note que o valor de P sempre estará entre 0.0 e 1.0, pois o "Instante atual" sempre será menor que a duração total, mas sempre será maior que 0.

O valor do "Instante atual" é atualizado a cada milissegundo. Portanto, a variável P é constantemente atualizada, criando a sensação de crescimento contínuo, semelhante a uma barra de carregamento.

Por exemplo, se o vídeo tiver 60 segundos no total:


    P/ Instante Atual = 0  | P = 0 , entao o video ainda nao comecou
    P/ Instante Atual = 15 | P = 0.25, entao 25% do video ja passou 
    P/ Instante Atual = 30 | P = 0.5, entao 50% do video ja passou
    P/ Instante Atual = 60 | P = 1, entao o video terminou
  
  ---

## Lógica Matemática por Trás do Problema

Precisamos pensar nos cálculos em função de P, pois esse é o valor que vai ser atualizado a todo momento, lembrando que 0 < P < 1.

- Minha função vai definir a velocidade com que o P cresce.
  
- Mas para nossa barra funcionar, a função precisa respeitar as seguintes regras:

      Quando P = 0, f(p) = 0
      Quando P = 1, f(p) = 1
      A inclinacao da curva precisa comecar mais acentuada e terminar mais branda

- Pensei em usar uma função do segundo grau, você também pode usar uma função exponencial, porém acho que é bem mais fácil usar uma função do segundo grau em JavaScript.

### Usando x^2 + 2x, temos:

<p align="center">
  <img src="https://github.com/Filipemrr/Fake-progressBar/blob/Projects/Screenshot%202023-09-04%20at%2019.35.06.png" alt="Texto alternativo da imagem" width="600">
</p>


       - Note que quando x = 0, f(x) passa pela origem
       - Note tambem que, quando x = 1, f(x) = 1
       - A concavidade eh virada para baixo, pois dessa maneira, dentro do intervalo entre 0 e 1, a funcao eh crescente.
  
  
---

## Criando o Player

No trecho de código abaixo, eu simplesmente pego a div do player e configuro a página para exibir o vídeo. Para obter mais detalhes, consulte a documentação do React Player, que foi a biblioteca que eu usei neste projeto -> [Documentação do React Player](https://www.npmjs.com/package/react-player)

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

## Inserindo a Barra de Progressão Modificada

Como mencionei anteriormente, a barra de progressão pode ser feita dividindo o instante atual do vídeo pela duração total do mesmo. Estou chamando uma função que será explicada abaixo e passando como parâmetro um número entre 0 e 1 que representa quanto do vídeo já foi consumido. Essa função é chamada milhares de vezes em um único minuto, dando o efeito de uma barra progredindo.


```
<ProgressBar progress={barra_de_progressao(played / duration)}>
          <div />
        </ProgressBar>
```

## A Função
A função é dada por


```
function barra_de_progressao(x) {
  return -(x * x)+(2*x)
}
```
### Resumo
É incrível como esse problema consegue ser ao mesmo tempo complexo, a ponto de exigir conhecimento em diferentes áreas para ser resolvido. No entanto, sua aplicação se baseia em uma função de apenas 1 linha.

