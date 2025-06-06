
const getMessage = (req, res)=>{
        try {
             const message = "hello express js" 
             const status = 200  
             res.status(200).json({message, status})
        } catch (error) {
                res.status(500).json({error})
        }
}


const getAllUsers = async (req, res) => {
        try {
          const users = [
            { id: 1, name: "Alice", email: "alice@example.com", age: 25 },
            { id: 2, name: "Bob", email: "bob@example.com", age: 30 },
            { id: 3, name: "Charlie", email: "charlie@example.com", age: 28 },
            { id: 4, name: "David", email: "david@example.com", age: 35 },
            { id: 5, name: "Eve", email: "eve@example.com", age: 24 },
            { id: 6, name: "Frank", email: "frank@example.com", age: 32 },
            { id: 7, name: "Grace", email: "grace@example.com", age: 27 },
            { id: 8, name: "Henry", email: "henry@example.com", age: 29 },
            { id: 9, name: "Ivy", email: "ivy@example.com", age: 26 },
            { id: 10, name: "Jack", email: "jack@example.com", age: 31 }
          ];
      
          res.status(200).json({
            status: 200,
            data: users
          });
        } catch (error) {
          res.status(500).json({
            status: 500,
            message: "Failed to fetch users"
          });
        }
      };
      
export {
        getMessage, getAllUsers
}