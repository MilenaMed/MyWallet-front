import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import GlobalStyle from "./style/GlobalStyle"
import ResetStyle from "./style/ResetStyle"
import AuthProvider from "./context/authContext"


const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
  <React.StrictMode>
    <ResetStyle />
    <GlobalStyle />
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
)
