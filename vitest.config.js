import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import magicalSvgPlugin from 'vite-plugin-magical-svg'
 
export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["vitestSetup.ts"],
  },
  resolve:{
    alias:[{
        find:"@",replacement:'/'
    }]
  }
})