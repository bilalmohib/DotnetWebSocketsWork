# DotnetWebSocketsWork 🌐

Welcome to the **DotnetWebSocketsWork** repository! This project demonstrates how to build a simple WebSocket server using .NET and Fleck. The server allows multiple clients to connect and exchange messages in real-time.

## 🚀 Getting Started

These instructions will help you get the project up and running on your local machine for development and testing purposes.

### Prerequisites

- [.NET 6 SDK](https://dotnet.microsoft.com/download/dotnet/6.0)
- [Fleck WebSocket Library](https://github.com/statianzo/Fleck)

### 🔧 Setup and Installation

1. **Clone the repository:**

```bash
   git clone https://github.com/yourusername/DotnetWebSocketsWork.git
   cd DotnetWebSocketsWork
```
2. **Install the required dependencies:**

```bash
   dotnet add package Fleck
```
3. **Build and Run the Project:**

```bash
   dotnet build
   dotnet run
```

The WebSocket server should now be running at ws://0.0.0.0:8181.

## 💻 Usage

1. **Connecting to the WebSocket Server:**

> You can connect to the WebSocket server using any WebSocket client. For example, you can use a WebSocket client library in your frontend or a tool like Postman or wscat.

```js
const ws = new WebSocket("ws://localhost:8181");

ws.onmessage = function(event) {
    console.log("Message from server:", event.data);
};

ws.onopen = function() {
    ws.send("Hello Server!");
};
```

2. **Sending Messages:**
> Once connected, clients can send messages to the server, which will broadcast the message to all connected clients.

## 🛠️ Project Structure
- **Program.cs:** The entry point of the application where the WebSocket server is configured and started using Fleck.

## 🌟 Features

- Real-time communication between multiple clients.
- Simple and efficient WebSocket server implementation.
- Easy to extend and integrate with other .NET applications.

## 📚 Resources

- [Fleck Documentation](https://github.com/statianzo/Fleck)
- [.NET 6 Documentation](https://learn.microsoft.com/en-us/dotnet/core/whats-new/dotnet-5)

## 📝 License
This project is licensed under the MIT License - see the LICENSE file for details.

## 🙌 Contributions
Contributions, issues, and feature requests are welcome! Feel free to check the issues page to see what you can help with.

## 📫 Contact
If you have any questions or feedback, please feel free to reach out via **bilalmohib7896@gmail.com**

<hr />

Happy Coding! ✨

