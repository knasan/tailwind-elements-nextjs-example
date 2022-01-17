# tailwind elements next-js example

## Create a new Next.js project

```sh
npm create-next-app ProjectName
```

## install tw-elements

npm install tw-elements

```sh
npm install tw-elements
```

## Enable tw-elements

Tailwind uses some client-side objects (window,document) to handle events. On the other hand, Next.js renders the app both server-side and client-side. There is no window, document on the server side, so you may see some error messages like the following:

```js
document is not defined
```

To avoid the mentioned error, we need to make sure that the window and document objects are only used on the client side. This can be done with the useEffect hook:

```js
// Place this in the pages/_app.js file
useEffect(() => {
    import("tw-elements");
  }, []);
```

## Use this example

clone this repository

```sh
git clone https://github.com/knasan/tailwind-elements-nextjs-example
```

and run npm install and npm run dev

```sh
cd tailwind-elements-nextjs-example
```

```sh
npm install && npm run dev
```

## Important files in this example

pages/__app.js
pages/index.js
