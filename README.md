# Portal de Ferramentas

Aplicação front-end que reúne ferramentas de produtividade e gestão em uma única interface.

## Sobre o projeto

O portal foi desenvolvido para praticar uma arquitetura modular em React. Cada ferramenta possui sua própria rota e contexto de uso, enquanto a página inicial funciona como ponto central de navegação.

## Tecnologias

- React 19
- TypeScript
- Vite
- Tailwind CSS
- React Router
- React Hook Form
- Zod
- ESLint

## Módulos

- **TaskMaster:** fluxo voltado à organização de tarefas
- **ConnectHub:** experiência de conexão e contatos
- **MoneyFlow:** módulo planejado para controle financeiro

## Funcionalidades

- Página inicial com acesso aos módulos
- Navegação com React Router
- Separação entre páginas e componentes
- Formulários tipados
- Validação com Zod
- Estrutura preparada para receber novas ferramentas

## Como executar

```bash
git clone https://github.com/EmersonBayonetta/Portal-de-Ferramentas.git
cd Portal-de-Ferramentas
npm install
npm run dev
```

Para validar o build:

```bash
npm run build
npm run preview
```

## Próximas melhorias

- Finalizar o módulo MoneyFlow
- Extrair elementos repetidos para componentes reutilizáveis
- Aprimorar a experiência em dispositivos móveis
- Adicionar testes automatizados
- Publicar uma demonstração online

## Aprendizados

O projeto demonstra organização modular, rotas com React Router, formulários tipados e evolução incremental de uma aplicação React com TypeScript.
