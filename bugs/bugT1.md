Bug T1: Validação Errada no POST Ticket para Número de Assento

# Relatório de Bug

## Validação Errada no POST Ticket para Número de Assento

**Descrição Breve:**  
A mensagem de erro ao cadastrar um ticket indica que o número do assento deve ser menor ou igual a 100, enquanto o valor correto é menor ou igual a 99.

**Gravidade:**  
Alto

**Prioridade:**  
Alta

**Classificação:**  
DESENVOLVIMENTO

**Passos para Reproduzir:**

1. Enviar uma requisição POST para a rota `/tickets` com o número do assento igual a 100.
2. Verificar a mensagem de erro retornada pela API.

**Comportamento Esperado:**  
A mensagem deveria indicar que o número do assento deve ser menor ou igual a 99.

**Comportamento Observado:**  
A mensagem indica que o número do assento deve ser menor ou igual a 100.

**Ambiente de Teste:**

- **Versão do Software:** 0.0.1

**Anexos:**

- **Capturas de Tela:**
  <p>
    <img src="./../assets/evidenciaIngressos2.png" alt="evidencia mensagem de erro incorreta" width="435"/>
</p>

**Mensagens de Erro ou Logs:**  
Mensagem retornada: "O número do assento deve ser menor ou igual a 100."

**Sugestão de Solução (Opcional):**  
Corrigir a validação e a mensagem de erro para refletir o limite correto.

**Observações Finais:**  
Essa falha pode levar a comportamentos inesperados e confusão para os usuários da API.
