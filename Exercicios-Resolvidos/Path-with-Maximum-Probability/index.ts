function maxProbability(
  n: number,
  edges: number[][],
  succProb: number[],
  start: number,
  end: number
): number {
  let ans = 0;

  // Fila de prioridade com pares [probabilidade, nó]
  const q: [number, number][] = [[-1, start]];

  // Lista de adjacência para armazenar as arestas
  const adj: Array<[number, number][]> = new Array(n).fill(0).map(() => []);
  for (let i = 0; i < edges.length; i++) {
    const [u, v] = edges[i];
    const w = succProb[i];

    // Adiciona a aresta (u, v) com probabilidade w
    adj[u].push([v, w]);

    // Adiciona a aresta (v, u) com probabilidade w
    adj[v].push([u, w]);
  }

  // Array para armazenar a probabilidade atual de alcançar cada nó
  const probability: number[] = new Array(n).fill(0);

  // A probabilidade de chegar ao nó inicial é 1
  probability[start] = 1;
  while (q.length > 0) {
    // Remove o par [probabilidade, nó] com a maior probabilidade
    const [cnt, pos] = q.shift()!;

    // Converte a probabilidade para valor absoluto
    const cntAbs = -cnt;
    if (pos === end) {
      // Atualiza a resposta com a maior probabilidade encontrada até o momento
      ans = Math.max(ans, cntAbs);
    }
    for (const [neighbor, weight] of adj[pos]) {
      if (cntAbs * weight > probability[neighbor]) {
        // Atualiza a probabilidade para alcançar o nó vizinho, se for maior
        probability[neighbor] = cntAbs * weight;

        // Adiciona o vizinho à fila de prioridade com a nova probabilidade
        q.push([-probability[neighbor], neighbor]);

        // Ordena a fila de prioridade em ordem decrescente de probabilidade
        q.sort((a, b) => b[0] - a[0]);
      }
    }
  }
  return ans;
}
