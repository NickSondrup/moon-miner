let loot = 0
let clickUpgrades ={
  biggaBags: {
    name: 'Bigga Lootin Bags',
    price: 5,
    quantity: 0,
    multiplier: 1
  },

  biggaChoppas: {
    name: 'Bigga Choppas',
    price: 10,
    quantity: 0,
    multiplier: 5
  }
}

let passiveUpgrades = {
  sneakyGits:{
    name: 'Sneaky Gits',
    price: 5,
    quantity: 0,
    multiplier: 1
  },
  weirdBoyShaman: {
    name: 'Weirdboy Shaman',
    price: 10,
    quantity: 0,
    multiplier: 5
  }
}

function pillage(){
  if(clickUpgrades.biggaBags.quantity === 0 && clickUpgrades.biggaChoppas.quantity === 0){
    loot++
  }
  if(clickUpgrades.biggaBags.quantity > 0){
    loot += (clickUpgrades.biggaBags.quantity*clickUpgrades.biggaBags.multiplier+1)
  }
  if(clickUpgrades.biggaChoppas.quantity > 0){
    loot += (clickUpgrades.biggaChoppas.quantity*clickUpgrades.biggaChoppas.multiplier+1)
  }
  update()
}

function buyBiggaBags(){
if(loot >= clickUpgrades.biggaBags.price){
  clickUpgrades.biggaBags.quantity++
  loot -= clickUpgrades.biggaBags.price
  clickUpgrades.biggaBags.price = clickUpgrades.biggaBags.price*2
  }
  update()
}
function buyBiggaChoppas(){
if(loot >= clickUpgrades.biggaChoppas.price){
  clickUpgrades.biggaChoppas.quantity++
  loot -= clickUpgrades.biggaChoppas.price
  clickUpgrades.biggaChoppas.price = clickUpgrades.biggaChoppas.price*2
  }
  update()
}
function buySneakyGit(){
if(loot >= passiveUpgrades.sneakyGits.price){
  passiveUpgrades.sneakyGits.quantity++
  loot -= passiveUpgrades.sneakyGits.price
  passiveUpgrades.sneakyGits.price = passiveUpgrades.sneakyGits.price*2
  }
  update()
}
function buyWeirdboyShaman(){
if(loot >= passiveUpgrades.weirdBoyShaman.price){
  passiveUpgrades.weirdBoyShaman.quantity++
  loot -= passiveUpgrades.weirdBoyShaman.price
  passiveUpgrades.weirdBoyShaman.price = passiveUpgrades.weirdBoyShaman.price*2
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



  // if(passiveUpgrades.sneakyGits.quantity > 0){
  //   loot += (passiveUpgrades.sneakyGits.quantity*passiveUpgrades.sneakyGits.multiplier)
  // }
  // if(passiveUpgrades.weirdBoyShaman.quantity > 0){
  //   loot += (passiveUpgrades.weirdBoyShaman.quantity*passiveUpgrades.weirdBoyShaman.multiplier)
  // }





function update(){
  document.getElementById('lootCount').textContent ='Total Loot: ' + loot.toString()
  document.getElementById('biggaBagCount').textContent = 'Bigga Bags: ' + clickUpgrades.biggaBags.quantity.toString()
  document.getElementById('biggaChoppaCount').textContent = 'Bigga Choppas: ' + clickUpgrades.biggaChoppas.quantity.toString()
  document.getElementById('sneakyGitsCount').textContent = 'Sneak Gits: ' + passiveUpgrades.sneakyGits.quantity.toString()
  document.getElementById('weirdboyShamanCount').textContent = 'Weirdboy Shamans: ' + passiveUpgrades.weirdBoyShaman.quantity.toString()
  document.getElementById('biggaBagsPrice').textContent = 'Price: ' + clickUpgrades.biggaBags.price.toString()
  document.getElementById('biggaChoppasPrice').textContent = 'Price: ' + clickUpgrades.biggaChoppas.price.toString()
  document.getElementById('sneakyGitsPrice').textContent = 'Price: ' + passiveUpgrades.sneakyGits.price.toString()
  document.getElementById('weirdboyShamanPrice').textContent = 'Price: ' +   passiveUpgrades.weirdBoyShaman.price.toString()
  
}









update()
startInterval()