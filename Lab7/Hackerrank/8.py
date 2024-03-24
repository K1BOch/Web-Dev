n = int(input())
scores = list(map(int, input().split()))
unique_scores = list(set(scores))
unique_scores.sort(reverse=True)
needed_score = None
for score in unique_scores:
    if score < max(unique_scores):
        needed_score = score
        break
print(needed_score)