Here’s a well-structured and styled version of your content for clarity and readability:  

---

#  **NestJS Setup & Essential Commands**  

### **📌 Check Node.js Version**  
```sh
node -v
```

### **📌 Set Node.js Version (Using nvm)**  
```sh
nvm use v18
```

### **📌 Install NestJS CLI (Globally)**  
```sh
npm i -g @nestjs/cli
```

### **📌 Create a New NestJS Project**  
```sh
nest new lesson0
```

### **📌 Start the Development Server**  
```sh
npm run start:dev
```

### **📌 Install TypeORM & MySQL Dependencies**  
```sh
npm install --save @nestjs/typeorm typeorm mysql2
```

### **📌 Generate a NestJS Resource for Payments**  
```sh
nest g resource payment
```

### **📌 Generate a Module, Service, and Controller for Bookings**  
```sh
nest g module booking     
nest g service booking   
nest g controller booking    
```

### **📌 Install Thunder Client Extension**  
 *Thunder Client is an alternative to Postman for testing APIs.*

---

#  **Database & Mongoose Setup**  
### **📌 Install Mongoose for NestJS**  
```sh
npm install @nestjs/mongoose mongoose
```

---

#  **REST API Endpoints for Reports**
### **📌 Creating API Endpoints (Controller)**
| HTTP Method | Endpoint                 | Description |
|------------|-------------------------|-------------|
| **GET**    | `/REPORT/INCOME`        | Fetch all income reports |
| **GET**    | `/REPORT/INCOME/:ID`    | Fetch a specific income report |
| **POST**   | `/REPORT/INCOME`        | Create a new income report |
| **POST**   | `/REPORT/INCOME/:ID`    | Update an income report |
| **DELETE** | `/REPORT/INCOME/:ID`    | Delete an income report |

---

#  **JavaScript & TypeScript Essentials**  

### **🔹 Export in JavaScript**  
In JavaScript, the `export` statement is used in modules to **expose variables, functions, or classes** so they can be accessed in other files.  

---

### **🔹 Decorator Pattern**  
A design pattern in Object-Oriented Programming that allows behavior to be **added dynamically to an individual object** without affecting other instances of the same class.

---

### **🔹 Abstract Class vs Interface**  

| Feature | Abstract Class | Interface |
|---------|---------------|-----------|
| Instantiation | ❌ Cannot be instantiated | ❌ Cannot be instantiated |
| Methods | Can have both **implemented** and **abstract** methods | Only **method signatures** (no implementation) |
| Code Generation | Generates actual code | Used for **type checking only** (no code generation) |

📌 *In TypeScript, an `interface` defines the structure of an object, but it does not generate code at runtime—it only provides type checking at compile time.*

---

### **🔹 Arrow Functions (`()=>{}`) in JavaScript & TypeScript**  
Arrow functions provide a **shorter and more readable** way to define functions.  

```ts
const add = (a: number, b: number): number => a + b;
console.log(add(2, 3)); // Output: 5
```

---

### **🔹 Dynamically vs Statically Typed Languages**  

| Type System | Description |
|------------|-------------|
| **Dynamically Typed** | Types are **associated with runtime values**, not explicitly defined in code. |
| **Statically Typed** | Types are **explicitly assigned** to variables, function parameters, return values, etc. |

---

### **📌 TypeScript Setup & Compilation**  
```sh
npm install -g typescript
tsc index.ts       # Compile a TypeScript file
tsc --init         # Initialize TypeScript config
```

---

### **🔹 Dependency Injection in NestJS**  
The methods of a **provider class** can be injected as dependencies using the `@Injectable()` decorator.  

📌 *NestJS initializes the app using the `bootstrap` function inside* `main.ts`.

---

#  **Asynchronous Programming in JavaScript & TypeScript**  

### **1️⃣ What is an Asynchronous Function?**  
An **asynchronous function** does **not block** the execution of a program while waiting for operations to complete (e.g., fetching data, reading a file). It allows other code to run while waiting.  

---

### **2️⃣ What is a Promise?**  
A `Promise` represents a value that **might not be available yet** but will be at some point in the future.

#### **Promise States:**
- **Pending** → The async operation is still running.
- **Resolved (Fulfilled)** → The operation finished successfully.
- **Rejected** → The operation failed.

---

📌 **Want to dive deeper into NestJS or TypeScript? Let me know! **
