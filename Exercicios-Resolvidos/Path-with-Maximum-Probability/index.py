class Solution:
    def minCostConnectPoints(self, points: List[List[int]]) -> int:
        def find(parent, node):
            if parent[node] == node:
                return node
            parent[node] = find(parent, parent[node])
            return parent[node]

        def union(parent, rank, node1, node2):
            root1 = find(parent, node1)
            root2 = find(parent, node2)
            if root1 != root2:
                if rank[root1] < rank[root2]:
                    parent[root1] = root2
                elif rank[root1] > rank[root2]:
                    parent[root2] = root1
                else:
                    parent[root1] = root2
                    rank[root2] += 1

        n = len(points)
        edges = []

        for i in range(n):
            for j in range(i + 1, n):
                dist = abs(points[i][0] - points[j][0]) + abs(points[i][1] - points[j][1])
                edges.append((i, j, dist))

        edges.sort(key=lambda x: x[2])
        parent = list(range(n))
        rank = [0] * n
        total_cost = 0

        for i, j, dist in edges:
            if find(parent, i) != find(parent, j):
                union(parent, rank, i, j)
                total_cost += dist

        return total_cost