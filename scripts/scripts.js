let payout_button = document.querySelector(".pay_button");
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
        const payout_text = document.querySelector(".pay_button>a");
        payout_button.disabled = false
        payout_button.classList.add("payout")
        payout_text.innerHTML = "Fechar pedido"
      }
}