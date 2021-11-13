// import { createServer, Model, Factory } from "miragejs"

// export function makeServer({ environment = "development" } = {}) {
//   let server = createServer({
//     environment,

//     models: {
//       expense: Model,
//     },

//     factories: {
//       expense: Factory.extend({
//         id(i) {
//           return `${i + 1}`;
//         },

//       })
//     },

//     seeds(server) {
//       server.create("Expense", { id: 32, value: 300, description: 'Abacate', currency: 'BRL', method: 'Dinheiro', tag: 'Alimentação',});

//     },

//     routes() {
//       this.namespace = "api"

//       this.get("/getall", schema => {
//         return schema.expense.all();
//       });
      
//       this.post(
//         "/expense",
//         (schema, request) => {
//           let attrs = JSON.parse(request.requestBody).expense;

//           return schema.expense.create(attrs);
//         },
//         { timing: 2000 }
//       );

//       this.delete("/expense/:id", (schema, request) => {
//         return schema.expense.find(request.params.id).destroy();
//       });
//     },
//   })

//   return server
// }
