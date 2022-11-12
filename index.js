const buzzFizzApp = require ('express')();
const port = 2103;

buzzFizzApp.listen(

    port,()=> console.log('the App is running on port http://localhost:' + port)
)

buzzFizzApp.get('/aisera/buzzFizz/:inp', (req, res) => {
    const {inp} = req.params;
    let output = buzzFizz(inp);
    res.status(200).send({
        result: output
    })
});

function buzzFizz(input){
    let output;
    try{
        if(Number.parseInt(input)){
            if(input%3 == 0 && input%5 == 0){
                output = "fizz buzz";
            }
            else if(input%3 == 0){
                output = "fizz";
            }
            else if(input%5 == 0){
                output = "buzz";
            }
            else{
                output = "Invalid Input";
            }
        }
        else{
            output = "Invalid Input";
        }
    }catch(ex){
        output = "Invalid Input";
    }
    return output;
}