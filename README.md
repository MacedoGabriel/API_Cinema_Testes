# Gabriel Funari Macedo

## Sobre Mim

Olá! Sou **Gabriel Funari Macedo**, técnico em eletrônica, e atualmente estou cursando **Tecnologia em Sistemas para Internet** no IFSUL. Também estou participando do programa de bolsas **Quality Engineering** da Compass, que é focado em Testes e Garantia da Qualidade (QA).

## Sobre o Repositório

Este repositório foi criado para o **Challenge Final** do programa de bolsas Compass. Ele contém todo o material desenvolvido ao longo da última sprint.

### Organização do Repositório

- **Branch Documentação**: Contém todos os documentos criados durante o projeto.
- **Branch Testes**: Reúne todos os testes desenvolvidos e suas implementações.

## Plano de Teste

### 1. **Nome do projeto:**

Gerenciamento de Filmes e Reserva de Ingressos na API

### 2. **Resumo:**

- **Por que faremos o teste?**  
  O objetivo dos testes é garantir que a API de gerenciamento de filmes e reserva de ingressos funcione conforme os requisitos definidos, permitindo a criação, atualização, consulta e exclusão de filmes, além de realizar reservas de ingressos com base em regras de negócio claras.

- **Hipótese:**  
  A API permitirá operações de CRUD de filmes e reserva de ingressos, respeitando as validações de dados e os critérios de desempenho estabelecidos.

- **Resultado do teste:**  
  Serão realizados testes funcionais e de desempenho para validar a funcionalidade e a escalabilidade da API.

### 3. **Pessoas envolvidas:**

- **Testadores:**  
  Gabriel Macedo (Analista de Testes)  
  Gabriel Macedo (Automatizador de Testes)  
  Gabriel Macedo (Especialista em QA)

- **Público-alvo:**  
  Usuários e administradores da API de Filmes e Ingressos.

### 4. **Funcionalidades ou Módulos a serem testados (nível/tipo):**

- **Gerenciamento de Filmes:**  
  Funções a serem testadas:

  - Criar, listar, obter detalhes, atualizar e excluir filmes.
  - Validação dos campos obrigatórios e regras de unicidade.

- **Reserva de Ingressos:**  
  Funções a serem testadas:

  - Criar reservas de ingressos.
  - Validação de dados como ID do filme, ID do usuário, preço e número do assento.

- **Campos a serem validados:**
  - **Filmes:** ID, título, descrição, unicidade, e outros atributos fornecidos na criação/atualização.
  - **Ingressos:** ID, movieId, userId, seatNumber, price, showtime.

### 5. **Local dos testes:**

Os testes serão realizados em um ambiente de testes que simula o ambiente real de produção.

### 6. **Recursos necessários (software, rede, sala, verba…):**

- Ambiente de testes configurado.
- Banco de dados configurado com dados iniciais.
- Ferramentas de automação de testes (Postman, Newman).
- Documentação da API (Swagger ou equivalente).
- Scripts de teste automatizados.

### 7. **Critérios usados:**

- **Quantidade de testes a serem feitos:**  
  Testes de CRUD e reserva com cobertura completa, incluindo:

  - Cenários positivos (operações bem-sucedidas).
  - Cenários negativos (erros de validação, IDs inexistentes).
  - Cenários alternativos (dados opcionais, condições de borda).

- **Avaliação dos testes:**  
  Logs de execução, evidências visuais (prints, logs) e relatórios de teste.

### 8. **Riscos:**

- **Risco identificado:** Falhas na validação dos campos obrigatórios.  
  **Mitigação:** Garantir a revisão e execução de testes unitários e funcionais detalhados.

- **Risco identificado:** Sobrecarga no servidor devido ao volume de requisições simultâneas.  
  **Mitigação:** Testes de carga para avaliar limites e adequar a infraestrutura.

- **Risco identificado:** Regras de negócio inconsistentes.  
  **Mitigação:** Revisar os requisitos com os stakeholders antes da execução.

### 9. **Como os resultados do teste serão divulgados:**

- Relatórios de execução de testes, incluindo métricas como taxa de sucesso, tempo de resposta médio e número de falhas.
- Relatórios de defeitos registrados em um sistema de gerenciamento de bugs.

- **Métricas usadas:**
  - Cobertura de testes.
  - Tempo médio de resposta.
  - Número de defeitos por módulo.

### 10. **Cronograma:**

| **Etapa**                        | **Data de Início** | **Data de Término** |
| -------------------------------- | ------------------ | ------------------- |
| Configuração do ambiente         | 21/11/2024         | 21/11/2024          |
| Testes Exploratorios             | 22/11/2024         | 25/11/2024          |
| Desenvolvimento de scripts       | 25/11/2024         | 26/11/2024          |
| Execução de testes funcionais    | 27/11/2024         | 27/11/2024          |
| Execução de testes de desempenho | 28/11/2024         | 28/11/2024          |
| Documentação dos resultados      | 29/11/2024         | 29/11/2024          |
| Entrega de resultados            | 02/12/2024         | 02/12/2024          |

---
