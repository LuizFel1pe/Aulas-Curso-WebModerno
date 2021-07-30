SELECT 
  regiao as 'Região', 
  SUM(populacao) as Total 
FROM 
  estados 
GROUP BY 
  regiao
ORDER BY 
  Total DESC;