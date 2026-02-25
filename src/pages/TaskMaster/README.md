# ✅ TaskMaster (ToDo List)

Projeto simples de lista de tarefas feito em **React + TypeScript**, com categorias e persistência automática no **localStorage**.

---

## 🎯 Objetivo do Projeto
Permitir que o usuário:
- Adicione tarefas com título e categoria
- Veja a lista de tarefas cadastradas
- Remova tarefas
- Mantenha os dados salvos mesmo ao recarregar a página

---

## ⚙️ Funcionalidades
✅ Adição de tarefas  
✅ Listagem de tarefas  
✅ Remoção de tarefas  
✅ Validação do título (mínimo 5 caracteres)  
✅ Persistência automática no `localStorage`  

---

## 🧠 Regras / Validações
- O **título** é obrigatório e deve ter **no mínimo 5 caracteres**
- Se inválido, o sistema exibe mensagem de erro
- As tarefas são salvas no `localStorage` com a chave: **TaskMaster**

---

## 🧱 Estrutura de Dados

### Category
- "Trabalho"
- "Pessoal"
- "Urgente"

### Task
```ts
type Task = {
  title: string;
  category: "Trabalho" | "Pessoal" | "Urgente";
};
