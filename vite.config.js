import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.tsx'),
      name: 'GanttTaskReact',
      formats: ['es', 'umd'],
      fileName: (format) => `gantt-task-react.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom', '@mui/material', '@mui/icons-material', '@emotion/react', '@emotion/styled', '@floating-ui/react', '@floating-ui/dom', 'date-fns'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          '@mui/material': 'MuiMaterial',
          '@mui/icons-material': 'MuiIcons',
          '@emotion/react': 'EmotionReact',
          '@emotion/styled': 'EmotionStyled',
          '@floating-ui/react': 'FloatingUIReact',
          '@floating-ui/dom': 'FloatingUIDOM',
          'date-fns': 'DateFns'
        }
      }
    }
  },
  server: {
    open: '/example/index.html',
  },
});
