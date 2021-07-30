-- INSERT INTO estados (id, nome, sigla, regiao, populacao)
-- VALUES (1000, 'Novo', 'NV', 'Sul', 2.45);

-- INSERT INTO estados (nome, sigla, regiao, populacao)
-- VALUES ('MAisNovo', 'MV', 'Norte', 4.45);

SELECT * FROM estados;

DELETE FROM estados WHERE sigla = 'MV';

