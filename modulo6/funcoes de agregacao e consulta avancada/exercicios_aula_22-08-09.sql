SELECT id_turma, turmas.semestre, turmas.ano_inicio, professores.nome AS nome_professor
FROM turmas 
INNER JOIN professores ON turmas.id_professor = professores.id_professor
WHERE turmas.id_professor IN (1, 3, 15);

--------------------------
SELECT id_turma, COUNT(id_aluno) AS alunos, SUM(faltas) AS nr_faltas 
FROM alunos_turmas
GROUP BY id_turma
HAVING alunos <= 5;

--------------------------
SELECT DISTINCT(alunos_turmas.id_aluno), alunos.* 
FROM alunos_turmas
RIGHT JOIN alunos USING(id_aluno)