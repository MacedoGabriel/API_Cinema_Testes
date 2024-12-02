# Guia de Configuração do Ambiente do K6

## Pré-requisitos

- **Visual Studio Code (VS Code)**: Certifique-se de ter o VS Code instalado para auxiliar no desenvolvimento e execução dos scripts de teste.
- **K6**: Ferramenta voltada para testes de desempenho e carga. Siga os passos a seguir para configurá-la corretamente.

## Etapas para Configurar o K6

1. **Instale o K6**:

   - Visite a página oficial de instalação do K6:  
     [Guia de Instalação do K6](https://grafana.com/docs/k6/latest/set-up/install-k6/)
   - Faça o download do instalador correspondente ao seu sistema operacional e siga as instruções fornecidas.

2. **Configure o Ambiente no VS Code**:

   - Inicie o **Visual Studio Code**.
   - Crie ou abra o projeto onde deseja trabalhar com o K6.
   - No terminal integrado do VS Code, use o comando abaixo para gerar um novo script de teste:
     ```bash
     k6 new
     ```

3. **Execute um Script de Teste**:
   - Para rodar um script de teste (exemplo: `postMovie.js`), rode-o utilizando o comando:
     ```bash
     k6 run postMovie.js
     ```

## Sugestões

- Verifique se os scripts seguem a sintaxe apropriada para o K6.
- Utilize o terminal do VS Code para simplificar a execução dos comandos.
- Explore funcionalidades adicionais na [Documentação Oficial do K6](https://grafana.com/docs/k6/latest/get-started/running-k6/).
