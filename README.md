# Inflaming Hearts — homepage

Site institucional da Inflaming Hearts: jogos autorais, outsourcing e formação.

## Estrutura

```
homepage/
├── index.html        Site em português: Início, O que fazemos, Sobre, Contato
├── imprensa/
│   └── index.html    Imprensa e editais (ficha técnica, CNAEs, marca)
├── en/
│   ├── index.html    Versão em inglês, enxuta (jogos e co-dev)
│   └── press/
│       └── index.html  Press kit em inglês
├── css/
│   └── style.css     Estilos (variáveis de cor e fonte no topo)
├── assets/
│   ├── img/          Logo, fotos e imagens do site
│   ├── icons/        Favicon e ícones
│   └── press/        Arquivos de marca para download
├── js/
│   └── ano.js        Ano automático no rodapé
├── CLAUDE.md         Regras do projeto (lidas pelo Claude)
└── .nojekyll         Faz o GitHub Pages publicar os arquivos como estão
```

## Ver o site no seu computador

Abra o `index.html` no navegador. Não há build nem instalação.

## Como contribuir

1. Crie uma branch para a tarefa.
2. Faça commits pequenos, em português (`feat: adiciona seção de contato`).
3. Abra um Pull Request para revisão antes de juntar na `main`.

A versão anterior do repositório está na branch `legado`.
