let loot = 0
let lootCollected = 0
let winningLoot = 50

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

function help(){
  // @ts-ignore
  Swal.fire('Click the shield and axe symbol to Pillage the Village and collect loot. Once you have enough loot you can purchase items in the shop to help you pillage! But be careful the village my attempt to defend itself. If you reach a certain amount of loot you can throw a victory feast for you and your men!')
}

function pillage(){
  if(clickUpgrades.extraLootBags.quantity === 0 && clickUpgrades.lootCarts.quantity === 0){
    loot++
    lootCollected++
  }
  if(clickUpgrades.extraLootBags.quantity > 0){
    loot += (clickUpgrades.extraLootBags.quantity*clickUpgrades.extraLootBags.multiplier+1)
    lootCollected += (clickUpgrades.extraLootBags.quantity*clickUpgrades.extraLootBags.multiplier+1)
  }
  if(clickUpgrades.lootCarts.quantity > 0){
    loot += (clickUpgrades.lootCarts.quantity*clickUpgrades.lootCarts.multiplier+1)
    lootCollected += (clickUpgrades.lootCarts.quantity*clickUpgrades.lootCarts.multiplier+1)
  }
  update()
}

function villageSally(){
  let villageClickAttempt = Math.round(Math.random()*100)
  let villagePassiveAttempt = Math.round(Math.random()*100)
  if(villageClickAttempt >= 95 && clickUpgrades.extraLootBags.quantity > 0 && clickUpgrades.lootCarts.quantity > 0){
    for(let key in clickUpgrades){
      clickUpgrades[key].quantity--
    }
    clickUpgrades.extraLootBags.price = clickUpgrades.extraLootBags.price / 2
    clickUpgrades.lootCarts.price = clickUpgrades.lootCarts.price / 2
    // @ts-ignore
    Swal.fire({
      title: 'The Village defenders have sallied forth!',
      text: "You've lost 1 of each click item.",
      imageUrl: 'https://www.wallpapertip.com/wmimgs/27-279914_medieval-knight-wallpaper-hd-knights-fight-wallpaper-fantasy.jpg',
      imageWidth: 400,
      imageHeight: 250,
      imageAlt: 'Custom image',
      background: 'black',
      timerProgressBar: true,
    })
  }
  if(villagePassiveAttempt >= 95 && passiveUpgrades.sneakThieves.quantity > 0 && passiveUpgrades.vikingHordes.quantity > 0){
    for(let key in passiveUpgrades){
      passiveUpgrades[key].quantity--
    }
    passiveUpgrades.sneakThieves.price = passiveUpgrades.sneakThieves.price / 2
    passiveUpgrades.vikingHordes.price = passiveUpgrades.vikingHordes.price / 2
    // @ts-ignore
    Swal.fire({
      title: 'The Village has hired some sellswords!',
      text: "You've lost 1 of each passive item.",
      imageUrl: 'https://i.pinimg.com/474x/aa/fe/b6/aafeb6ece4bd57f893a39b6dc1d1d059.jpg',
      imageWidth: 400,
      imageHeight: 250,
      imageAlt: 'Custom image',
      background: 'black',
      timerProgressBar: true,
    })
  }
  update()
}

function buyClickItems(item){
if(loot >= clickUpgrades[item].price){
  clickUpgrades[item].quantity++
  loot -= clickUpgrades[item].price
  clickUpgrades[item].price = clickUpgrades[item].price*2
  }
  update()
}
// function buyLootCarts(){
// if(loot >= clickUpgrades.lootCarts.price){
//   clickUpgrades.lootCarts.quantity++
//   loot -= clickUpgrades.lootCarts.price
//   clickUpgrades.lootCarts.price = clickUpgrades.lootCarts.price*2
//   }
//   update()
// }
function buyPassiveItems(item){
if(loot >= passiveUpgrades[item].price){
  passiveUpgrades[item].quantity++
  loot -= passiveUpgrades[item].price
  passiveUpgrades[item].price = passiveUpgrades[item].price*2
  }
  update()
}
// function buyVikingHordes(){
// if(loot >= passiveUpgrades.vikingHordes.price){
//   passiveUpgrades.vikingHordes.quantity++
//   loot -= passiveUpgrades.vikingHordes.price
//   passiveUpgrades.vikingHordes.price = passiveUpgrades.vikingHordes.price*2
//   }
//   update()
// }

function hordingHordes(){
  if(loot >= winningLoot){

    // @ts-ignore
    Swal.fire({
      title: 'Congrats, you like win or something.',
      text: "Now close this tab and go code!",
      imageUrl: 'https://i.imgflip.com/3oartw.jpg',
      imageWidth: 400,
      imageHeight: 500,
      imageAlt: 'Custom image',
      background: 'black',
      timerProgressBar: true,
    })
    document.getElementById('vikingFeast').classList.remove('disappear')
  }
}

function vikingFeast(){
if(loot >= winningLoot){
  loot = 0
  for(let key in clickUpgrades){
    clickUpgrades[key].quantity = 0
  }
  for(let key in passiveUpgrades){
    passiveUpgrades[key].quantity = 0
  }
  clickUpgrades.extraLootBags.price = 5
  clickUpgrades.lootCarts.price = 10
  passiveUpgrades.sneakThieves.price = 5
  passiveUpgrades.vikingHordes.price = 10
  // @ts-ignore
  document.getElementById('feastAudio').play()

  document.getElementById('vikingFeast').classList.add('disappear')
}
// @ts-ignore
Swal.fire({
  title: 'Oh no! A surprise attack!',
  text: "While everyone was distracted by the festivities the village took all their, i mean all our stuff!",
  imageUrl: 'https://j.gifs.com/ml8VAX.gif',
  imageWidth: 400,
  imageHeight: 250,
  imageAlt: 'Custom image',
  background: 'black',
  
})
}

function collectAutoUpgrades(){
  let passiveTotal = 0
  for(let key in passiveUpgrades){
     passiveTotal += passiveUpgrades[key].multiplier * passiveUpgrades[key].quantity
  }
  loot += passiveTotal
  lootCollected += passiveTotal
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
  document.getElementById('lootCount').innerText ='Current Loot: ' + loot
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
     document.getElementById('lootCollected').innerText = 'Total Loot Collected: ' + lootCollected 
  
}


update()
startInterval()