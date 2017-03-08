console.log('sanity!!!!!');


var products = [
{"id":1,
"size":0,
"price":"$52.40",
"description":"Hodor hodor - hodor hodor hodor hodor! Hodor! Hodor hodor, hodor hodor; hodor hodor hodor! Hodor hodor HODOR! Hodor hodor; hodor hodor..."},

{"id":2,
"size":2,
"price":"$93.36",
"description":"Mr. Worf, you do remember how to fire phasers? Some days you get the bear, and some days the bear gets you. Yes, absolutely, I do indeed concur, wholeheartedly! I recommend you don't fire until you're within 40,000 kilometers."},

{"id":3,
"size":3,
"price":"$33.60",
"description":"Now that we know who you are, I know who I am. I'm not a mistake! It all makes sense! In a comic, you know how you can tell who the arch-villain's going to be? He's the exact opposite of the hero."},

{"id":4,
"size":0,
"price":"$83.90",
"description":"Bacon ipsum dolor amet shoulder fatback beef, biltong corned beef leberkas picanha tail ground round beef ribs. Corned beef tenderloin picanha pastrami beef ribs. Hamburger corned beef t-bone beef flank, picanha landjaeger cupim leberkas pork shankle."},

{"id":5,
"size":1,
"price":"$43.32",
"description":"Thinking longingly about tuna brine purr while eating or attack dog, run away and pretend to be victim hide from vacuum cleaner jump around on couch, meow constantly until given food, yet use lap as chair. Meowzer!"},

{"id":6,
"size":3,
"price":"$54.11",
"description":"Chupa chups bear claw cake macaroon sesame snaps chocolate bar cake cake soufflé. Gummi bears macaroon cake pastry oat cake toffee ice cream. Topping topping danish gummies tart tart sugar plum brownie bonbon."},

{"id":7,
"size":4,
"price":"$66.26",
"description":"Loyal if you like my profile only looking for something casual I'm really good at. Crossfit Ethiopian really hoppy beers hiking Vampire Weekend, bacon working on my body and my mind fitness seeing as many countries as possible if you think we have something in common."},

{"id":8,
"size":1,
"price":"$15.82",
"description":"San Francisco cyber- nodality lights plastic futurity industrial grade artisanal engine urban euro-pop cartel."},

{"id":9,
"size":3,
"price":"$46.19",
"description":"Readymade irony kickstarter, slow-carb DIY neutra pabst 8-bit lomo pug. Sartorial brooklyn vegan asymmetrical, lomo aesthetic normcore vinyl DIY meh disrupt lo-fi +1 godard tacos."},

{"id":10,
"size":4,
"price":"$12.61",
"description":"Art party yr vinyl knausgaard, tattooed four dollar toast fanny pack YOLO intelligentsia pug next level kale chips cred. Butcher four dollar toast put a bird on it bitters, health goth authentic intelligentsia scenester XOXO quinoa tousled blue bottle portland."},

{"id":11,
"size":0,
"price":"$49.71",
"description":"Venmo kickstarter slow-carb twee gastropub. Offal actually four dollar toast, health goth kale chips synth keffiyeh DIY hammock gluten-free gastropub. Forage letterpress austin health goth, vice tote bag hella chia umami mustache disrupt."},

{"id":12,
"size":3,
"price":"$82.20",
"description":"Dreamcatcher gastropub cronut keytar. Next level kogi blog hella. DIY umami messenger bag, intelligentsia wolf paleo tumblr brooklyn hella. Tilde cred organic, brooklyn tousled tumblr pinterest."},
]

console.log(products[11].id);

// (function productList() {

//loop through and create a row, create a column, then append the info to it.
for (var i = 0; i < products.length; i++) {
  var $appendRow = $('.container').append(`<div class="row"></div>`)
  var $appendColumn = $('.row').append(`<div class="col-xs-4"></div>`)
  var $column = $('.col-xs-4')
  $column.append(`<img src="http://fillmurray.com/300/300" alt="fillMurray">`)
  $column.append(`<p>Id: ${products[i].id}</p>`)

  $column.append(`<p>Size: ${products[i].size}</p>`)
  $column.append(`<p>Price: ${products[i].price}</p>`)
  $column.append(`<p>Description: ${products[i].description}</p>`)
  $column.append(`</br>`)
}


// })()
