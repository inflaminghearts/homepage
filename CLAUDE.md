# Site da Inflaming Hearts — regras do projeto

Site institucional da INFLAMING HEARTS SOFTWARE, ENTRETENIMENTO E EDUCACAO LTDA.
Publicado via GitHub Pages em https://inflaminghearts.com.br.

## Tecnologia
- HTML e CSS puros. Sem frameworks, sem etapa de build.
- JavaScript só se for realmente necessário, em `js/`.
  Hoje existe só `js/ano.js` (ano do rodapé). O site deve funcionar sem JavaScript.
- Fontes hospedadas no próprio site: `css/fontes.css` + arquivos em `assets/fonts/` (Cinzel e Inter, licença OFL,
  com o `OFL.txt` em cada pasta). Não usar Google Fonts nem outro serviço externo de fontes (privacidade/LGPD).
  Para um peso novo, copiar o `.woff2` do pacote @fontsource correspondente e declarar em `css/fontes.css`.
- Cores, fontes e espaçamentos ficam em variáveis no topo de `css/style.css`.
  Use as variáveis de papel (`--texto`, `--fundo` etc.), não as cores diretas.

## Conteúdo
- Nenhum texto de exemplo (lorem ipsum, "Em breve", números fictícios) vai para a `main`.
  Seção sem conteúdo real fica de fora ou como comentário `TODO(conteúdo)`.
- Idiomas: português do Brasil (`index.html`, site completo) e inglês (`en/index.html`, versão enxuta).
  A versão em inglês fala só de jogos e co-dev, para o público internacional.
  Outsourcing, Formação e editais ficam só em português.
  Ao mudar um texto que existe nas duas versões, atualizar as duas.
- Nome da empresa: sempre "Inflaming Hearts" (sem ponto).
- Pilares: Jogos Autorais, Outsourcing, Formação.
- Contato público: apenas o Instagram @inflaming.hearts. Não publicar telefone.
- Links externos: Instagram da empresa (Contato) e itch.io pessoal do Narto (Sobre). Nenhuma outra rede por enquanto.
- Narto Junior é servidor público: nunca descrevê-lo como administrador, gestor, diretor
  ou "à frente" da empresa. A empresa é apresentada como a visão dele sobre o desenvolvimento de jogos.

## Imprensa e editais
- `imprensa/index.html` (português, completa, voltada também a editais) e `en/press/index.html` (inglês, enxuta).
  O link para elas fica no rodapé de todas as páginas.
- Estrutura no espírito do modelo presskit(): ficha técnica, descrição, história, atividades (CNAE, só em português),
  idealização, marca (arquivos, cores, tipografia) e contato.
- O catálogo de projetos em editais e a lista de eventos estão como `TODO(conteúdo)` na página em português.
  Só entram projetos e eventos reais.
- Os arquivos para download ficam em `assets/press/`. Ao trocar a logo, atualizar também o `.zip`.

## Compartilhamento (Open Graph)
- Cada página tem tags Open Graph e `canonical` com URLs absolutas e a imagem `assets/img/og-image.jpg` (1200×630).
- Domínio próprio: `https://inflaminghearts.com.br/` (arquivo `CNAME` na raiz, criado pelo GitHub Pages; não apagar).
  As URLs absolutas (Open Graph e canonical) usam esse domínio.

## SEO e descoberta
- `sitemap.xml` lista todas as páginas com as versões de idioma. **Ao criar uma página nova, adicioná-la ao sitemap**
  e atualizar o `<lastmod>`. `robots.txt` aponta para o sitemap.
- `hreflang` sempre com URLs completas, nos dois sentidos, mais `x-default` (versão em português).
- Dados estruturados (JSON-LD, schema.org `Organization` + `WebSite`) nas páginas iniciais em português e inglês.
  Se mudar nome, endereço, logo ou redes da empresa, atualizar também ali.
- Ícones em `assets/icons/` (gerados a partir do avatar), `site.webmanifest` e `meta theme-color` em todas as páginas.
- `404.html`: página de erro bilíngue, com caminhos absolutos (`/css/...`) e `noindex`.
- Cada página precisa de `<title>` e `<meta name="description">` próprios e específicos.

## Acessibilidade
- Texto sobre o fundo `#1B1F24`: usar apenas branco, turquesa, turquesa clara ou verde-água.
  `#145C4B` e `#0F3B52` são só para fundos e bordas.
- Toda imagem tem `alt` descritivo e correto.

## Fluxo de trabalho
- Nunca commitar direto na `main`: uma branch por tarefa e Pull Request para revisão.
- Mensagens de commit em português, no formato `tipo: descrição`
  (`feat`, `fix`, `style`, `docs`, `chore`).
- A versão antiga do repositório está preservada na branch `legado`.
