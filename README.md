# Cloud Food Machine

## A NodeJs system who provides a management to a food machine.

# Requeriments

* MongoDb installed and running.
* NodeJs and Npm installed.
* After the clone run ( npm install ) to the dependecies, and then ( npm start ) to run the app.

# Wow it works?

* POST to: http://localhost:3000/pickproduct,
with body Sample:
``` json
{
	"product": {
		"name": "Coca-Cola",
		"price": 3.0
	},
	"card": {
		"number" : 3443122165567887,
		"amount": 5.5,
		"person": {
			"name": "José da Silva",
			"cpf": "009.084.094-98"

		}
	}
} 
```

* Check the response if is: 

``` json
{ "Transaction OK" }
```

* Check in local mongo database "machine" if it has the data transaction.

# 
