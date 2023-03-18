class ProductManager{

   constructor(){
       this.products = []
   }

   // retorno todos los producto
   getProducts(){
       return this.products;
   }

   // retorno los productos buscando por id (numerico autoincremental)
   getProductById(id){
      let product = this.products.find(product => product.id === id)
      if (product){
         return product;
      }else{
         return 'Not found';
      }
   }

   // agrego los productos
   addProduct(title, description, price, thumbnail, code, stock){
       let id_product = (this.getProducts()).length;

       // se valida si existen todos los campos, en caso que
       // falte alguno retorno el error
       if (!title || !description || !price || !thumbnail || !code || !stock){
         return 'Todos los campos son obligatorios';
       }
       
       // se valida que el codigo ingresado no exista, si
       // existe retorno el error
       let codeExist = this.findCode(code);
       if (codeExist){
         return 'Codigo ya existente';
       }

       let product = {
         title: title,
         description: description,
         price: price,
         thumbnail: thumbnail,
         code: code,
         stock: stock,
         id: ++id_product
       }

       // inserto el nuevo producto en el arreglo
       this.products.push(product);
       // retorno el producto
       return this.products;
   }

   findCode(code){
      // busco el codigo recibido, si existe retorno
      // el producto, si no existe retorno null
      let product = this.products.find(product => product.code === code)
      if(product){
          return product;
      }else{
          return null
      }
   }
}

const product = new ProductManager();

console.log('++++++++++++++++++++++++++++++++++');
console.log('Prueba 1');
// devuelvo arreglo vacio
console.log(product.getProducts());
console.log('++++++++++++++++++++++++++++++++++');

console.log('Prueba 2');
// creo el primer producto y lo muestro
product.addProduct('producto prueba', 'Este es un producto prueba', 200, 'Sin imagen', 'abc123', 25);
console.log(product.getProducts());

// creo otro producto y lo muestro
product.addProduct('producto prueba 2', 'Este es otro producto prueba', 500, 'Sin imagen', '321cba', 25);
console.log(product.getProducts());
console.log('++++++++++++++++++++++++++++++++++');
console.log('++++++++++++++++++++++++++++++++++');

console.log('Prueba 3');
// intento crear el mismo producto y devuelvo el error porque se repite el codigo
let producto1 = product.addProduct('producto prueba', 'Este e un producto prueba', 200, 'Sin imagen', 'abc123', 25);
console.log(producto1);
console.log('++++++++++++++++++++++++++++++++++');

console.log('Prueba 4');
// envio los campos vacios para probar el error
let producto2 = product.addProduct('', '', 200, 'Sin imagen', 'abc123', 25);
console.log(producto2);
console.log('++++++++++++++++++++++++++++++++++');

console.log('Prueba 5');
// busco por id un codigo existente
console.log(product.getProductById(2));

console.log('Prueba 6');
// busco por id un codigo inexistente
console.log(product.getProductById(123456));
console.log('++++++++++++++++++++++++++++++++++');


