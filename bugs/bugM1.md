Bug M1: POST Movie Não Retorna ID no Cadastro Bem-Sucedido

# Relatório de Bug

## POST Movie Não Retorna ID no Cadastro Bem-Sucedido

**Descrição Breve:**  
Ao cadastrar um filme com sucesso, o ID do filme não é retornado na resposta da API.

**Gravidade:**  
Médio

**Prioridade:**  
Média

**Classificação:**  
DESENVOLVIMENTO

**Passos para Reproduzir:**

1. Enviar uma requisição POST para a rota `/movies` com dados válidos de um filme.
2. Verificar a resposta da API.

**Comportamento Esperado:**  
A resposta da API deveria incluir o ID do filme cadastrado.

**Comportamento Observado:**  
A resposta não inclui o ID do filme cadastrado.

**Ambiente de Teste:**

- **Versão do Software:** 0.0.1

**Anexos:**

- **Capturas de Tela:**
  <p>
    <img src="./../assets/evidenciaFilmes4.png" alt="evidencia de retorno sem Id" width="435"/>
</p>

**Mensagens de Erro ou Logs:**  
Não aplicável.

**Sugestão de Solução (Opcional):**  
Adicionar o ID do filme na resposta da API após um cadastro bem-sucedido.

**Observações Finais:**  
Essa falha dificulta o uso da API para integrar outras funcionalidades que dependem do ID do filme.
