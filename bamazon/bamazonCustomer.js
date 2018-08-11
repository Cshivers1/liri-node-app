const mysql = require('mysql');

const connection = mysql.createConnection({
    host: '127.0.0.1',
    port: 3306,
    user: 'root', //  username
    password: 'Foundation-21', //  password
    database: 'bamazon' // the name of db created
})
function itemsNames(externalbattery, router, externaldrive, headphones, graphicscard, iphonecase, cat5cable, externalprocessor, techtoolset, hubadapter, onItemPosted)
 {
    connection.query('INSERT INTO item set ?', {
        cat5cable: cat5cable,
        techtoolset: techtoolset,
        externaldrive: externaldrive,
        externalbattery: externalbattery,
        externalprocessor: externalprocessor,
        headphones: headphones,
        graphicscard: graphicscard,
        hubadapter: hubadapter,

    }, function (err, res) {
        if (err) throw err;
        onProductAdded(res);
    })
    let itemId = prompt('Please Enter Item id');

    function launch() {
        inquirer.prompt([

            {
                type: 'input',
                name: 'name',
                message: "What is the product id you wish to purchase?"
            },
            {
                type: 'input',
                name: 'quantity',
                message: 'How much of this item would like?'
            }
            
        ])
        window.alert("You have selected an item")
        .then(function (answer) {
            console.log('Client picked ' + answer.name + '. He/She wants ' + answer.quantity);

            let itemId = answer.name;
            let itemQuantity = answer.quantity;
            let query2 = 'SELECT * FROM inventory WHERE ?';
            connection.query(query2, { item_id: itemId }, function (err, data) {
                if (err) throw err;
                let results = data[0];
                if (itemQuantity <= results.stock_quantity) {
                    window.alert("Your puchase has been confirmed")
                    console.log('Your puchase has been confirmed');

                    let newQuantity = results.stock_quantity - newQuantity;
                    let total = itemQuantity * results.price;
                    let finalTotal = parseFloat(total+ 6.99);
                    console.log(`
                    Price: $${total}
                    Shipping: $6.99
                    Total: $ ${finalTotal}
                    `)

                    let postQuery = `Update inventory SET ? Where ?`
                    connection.query(postQuery, [{ stock_quantity: newQuantity }, { item_id: itemId }], function (err, data) {
                        if (err) throw err;
                        connection.end();
                    })
                }
                else {
                    window.alert("Insufficent Quanity")
                    console.log('Insufficent Quanity.')
                    launch();
                }
            })
        })
    };
    function totalItems() {
        let allItem = 'SELECT * from inventory'
        connection.query(totalItem, function (err, data) {
            if (err) throw err;
            data.forEach(inventory => {
                console.log(`
                Product Information
                ===============================
                ID: ${inventory.item_id}
                Product Name: ${inventory.product_name}
                Price: ${inventory.price}
                Stock Quantity: ${inventory.stock_quantity}
                `)
            });
            launch();

        })
    }
}
