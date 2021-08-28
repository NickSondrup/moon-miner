let loot = 0
let clickUpgrades ={
  extraLootBags: {
    name: 'Extra Loot Bags',
    price: 5,
    quantity: 0,
    multiplier: 1
  },

  lootCarts: {
    name: 'Loot Carts',
    price: 10,
    quantity: 0,
    multiplier: 5
  }
}

let passiveUpgrades = {
  sneakThieves:{
    name: 'Sneak Thieves',
    price: 5,
    quantity: 0,
    multiplier: 1
  },
  vikingHordes: {
    name: 'Viking Hordes',
    price: 10,
    quantity: 0,
    multiplier: 5
  }
}

function pillage(){
  if(clickUpgrades.extraLootBags.quantity === 0 && clickUpgrades.lootCarts.quantity === 0){
    loot++
  }
  if(clickUpgrades.extraLootBags.quantity > 0){
    loot += (clickUpgrades.extraLootBags.quantity*clickUpgrades.extraLootBags.multiplier+1)
  }
  if(clickUpgrades.lootCarts.quantity > 0){
    loot += (clickUpgrades.lootCarts.quantity*clickUpgrades.lootCarts.multiplier+1)
  }
  update()
}

function buyExtraLootBags(){
if(loot >= clickUpgrades.extraLootBags.price){
  clickUpgrades.extraLootBags.quantity++
  loot -= clickUpgrades.extraLootBags.price
  clickUpgrades.extraLootBags.price = clickUpgrades.extraLootBags.price*2
  }
  update()
}
function buyLootCarts(){
if(loot >= clickUpgrades.lootCarts.price){
  clickUpgrades.lootCarts.quantity++
  loot -= clickUpgrades.lootCarts.price
  clickUpgrades.lootCarts.price = clickUpgrades.lootCarts.price*2
  }
  update()
}
function buySneakThieves(){
if(loot >= passiveUpgrades.sneakThieves.price){
  passiveUpgrades.sneakThieves.quantity++
  loot -= passiveUpgrades.sneakThieves.price
  passiveUpgrades.sneakThieves.price = passiveUpgrades.sneakThieves.price*2
  }
  update()
}
function buyVikingHordes(){
if(loot >= passiveUpgrades.vikingHordes.price){
  passiveUpgrades.vikingHordes.quantity++
  loot -= passiveUpgrades.vikingHordes.price
  passiveUpgrades.vikingHordes.price = passiveUpgrades.vikingHordes.price*2
  }
  update()
}

function collectAutoUpgrades(){
  let passiveTotal = 0
  for(let key in passiveUpgrades){
     passiveTotal += passiveUpgrades[key].multiplier * passiveUpgrades[key].quantity
  }
  loot += passiveTotal
  update()
}

function startInterval(){
  setInterval(() => {collectAutoUpgrades()}, 2000)
}

function preventContext(){
  event.preventDefault()
  console.log('get back to pillaging!')
}


function update(){
  document.getElementById('lootCount').innerText ='Total Loot: ' + loot
  document.getElementById('extraLootBagsCount').innerText = 'Extra Loot Bags: ' + clickUpgrades.extraLootBags.quantity
  document.getElementById('lootCartsCount').innerText = 'Loot Carts: ' + clickUpgrades.lootCarts.quantity
  document.getElementById('sneakThievesCount').innerText = 'Sneak Thieves: ' + passiveUpgrades.sneakThieves.quantity
  document.getElementById('vikingHordesCount').innerText = 'Viking Hordes: ' + passiveUpgrades.vikingHordes.quantity
  document.getElementById('extraLootBagsPrice').innerText = 'Price: ' + clickUpgrades.extraLootBags.price
  document.getElementById('lootCartsPrice').innerText = 'Price: ' + clickUpgrades.lootCarts.price
  document.getElementById('sneakThievesPrice').innerText = 'Price: ' + passiveUpgrades.sneakThieves.price
  document.getElementById('vikingHordesPrice').innerText = 'Price: ' +   passiveUpgrades.vikingHordes.price
  document.getElementById('clickCountMultiplier').innerText = 'Click Multiplier: ' + (clickUpgrades.extraLootBags.multiplier*clickUpgrades.extraLootBags.quantity
     + clickUpgrades.lootCarts.multiplier*clickUpgrades.lootCarts.quantity)
  document.getElementById('passiveCountMultiplier').innerText = 'Passive Multiplier: ' + (passiveUpgrades.sneakThieves.multiplier*passiveUpgrades.sneakThieves.quantity
     + passiveUpgrades.vikingHordes.multiplier*passiveUpgrades.vikingHordes.quantity)
}









update()
startInterval()