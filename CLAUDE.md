# Site da Inflaming Hearts — regras do projeto

Site institucional da INFLAMING HEARTS SOFTWARE, ENTRETENIMENTO E EDUCACAO LTDA.
Publicado via GitHub Pages.

## Tecnologia
- HTML e CSS puros. Sem frameworks, sem etapa de build.
- JavaScript só se for realmente necessário, em `js/`.
  Hoje existe só `js/ano.js` (ano do rodapé). O site deve funcionar sem JavaScript.
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

## Compartilhamento (Open Graph)
- Cada página tem tags Open Graph e `canonical` com URLs absolutas e a imagem `assets/img/og-image.jpg` (1200×630).
- Quando o domínio próprio estiver ativo, trocar `https://inflaminghearts.github.io/homepage/` pelo novo endereço
  em todas as páginas (procurar por `TODO(domínio)`).

## Acessibilidade
- Texto sobre o fundo `#1B1F24`: usar apenas branco, turquesa, turquesa clara ou verde-água.
  `#145C4B` e `#0F3B52` são só para fundos e bordas.
- Toda imagem tem `alt` descritivo e correto.

## Fluxo de trabalho
- Nunca commitar direto na `main`: uma branch por tarefa e Pull Request para revisão.
- Mensagens de commit em português, no formato `tipo: descrição`
  (`feat`, `fix`, `style`, `docs`, `chore`).
- A versão antiga do repositório está preservada na branch `legado`.
