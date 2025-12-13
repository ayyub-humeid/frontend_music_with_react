# React + Vite
### Description 
very simple React project built with Vite to display a list of songs, albums, and artists in a clean layout.
The project is frontend-only and focuses on basic React components and simple UI rendering.

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).
## 📦 Required Packages

| `react` | React library |
| `react-dom` |React DOM rendering |
| `@apollo/client` | GraphQL client for React |
| `graphql` || GraphQL query language |
| `bootstrap` | ^5.3.8 | UI styling |
| `vite` | ^7.2.4 | Build tool and dev server |
## ⚙️ Apollo Client Configuration

### Setup in `main.jsx`
```javascript
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client'
import { ApolloProvider } from '@apollo/client/react'

// Configure Apollo Client
const client = new ApolloClient({
  link: createHttpLink({
    uri: 'http://localhost:8000/graphql/', // Django GraphQL endpoint
  }),
  cache: new InMemoryCache(),
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </StrictMode>,
)
```

### Important Notes:
- **Backend URL:** `http://localhost:8000/graphql/`
- Make sure Django backend is running before starting React
- Apollo Client wraps the entire app with `ApolloProvider`

---

---
## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
