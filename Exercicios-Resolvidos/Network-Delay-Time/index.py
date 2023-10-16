class Solution:
    def networkDelayTime(self, times, n, k):
        graph = defaultdict(list)
        for u, v, w in times:
            graph[u].append((v, w))

        dist = [float('inf')] * (n + 1)
        dist[k] = 0

        pq = [(0, k)]

        while pq:
            d, node = heapq.heappop(pq)

            if d > dist[node]:
                continue

            for neighbor, weight in graph[node]:
                if dist[node] + weight < dist[neighbor]:
                    dist[neighbor] = dist[node] + weight
                    heapq.heappush(pq, (dist[neighbor], neighbor))

        max_dist = max(dist[1:])
        
        return max_dist if max_dist < float('inf') else -1