# tailwind elements next-js example

## Create a new Next.js project

```sh
npm create-next-app ProjectName
```

Set up tailwind css as described here [tailwind](https://tailwindcss.com/docs/guides/nextjs) and here [postcss](https://tailwindcss.com/docs/installation/using-postcss)

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

## non-functioning components

The examples were taken from [tailwind-elements.com](https://tailwind-elements.com/quick-start/) and adapted for Next.js. I wanted to know how well it works. Unfortunately, the library doesn't seem quite right to me. The JS are sometimes broken and somehow not recognized by default, although they were specified in the plugin (tailwind.config.js). You have to use tricks to make it work and sometimes things break as a result. That's why I thought to myself, what I've done, I've done, but I'm not going to go further with the example. The "_app.js" file and even a separate "_document.js" had to be created. To be fair, there is no documentation for nextjs by Tailwind-Elements. Only for React and Vue. So it can't be compatible. That's what I wanted to find out with this project. It doesn't appear to be 100% compatible and I wouldn't use it in a production project.

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

- pages/__app.js
- pages/_document.js

and all pages/ (components name)

If I misinterpreted something or do you have a better way? Fork my repository and make a push request, I'll be happy to edit it.
