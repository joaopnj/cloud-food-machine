module.exports = (app) => {

    var Card  = app.models.card;
    var Person  = app.models.person;
    var Product = app.models.product; 


    var MachineDao = {

        pickproduct: (req, res) => {
            Card.findOne({ "number" : req.body.card.number }, (err, card) => {
                if (err) res.status(400).send('Transaction error!');
                if (!card) {
                    let newCard = new Card();
                    newCard.number = req.body.card.number;
                    newCard.amount = req.body.card.amount - req.body.product.price;
                    newCard.owner  = req.body.card.person;

                    newCard.save( (err) => {
                        if (err) res.status(400).send('Card save error!');
                        let newPerson = new Person();
                        newPerson.name = req.body.card.person.name;
                        newPerson.cpf  = req.body.card.person.cpf;
                        newPerson.save( (err) => {
                            if(err) res.status(400).send('Person save error');
                            let product = new Product();
                            product.name  = req.body.name;
                            product.price = req.body.price; 
                            product.save( (err) => {
                                if (err) res.status(400).send('Product save error');
                                res.json('Transaction OK');
                            });
                        });
                    });
                } else {
                    if(card.amount - req.body.product.price < 0)
                        res.status(400).send('Insuficient amount!');
                    else{
                        card.amount = card.amount - req.body.product.price;
                        card.save( (err) => {
                            if (err) res.status(400).send('Card save error!');
                            res.json('Transaction OK');
                        })
                    }
                    
                }
            });
        }
    }
    return MachineDao;
}