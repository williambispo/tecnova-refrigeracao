# Tec Nova Refrigeração

Site institucional responsivo da **Tec Nova Refrigeração**, assistência técnica especializada em máquinas de lavar, geladeiras e lava e seca no Distrito Federal e Entorno.

## Objetivo

O projeto é um site comercial de página única, criado para apresentar os serviços da empresa e facilitar o contato de novos clientes pelo WhatsApp. O layout foi pensado para transmitir confiança, cuidado e profissionalismo, com foco em uma experiência simples no celular e no computador.

## Tecnologias

- HTML5 semântico;
- CSS3 puro, com variáveis, Grid, Flexbox, animações e media queries;
- JavaScript puro, sem frameworks ou dependências;
- Google Fonts: DM Sans e Manrope.

## Estrutura

```text
tecnova-refrigeracao/
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── images/
│   └── js/
│       └── main.js
│   └── additions.css
├── .gitignore
├── index.html
└── README.md
```

A pasta `assets/images/` contém imagens de referência dos aparelhos atendidos e um painel visual de logomarcas. Recomenda-se substituir essas imagens por fotografias próprias ou licenciadas antes da publicação comercial.

## Como executar no VS Code

1. Abra a pasta `tecnova-refrigeracao` no VS Code.
2. Instale a extensão **Live Server** (opcional).
3. Clique com o botão direito no arquivo `index.html` e escolha **Open with Live Server**.
4. Alternativamente, abra o arquivo `index.html` diretamente em um navegador.

## Funcionalidades

- Navegação por âncoras entre as seções;
- Menu hambúrguer para telas pequenas;
- Animações suaves ao rolar a página;
- Formulário com validação básica;
- Formulário que monta uma mensagem e abre o WhatsApp da empresa;
- Botão flutuante de WhatsApp;
- Links para Instagram e e-mail;
- Layout responsivo para celular, tablet e desktop;
- Galeria de aparelhos com fotos de referência;
- Faixa de marcas atendidas com painel visual de logomarcas;
- Catálogo ampliado com 11 categorias de aparelhos;
- Seção de avaliações de clientes;
- Acessibilidade básica com HTML semântico, foco visível, `aria-labels` e link para pular ao conteúdo.

## Dados configurados

- **WhatsApp:** +55 61 95994-0944
- **Instagram:** https://instagram.com/tecnova_refrigeracao
- **E-mail:** contato@tecnovarefrigeracao.com
- **Região:** Distrito Federal e Entorno
- **Horário:** das 8h às 18h

## Personalização

Os principais valores visuais estão no início de `assets/css/style.css`, dentro de `:root`. Para alterar textos, links e informações comerciais, edite o `index.html`. Para modificar o comportamento do menu, animações e formulário, edite `assets/js/main.js`.

O formulário não envia e-mail nem armazena dados: ele apenas cria uma mensagem e abre uma conversa no WhatsApp, sem necessidade de servidor ou serviço externo.
