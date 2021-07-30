SELECT * FROM estados;
SELECT * FROM cidades;

INSERT INTO cidades (nome, area, estado_id)
VALUES ('Campinas', 795, 28);

INSERT INTO cidades (nome, area, estado_id)
VALUES ('Niteroi', 133.9, 22);

INSERT INTO cidades (nome, area, estado_id)
VALUES ('Caruaru', 920.6, (SELECT id FROM estados WHERE sigla = 'PE'));

INSERT INTO cidades (nome, area, estado_id)
VALUES ('Juazeiro do Note', 248.2, (SELECT id FROM estados WHERE sigla = 'CE'));

DELETE FROM cidades WHERE nome = 'Niteroi';