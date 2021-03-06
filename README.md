<h1 align="center">
    Desafio Backend e Frontend
</h1>

<h4 align="left">
No desafio proposto, foi desenvolvido uma api aonde cadastra profissional e tipo de profissional utilizando banco de dados sqlite3. Para desenvolver utilizei framework typescript pela facilidada da tipagem, banco  de dados sqlite3 e no densenvolvimento front-end foi usado a seguinte tecnologias para criar o projeto, next.js com typescript, estilizado com css e usei axios para auxliar na conexão com a api.
</h4>

<p align="center">
  <a href="#rocket-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#information_source-como-usar">Como Usar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-license">Licença</a>
</p>

<h4 align="left">
  Imagens do Frontend.
</h4>

<a href="https://imgur.com/7DO7uYq"><img src="https://i.imgur.com/7DO7uYq.png" title="source: imgur.com" /></a>

<h4 align="left">
   Imagens da Backend.
</h4>

<a href="https://imgur.com/XNCnrV6"><img src="https://i.imgur.com/XNCnrV6.png" title="source: imgur.com" /></a>
<a href="https://imgur.com/v7RjRHy"><img src="https://i.imgur.com/v7RjRHy.png" title="source: imgur.com" /></a>

<h4 align="left">
  Imagens do banco de dados sqlite3.
</h4>

<a href="https://imgur.com/3eiQPzP"><img src="https://i.imgur.com/3eiQPzP.png" title="source: imgur.com" /></a>
<a href="https://imgur.com/7sPzt2x"><img src="https://i.imgur.com/7sPzt2x.png" title="source: imgur.com" /></a>

## :rocket: Tecnologias usadas no desenvolvimento;

### Tecnologias do Backend :earth_americas:
No frontend optamos por usar as tecnologais descritas abaixo, diferente de tudo que usei em outros api que desenvolvi e participei como desenvolver foi a framework typescript. Ainda não tinha usado no backend como denseolvimento e claro que não utilizei quase nada do que é proposto pela tecnologia.

-  [Nodejs](https://nodejs.org/en/)
-  [Typeorm](https://typeorm.io/#/)
-  [Sqlite3](https://www.sqlite.org/index.html)
-  [Express](https://expressjs.com/pt-br/)
-  [Typescript](https://www.typescriptlang.org/)
-  [prettier](https://prettier.io/)
-  [UUID](https://www.uuidgenerator.net/)
-  [Cors](https://demoiselle.gitbooks.io/documentacao-jee/content/cors.html)

### Tecnologias do Frontend :computer:
No frontend optamos por usar as tecnologais descritas abaixo, pela expressivida e facilidade do uso e da configuração do mesmo, para criar toda a estrutura do projeto usamos o NextJs, apos excluirmos arquivos desnecessarios, iniciamos as primeiras configuração, apos configuração pronto, instamos o typescript + react js como ferramenta do visual, para estizarmos utilizamos CSS e para conectar o frontend com o backend utilizamos a biblioteca axios.

-  [ReactJS](https://reactjs.org/)
-  [Typescript](https://www.typescriptlang.org/)
-  [HTML](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
-  [CSS](https://developer.mozilla.org/pt-BR/docs/Web/CSS/)
-  [Axios](https://github.com/axios/axios)
-  [NextJs](https://nextjs.org/)

## :information_source: Como usar

### Backend :earth_americas:
Para clonar e executar esta aplicação Backend, você precisa ter instalado em seu computador [Git](https://git-scm.com) e [Yarn](https://yarnpkg.com/) e segui comandos logo abaixo:

```bash
# Clone this repository
$ git clone https://github.com/SilvaneiMartins/desafio/maxxidata-api

# Go into the repository
$ cd maxxidata-api

# Instala as dependencies do projeto
$ yarn install

# Executar a api
$ yarn dev
```

### Configurar DB Sqlite3 :earth_americas:
```bash
# Criar uma Migrations
# Caso voce queira implementar
$ yarn typeorm migration:create -n CreateProfissional
$ yarn typeorm migration:create -n CreateTipoProfissional

# Rodar a Migration
# Caso não queira implementar, só rodar as migration;
$ yarn typeorm migration:run
```

### Frontend :computer:
Para clonar e executar esta aplicação Frondend, você precisa ter instalado em seu computador [Git](https://git-scm.com) e [Yarn](https://yarnpkg.com/) e segui comandos logo abaixo:

```bash
# Clonar repositorio
$ git clone https://github.com/SilvaneiMartins/desafio/maxxidata-web

# Acessar pasta clonada
$ cd maxxidata-web

# Install dependencies do projeto
$ yarn install

# Executar o projeto
$ yarn dev
```

## :memo: License
Este desafio está sob a licença MIT. Veja o [LICENSE](https://github.com/SilvaneiMartins/desafio/blob/master/LICENSE) for more information.

---

## 👩 Informação do Desenvolvedor
Desenvolvedor: Silvanei Martins<br>
Telegram: +55 (69) 9.8405-2620 <br>
Email: silvaneimartins_rcc@hotmail.com<br>
Site pessoal: <a href="https://silvaneimartins.com.br/">Silvanei Martins</a><br>

### 🤜🤛 Com amor é outro nível ❤
```js
{
    "Amor": Tendo amor pelo que faz, te leva para outro nível.
}
```
