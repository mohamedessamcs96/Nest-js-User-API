node -v 
nvm use v18
npm i -g @nestjs/cli #enable my to use the nest cli 
nest new lesson0
npm run start:dev
npm install --save @nestjs/typeorm typeorm mysql2
nest g resource payment        
nest g module  booking     
nest g service booking   
nest g controller booking    
thunder client extension

npm install @nestjs/mongoose mongoose


# Controller :
`creating endpoinds`
1. GET /REPORT/INCOME
2. GET /REPORT/INCOME/:ID
3. POST /REPORT/INCOME
4. POST /REPORT/INCOME/:ID
5. DELETE /REPORT/INCOME/:ID





#### export
In JavaScript, the export statement is used in modules to expose variables, functions, or classes so that they can be accessed and used in other parts of the application or in separate files. By using the export , you make certain parts of your code accessible outside the module.

#### Decorator pattern
In object-oriented programming, the decorator pattern is a design pattern that allows behavior to be added to an individual object, dynamically, without affecting the behavior of other instances of the same class.


#### Abstract Class vs	Interface
* A class that cannot be instantiated and may contain both implemented and abstract methods.	
* A structure that only defines method signatures without implementation.
` In TypeScript, an interface defines the structure of an object, but it does not generate actual code. It only provides type checking at compile time.`


#### Understanding () => {} (Arrow Function) in JavaScript & TypeScript
The syntax ()=>{} represents an arrow function, which is a shorter and more concise way to write functions in JavaScript and TypeScript.

const add = (a: number, b: number): number => a + b;
console.log(add(2, 3)); // Output: 5






In Dynamically typed languages the types are associated with run time values and not named explictly in your code 

in Staticly typed languages you explictyly assign types to variables function parameters , return values, etc .

npm install -g typescript
tsc index.ts
tsc --intit



The methods of the provider class can be injected as a dependency to another class with the decorator injectable

We intializing our app using the bootstrap funtction in the main.ts