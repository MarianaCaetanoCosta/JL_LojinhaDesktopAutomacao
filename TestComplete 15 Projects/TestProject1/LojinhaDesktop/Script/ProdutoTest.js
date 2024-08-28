﻿var LoginTela = require("LoginTela");
var ListaProdutosTela = require("ListaProdutosTela");
var NovoProdutoTela = require("NovoProdutoTela");
var MensagemTela = require("MensagemTela");
var FormularioPrincipalTela = require("FormularioPrincipalTela");

function testValidaValorZeroDoProduto(){
  LoginTela.abrirLojinha();
  ListaProdutosTela.login("admin", "admin");
  NovoProdutoTela.abrirNovoProduto();
  NovoProdutoTela.submeterNovoProdutoComErro("Macbook", "000", "preto, vermelho");
  MensagemTela.validarMensagemErro();
  MensagemTela.fecharMensagemErro();
  FormularioPrincipalTela.fecharLojinha();
}

function testValidaValorSeteMilEUmDoProduto(){
  LoginTela.abrirLojinha();
  ListaProdutosTela.login("admin", "admin");
  NovoProdutoTela.abrirNovoProduto();
  NovoProdutoTela.submeterNovoProdutoComErro("Macbook", "700001", "preto, vermelho");
  MensagemTela.validarMensagemErro();
  MensagemTela.fecharMensagemErro();
  FormularioPrincipalTela.fecharLojinha();
}

//function Test1()
//{ 
//  let lojinha = Aliases.Lojinha;
//  let tfrmPrincipal = lojinha.frmPrincipal;
//  let pageControl = tfrmPrincipal.PageControl1;
//  pageControl.ClickTab("LOGIN");
//  let tabSheet = pageControl.TabSheet1;
//  let edit = tabSheet.edtUsuario;
//  edit.Click(16, 12);
//  edit.SetText("admin");
//  edit = tabSheet.edtSenha;
//  edit.Click(27, 11);
//  edit.SetText(Project.Variables.Password1);
//  tabSheet.btnEntrar.ClickButton();
//  pageControl.TabSheet2.Panel3.btnNovoProduto.ClickButton();
//  let panel = pageControl.TabSheet3.Panel6;
//  edit = panel.edtNovoNomeProduto;
//  edit.Click(109, 8);
//  edit.SetText("Macbook");
//  edit = panel.edtNovoValorProduto;
//  edit.Click(58, 6);
//  edit.SetText("0,00");
//  edit = panel.edtNovoCoresProduto;
//  edit.Click(20, 8);
//  edit.SetText("preto, vermelho");
//  panel.btnSalvarProduto.ClickButton();
//  aqObject.CheckProperty(Aliases.Lojinha.dlgLojinha.Static, "WndCaption", cmpEqual, "O valor do produto deve estar entre R$ 0,01 e R$ 7.000,00.");
//  lojinha.dlgLojinha.btnOK.ClickButton();
//  panel.btnListaProdutos.ClickButton();
//  tfrmPrincipal.Close();
//}