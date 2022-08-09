USE escola;
INSERT INTO alunos (nome, matricula) VALUES ('Elisangela Pereira', 2020);
INSERT INTO alunos (nome, matricula) VALUES ('Rodrigo dos Santos', 2020);
INSERT INTO alunos (nome, matricula) VALUES ('Angélica Silva', 2019);
INSERT INTO alunos (nome, matricula) VALUES ('Receba Zequel', 2019);
INSERT INTO alunos (nome, matricula) VALUES ('Felipe Moreira', 2019);
INSERT INTO alunos (nome, matricula) VALUES ('Matheus Rezende', 2018);
INSERT INTO alunos (nome, matricula) VALUES ('Thiago Marinho', 2020);
INSERT INTO alunos (nome, matricula) VALUES ('Danila de Souza', 2020);

INSERT INTO professores (nome, sobrenome) VALUES ('Henrique', 'Lemes');
INSERT INTO professores (nome, sobrenome) VALUES ('Adriana', 'Decor');
INSERT INTO professores (nome, sobrenome) VALUES ('Victor', 'Santos');
INSERT INTO professores (nome, sobrenome) VALUES ('Fábio', 'Vigor');
INSERT INTO professores (id_professor, nome, sobrenome) VALUES (15, 'Rebeca', 'Pereira');

INSERT INTO areas_estudos (nome) VALUES ('User Experience');
INSERT INTO areas_estudos (nome) VALUES ('Customer Experience');
INSERT INTO areas_estudos (nome) VALUES ('Dados');
INSERT INTO areas_estudos (nome) VALUES ('Negócios');
INSERT INTO areas_estudos (nome) VALUES ('Culinária');

INSERT INTO cursos (nome, id_area) VALUES ('Desenvolvimento Mobile Android', 1);
INSERT INTO cursos (nome, id_area) VALUES ('Desenvolvimento Mobile IOS', 1);
INSERT INTO cursos (nome, id_area) VALUES ('Marketing Digital', 2);

INSERT INTO turmas (id_turma, nome, ano_inicio, semestre, id_curso, id_professor) VALUES (4, '1º sem. D', 2020, 1, 1, 3);
INSERT INTO turmas (id_turma, nome, ano_inicio, semestre, id_curso, id_professor) VALUES (5, '2º sem. D', 2020, 2, 1, 3);
INSERT INTO turmas (id_turma, nome, ano_inicio, semestre, id_curso, id_professor) VALUES (6, '1º sem. F', 2020, 1, 1, 3);
INSERT INTO turmas (id_turma, nome, ano_inicio, semestre, id_curso, id_professor) VALUES (7, '2º sem. F', 2020, 2, 1, 3);
INSERT INTO turmas (id_turma, nome, ano_inicio, semestre, id_curso, id_professor) VALUES (8, '1º sem. M', 2020, 1, 1, 3);
INSERT INTO turmas (id_turma, nome, ano_inicio, semestre, id_curso, id_professor) VALUES (9, '2º sem. M', 2020, 2, 1, 3);
INSERT INTO turmas (id_turma, nome, ano_inicio, semestre, id_curso, id_professor) VALUES (10, '2º sem. E', 2020, 2, 1, 3);
INSERT INTO turmas (id_turma, nome, ano_inicio, semestre, id_curso, id_professor) VALUES (11, '1º sem. D', 2020, 1, 1, 3);
INSERT INTO turmas (id_turma, nome, ano_inicio, semestre, id_curso, id_professor) VALUES (12, '2º sem. H', 2018, 2, 1, 15);
INSERT INTO turmas (id_turma, nome, ano_inicio, semestre, id_curso, id_professor) VALUES (13, '1º sem. I', 2019, 1, 1, 15);
INSERT INTO turmas (id_turma, nome, ano_inicio, semestre, id_curso, id_professor) VALUES (14, '2º sem. I',2020, 2, 3, 15);
INSERT INTO turmas (id_turma, nome, ano_inicio, semestre, id_curso, id_professor) VALUES (15, '1º sem. J', 2020, 1, 1, 15);
INSERT INTO turmas (id_turma, nome, ano_inicio, semestre, id_curso, id_professor) VALUES (16, '1º sem. K', 2020, 1, 5, 15);
INSERT INTO turmas (id_turma, nome, ano_inicio, semestre, id_curso, id_professor) VALUES (17, '2º sem. K', 2018, 2, 1, 4);
INSERT INTO turmas (id_turma, nome, ano_inicio, semestre, id_curso, id_professor) VALUES (142, '2º sem. Z',2020, 2, 3, 15);

INSERT INTO alunos_turmas (id_aluno, id_turma, faltas) VALUES (1, 4, 5);
INSERT INTO alunos_turmas (id_aluno, id_turma, faltas) VALUES (1, 14, 7);
INSERT INTO alunos_turmas (id_aluno, id_turma, faltas) VALUES (1, 12, 8);
INSERT INTO alunos_turmas (id_aluno, id_turma, faltas) VALUES (5, 10, 4);
INSERT INTO alunos_turmas (id_aluno, id_turma, faltas) VALUES (3, 11, 10);
INSERT INTO alunos_turmas (id_aluno, id_turma, faltas) VALUES (5, 11, 10);
INSERT INTO alunos_turmas (id_aluno, id_turma, faltas) VALUES (3, 12, 6);
INSERT INTO alunos_turmas (id_aluno, id_turma, faltas) VALUES (7, 11, 20);
INSERT INTO alunos_turmas (id_aluno, id_turma, faltas) VALUES (7, 14, 0);
INSERT INTO alunos_turmas (id_aluno, id_turma, faltas) VALUES (8, 11, 5);
INSERT INTO alunos_turmas (id_aluno, id_turma, faltas) VALUES (2, 7, 0);
INSERT INTO alunos_turmas (id_aluno, id_turma, faltas) VALUES (2, 13, 9);
INSERT INTO alunos_turmas (id_aluno, id_turma, faltas) VALUES (6, 1, 1);
INSERT INTO alunos_turmas (id_aluno, id_turma, faltas) VALUES (6, 13, 7);
INSERT INTO alunos_turmas (id_aluno, id_turma, faltas) VALUES (1, 11, 10);
INSERT INTO alunos_turmas (id_aluno, id_turma, faltas) VALUES (10, 6, 3);
INSERT INTO alunos_turmas (id_aluno, id_turma, faltas) VALUES (10, 14, 11);