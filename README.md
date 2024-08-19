# POC - Prisma com SQLite

Este repositório contém uma prova de conceito (POC) utilizando Prisma com SQLite como a solução para o backend de uma aplicação Next.js. O projeto foi desenvolvido como parte da cadeira de **Projeto Integrado 2** do **Curso de Sistemas e Mídias Digitais** da **Universidade Federal do Ceará (UFC)**.

## Objetivo

O objetivo desta POC é demonstrar a viabilidade de utilizar Prisma e SQLite como backend em um projeto Next.js, comparando essa solução com outras alternativas. Esta POC faz parte de um estudo comparativo entre [Firebase](https://github.com/Gabriel-Vasconcelos/poc-user-firebase) e Prisma/SQLite, para determinar a melhor escolha de backend para a aplicação.

## Contexto
Em um ambiente acadêmico com prazos curtos, a escolha de uma tecnologia que permita um desenvolvimento eficiente é crucial. O Prisma facilita a manipulação de dados com uma interface intuitiva e tipagem forte, enquanto o SQLite oferece uma solução de banco de dados simples e fácil de configurar, ideal para cenários de desenvolvimento local.

## A Aplicação
A aplicação desenvolvida nesta POC é uma interface simples para criação e listagem de usuários. Ela foi implementada utilizando Next.js no frontend, estilizada com Tailwind CSS, e aproveitando componentes da Shadcn UI para construir uma interface moderna e funcional.

### Funcionalidades Principais
- **Criação de Usuários:** Na tela inicial, o usuário encontra um formulário com diversos campos para inserção de dados. Ao submeter o formulário, um novo usuário é criado e armazenado no banco de dados SQLite, utilizando o Prisma como ORM.

- **Listagem de Usuários:**  Em uma segunda tela, a aplicação exibe uma tabela que lista todos os usuários cadastrados, puxando os dados do banco de dados SQLite.

Essas funcionalidades básicas demonstram como o Prisma e SQLite podem ser utilizados para gerenciar dados de forma eficiente e simplificada.


## Tecnologias Utilizadas

- **Frontend**:
  - [Next.js](https://nextjs.org/) - Framework React para aplicações web modernas.
  - [Tailwind CSS](https://tailwindcss.com/) - Framework CSS utilitário para design rápido e customizável.
  - [Shadcn UI](https://ui.shadcn.com/) - Conjunto de componentes UI acessíveis e customizáveis para React.

- **Backend**:
  - [Prisma](https://www.prisma.io/) - ORM que simplifica a interação com o banco de dados através de uma API moderna e intuitiva.
  - [SQLite](https://www.sqlite.org/) - Banco de dados leve, ideal para desenvolvimento local e aplicações pequenas.

## Critérios de Avaliação

1. **Velocidade de Desenvolvimento:** Embora o Prisma forneça uma interface eficiente para manipulação de dados, a configuração inicial do backend com Prisma e SQLite demanda mais tempo e esforço, especialmente no que diz respeito à infraestrutura. Isso pode retardar o processo de desenvolvimento, particularmente em projetos com prazos apertados.
2. **Escalabilidade e Abstração:** O Prisma, combinado com o SQLite, oferece flexibilidade na modelagem de dados, mas a escalabilidade pode se tornar um problema à medida que a aplicação cresce. O SQLite é mais adequado para aplicações menores e pode não suportar adequadamente um aumento significativo de usuários e dados.
3. **Custos:** No início, o uso do Prisma e SQLite pode ser econômico, mas conforme a aplicação cresce e a necessidade de infraestrutura se torna mais complexa, os custos tendem a aumentar, especialmente se for necessário migrar para um banco de dados mais robusto e configurar servidores adicionais.
4. **Foco no que Importa:**  Com Prisma e SQLite, a equipe de desenvolvimento precisaria investir mais tempo na gestão do backend, o que pode desviar o foco das funcionalidades principais e da experiência do usuário, além de exigir uma maior atenção à infraestrutura. Isso pode comprometer a velocidade de entrega e o foco no desenvolvimento das funcionalidades que realmente importam para o negócio.

## Como Executar o Projeto

1. Clone o repositório:
   ```bash
   git clone https://github.com/Gabriel-Vasconcelos/poc-user-firebase.git

2. Instale as dependências:
   ```bash
   npm install
   
3. Execute a migração para criar o banco de dados SQLite:
  ```bash
  npx prisma migrate dev

4. Execute o projeto em modo de desenvolvimento:
  ```bash
  npm run dev
  ```

5. Acesse http://localhost:3000 no navegador para visualizar a aplicação.

## Conclusão
Esta POC demonstrou que o Prisma com SQLite é uma solução viável e eficiente para projetos que exigem uma solução de backend simples, porém poderosa. No entanto, após uma análise comparativa, o Firebase foi escolhido como a solução final para a aplicação, devido à sua configuração ainda mais rápida, a facilidade de uso e oferecer um conjunto mais amplo de serviços integrados.


## Links Relacionados
Este repositório faz parte de um estudo comparativo. Para ver a POC utilizando [Firebase](https://github.com/Gabriel-Vasconcelos/poc-user-firebase), acesse o link.
