# projeto node js padrão mvc acessando dados de uma api
[nodejs_mvc_apiaccess_template](https://github.com/logicinfocursos/nodejs_mvc_apiaccess_template.git)
[github](https://github.com/logicinfocursos?tab=repositories)

Esse projeto visa mostrar como usar a estrutura mvc em um projeto que acessa dados de uma api através do [axios](https://axios-http.com/docs/intro) e usa o template engine [ejs](https://ejs.co/#promo) para exibir as telas deixando o html "interativo".

O código ainda não está completo, para um crud completo é necessário ainda implementar a edição e exclusão, enquanto eu não concluir o projeto, que tal ter essas funcionalidades como um desafio pra você?

Ao contrário do que muitos pensam, ao usar um template engine (estamos usando o [ejs](https://ejs.co/#promo)), é possível criar um projeto full stack em [node js](https://nodejs.org/en) , pois conseguimos criar a aplicação web, a api e o backend usando uma única linguagem, o javascript.

Outro ponto importante é que o [ejs](https://ejs.co/#promo) é um template engine muito fácil de implementar, você não precisa gastar horas para aprender. Outro template engine bem utilizado é o [handlebars](https://handlebarsjs.com/), ele tem uma série de recursos interessantes, mas consequentemente a sua curva de aprendizagem é maior.

Nesse projeto também usamos o [bootstrap](https://getbootstrap.com/) que é o framework css mais usado, mas existem várias outra opções.

Se adicionarmos ainda bibliotecas [node js](https://nodejs.org/en) como [react](https://pt-br.legacy.reactjs.org/), [vue](https://vuejs.org/), [svelte](https://svelte.dev/), [angular](https://angularjs.org/), o poder do [node js](https://nodejs.org/en) é catapultado. Ainda existem soluções node para criar apps para celulares também usando [javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript), vide o [react native](https://reactnative.dev/).

Espero que esse código possa ser usado para você como uma espécie de template ou skeleton "coringa" como um ponto de partida para os seus próximos projetos.

# telas do projeto
<img src="https://logicinfo.com.br/assets/images/postedingithub/productList.jpg">
<small>tela com a lista de registros obtidos na api</small>
<br/>
<br/>

<img src="https://logicinfo.com.br/assets/images/postedingithub/producView.jpg">
<small>tela de consulta</small>
<br/>
<br/>

<img src="https://logicinfo.com.br/assets/images/postedingithub/productAdd.jpg">
<small>criar novo produto</small>
<br/>
<br/>

### árvore de diretórios do projeto
<pre>
.
├── .env
├── package.json
└── src
    ├── controllers
    │   └── home.controller.js
    ├── models
    │   ├── entities
    │   │   ├── category.entity.js
    │   │   └── product.entity.js
    │   └── repositories
    │       ├── base.repository.js
    │       └── categories.repository.js
    ├── public
    │   ├── scripts
    │   │   └── script.js
    │   └── styles
    │       └── style.css
    ├── routes
    │   └── router.js
    ├── services
    │   ├── api
    │   │   ├── api.js
    │   │   ├── apiDELETE.js
    │   │   └── apiPOST.js
    │   └── apiGET.js
    ├── views
    │   ├── components
    │   │   ├── forms.ejs
    │   │   ├── headPage.ejs
    │   │   ├── HTMLFOOTER.ejs
    │   │   └── HTMLHEADER.ejs
    │   ├── products
    │   │   ├── add.ejs
    │   │   └── view.ejs
    │   └── index.ejs
    └── index.js
</pre>

### arquivos do projeto
<pre>
src\controllers\home.controller.js
src\models\entities\category.entity.js
src\models\entities\product.entity.js
src\models\repositories\base.repository.js
src\models\repositories\categories.repository.js
src\public\styles\style.css
src\public\scripts\script.js
src\routes\router.js
src\services\api\api.js
src\services\api\apiDELETE.js
src\services\apiGET.js
src\services\api\apiPOST.js
src\views\components\forms.ejs
src\views\components\headPage.ejs
src\views\components\HTMLFOOTER.ejs
src\views\components\HTMLHEADER.ejs
src\views\products\add.ejs
src\views\index.ejs
src\views\products\view.ejs
src\index.js
package.json
.env
</pre>
### criar o projeto node js
inicializar o projeto:

<pre>
c:\> mkdir apiacess
c:\> cd nodemvc
c:\nodemvc> npm init -y
</pre>

Isso criará um arquivo package.json na raiz do seu projeto.

### instalar as dependências iniciais do projeto
<pre>
c:\nodemvc> npm i express dotenv axios ejs
c:\nodemvc> npm i --save-dev nodemon
</pre>

onde:
- [express](https://expressjs.com/): responsável pela por enviar e receber requisições http e orquestra as rotas do projeto

- [ejs](https://ejs.co/): é o que template engine e será a forma como conseguiremos deixar os nossos arquivos .html dinâmicos, inserindo código javascript(node)

- [axios](https://axios-http.com/): plugin para acesso a endpoints (até onde eu sei, o axios é o plugin mais usado em projetos node js, principalmente em projetos react js)

- [dotenv](https://www.npmjs.com/package/dotenv): irá permitir ler os dados das variáveis de ambiente armazenadas no arquivo ".env"

- [nodemon](https://nodemon.io/): recurso muito útil durante a faze de programação, com ele toda a vez que alterações de código forem salvas, o servidor local será restartado para refletir tais as atualizações

obs.: o uso do parametro --save-dev no npm fará que as dependências assim identificadas sejam configuradas como depências de desenvolvimento, sendo descartadas para o uso em produção

### npm x yarn
nesse tutorial iremos usar o gerenciador de pacotes do próprio nodejs, o npm (e o npx), mas se preferir usar o yarn, fica a seu critério.

como ajustar a sintaxe?
<pre>
npm init -y               | yarn init -y        (inicializar um projeto nodejs)
npm i express             | yarn add express    (instalar uma dependência)
npm i --save-dev nodemon  | yarn add -D nodemon (instalar uma dependência como dev)
npm run dev               | yarn dev            (executar o script)
npm i                     | yarn                (criar o node_modules)
</pre>
para instalar o yarn:
<pre>
npm i -g yarn
</pre>
obs sobre variações no uso do npm:
- em nosso projeto iremos usar o express que é o framework (ou mini-framework) mais usado em projetos node js
- no lugar de "npm install --save-dev", você pode usar "npm install -D" e no lugar de "install" você pode usar some "i"

### antes de "rodar" o projeto
teremos que fazer um ajuste no arquivo "package.json", vamos inserir a seguinte instrução:

<pre>
  "type": "module",
  "scripts": {
    "start": "node --no-warnings ./src/index.js",
    "dev": "nodemon --no-warnings ./src/index.js "
  }
</pre>

onde:
- "type": "module" indicará ao nodejs que será usada a sintaxe mais atual do javascript, permitindo o uso de "import/export"

- "scripts": o projeto terá duas formas de execução: "start" - execução padrão e "dev" - através do nodemon


### executar o projeto
<pre>
c:\nodemvc> npm run dev
</pre>

no terminal teremos um resultado semelhante a esse:
<pre>
> api@1.0.0 dev
> nodemon --no-warnings ./src/index.js

[nodemon] 3.1.3
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,cjs,json
[nodemon] starting `node --no-warnings ./src/index.js`

</pre>

se tudo der certo e a consulta ao endpoint usado trouxer algum resultado, o projeto está pronto

# baixando o projeto no github

download do código:[nodejs_apiGet_example](https://github.com/logicinfocursos/nodejs_apiGet_example.git): [https://github.com/logicinfocursos/nodejs_apiGet_example.git](https://github.com/logicinfocursos/nodejs_apiGet_example.git)

ao clonar o projeto ou baixar o arquivo .zip, não se esqueça de gerar a pasta node_modules para obter os plugins usados no projeto, para tanto digitar no terminal:
<pre>
c:\nodemvc> npm i
</pre>


# referências
- [node](https://nodejs.org/en)
- [javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [ejs](https://ejs.co/#promo)
- [axios](https://axios-http.com/)
- [express](https://expressjs.com/en/starter/hello-world.html)
- [typescript](https://www.typescriptlang.org/docs/)
- [bootstrap](https://getbootstrap.com/)
- [nodemon](https://www.npmjs.com/package/nodemon)
- [vscode](https://code.visualstudio.com/download)
- [postman](https://www.postman.com/downloads/)
- [insomnia](https://insomnia.rest/download)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/)

### plugins vscode
- [live server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
- [prettier - code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [thunder client](https://marketplace.visualstudio.com/items?itemName=rangav.vscode-thunder-client)

# sobre a logicinfo

Somos uma consultoria em T.I. e atuamos com desenvolvimento de aplicações para todos os segumentos e mantemos também uma estrutura de treinamento com as melhores soluções para o aprendizado em programação.

Alguns de nossos serviços:

- desenvolvimento de aplicações mobile, web e desktop
- I.A. Generativa - tenha um I.A. focada em seu negócio, atendendo os seus clientes e fornecedores por whatsapp, chat e U.R.A.

Visite o nosso site:
[logicinfo.com.br](https://logicinfo.com.br)

Fale consoco:
whatsapp: [11 9 8627 4173](11-9-8627-4173)
e-mail: [contato@logicinfo.com.br](contato@logicinfo.com.br)
