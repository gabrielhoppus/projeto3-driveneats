let payout_button = document.querySelector("button");
payout_button.disabled = true;
let selected_food, selected_drink, selected_dessert;


function chooseFood(food){
  const select_food = document.querySelector(".food_chosen");

  if (select_food !== null){
    select_food.classList.remove("food_chosen")
  }
    food.classList.add("food_chosen"); 

    selected_food = food.innerHTML;
    activatePayout()     
}

function chooseDrink(drink){
  const select_drink = document.querySelector(".drink_chosen");

  if (select_drink !== null){
    select_drink.classList.remove("drink_chosen")
  }
    drink.classList.add("drink_chosen");  

    selected_drink = drink.innerHTML;
    activatePayout()
}

function chooseDessert(dessert){
  const select_dessert = document.querySelector(".dessert_chosen");

  if (select_dessert !== null){
    select_dessert.classList.remove("dessert_chosen")
  }
    dessert.classList.add("dessert_chosen");  

    selected_dessert = dessert.innerHTML;
    activatePayout()
}

function activatePayout(){
  if (selected_food !== undefined && 
      selected_drink !== undefined &&
      selected_dessert !== undefined){
        const payout_text = document.querySelector("button>a");
        payout_button.disabled = false
        payout_button.classList.add("payout")
        payout_text.innerHTML = "Fechar pedido"
      }
}

function messageOrder(){
  const food = (document.querySelector(".food_chosen>h1")).innerHTML;
  const drink = (document.querySelector(".drink_chosen>h1")).innerHTML;
  const dessert = (document.querySelector(".dessert_chosen>h1")).innerHTML;
  let order_total = 0
  let price_food = (document.querySelector(".food_chosen>h3")).innerHTML.replace("R$ ", "");
  let price_drink = (document.querySelector(".drink_chosen>h3")).innerHTML.replace("R$ ", "");
  let price_dessert = (document.querySelector(".dessert_chosen>h3")).innerHTML.replace("R$ ", "");
  price_food = price_food.replace(",", ".");
  price_drink = price_drink.replace(",", ".");
  price_dessert = price_dessert.replace(",", ".");

  order_total = Number(price_food) + 
                Number(price_drink) + 
                Number(price_dessert);

  const mensagem = `Olá, gostaria de fazer o pedido: \n- Prato: ${food} \n- Bebida: ${drink} \n - Sobremesa: ${dessert} \n Total: R$ ${order_total.toFixed(2)}`;

  const menscod = encodeURIComponent(mensagem);
  window.open("https://wa.me/5521975490141?text=" + menscod, '_blank');
}
