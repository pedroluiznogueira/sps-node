# SPS Node API
<hr>
<h2>Sumário desta Documentação</h2>
<ul>
  <li><a href="#rodando">Rodando o projeto na sua máquina</a></li>
  <li><a href="#config">Configuração do MongoDB</a></li>
  <li><a href="#rel">Relacionando sua conexão do MongoDB ao projeto</a></li>
  <li><a href="#doc">Documentação da API com Swagger UI</a></li>
  <li><a href="#contr">Como contribuir</a></li>
</ul>
<hr>

<div id="rodando"><div>
  
## Como rodar este projeto na sua máquina local

1. git clone https://github.com/pedroluiznogueira/sps-react.git
2. Abra o projeto clonado em sua IDE/Editor de texto de preferência
3. Abra a pasta do projeto no terminal
4. Digite "npm install" e aperte enter
5. Digite "node src/index.js" (se perguntado se deseja rodar o projeto em outra porta sem ser a <b>3000</b> digite <b>Y</b>)
<hr>
  
##  Configuração do MongoDB
<div id="config"><div>
-> Este projeto está configurado para persistir localmente em uma conexão com o <b>MongoDB</b> <br>
-> Caso precise instalar ele na sua máquina local acesse: <br>
1. <a href="https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/">Instalação do MongoDB</a><br>
2. <a href="https://robomongo.org//">Instalação do ROBO 3T (interface gráfica para o MongoDB, similar ao Workbench para o MySQL)</a><br>

-> Rodando o MongoDB no windows:

1. Abra o terminal e acesse a pasta <b>C:\Program Files\MongoDB\Server\5.0\bin</b> "5.0" refere-se à versão que você tem instalada
2. Digite <b>mongo</b> e aperte enter

-> Uma conexão será criada e aberta para o MongoDB <br>
-> Sua conexão aperecerá com algo deste tipo: <b>mongodb://127.0.0.1:27017</b>

-> Conectando o <b>Robo 3t</b> com seu Serviço do MongoDB

1. Abra o Robo 3T
2. Crie uma conexão, usando o caminho que o Mongo gerou ácima "mongodb://127.0.0.1:27017"
3. Em adress coloque o que aparece para você em: 127.0.0.1
4. Posteriormente ao ":" coloque a porta que aparece para você: 27017 (Provavelmente é a mesma pois é a padrão do Mongo)
<hr>
  
## Relacionando a conexão do Projeto à sua conexão do MongoDB local
  
<div id="rel"><div>
-> Abra a pasta <b>src/database</b> <br>
-> Em <b>index.js</b> dentro de <b>database</b> <br>
-> Altere a linha <b>3</b> com a sua conexão <br>
-> No final segue o nome do banco local que deseja criar <br>
<hr>
  
## Documentação da API podendo ser acessar no Swagger UI
<div id="doc"><div>
-> Após rodar a aplicação, acesse: <b>localhost:3000/api-docs</b> <br>
-> Lá você encontrará o mapeamento de todos os end-points da API <br>
-> A descriçaõ e detalhes da documentação da API no swagger <b>não está finalizada</b> <br>
-> As informações necessárias para uso e entendimento da API já estão contidas <br>
<hr>
  
## Contribuições
<div id="contr"><div>
-> Sinta-se livre para abrir contribuir para esse projeto seguindo os seguintes passos:

1. Dê <b>Fork</b> neste projeto
2. Faça suas mudanças e suba-às para o seu repositório forkeado
3. Abra um Pull Request para a branch <b>DEVELOPER</b> deste projeto
