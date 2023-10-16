function findCheapestPrice(
  n: number,
  flights: number[][],
  src: number,
  dst: number,
  k: number
): number {
  // lista de adjacência para armazenar o grafo
  const adj: [number, number][][] = new Array(n).fill([]).map(() => []);

  // prepara a lista de adjacência
  for (const e of flights) {
    adj[e[0]].push([e[1], e[2]]);
  }

  // array de paradas para contar o número
  const stops: number[] = new Array(n).fill(Infinity);

  // fila de prioridade para acompanhar os voos
  const pq: [number, number, number][] = [[0, src, 0]];

  while (pq.length > 0) {
    // extrai o voo com o menor custo
    const [dist, node, steps] = pq.shift()!;

    // verifica se o número de paradas excede o máximo ou o número de passos excede o limite
    if (steps > stops[node] || steps > k + 1) {
      continue;
    }

    // atualiza o número de paradas para o nó atual
    stops[node] = steps;

    // verifica se o nó atual é o destino
    if (node === dst) {
      return dist;
    }

    // explora os voos vizinhos
    for (const [neighbor, price] of adj[node]) {
      pq.push([dist + price, neighbor, steps + 1]);
    }

    // ordena a fila de prioridade com base na distância acumulada
    pq.sort((a, b) => a[0] - b[0]);
  }

  // se nenhum caminho for encontrado, retorna -1
  return -1;
}
