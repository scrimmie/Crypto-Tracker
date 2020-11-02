![CryptoTracker](https://github.com/scrimmie/Crypto-Tracker/blob/master/CryptoTracker_Logo.png?)


Basic CryptoTracker node.js app to follow and track your crypto prices and final portfolio price.

Your amount and type of crypto can be entered into the cryptos.json file using their tickers as a key.

To gather the cryptocurrency prices and data the app utilizes the CoinMarketCap API
 -A free account can be made at this website https://coinmarketcap.com/api/
 -Then set the api key in the env.json file
 
 Once these steps are complete run the following commands
  -cd app/
  -npm install
  -node server.js
  
  Then by visiting localhost:3000 you will see your crypto portfolio data
  
  This app is meant as a proof of concept for testing reasons and will be run on a raspberry pi with a 3.5" touchscreen attached
  
  
