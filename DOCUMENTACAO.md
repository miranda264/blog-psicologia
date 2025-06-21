# Blog de Saúde Profissional - Documentação

## Visão Geral

Seu blog de saúde profissional "Saúde em Foco" foi criado com sucesso! Este é um site moderno, responsivo e profissional, desenvolvido com React e Tailwind CSS.

## Características Principais

### Design Profissional
- **Paleta de cores**: Azul e branco para transmitir confiança e profissionalismo
- **Tipografia**: Fontes limpas e legíveis
- **Layout responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- **Imagens de alta qualidade**: Assets profissionais relacionados à saúde

### Funcionalidades Implementadas

1. **Header com Navegação**
   - Logo e nome do blog
   - Menu de navegação (Início, Artigos, Categorias, Sobre, Contato)
   - Barra de busca
   - Botão de newsletter
   - Menu mobile responsivo

2. **Seção Hero**
   - Título impactante
   - Descrição do propósito do blog
   - Botões de call-to-action
   - Imagem profissional de médica

3. **Categorias de Saúde**
   - Cardiologia (24 artigos)
   - Neurologia (18 artigos)
   - Nutrição (32 artigos)
   - Exercícios (28 artigos)
   - Ícones representativos para cada categoria

4. **Artigos em Destaque**
   - 3 artigos de exemplo com:
     - Imagens relevantes
     - Títulos e descrições
     - Informações do autor
     - Data de publicação
     - Tempo de leitura
     - Categorias

5. **Newsletter**
   - Seção para captura de e-mails
   - Design atrativo com call-to-action

6. **Footer Completo**
   - Links para categorias
   - Links para recursos
   - Informações de contato
   - Links para redes sociais

## Como Personalizar

### Alterando Conteúdo
1. **Artigos**: Edite o array `featuredArticles` no arquivo `App.jsx`
2. **Categorias**: Modifique o array `categories` para adicionar/remover categorias
3. **Informações de contato**: Atualize os dados no footer

### Adicionando Novas Imagens
1. Coloque as imagens na pasta `src/assets/`
2. Importe no início do arquivo `App.jsx`
3. Use nas seções desejadas

### Modificando Cores
- As cores estão definidas no Tailwind CSS
- Para mudanças maiores, edite o arquivo `App.css`

## Tecnologias Utilizadas

- **React**: Framework JavaScript para interface
- **Tailwind CSS**: Framework CSS para estilização
- **Shadcn/UI**: Componentes de interface
- **Lucide React**: Ícones
- **Vite**: Bundler e servidor de desenvolvimento

## Como Executar Localmente

```bash
cd blog-saude
pnpm install
pnpm run dev
```

O site estará disponível em `http://localhost:5173`

## Próximos Passos Sugeridos

1. **Adicionar mais páginas**:
   - Página "Sobre"
   - Página de artigo individual
   - Página de categoria
   - Página de contato

2. **Funcionalidades avançadas**:
   - Sistema de busca funcional
   - Comentários nos artigos
   - Sistema de tags
   - Integração com CMS

3. **SEO e Performance**:
   - Meta tags
   - Sitemap
   - Otimização de imagens
   - Analytics

4. **Deploy**:
   - Configurar para produção
   - Deploy em plataforma como Vercel ou Netlify

## Suporte

O blog foi desenvolvido seguindo as melhores práticas de desenvolvimento web e está pronto para uso. Todas as funcionalidades foram testadas e estão funcionando corretamente.

Para futuras modificações, recomenda-se conhecimento básico em React e Tailwind CSS.

