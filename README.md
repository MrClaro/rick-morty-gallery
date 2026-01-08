# Rick and Morty Gallery

Uma galeria de fotos dinâmica e responsiva desenvolvida em **Vue.js**, que consome dados da API oficial do Rick and Morty. O projeto apresenta um layout moderno com busca avançada em tempo real e sistema de paginação.

## Tecnologias e Ferramentas

| Tecnologia | Descrição |
| --- | --- |
| **Vue 3** | Framework progressivo para construção da interface (Composition API). |
| **SCSS** | Pré-processador CSS para estilização modular e avançada. |
| **Axios** | Cliente HTTP para consumo da API REST. |
| **Rick and Morty API** | Fonte de dados para personagens e imagens. |
| **Phosphor Icons** | Biblioteca de ícones modernos e minimalistas. |

---

## Funcionalidades e Diferenciais

O projeto vai além do básico, aplicando conceitos avançados de Front-end:

1. **Busca Avançada via API**: Diferente de uma busca local, o sistema consulta diretamente o endpoint da API (`?name=...`), permitindo encontrar qualquer personagem entre as centenas disponíveis no banco de dados.
2. **Debounce Search**: Implementado um mecanismo de *Debounce* no campo de busca. O sistema aguarda 500ms após o usuário parar de digitar para disparar a requisição, evitando sobrecarga na API e melhorando a performance.
3. **Paginação Sincronizada**: Sistema de navegação entre páginas que mantém os filtros de busca ativos, permitindo navegar pelos resultados filtrados.
4. **UX & Micro-interações**:
* **Hover Effects**: Zoom suave e sombras dinâmicas ao passar o mouse nos cards.
* **Feedback Visual**: Mensagens customizadas para estados de "Carregando", "Erro" ou "Nenhum resultado encontrado".


5. **Design Responsivo**: Layout grid que se adapta automaticamente de dispositivos móveis a monitores de alta resolução utilizando `CSS Grid` e `auto-fit`.

---

## Estrutura do Projeto

A organização segue os padrões modernos de escalabilidade do Vue:

```text
src/
├── components/         # Componentes reutilizáveis (Header, Footer, Card, PhotoGrid)
├── composables/        # Lógica de estado e fetch encapsulada (useImagens)
├── pages/              # Páginas da aplicação
├── router/             # Configuração do vue router
├── App.vue             # Componente raiz
└── main.js             # Inicialização da aplicação

```

---

## Como Rodar Localmente

### Pré-requisitos

* Node.js (v18+)
* npm ou pnpm

### Passos

1. Clone este repositório:
```bash
git clone https://github.com/MrClaro/rick-morty-gallery.git

```


2. Instale as dependências:
```bash
npm install

```


3. Inicie o servidor de desenvolvimento:
```bash
npm run dev

```
