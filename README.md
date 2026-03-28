# Boilerplate Cypress Nativo

## 📋 Sobre o Projeto

Este repositório é um boilerplate para automação de testes web com **Cypress**, usando uma arquitetura em camadas que favorece manutenção, reutilização e evolução dos testes.

O projeto está organizado para separar responsabilidades entre: definições de fluxo, objetos de página, dados de teste e suporte de comandos e serviços.

---

## 🏗️ Arquitetura do Projeto

### Estrutura de Pastas

```
boilerplate-cypress-nativo/
├── cypress/
│   ├── fixtures/                     # Dados e massas de teste
│   │   └── acessos/                  # Exemplo de fixtures por área
│   │       └── acesso.json
│   ├── pages/                        # Page Objects e elementos
│   │   ├── esqueciSenhaPage/
│   │   │   ├── esqueciSenha.page.elements.ts
│   │   │   └── esqueciSenha.page.ts
│   │   └── loginPage/
│   │       ├── login.page.elements.ts
│   │       └── login.page.ts
│   ├── stepsDefinitions/             # Definições de testes / spec files
│   │   ├── esqueciSenha.step.ts
│   │   ├── login.step.ts
│   │   └── common/                   # Passos reutilizáveis
│   │       ├── escrita.step.ts
│   │       ├── leitura.step.ts
│   │       └── navegacao.step.ts
│   └── supports/                     # Suporte da suíte Cypress
│       ├── @cypress__browserify-preprocessor.d.ts
│       ├── e2e.ts
│       ├── index.d.ts
│       ├── types.d.ts
│       ├── commands/                 # Comandos personalizados
│       │   ├── db/
│       │   │   └── db.command.ts
│       │   ├── elements/
│       │   ├── spec/
│       │   └── token/
│       ├── models/                   # Modelos e tipagens
│       └── services/                 # Serviços HTTP e de login
├── cypress.config.ts                 # Configuração do Cypress
├── cypress.env.json                  # Variáveis de ambiente do Cypress
├── package.json                      # Dependências e scripts
└── README.md                         # Documentação do projeto
```

### Camadas da Arquitetura

#### 1. **Camada de Testes** (`cypress/stepsDefinitions/`)
- Contém os arquivos de especificação que executam os fluxos de teste.
- Cada arquivo `.step.ts` representa um cenário ou conjunto de cenários.
- Usa steps reutilizáveis em `cypress/stepsDefinitions/common/` para escrita, leitura e navegação.
- Exemplo: `cypress/stepsDefinitions/login.step.ts`

#### 2. **Camada de Page Objects** (`cypress/pages/`)
- Define a interação com a interface do usuário.
- Divide ações e seletores em arquivos separados:
  - `*.page.ts` para ações e métodos
  - `*.page.elements.ts` para localizadores e tipagem
- Exemplo: `cypress/pages/loginPage/login.page.ts`

#### 3. **Camada de Dados** (`cypress/fixtures/`)
- Armazena dados de teste, payloads e massas de dados em JSON.
- Ajuda a manter os testes independentes de valores fixos no código.
- Exemplo: `cypress/fixtures/acessos/acesso.json`

#### 4. **Camada de Suporte** (`cypress/supports/`)
- Contém configurações globais, comandos customizados e integrações com plugins.
- `cypress/supports/e2e.ts` inicializa o suporte do Cypress.
- `cypress/supports/commands/` registra comandos reutilizáveis.
- `cypress/supports/services/` contém serviços para chamadas HTTP e autenticação.

---

## 🚀 Como Executar o Projeto

### Pré-requisitos
- Node.js 16+ instalado
- `npm install` executado no diretório do projeto

### Instalar dependências

```bash
npm install
```

### Executar Cypress em modo GUI

```bash
npm run test:local
```

### Executar testes em CLI

```bash
npm run test:FULL:dev
```

### Executar testes específicos

```bash
npm run test:login
npm run test:esqueciSenha
```

### Executar testes em paralelo

```bash
npm run test:parallel
```

---

## 📘 Configuração do Cypress

O arquivo `cypress.config.ts` já contém:
- `specPattern` apontando para `cypress/stepsDefinitions/*.step.ts`
- `reporter: 'junit'`
- `reporterOptions` para saída XML e attachments
- plugin `cypress-sql-server` para executar tarefas de banco
- `supportFile: 'cypress/supports/e2e.ts'`

---

## 📝 Como Adicionar uma Nova Feature

Para incluir uma nova feature no projeto, siga este fluxo:

### 1. Criar o Page Object

**Arquivo:** `cypress/pages/<nomeDaFeature>/<nomeDaFeature>.page.ts`

- Implemente métodos para ações de UI
- Use seletores definidos em `*.page.elements.ts`

**Arquivo:** `cypress/pages/<nomeDaFeature>/<nomeDaFeature>.page.elements.ts`

- Defina os seletores e valores necessários
- Separe leitura de elementos da lógica de interação

### 2. Criar a Spec de Teste

**Arquivo:** `cypress/stepsDefinitions/<nomeDaFeature>.step.ts`

```ts
import { loginPage } from '../pages/loginPage/login.page';
import { nomeDaFeaturePage } from '../pages/nomeDaFeature/nomeDaFeature.page';

describe('Feature: Meu Novo Fluxo', () => {
  it('Deve executar o novo fluxo com sucesso', () => {
    loginPage.acessarLogin();
    nomeDaFeaturePage.realizarAcao();
    // validações
  });
});
```

> Se o fluxo compartilhar passos comuns, aproveite os arquivos em `cypress/stepsDefinitions/common/`.

### 3. Adicionar dados de teste

**Arquivo:** `cypress/fixtures/<nomeDaFeature>/dados.json`

- Use fixtures para separar dados do código
- Carregue com `cy.fixture()` nos testes

### 4. Registrar o script no `package.json` (opcional)

```json
{
  "scripts": {
    "test:meu-novo-fluxo": "npx cypress run --browser edge --spec \"cypress/stepsDefinitions/meuNovoFluxo.step.ts\""
  }
}
```

### 5. Executar o novo script

```bash
npm run test:meu-novo-fluxo
```

---

## 📊 Relatórios e Saída

O projeto usa o reporter JUnit configurado em `cypress.config.ts`.

- Os resultados de execução são gerados no formato XML
- Capturas e anexos podem ser salvos em `./cypress/screenshots`
- Você pode integrar esses arquivos ao Azure DevOps ou outro pipeline de CI

---

## 🔍 Boas Práticas

- Use nomes de arquivos e pastas descritivos
- Separe seletores (`*.page.elements.ts`) da lógica de fluxo (`*.page.ts`)
- Reutilize comandos em `cypress/supports/commands/`
- Armazene dados em `cypress/fixtures/`
- Mantenha testes curtos e fáceis de entender

---

## 🎯 Próximos Passos

- Adicionar mais cenários para cada fluxo crítico
- Criar novos Page Objects para novas páginas de aplicação
- Expandir fixtures para cobrir mais combinações de dados
- Integrar com pipeline CI/CD usando os relatórios JUnit
