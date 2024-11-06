# HP Finance Website

## Technologies Used

- React.js
- Vite
- TailwindCSS

## Documentation

If you want to create this project on your own, do the following steps:

1. Create a reactjs app using vite. Select `React` and `Javascript` after entering this command.

    ```bash
    npm create vite@latest
    ```

2. You can do these optional tasks if you want. It's just for customizing the project structure according to your likings.

    - Change the end of line sequence of all files from `LF` to `CRLF` in vs code.
    - Change the indentation of all files from `Spaces: 2` to `Spaces: 4` using tabs.

3. Install the necessary packages and follow tailwind's Vite-React guide after that. Here's a [link to the guide](https://tailwindcss.com/docs/guides/vite#react).

   ```bash
   npm install
   npm i -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
   ```

4. Don't forget to add these lines in `postcss.config.js`.

    ```js
    plugins: {
        "postcss-import": {},
        "tailwindcss/nesting": {},
        tailwindcss: {},
        autoprefixer: {},
    },
    ```

5. Then, add the necessary configurations in `tailwind.config.js`.

    ```js
    container: { center: true },
    extend: {
        colors: { primary: "#772ab3", secondary: "#adb2b1" },
        fontFamily: { mplus1: '"M PLUS 1", sans-serif' },
    },
    ```

6. Import the google font in `index.css` and add the class in `<body>` tag. Here's a [link to the font](https://fonts.google.com/specimen/M+PLUS+1).
