// https://dev.to/avxkim/setup-path-aliases-w-react-vite-ts-poa
/*
// STEP 1
// vite.config.ts

import * as path from 'path'

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
    },
})

// STEP 2
// tsconfig.json:

{
    "compilerOptions": {
    // ...rest of the template
    "types": ["node"],
        "paths": {
        "@/*": ["./src/*"]
    }
},
    "include": ["src"],
    "references": [{ "path": "./tsconfig.node.json" }]
}
*/

// STEP 3
// also don't forget to `npm i -D @types/node`, so __dirname won't complain

