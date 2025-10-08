interface Product{
    name:String
    price:number
    inStock:boolean
}


const product:Product[]=[]
product.push({name:"laptop", price:50000, inStock:true})
product.push({name:"mouse", price:1000, inStock:true})
product.push({name:"monitor", price:5000, inStock:false})

console.log(product)


//print all
for (const item of product){
    console.log(`${item.name} - ${item.price} - ${item.inStock}`)
}

//Those are stock 

for(const item of product){
    if(item.inStock){
        console.log(`currently stock in ${item.name}`)
    }
}

//current stock value

let sum=0
for(const item of product){
    if(item.inStock){
        sum+=item.price
    }
}

console.log(`current stock value is : ${sum}`)
