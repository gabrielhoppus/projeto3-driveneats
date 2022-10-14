function chooseFrango(){ 
  document.getElementById("checkmark_frango").classList.toggle('checkmark');  
  document.getElementById("checkmark_macarrao").classList.remove('checkmark');
  document.getElementById("checkmark_salada").classList.remove('checkmark');
  document.getElementById("checkmark_arroz").classList.remove('checkmark');
  document.getElementById("arroz").classList.remove('chosen');
  document.getElementById("macarrao").classList.remove('chosen'); 
  document.getElementById("salada").classList.remove('chosen');  
  document.getElementById("frango").classList.toggle('chosen'); 
}


function chooseArroz(){  
  document.getElementById("checkmark_arroz").classList.toggle('checkmark');
  document.getElementById("checkmark_frango").classList.remove('checkmark');
  document.getElementById("checkmark_macarrao").classList.remove('checkmark');
  document.getElementById("checkmark_salada").classList.remove('checkmark');
  document.getElementById("frango").classList.remove('chosen');
  document.getElementById("macarrao").classList.remove('chosen'); 
  document.getElementById("salada").classList.remove('chosen'); 
  document.getElementById("arroz").classList.toggle('chosen');  
}

function chooseMacarrao(){  
  document.getElementById("checkmark_macarrao").classList.toggle('checkmark');
  document.getElementById("checkmark_frango").classList.remove('checkmark');
  document.getElementById("checkmark_arroz").classList.remove('checkmark');
  document.getElementById("checkmark_salada").classList.remove('checkmark');
  document.getElementById("frango").classList.remove('chosen');
  document.getElementById("arroz").classList.remove('chosen'); 
  document.getElementById("salada").classList.remove('chosen'); 
  document.getElementById("macarrao").classList.toggle('chosen');
}

function chooseSalada(){
  document.getElementById("checkmark_salada").classList.toggle('checkmark');
  document.getElementById("checkmark_frango").classList.remove('checkmark');
  document.getElementById("checkmark_arroz").classList.remove('checkmark');
  document.getElementById("checkmark_macarrao").classList.remove('checkmark');  
  document.getElementById("frango").classList.remove('chosen');
  document.getElementById("arroz").classList.remove('chosen'); 
  document.getElementById("macarrao").classList.remove('chosen'); 
  document.getElementById("salada").classList.toggle('chosen');
}

function chooseCoca(){ 
  document.getElementById("checkmark_coca").classList.toggle('checkmark');  
  document.getElementById("checkmark_agua").classList.remove('checkmark');
  document.getElementById("checkmark_suco").classList.remove('checkmark');
  document.getElementById("checkmark_cha").classList.remove('checkmark');
  document.getElementById("suco").classList.remove('chosen');
  document.getElementById("agua").classList.remove('chosen'); 
  document.getElementById("cha").classList.remove('chosen');  
  document.getElementById("coca").classList.toggle('chosen'); 
}

function chooseCoca(){ 
  document.getElementById("checkmark_coca").classList.toggle('checkmark');  
  document.getElementById("checkmark_agua").classList.remove('checkmark');
  document.getElementById("checkmark_suco").classList.remove('checkmark');
  document.getElementById("checkmark_cha").classList.remove('checkmark');
  document.getElementById("suco").classList.remove('chosen');
  document.getElementById("agua").classList.remove('chosen'); 
  document.getElementById("cha").classList.remove('chosen');  
  document.getElementById("coca").classList.toggle('chosen'); 
}

function chooseCha(){ 
  document.getElementById("checkmark_cha").classList.toggle('checkmark');  
  document.getElementById("checkmark_agua").classList.remove('checkmark');
  document.getElementById("checkmark_suco").classList.remove('checkmark');
  document.getElementById("checkmark_coca").classList.remove('checkmark');
  document.getElementById("suco").classList.remove('chosen');
  document.getElementById("agua").classList.remove('chosen'); 
  document.getElementById("coca").classList.remove('chosen');  
  document.getElementById("cha").classList.toggle('chosen'); 
}

function chooseSuco(){ 
  document.getElementById("checkmark_suco").classList.toggle('checkmark');  
  document.getElementById("checkmark_agua").classList.remove('checkmark');
  document.getElementById("checkmark_cha").classList.remove('checkmark');
  document.getElementById("checkmark_coca").classList.remove('checkmark');
  document.getElementById("cha").classList.remove('chosen');
  document.getElementById("agua").classList.remove('chosen'); 
  document.getElementById("coca").classList.remove('chosen');  
  document.getElementById("suco").classList.toggle('chosen'); 
}

function chooseAgua(){ 
  document.getElementById("checkmark_agua").classList.toggle('checkmark');  
  document.getElementById("checkmark_suco").classList.remove('checkmark');
  document.getElementById("checkmark_cha").classList.remove('checkmark');
  document.getElementById("checkmark_coca").classList.remove('checkmark');
  document.getElementById("cha").classList.remove('chosen');
  document.getElementById("suco").classList.remove('chosen'); 
  document.getElementById("coca").classList.remove('chosen');  
  document.getElementById("agua").classList.toggle('chosen'); 
}

function choosePudim(){ 
  document.getElementById("checkmark_pudim").classList.toggle('checkmark');  
  document.getElementById("checkmark_mochi").classList.remove('checkmark');
  document.getElementById("checkmark_tart").classList.remove('checkmark');
  document.getElementById("checkmark_brownie").classList.remove('checkmark');
  document.getElementById("brownie").classList.remove('chosen');
  document.getElementById("tart").classList.remove('chosen'); 
  document.getElementById("mochi").classList.remove('chosen');  
  document.getElementById("pudim").classList.toggle('chosen'); 
}

function chooseMochi(){ 
  document.getElementById("checkmark_mochi").classList.toggle('checkmark');  
  document.getElementById("checkmark_pudim").classList.remove('checkmark');
  document.getElementById("checkmark_tart").classList.remove('checkmark');
  document.getElementById("checkmark_brownie").classList.remove('checkmark');
  document.getElementById("brownie").classList.remove('chosen');
  document.getElementById("tart").classList.remove('chosen'); 
  document.getElementById("pudim").classList.remove('chosen');  
  document.getElementById("mochi").classList.toggle('chosen'); 
}

function chooseTart(){ 
  document.getElementById("checkmark_tart").classList.toggle('checkmark');  
  document.getElementById("checkmark_pudim").classList.remove('checkmark');
  document.getElementById("checkmark_mochi").classList.remove('checkmark');
  document.getElementById("checkmark_brownie").classList.remove('checkmark');
  document.getElementById("brownie").classList.remove('chosen');
  document.getElementById("mochi").classList.remove('chosen'); 
  document.getElementById("pudim").classList.remove('chosen');  
  document.getElementById("tart").classList.toggle('chosen'); 
}

function chooseBrownie(){ 
  document.getElementById("checkmark_brownie").classList.toggle('checkmark');  
  document.getElementById("checkmark_pudim").classList.remove('checkmark');
  document.getElementById("checkmark_mochi").classList.remove('checkmark');
  document.getElementById("checkmark_tart").classList.remove('checkmark');
  document.getElementById("tart").classList.remove('chosen');
  document.getElementById("mochi").classList.remove('chosen'); 
  document.getElementById("pudim").classList.remove('chosen');  
  document.getElementById("brownie").classList.toggle('chosen'); 
}


