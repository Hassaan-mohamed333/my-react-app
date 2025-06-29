import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    tailwindcss(),
   
  ],
   base: "/my-react-app/" ,
    css: {
    modules: {
      localsConvention: 'camelCase'
    }
  }
})