
<html language="pt-br">
  <head>
    <meta charset='utf-8' />
    <title>Página inicial</title>
    <link rel="stylesheet" type="text/css" href="css.css">
  </head>
  <body>
    <div id="container-heade">
      <div id="heade">
        <div id="titulo">
          <a href="/" class="ancora"><b>SchoolBuddy</b></a>
        </div> 

        <div id="login-area">
          <% if(locals.usuario){ %>
            <a href="/agenda" class="ancora-cab">Agenda</a>
            <a href="/horarios" class="ancora-cab">Horarios</a>
            <a href="/pomodoro" class="ancora-cab">Pomodoro</a>&nbsp&nbsp
            <button class="entrar" id="logout"><b><a href="/logout" class="entrar">Deslogar</a></b></button>
          
          <% }else{%>
            <a href="/cadastro" class="ancora-cab">Cadastrar</a>
            <button class="entrar"><b><a href="/login" class="entrar">Entrar</a></b></button>&nbsp;&nbsp;&nbsp;
          <% } %>
        </div>

      </div>
      <div id="barra">
        <div id="card-barra">
        <p>Olá, bem vindo ao SchoolBuddy, aqui você poderá fazer uso de uma agenda escolar totalmente online e gratuita. Através dessa ferramenta é possivel salvar eventos que ocorrem durente o decorrer do ano através de uma calendario personalizavel, também é possivel criar uma tabela de horarios da qual o usuario pode organizar suas materias escolares da semena. </p>
        </div>
        <% if(locals.usuario){ %>
          
        <% }else{%>
          <div id="seta">
            <img src="imagens/seta.gif" id="imgSeta">
            <p id="cadSeta">Cadastre-se já</p>
          </div>
        <% } %>
      </div>
    </div>
    </br></br></br></br>
    </br></br></br>
    
    <center><img src="/imagens/infoT.png" width="300px" height="120px" id="img-info"><center>

    </br></br></br>
    </br></br>

    <div class="card-container1">
        <div class="card-texto1">
          <h1>Funcionalidades</h1>
          <p>Para fazer uso de nossas ferramentas é necessario que o usuario possua uma conta e esteja logado, após isso ele tera acesso ao nosso calendario escolar, onde pederá armazenar os eventos ao decorrer do ano, e também nossa tabela de horarios para salvar as aulas da semana.</p>
        </div>
        <div class="card-img1">
        </div>
    </div>

    </br></br></br>
     </br></br></br>

    <div class="card-container2">
        <div class="card-img2">
        </div>
        <div class="card-texto2">
          <h1>SchoolBuddy e o meio ambiente</h1>
          <p>Por nossa plataforma ser totalmente online acabamos por ajudar o meio ambiente ja que fazemos com que nossos usuarios deixem de fazer uso de agendas convencionais o que resulta em um gasto de papel muito menor.</p>
        </div>
        <div class="card-img2">
        </div>
    </div>    

    </br></br></br>
     </br></br></br>

    <div id="container-duo">
      <div class="card-container4">
        <div class="card-texto4">
          <center><h1>Contato</h1></center>
          <p>Se caso você encontrar algum problema ou estaja com alguma dificuldade de mexer em nossa plataforma basta descer até o rodapé e ira encontrar uma area de contato, escolha a forma que lhe for mais conveniente e entre e contato conosco para que possamos lhe ajudar.</p>
        </div>
        <div class="card-img4">
        </div>
      </div>

      <div class="card-container5">
        <div class="card-texto5">
          <center><h1>Desenvolvedores</h1></center></br>
          <p>Sendo uma plataforma elaborada pelos alunos Matheus Medeiros e Rodrigo Carlos da escola Etec Bartolomeu Bueno da Silva, este site é um projeto que foi utilizado como metododo de avalição de um trabalho de conclusão de curso. </p>
        </div>
        <div class="card-img5">
        </div>
      </div>
    </div>
    
    </br></br></br>
    </br></br>

    <footer>
      <div id="rodape-info">
        <div id="div-logo" class="box">
            </br>
          <a href="/" class="ancora-agenda"><b>SchoolBuddy</b></a>
        </div>
        <div id="div-inicio" class="box">
          <h4>Início</h4>
          <a href="/" class="ancora">Home</a></br>
          <a href="#" class="ancora">Perfil</a>
        </div>
        <div id="div-sobre" class="box">
          <h4>Sobre</h4>
          <a href="#img-info" class="ancora">Informações</a></br>
          <a href="/contato" class="ancora">Contato</a></br>
        </div>
        <div id="div-suporte" class="box">
          <h4>Suporte</h4>
          <a href="#tel" class="ancora" id="tel" title="(11)997199728">Telefone</a></br>
          <a href="https://discord.gg/YX9z2SZ6" class="ancora">Chat</a></br>
          <a href="#" class="ancora">Redes Sociais</a>
        </div>
      </div>

      <div id="rodape-contato">
        <div id="copy">
        &copy;CopyRight/SchoolBuddy
        </div>
        <div id="quadro-icon">
          <a href="#"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAABg0lEQVRIie2UOzMDYRSGn/NFZlxiQ1ZKo1SGwl9A4wco/AqNVqEyRqM0o8cfMCONUbnMUKZiMAqza3cTGpI9CpJJMtm1Kzre6ptzed7znb3Av76RdAdc153UTHYbdB4YTcipgZbVmLWiZVUiDT7hA1dA4YcDe9Kol2zbvm8GTHv2c/LE8DdFroFj4AJ4BcY1k91qLxro7NH5JGRBTyQMVwqFwl0z5vjBGTAHuhBjkGjnL+F7drlYHHmMyFtxBgmkl034k+fNGmPWUYaA6V7V6Q1EbltHY1ZQluLKTVyyp1TDlkFI5rvyNDfYEPRa224QEu5lkFMARXbp2j90fQeOH2gUXYRFO58/6pW7UR0cDaqvfG1kYizf4qZfUQ/larWpKFZiA1UOHT94drxgpxlzfX/T8YNnCfU8qi/NM8gBIDrcMkWGgfG4pl9ZURqD2i8wgxgDLfdLV+h40zr/psasAV4ffNc06quRBkXLqkijXgI5AKopwFWFfWnUZ2zbfuhjwL+oD2RBfOwiTYJFAAAAAElFTkSuQmCC" class="icon"></a>
          <a href="#"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAB10lEQVRIie2US3LTQBCGv54QscCxpoi8gGtg2LAJa0xxAzhDvCAUoaCKhyvemEPkAlCYC5AdTo6BN4iKZEM5VRbTLESCJI8f8Tr/Sv36/57p1sAVlkB8zvh09BhxuyBN4MYSjt8gA3X0Gjfrn5cKxMnoAHRvzX47ka3vzxXIO9ePl6Y1cl8yjDN6pEYeNer1/nnMlDPd7mXJASTDZP+aFUe7GDOV1Dt+Bj6pmp3sbFLLziY1VfcA4eK+ndEjY/RrbmmzXFpAnKQ6y67PI2u7Pt04SV6AvK/6Ixte8JpqsNp5ZG1XVYM4SbrxaTqM0/R7nIwOVDWIrO2g9BdRLBRQZz4A/EzHb0CeIdxCuQ26l/tAcb31BaaTk/xDn3iiTwHIsuO1BQpZvtn8ATDGeH/WlQRkczPfCJVDT+khgG5sNGdjqwoY0wbYDrdegXQRhghDkO52uPUaQFTaCzmKxpw13Y+s7fiK4zR9ifK26i+uaVVgDNRmNegrrqfT6QDABME9UWmr8NCjO45sWD83rlUOdAy6M1MitATTkuD6f825o5VB0SrNQB0Ld3oVqGiJoySQv+five/V2HnXCMMvRZf3oD9Go1b+KupdfDMp4xfINxXtVcmvsBL+AmgtrijZaFl5AAAAAElFTkSuQmCC" class="icon"/></a>
          <a href="https://discord.gg/YX9z2SZ6"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAACgklEQVRIie2VPUxTYRSGn/Pd29YKXuCWViIjMZqIixo1Jhhn46aLA8FFVBJN/F0NMomJmrgYdTA6ODlqwmgwxkUdmPyLAwmpty39QQUt/Y5De7HKRYgy8k4nb877nvOd7w/W8L+YnNRkNptt+ZPPZrMtk5OaXE4vUeT09EyvmtoxRQ6iqIjcSLV795pzcqXScUHOAqLCU6fm3Pf91om/FlDVeKFcuQkMCPLQGq6bqsTUtQcUesSSAVBDIPBB5s0zG9OqsZxTtB94kGrzzohINfR0mwsUyuXzIKdU5QJGP4vVx+pIL9ropNGOaKMhxyJWJ6zIVVQ+CjpaKM98AkYXrSCXy22QWHwKaF1ursugMj83u6mrq+srgAlZ4yaOrII5gOcmkocXfMNAhf5VMK9DZGAhBAiCoNXEE9NAbJVKzNsf3zsymcwXA2Di8b1LmL9SI1uslf0K+ZBUyBsrfWpkK/AmQueaeHwPNEakKn1RbaiV4bTnvcv43rggd0NekDu+7z1Pe95bVIYjtQ3P+gqEXVFJxth1v0xtPDIWm4jSCuyExj1Q6InsAhkJpitZx9iNigw28YOFUullzZpA0ZEoLVL3FIB8qVwC2iIT/x3FzvY2Pzym6xcKC+OgQ82bugLkQIfq2gW0QHgPlNshq8puwLeu06voSWAMmFvsqbPAmKInaq6zHfAbWpo9pW6qJl+qXBbRiyDhExwgPKIau5ZKJbPFYrG7ZkwngKnVcr7vTxUKs1041UsIR4F0WFhVRjvbvSsiYn97TfP5b92486cRPYSyDXhdbPP2bRb5HjWX96qJjnLlBbADdALME606t9LplqllhxoEQetKPpSlPqQ1rBg/AVRV+uGlsMhMAAAAAElFTkSuQmCC" class="icon"/></a>
        </div>
      </div>

    </footer>
  </body>
</html>
