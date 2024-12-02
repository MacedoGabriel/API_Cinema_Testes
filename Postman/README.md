# Configuração do Ambiente

Para executar as atividades com sucesso, siga as etapas abaixo para configurar corretamente o ambiente de testes.

### 1. Instalando o Postman

Baixe e instale o Postman seguindo as instruções da documentação oficial:

- Guia: [Visão Geral do Postman](https://learning.postman.com/docs/introduction/overview/)
- Download: [Baixar Postman](https://www.postman.com/downloads/)
- Cadastro: Após abrir o Postman, crie uma conta ou realize login se já possuir uma.

### 2. Instalando o NodeJS

#### 2.1 Baixar e Configurar o NodeJS

1. Acesse o site oficial do NodeJS e faça o download da versão mais recente: [Baixar NodeJS](https://nodejs.org/en/download/)
2. Siga as orientações do instalador para concluir a instalação.

#### 2.2 Rodando a API Localmente

1. Com o NodeJS instalado, abra o terminal (CMD, PowerShell, ou Terminal em Linux/Mac).
2. Abra um terminal e vá para a pasta da API e execute o comando abaixo para iniciar a API:

   ```bash
   npm run start
   ```

3. A API estará disponível localmente na porta `http://localhost:3000/api/docs`. Direcione suas requisições para essa URL no Postman.

#### 2.3 Utilizando a Documentação Swagger

- Acesse a documentação oficial da API para realizar as requisições e consultar os endpoints: [API Docs](http://localhost:3000/api/docs)

### 3. Criando sua Primeira Collection no Postman

As coleções são conjuntos organizados de requisições que podem ser reutilizados. Siga estas etapas para criar uma:

1. **Nova Coleção**:

   - No menu lateral esquerdo, clique em `+ New Collection`.
   - Dê um nome e, se necessário, adicione uma descrição.

2. **Adicionar Requisições**:

   - Dentro da coleção, clique em `Add Request`. Configure o método HTTP (GET, POST, etc.), insira a URL e os parâmetros.

3. **Salvar**: Após adicionar as requisições, clique em `Save`.

### Criação de Requisições

Para configurar uma requisição no Postman:

1. **Nova Requisição**:

   - Clique em `+ New Request` no topo da janela.
   - Escolha o método HTTP e insira a URL da API.

2. **Configurar Parâmetros e Cabeçalhos**:

   - Na aba `Params`, insira os parâmetros da requisição.
   - Em `Headers`, adicione os cabeçalhos necessários.

3. **Definir o Corpo da Requisição**:

   - Para métodos como POST ou PUT, configure o corpo em `Body` (ex.: JSON).

4. **Enviar Requisição**: Clique em `Send` para visualizar a resposta.

### Configurando Ambientes

Ambientes permitem salvar variáveis reutilizáveis, como URLs base e tokens.

1. **Criar um Ambiente**:

   - No menu superior direito, clique em `Environments > Manage Environments`.
   - Clique em `Add` e insira variáveis como `{{url_base}}` ou `{{token}}`.

2. **Selecionar o Ambiente**: Ao enviar uma requisição, escolha o ambiente apropriado no menu de seleção de ambientes.

### Utilizando o PostBot

O PostBot é uma ferramenta de IA que auxilia na criação de testes automáticos.

1. **Ativar**:

   - Após enviar uma requisição, vá à aba `Tests` e clique em `Ask PostBot`.
   - O PostBot sugerirá scripts de teste.

2. **Personalizar**:
   - Edite ou crie seus próprios testes usando JavaScript.

### Monitoramento de Coleções

Para agendar a execução automática de uma coleção:

1. **Configurar Monitor**:

   - Na coleção, clique em `Monitors > Create Monitor`.
   - Defina a frequência e o ambiente.

2. **Visualizar Resultados**: Receba alertas por e-mail ou Slack com os resultados.

### Mock de Respostas

Mocks permitem simular respostas da API para teste de integrações.

1. **Criar Mock Server**:

   - Na aba `Mock Servers`, clique em `+ New Mock Server`.
   - Escolha a coleção e configure as respostas simuladas.

2. **Usar o Mock**:
   - Envie requisições para o URL gerado pelo mock.
