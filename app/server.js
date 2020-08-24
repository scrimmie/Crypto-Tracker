let axios = require("axios");
let express = require("express");
let app = express();

// add your API key to env.json
let apiFile = require("../env.json");
let apiKey = apiFile["api_key"];
let baseUrl = apiFile["base_api_url"];

let crypto_file = require("../cryptos.json");
let crypto_list = crypto_file["cryptos"];
let limit = 200 // Adjust to higher number if you are not seeing your keypto show up in the array (or the script errors out)


let port = 3000;
let hostname = "localhost";

app.use(express.json());

app.use(express.static("public_html"));

app.get("/crypto", function (req, res) {

    axios.get(`${baseUrl}?CMC_PRO_API_KEY=${apiKey}&limit=${limit}`).then(function (response) {
        let currency_data = response.data.data
        //console.log(response.data);
        let our_currency_prices = {}
        for(i = 0; i < currency_data.length; i++){
            if (crypto_list.hasOwnProperty(currency_data[i].symbol)){
                our_currency_prices[currency_data[i].symbol] = {"price": currency_data[i].quote.USD.price, "change_24": currency_data[i].quote.USD.percent_change_24h}
            }
        }
        //console.log(our_currency_prices)
        let portfolio_price = 0;
        for (const [key, value] of Object.entries(crypto_list)) {
            portfolio_price += (our_currency_prices[key].price * value);
        }
        let output = {"crypto_data": our_currency_prices, "portfolio": portfolio_price}
        res.json(output);
	}).catch((error) => {
        console.log(error);
    });
});


app.listen(port, hostname, () => {
    console.log(`Listening at: http://${hostname}:${port}`);
});
