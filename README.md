# Integrantes

|                         Nome                         | Matrícula |
| :--------------------------------------------------: | :-------: |
|  [Pedro Torreão](https://github.com/PedroTorreao21)  | 190036761 |
| [Matheus Perillo](https://github.com/MatheusPerillo) | 190093421 |

# Introdução

Este repositório foi criado para o desenvolvimento do segundo módulo sobre Grafos 2 da disciplina Projeto de Algoritmos do Professor Maurício Serrano.

# Apresentação

[Link para a apresentação da dupla](https://youtu.be/4INyf2Y3dNI)

# Foram feitos os exercícios no LeetCode

## [ 787. Cheapest Flights Within K Stops](https://leetcode.com/problems/cheapest-flights-within-k-stops/description/)

Existem n cidades conectadas por um certo número de voos. É fornecido um array chamado "flights" onde flights[i] = [fromi, toi, pricei] indica que existe um voo da cidade fromi para a cidade toi com custo pricei.

Também são fornecidos três números inteiros chamados src, dst e k. Você deve retornar o preço mais barato para viajar de src para dst com no máximo k paradas. Se não houver uma rota que satisfaça essas condições, retorne -1.

![Cheapest Flights Within K Stops](/images/787.jpeg)

## [ 1514. Path with Maximum Probability](https://leetcode.com/problems/path-with-maximum-probability/description/)

É fornecido um grafo ponderado não direcionado com n nós (indexados a partir de 0), representado por uma lista de arestas onde edges[i] = [a, b] é uma aresta não direcionada que conecta os nós a e b, com uma probabilidade de sucesso de atravessar essa aresta succProb[i].

Dado dois nós start e end, encontre o caminho com a maior probabilidade de sucesso para ir de start a end e retorne a sua probabilidade de sucesso.

Se não houver um caminho de start a end, retorne 0. A sua resposta será aceita se ela diferir da resposta correta em no máximo 1e-5.

![Path with Maximum Probability](/images/1514.jpeg)

## [ 743. Network Delay Time](https://leetcode.com/problems/network-delay-time/description/)

Você recebe uma rede de n nós, rotulados de 1 a n. Você também recebe tempos, uma lista de tempos de viagem como arestas direcionadas tempos[i] = (ui, vi, wi), onde ui é o nó de origem, vi é o nó de destino e wi é o tempo que leva para um sinal viajar da origem ao destino.

Enviaremos um sinal de um determinado nó k. Retorne o tempo mínimo que leva para todos os n nós receberem o sinal. Se for impossível que todos os n nós recebam o sinal, retorne -1.

![743. Network Delay Time](/images/743.jpg)

## [ 1584. Min Cost to Connect All Points](https://leetcode.com/problems/min-cost-to-connect-all-points/description/)

Você recebe uma matriz de pontos que representa coordenadas inteiras de alguns pontos em um plano 2D, onde points[i] = [xi, yi].

O custo de conectar dois pontos [xi, yi] e [xj, yj] é a distância de Manhattan entre eles: |xi - xj| + |yi - yj|, onde |val| denota o valor absoluto de val.

Retorne o custo mínimo para conectar todos os pontos. Todos os pontos estão conectados se houver exatamente um caminho simples entre dois pontos quaisquer

![1584. Min Cost to Connect All Points](/images/1584.jpg)

# Instalação

Pré-Requisitos: Os códigos devem ser rodados na própria plataforma do Leetcode, tendo em vista o uso de uma classe Solution, bem como o uso correto dos inputs por parte da plataforma.

Caso queira rodar local, é necessário somente chamar o método da classe com os paramêtros condizente com a assinatura de acordo com a linguagem desenvolvida.

# Uso

## Passo 1: Copiar o código

Entre na pasta do exercício específico, clique no arquivo e copie-o.

## Passo 2: Entrar na página do exercício

Ao clicar no título de cada questão presente neste README, você será redirecionado para a página da questão.

## Passo 3: Alterar linguagem

Selecione a linguagem.

## Passo 4: Colar o código

Cole o código copiado no editor.

## Passo 5: Rodar o código

Abaixo do editor de código, clique em Run para executar o código.
