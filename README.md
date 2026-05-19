# Portal de Ferramentas

Aplicação front-end em React que reúne pequenas ferramentas em um único portal, com navegação por rotas e estrutura preparada para evoluir novos módulos como TaskMaster, ConnectHub e MoneyFlow.

## Objetivo

Centralizar ferramentas de produtividade e gestão em uma interface simples, escalável e fácil de manter, demonstrando domínio de rotas, componentização e organização de páginas em React.

## Tecnologias

- React 19
- TypeScript
- Vite
- Tailwind CSS
- React Router DOM
- React Hook Form
- Zod
- ESLint

## Funcionalidades

- Página inicial com acesso rápido aos módulos.
- Navegação entre páginas usando React Router.
- Estrutura por pastas para separar páginas e componentes.
- Módulo TaskMaster para fluxo de tarefas.
- Módulo ConnectHub para fluxo de conexão/contatos.
- Base preparada para expansão do MoneyFlow.

## Preview

> Adicione os prints em `docs/screenshots/` para deixar o projeto mais forte no perfil.

Sugestão de imagens:

- `docs/screenshots/home.png` - página inicial do portal.
- `docs/screenshots/taskmaster.png` - módulo de tarefas.
- `docs/screenshots/connecthub.png` - módulo de conexão.

## Deploy

Deploy online: em breve.

Repositório: https://github.com/EmersonBayonetta/Portal-de-Ferramentas

## Como rodar localmente

```sh
git clone https://github.com/EmersonBayonetta/Portal-de-Ferramentas.git
cd Portal-de-Ferramentas
npm install
npm run dev
```

Para gerar o build de produção:

```sh
npm run build
```

Para visualizar o build localmente:

```sh
npm run preview
```

## Scripts

```sh
npm run dev
npm run build
npm run lint
npm run preview
```

## Melhorias planejadas

- Criar cards de ferramenta como componente reutilizável.
- Corrigir a rota do MoneyFlow ou ocultar o card até o módulo existir.
- Padronizar nomes de rotas em kebab-case.
- Criar layout responsivo com navegação melhor em mobile.
- Adicionar estados vazios, feedback visual e identidade visual própria.
- Publicar deploy e inserir prints reais no README.

## Aprendizados

- Configuração de rotas com React Router DOM.
- Organização de páginas e componentes em React.
- Uso de TypeScript com Vite em um projeto modular.
- Evolução de um portal simples para uma base de produto front-end.
