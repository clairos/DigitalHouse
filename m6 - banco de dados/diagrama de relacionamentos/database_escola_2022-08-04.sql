CREATE DATABASE escola;

USE escola;

CREATE TABLE areas_estudos (
	id_area INT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(65) NOT NULL
);

CREATE TABLE professores (
	id_professor INT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(20) NOT NULL,
    sobrenome VARCHAR(60) NOT NULL
);

CREATE TABLE alunos (
	id_aluno INT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(65) NOT NULL,
    matricula VARCHAR(10)
);

CREATE TABLE cursos (
	id_curso INT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(65) NOT NULL, 
    id_area INT UNSIGNED NOT NULL,
    FOREIGN KEY (id_area) REFERENCES areas_estudos(id_area)
);

CREATE TABLE turmas (
	id_turma INT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR (65) NOT NULL,
    semestre INT(2) UNSIGNED NOT NULL,
    ano_inicio INT(4) UNSIGNED NOT NULL,
    id_curso INT UNSIGNED NOT NULL,
    FOREIGN KEY (id_curso) REFERENCES cursos(id_curso),
    id_professor INT UNSIGNED NOT NULL, 
    FOREIGN KEY (id_professor) REFERENCES professores(id_professor)
);

CREATE TABLE alunos_turmas (
	id_aluno_turma INT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
    id_aluno INT UNSIGNED NOT NULL, 
    FOREIGN KEY (id_aluno) REFERENCES alunos(id_aluno),
    id_turma INT UNSIGNED NOT NULL, 
    FOREIGN KEY (id_turma) REFERENCES turmas(id_turma)
);

-- criando uma nova coluna:
ALTER TABLE alunos_turmas ADD COLUMN faltas INT UNSIGNED;
-- alterando a coluna criada acima
ALTER TABLE alunos_turmas MODIFY COLUMN faltas INT UNSIGNED DEFAULT 0;
-- criando uma segunda coluna
ALTER TABLE alunos_turmas ADD COLUMN faltas_2 INT UNSIGNED DEFAULT 0;
-- removendo uma coluna
ALTER TABLE alunos_turmas DROP COLUMN faltas_2;

-- inserindo dados em tabelas
INSERT INTO areas_estudos (nome) VALUES ('Programação');
INSERT INTO areas_estudos (nome) VALUES ('Marketing');
INSERT INTO areas_estudos (nome) VALUES ('Administração');
INSERT INTO areas_estudos (nome) VALUES ('Design');

INSERT INTO professores (nome, sobrenome) VALUES ('Bruno', 'Razera');
INSERT INTO professores (nome, sobrenome) VALUES ('Lígia', 'Pretel');
INSERT INTO professores (nome, sobrenome) VALUES ('Lucas', 'Alves');
INSERT INTO professores (nome, sobrenome) VALUES ('Clara', 'Brusamarello');

INSERT INTO alunos (nome, matricula) VALUES ('Clara Brusamarello', '2022060001');
INSERT INTO alunos (nome, matricula) VALUES ('Roberta Hassib', '2022060002');
INSERT INTO alunos (nome, matricula) VALUES ('Roberta Neukamp', '2022060003');

INSERT INTO cursos (nome, id_area) VALUES ('Full Stack Nodejs', 1);
INSERT INTO cursos (nome, id_area) VALUES ('Mídias Sociais', 2);
INSERT INTO cursos (nome, id_area) VALUES ('Gestão de Pessoas', 3);
INSERT INTO cursos (nome, id_area) VALUES ('Design UX UI', 4);

INSERT INTO turmas (nome, semestre, id_curso, ano_inicio, id_professor)
VALUES
	('1º sem. A', 1, 1, 2022, 1),
    ('1º sem. B', 1, 2, 2022, 2),
    ('2º sem. A', 2, 3, 2021, 3);