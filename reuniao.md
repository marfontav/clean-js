## Reunião 03/03/2025

- Somos uma biblioteca pequena e gostariamos de controlar a nossa entrada e saída de livros. Queremos cadastrar o usuário que irá pegar livro emprestado, cadastrar os livros da nossa biblioteca e poder emprestar os livros para qualquer usuário. além de buscar os registros de empréstimos.


## Dados
- Usuário: [nome_completo, CPF, telefone, endereço, email]
- Livros: [nome, quantidade, autor, genero, ISBN]
- Emprestimo: [usuario_id, livro_id, data_retorno, data_devolucao, data_saida]

## UseCases (Regras de Negócio)
[] Cadastrar um novo usuario
[] - CPF ou Email devem ser únicos

[] Buscar um cadastro de usuário por CPF
[] - Retornar um usuário ou vázio

[] Cadastrar um novo livro
[] - ISBN deve ser único

[] Buscar livro por nome ou ISBN
[] - Retorna os livros ou vazio

[] Emprestar um livro ao usuário
[] - A data de retorno não poder ser menor que a data de saída
[] - Um usuário não pode estar com mais de um livro com o mesmo ISBN ao mesmo tempo
[] - Um usuário pode estar com mais de um livro com o ISBN diferente ao mesmo tempo
[] - Ao cadastrar um emprestimo, será enviado um e-mail automaticamente informando o nome do livro, nome do usuario, a data de saida e a data de retorno.

[] Devolver o livro emprestado
[] - Caso o usuario tenha atrasado, será gerado uma multa fixa de R$ 5,00

[] Mostrar todos os emprestimos pendentes, com o nome do livro, nome do usuario, data de saída e data de retorno. Ordenado pela data de retorno mais antigo