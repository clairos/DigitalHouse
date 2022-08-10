CREATE DATABASE escola;
USE escola;

CREATE TABLE `alunos` (
  `id` int() unsigned NOT NULL AUTO_INCREMENT,
  `nome` varchar(200) NOT NULL,
  `sobrenome` varchar(200) NOT NULL,
  `ano_matricula` int NOT NULL,
  PRIMARY KEY (`id`)
) CHARSET=utf8mb4 COLLATE=utf8_unicode_ci;

CREATE TABLE `professores` (
  `id` int() unsigned NOT NULL AUTO_INCREMENT,
  `nome` varchar(200) NOT NULL,
  `sobrenome` varchar(200) NOT NULL,
  PRIMARY KEY (`id`)
) CHARSET=utf8mb4 COLLATE=utf8_unicode_ci;

CREATE TABLE `areas` (
  `id` int() unsigned NOT NULL AUTO_INCREMENT,
  `tipo` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) CHARSET=utf8mb4 COLLATE=utf8_unicode_ci;

CREATE TABLE `cursos` (
  `id` int() unsigned NOT NULL AUTO_INCREMENT,
  `nome` varchar(200) NOT NULL,
  `area_id` int() unsigned NOT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY area_foreing (area_id) REFERENCES areas(id)
) DEFAULT CHARSET=utf8mb4 COLLATE=utf8_unicode_ci;

CREATE TABLE `turmas` (
  `id` int() unsigned NOT NULL AUTO_INCREMENT,
  `duracao` int() NOT NULL,
  `ano_inicio` int() NOT NULL,
  `semestre` tinyint(1) NOT NULL,
  `curso_id` int() unsigned NOT NULL,
  `professor_id` int() unsigned NOT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY curso_foreing (curso_id) REFERENCES cursos(id),
  FOREIGN KEY professor_foreing (professor_id) REFERENCES professores(id)
) DEFAULT CHARSET=utf8mb4 COLLATE=utf8_unicode_ci;

CREATE TABLE `alunos_has_turmas` (
  `id` int() unsigned NOT NULL AUTO_INCREMENT,
  `aluno_id` int() unsigned NOT NULL,
  `turma_id` int() unsigned NOT NULL,
  `numero_faltas` int(),
  PRIMARY KEY (`id`),
  FOREIGN KEY aluno_foreing (aluno_id) REFERENCES alunos(id),
  FOREIGN KEY turma_foreing (turma_id) REFERENCES turmas(id)
) DEFAULT CHARSET=utf8mb4 COLLATE=utf8_unicode_ci;
