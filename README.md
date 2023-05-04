# Chess.io
Construção de um jogo de xadrez usando JavaScript 

## A notação FEN
A notação FEN permite armazenar toda a informação do jogo em uma única string! 
A string contém as posições, casas vazias, possíveis roques e número de jogadas.
 ```js
    let board = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1"
  ```
O exemplo acima refere-se a um tabuleiro inicial, sem nenhum movimento.

### Partes da string

* #### 1 - Posição das peças: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR";
* #### 2 - Cor da vez: "w" ou "b";
* #### 3 - Possibilidade de roque (lado rei "k", lado rainha "q"): "KQkq" ou "-"
* #### 4 - En Passant (sempre que peão anda 2 casas - casa atrás do peão): p/ex. "e3" ou "-"
* #### 5 - Meio movimento: sado para o jogo 50/50 (não é útil aqui)
* #### 6 - Total de jogadas (aumenta a cada movimento do preto - inicia em 1): "1"
