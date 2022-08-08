ALTER TABLE escola.areas DROP COLUMN ano_matricula;
INSERT INTO `alunos` (nome, sobrenome, ano_matricula) VALUES ('Elisangela', 'Pereira', 2020);
INSERT INTO `alunos` (nome, sobrenome, ano_matricula) VALUES ('Rodrigo', 'dos Santos', 2020);
INSERT INTO `alunos` (nome, sobrenome, ano_matricula) VALUES ('Angélica', 'Silva', 2019);
INSERT INTO `alunos` (nome, sobrenome, ano_matricula) VALUES ('Receba', 'Zequel', 2019);
INSERT INTO `alunos` (nome, sobrenome, ano_matricula) VALUES ('Felipe', 'Moreira', 2019);
INSERT INTO `alunos` (nome, sobrenome, ano_matricula) VALUES ('Matheus', 'Rezende', 2018);
INSERT INTO `alunos` (nome, sobrenome, ano_matricula) VALUES ('Thiago', 'Marinho', 2020);
INSERT INTO `alunos` (nome, sobrenome, ano_matricula) VALUES ('Danila', 'de Souza', 2020);

INSERT INTO `professores` (nome, sobrenome) VALUES ('Henrique', 'Lemes');
INSERT INTO `professores` (nome, sobrenome) VALUES ('Adriana', 'Decor');
INSERT INTO `professores` (nome, sobrenome) VALUES ('Victor', 'Santos');
INSERT INTO `professores` (nome, sobrenome) VALUES ('Fábio', 'Vigor');
INSERT INTO `professores` (id, nome, sobrenome) VALUES (15, 'Rebeca', 'Pereira');

INSERT INTO `areas` (tipo) VALUES ('Programação');
INSERT INTO `areas` (tipo) VALUES ('Marketing');
INSERT INTO `areas` (tipo) VALUES ('User Experience');
INSERT INTO `areas` (tipo) VALUES ('Customer Experience');
INSERT INTO `areas` (tipo) VALUES ('Dados');
INSERT INTO `areas` (tipo) VALUES ('Negócios');
INSERT INTO `areas` (tipo) VALUES ('Culinária');

INSERT INTO `cursos` (nome, area_id) VALUES ('Desenvolvimento Web FullStack', 1);
INSERT INTO `cursos` (nome, area_id) VALUES ('Desenvolvimento Mobile Android', 1);
INSERT INTO `cursos` (nome, area_id) VALUES ('Desenvolvimento Mobile IOS', 1);
INSERT INTO `cursos` (nome, area_id) VALUES ('Marketing Digital', 2);
INSERT INTO `cursos` (nome, area_id) VALUES ('Ux', 3);

INSERT INTO `turmas` (id, duracao, ano_inicio, semestre, curso_id, professor_id) VALUES (10, 3, 2020, 2, 1, 3);
INSERT INTO `turmas` (id, duracao, ano_inicio, semestre, curso_id, professor_id) VALUES (11, 3, 2020, 1, 1, 3);
INSERT INTO `turmas` (id, duracao, ano_inicio, semestre, curso_id, professor_id) VALUES (12, 5, 2018, 2, 1, 15);
INSERT INTO `turmas` (id, duracao, ano_inicio, semestre, curso_id, professor_id) VALUES (13, 5, 2019, 1, 1, 15);
INSERT INTO `turmas` (id, duracao, ano_inicio, semestre, curso_id, professor_id) VALUES (142, 2020, 2, 3, 15);
INSERT INTO `turmas` (id, duracao, ano_inicio, semestre, curso_id, professor_id) VALUES (15, 5, 2020, 1, 1, 15);
INSERT INTO `turmas` (id, duracao, ano_inicio, semestre, curso_id, professor_id) VALUES (16, 1, 2020, 1, 5, 15);
INSERT INTO `turmas` (id, duracao, ano_inicio, semestre, curso_id, professor_id) VALUES (17, 5, 2018, 2, 1, 4);

INSERT INTO `alunos_has_turmas` (alunos_id, turma_id, numero_faltas) VALUES (1, 4, 5);
INSERT INTO `alunos_has_turmas` (alunos_id, turma_id, numero_faltas) VALUES (1, 14, 7);
INSERT INTO `alunos_has_turmas` (alunos_id, turma_id, numero_faltas) VALUES (1, 12, 8);
INSERT INTO `alunos_has_turmas` (alunos_id, turma_id, numero_faltas) VALUES (5, 10, 4);
INSERT INTO `alunos_has_turmas` (alunos_id, turma_id, numero_faltas) VALUES (3, 11, 10);
INSERT INTO `alunos_has_turmas` (alunos_id, turma_id, numero_faltas) VALUES (5, 11, 10);
INSERT INTO `alunos_has_turmas` (alunos_id, turma_id, numero_faltas) VALUES (3, 12, 6);
INSERT INTO `alunos_has_turmas` (alunos_id, turma_id, numero_faltas) VALUES (7, 11, 20);
INSERT INTO `alunos_has_turmas` (alunos_id, turma_id, numero_faltas) VALUES (7, 14, 0);
INSERT INTO `alunos_has_turmas` (alunos_id, turma_id, numero_faltas) VALUES (8, 11, 5);
INSERT INTO `alunos_has_turmas` (alunos_id, turma_id, numero_faltas) VALUES (2, 7, 0);
INSERT INTO `alunos_has_turmas` (alunos_id, turma_id, numero_faltas) VALUES (2, 13, 9);
INSERT INTO `alunos_has_turmas` (alunos_id, turma_id, numero_faltas) VALUES (6, 1, 1);
INSERT INTO `alunos_has_turmas` (alunos_id, turma_id, numero_faltas) VALUES (6, 13, 7);
INSERT INTO `alunos_has_turmas` (alunos_id, turma_id, numero_faltas) VALUES (1, 11, 10);
INSERT INTO `alunos_has_turmas` (alunos_id, turma_id, numero_faltas) VALUES (10, 6, 3);
INSERT INTO `alunos_has_turmas` (alunos_id, turma_id, numero_faltas) VALUES (10, 14, 11);