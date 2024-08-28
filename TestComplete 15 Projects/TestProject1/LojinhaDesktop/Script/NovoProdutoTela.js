﻿function submeterNovoProdutoComErro(nome, valor, cores){
  let formularioProduto = Aliases.Lojinha.frmPrincipal.CorpoLojinha.FormularioAdicaoProduto.PainelFormularioDireito;
  formularioProduto.edtNovoNomeProduto.SetText(nome);
  formularioProduto.edtNovoValorProduto.SetText(valor);
  formularioProduto.edtNovoCoresProduto.SetText(cores)
  //Salvar Produto
  formularioProduto.btnSalvarProduto.Click();
}
module.exports.submeterNovoProdutoComErro = submeterNovoProdutoComErro;