// vite.config.js

export default {
  // Other Vite configuration options...
  build: {
    rollupOptions: {
      external: ["@/consts", "@/functions", "@/components", "@/layouts"],
    },
  },
};
