1. Visão do Produto

O Portal de Ferramentas é um hub centralizado de micro-aplicações focado na produtividade diária do usuário. Ele resolve a fragmentação de ferramentas ao oferecer gestão de tarefas, contatos e finanças em uma interface única, rápida e privada, onde todos os dados permanecem sob controle do usuário através do armazenamento local.
+2

2. User Stories (TaskMaster) 

Adição: Como utilizador, eu quero adicionar tarefas com categorias para que eu possa organizar minhas obrigações por contexto.

Listagem: Como utilizador, eu quero ver minhas tarefas salvas ao abrir o portal para que eu não esqueça meus compromissos.

Remoção: Como utilizador, eu quero excluir tarefas concluídas para manter minha lista limpa e atualizada.

Validação: Como utilizador, eu quero ser impedido de criar tarefas muito curtas para garantir que a descrição seja compreensível no futuro.

Persistência: Como utilizador, eu quero que minhas tarefas continuem lá após fechar o navegador para não perder dados importantes.

3. Critérios de Aceitação (Exemplo para Estória 1) 

O campo "Título" deve emitir um alerta se tiver menos de 5 caracteres.

O sistema deve permitir selecionar entre as categorias: Trabalho, Pessoal ou Urgente.

Ao clicar em "Add", o campo de texto deve ser limpo automaticamente.

4. Milestones (Marcos) 

M1 - Alicerce do Sistema: Configuração do Vite/Tailwind, sistema de rotas e criação da Home/Navbar.

M2 - Inteligência de Dados: Implementação dos módulos TaskMaster, ConnectHub e MoneyFlow com validações e persistência.