ALTER TABLE empresas MODIFY cnpj VARCHAR(14);

INSERT INTO empresas 
  (nome, cnpj)
VALUES 
  ('Bradesco', 95685654352235),
  ('Vale', 21567323454432),
  ('Cielo', 03765323457512);

DESC empresas;
DESC prefeitos;

-- id	  nome	  estado_id	  area
-- 1	  Campinas	28	      795
-- 4	  Caruaru	  20	      920.6
-- 5    Juazeiro  9	        248.2
-- 8	  Niteroi	  22	      133.9


-- id	nome	    cnpj
-- 1	Bradesco	95685654352235
-- 2	Vale	    21567323454432
-- 3	Cielo	    3765323457512

SELECT * FROM empresas;
SELECT * FROM cidades;

INSERT INTO empresas_unidades
  (empresa_id, cidade_id, sede)
VALUES 
  (1, 1, 1),
  (1, 8, 0),
  (2, 8, 1);
