import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const insProd = process.env.NODE_ENV == 'production'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  //github 저장소 이름
  base: isProd ? '/FEStudy_TicTacToe' : '/'
})
