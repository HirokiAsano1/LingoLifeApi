# LingoLife Forum API - CRUD para Fórum de Networking de Idiomas

## Sobre o Projeto

A **LingoLife Forum API** é uma API desenvolvida em **Node.js** com **MongoDB** para gerenciar um fórum de networking voltado ao aprendizado de idiomas. Essa API permite a criação, edição e exclusão de postagens, além do suporte ao envio de arquivos para anexar materiais de estudo.  

Essa API faz parte do projeto final **LingoLife**, um sistema completo para conectar pessoas interessadas em aprender e praticar idiomas. Para mais informações sobre o projeto, acesse:  
🔗 [LingoLife - Projeto Completo](https://github.com/DaviCalebe/lingolife)

## Tecnologias Utilizadas

- **Back-end:**
  - Node.js
  - Express.js
  - MongoDB (Mongoose ODM)
  - Multer para upload de arquivos
  - JSON Web Token (JWT) para autenticação
  - Dotenv para gerenciamento de variáveis de ambiente
  - Bcrypt para hash de senhas
  - Cors para controle de acessos

## Funcionalidades

- **CRUD de Postagens**: Criar, listar, editar e excluir posts no fórum
- **Upload de Arquivos**: Anexar materiais de estudo às postagens

## Endpoints da API

## Rotas da API

### 📌 **Publicações**
| Método | Rota | Descrição |
|--------|------|-----------|
| `POST` | `/forum/publication` | Cria uma nova postagem no fórum |
| `GET` | `/forum/publication` | Lista todas as postagens do fórum |
| `GET` | `/forum/publication/:id` | Busca uma postagem específica pelo ID |
| `PUT` | `/forum/publication/:id` | Atualiza uma postagem existente |
| `DELETE` | `/forum/publication/:id` | Remove uma postagem do fórum |

### **Uploads de Arquivos**
- `POST /upload` → Fazer upload de um arquivo para uma postagem

## Instalação e Execução

### **1. Clone o Repositório**
```sh
git clone https://github.com/seu-usuario/LingoLifeApi.git
cd server
npm install
npm start
```
A API estará rodando em http://localhost:5000.
