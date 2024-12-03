Bug T2: Erro ao Acessar o Endpoint /tickets/+id

# Relatório de Bug

**Descrição Breve:**  
Ao realizar qualquer requisição para o endpoint `/tickets/+id`, a aplicação apresenta falhas críticas, interrompendo seu funcionamento.

**Gravidade:**  
Crítico

**Prioridade:**  
Alta

**Classificação:**  
**DESENVOLVIMENTO**  
O problema parece estar relacionado a falhas na codificação ou no tratamento de exceções dentro do endpoint.

**Passos para Reproduzir:**

1. Faça uma requisição GET para o endpoint `/tickets/+id` utilizando um cliente HTTP (Postman, cURL, etc.).
2. Substitua `+id` por qualquer valor válido ou inválido (e.g., `/tickets/123`).
3. Observe que a aplicação retorna erro e pode apresentar instabilidade ou se encerrar inesperadamente.

**Comportamento Esperado:**  
A aplicação deveria retornar as informações do ticket correspondente ao ID fornecido ou uma mensagem de erro clara informando que o ticket não foi encontrado.

**Comportamento Observado:**  
A aplicação apresenta uma falha crítica e pode parar de funcionar completamente após a requisição.

**Ambiente de Teste:**

- **Versão do Software:** 0.0.1

**Mensagens de Erro ou Logs:**

```
C:\Users\josne\projects\nestjs-cinema-main\node_modules\nedb\lib\executor.js:29
        lastArg.apply(null, arguments);
                ^
NotFoundException: Ticket with ID fuygeyf3fa not found.
    at C:\Users\josne\projects\nestjs-cinema-main\src\tickets\tickets.service.ts:58:19
    at newArguments.<computed> (C:\Users\josne\projects\nestjs-cinema-main\node_modules\nedb\lib\executor.js:29:17)
    at C:\Users\josne\projects\nestjs-cinema-main\node_modules\nedb\lib\datastore.js:693:14
    at Persistence.persistNewState (C:\Users\josne\projects\nestjs-cinema-main\node_modules\nedb\lib\persistence.js:198:40)
    at C:\Users\josne\projects\nestjs-cinema-main\node_modules\nedb\lib\datastore.js:691:22
    at C:\Users\josne\projects\nestjs-cinema-main\node_modules\nedb\lib\datastore.js:309:39
    at fn (C:\Users\josne\projects\nestjs-cinema-main\node_modules\async\lib\async.js:582:34)
    at Immediate.<anonymous> (C:\Users\josne\projects\nestjs-cinema-main\node_modules\async\lib\async.js:498:34)
    at processImmediate (node:internal/timers:478:21)
```

**Sugestão de Solução (Opcional):**  
Revisar o código do endpoint `/tickets/+id`, verificando a validação do parâmetro `id`. Implementar tratamento de exceções robusto para evitar que erros não tratados derrubem a aplicação.

**Observações Finais:**  
Esse problema pode estar relacionado à ausência de validação de entrada ou a uma operação não tratada no banco de dados. Recomenda-se priorizar a correção, dado o impacto severo sobre o funcionamento da aplicação.
