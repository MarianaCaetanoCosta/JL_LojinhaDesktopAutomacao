﻿function abrirLojinha(){
   TestedApps.Lojinha.Run();
}

function login(usuario, senha){
  //Clicando na aba Login
  Aliases.Lojinha.frmPrincipal.CorpoLojinha.FormularioLogin.ClickTab("LOGIN");
  
  // Preenchendo o formulário de Login
  let formularioLogin = Aliases.Lojinha.frmPrincipal.CorpoLojinha.FormularioLogin;
  formularioLogin.edtUsuario.SetText(usuario);
  formularioLogin.edtSenha.SetText(senha);
  formularioLogin.btnEntrar.Click();
}
module.exports.abrirLojinha = abrirLojinha;
module.exports.login = login;