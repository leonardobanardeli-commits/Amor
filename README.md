# 💌 Para o amor da minha vida — site romântico

Um presente digital: site estático (HTML + CSS + JS puro, sem backend),
pronto para publicar gratuitamente no **GitHub Pages**.

---

## 📁 Estrutura do projeto

```
/index.html              → estrutura da página
/style.css                → todo o visual (cores, animações, layout)
/script.js                 → toda a lógica (contador, galeria, player, carta...)
                             + área CONFIG para personalizar sem programar
/assets/images/            → suas fotos (foto1.jpg até foto6.jpg)
/assets/images/README.md   → como trocar as fotos
/assets/music/              → sua música (nossa-musica.mp3)
/assets/music/README.md    → como adicionar a música
/.github/workflows/deploy.yml → publica o site automaticamente a cada alteração
/README.md                 → este arquivo
```

---

## ✏️ Como personalizar (sem precisar programar)

Abra o arquivo **`script.js`** em qualquer editor de texto (até o Bloco de
Notas funciona) e edite apenas a parte no topo do arquivo, entre os
comentários `🔧 CONFIG — EDITE AQUI` e `FIM DA ÁREA DE CONFIGURAÇÃO`.
Lá você consegue trocar:

| O que trocar | Onde |
|---|---|
| Nome dela / seu nome | `nomeDela`, `meuNome` |
| Data de início do relacionamento | `dataInicio` (formato `"AAAA-MM-DDTHH:MM:SS"`) |
| Texto da carta de amor | `carta` |
| Frases da surpresa final | `surpresaLinha1`, `surpresaLinha2` |
| Linha do tempo "Como tudo começou" | lista `historia` |
| Fotos da galeria | lista `fotos` — veja também `assets/images/README.md` |
| Motivos "Por que eu amo você" | lista `motivos` |
| Música | `musica`, `nomeMusica` — veja também `assets/music/README.md` |

Você **não precisa mexer** em `index.html` nem em `style.css` para fazer
essas alterações — só se quiser mudar cores, fontes ou textos fixos de
título/seção.

### Fotos
Substitua os arquivos em `assets/images/` pelas suas fotos, mantendo os
mesmos nomes (`foto1.jpg`, `foto2.jpg`...) — ou edite a lista `fotos` no
`script.js` para usar outros nomes/quantidade. Detalhes em
[`assets/images/README.md`](assets/images/README.md).

### Música
Coloque um arquivo `.mp3` que você tenha autorização para usar em
`assets/music/nossa-musica.mp3`. Detalhes em
[`assets/music/README.md`](assets/music/README.md). O site funciona
normalmente mesmo sem a música adicionada.

---

## 🚀 Como publicar no GitHub Pages (passo a passo)

### 1. Criar uma conta no GitHub (se ainda não tiver)
Acesse [github.com](https://github.com) e crie uma conta gratuita.

### 2. Criar um novo repositório
1. Clique no botão **"+"** no canto superior direito → **New repository**.
2. Dê um nome, por exemplo: `presente-para-ela`.
3. Deixe marcado como **Public** (necessário para o GitHub Pages gratuito).
4. **Não** marque "Add a README file" (nós já temos um).
5. Clique em **Create repository**.

### 3. Enviar os arquivos do projeto

**Opção A — pelo navegador (mais simples, sem instalar nada):**
1. Na página do repositório recém-criado, clique em
   **"uploading an existing file"**.
2. Arraste todos os arquivos e pastas deste projeto para a área de upload
   (o `index.html`, `style.css`, `script.js`, a pasta `assets`, a pasta
   `.github` e o `README.md`).
3. Role para baixo e clique em **Commit changes**.

**Opção B — usando Git no terminal:**
```bash
cd caminho/para/o/projeto
git init
git add .
git commit -m "Primeiro presente digital"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/presente-para-ela.git
git push -u origin main
```

### 4. Ativar o GitHub Pages
1. No repositório, vá em **Settings** (aba no topo).
2. No menu lateral esquerdo, clique em **Pages**.
3. Em **Build and deployment → Source**, escolha uma das opções:
   - **GitHub Actions** — usa o workflow que já está em
     `.github/workflows/deploy.yml` (publica automaticamente a cada alteração).
   - **Deploy from a branch** — mais simples: escolha a branch `main` e a
     pasta `/ (root)`, depois clique em **Save**.
4. Aguarde 1–2 minutos.

### 5. Encontrar o link do site
Ainda na aba **Settings → Pages**, o GitHub mostra o link no topo, algo como:

```
https://SEU-USUARIO.github.io/presente-para-ela/
```

Esse é o link que você vai mandar para ela. 💌

### 6. Como atualizar fotos e textos depois
1. Vá até o arquivo que quer trocar (por exemplo `script.js` ou uma foto em
   `assets/images/`).
2. Clique no ícone de lápis (editar) no GitHub, ou, para fotos, clique em
   **Add file → Upload files** para substituir a imagem.
3. Clique em **Commit changes**.
4. O site atualiza sozinho em cerca de 1 minuto (se você ativou GitHub
   Actions) ou também de forma automática no modo "Deploy from a branch".

---

## ✅ Checklist do que já foi verificado neste projeto

- [x] Links internos e âncoras das seções
- [x] Caminhos das imagens (`assets/images/...`)
- [x] JavaScript sem dependências externas quebradas
- [x] Player de música com tratamento para bloqueio de autoplay
- [x] Contador de tempo com cálculo de anos/meses/dias/horas/min/seg
- [x] Botões e interações (galeria, lightbox, carta, surpresa)
- [x] Layout responsivo (celular, tablet, notebook, desktop)
- [x] Suporte a `prefers-reduced-motion` (menos animação se o usuário preferir)
- [x] Projeto 100% estático, sem backend, pronto para hospedagem estática

## ⚠️ Antes de publicar, não esqueça de:

1. Editar `dataInicio` em `script.js` com a data real de vocês.
2. Trocar `nomeDela` (e, se quiser, `meuNome`) em `script.js`.
3. Trocar as fotos em `assets/images/`.
4. Editar os textos da timeline (`historia`) e dos motivos (`motivos`).
5. (Opcional) Adicionar a música em `assets/music/nossa-musica.mp3`.

Feito isso, é só publicar e mandar o link. ❤️
