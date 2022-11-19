# rapiddweller Web challenge

This project is created as part of the rapiddweller's web challenge.

## Quick Overview

The requests:

### 1). Please create a WordPress website with our rapiddweller theme

Because I don't have any experience with PHP or Wordpress, I decided to build a clone of <https://www.benerator.de/> using mainly NextJS, ReactJS, TailwindCSS instead

The URL of the page is at: <https://rapiddweller-challenge.vercel.app>

### 2) Make sure this site is not indexed by any crawler/bot

I used the meta tag in the `<head>` of html to prevent crawler/bot to indexing the page

```html
 <meta name="robots" content="noindex"></meta>
 <meta name="robots" content="nofollow"></meta>
 ```

I also added a `robots.txt` file in the `/public` directory which will add another layer to make sure crawler and google adsbot bot doesn't crawl the page

```text
User-agent: *
Disallow: /
User-agent: AdsBot-Google
Disallow: /
```

### 3) Install the following Google Analytics Tracking-Code in 2 different ways MEASUREMENT ID: G-K74HTLPG33

The following `<script>` tag in the `_app.tsx` file is added to the page to use Google Analytics
Note: `<Script>` tag is a special components used by NextJS framework to manually add in `<script>` to the page

```jsx
  <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=G-K74HTLPG33`}
      />
      <Script id="google-analytics" strategy="lazyOnload">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-K74HTLPG33', {
              page_path: window.location.pathname,
            });
                `}
      </Script>
```

### 4) Create a shortcode [rapiddweller-time-vn] and use it in the theme footer

a) Add the shortcode as function in the functions.php

b) The shortcode should display the date/time as in the following example: 12-Dec-2022@13:55 (HCM) (hint: d-Y-M H:i)

The time function is added in the footer of the page.

I use a the component `DateClock.tsx` to add this date, once the component render to the page, it will only display the time in that exact moment.

But with the help of the `useEffect` hook from React, the date and time will get updated after every 1 second. In other words, after each second the component will re-render with the latest time and date display to the user

Using the helper function `formatDate.ts` I was able to display the date and time followed the format requested

Notes: The time and date will also display based on the Ho Chi Minh city / Vietnam timezone no matter the location of the client / server

## Technologies

This project is created using the following technologies:

- Typescript
- NextJS
- ReactJS
- TailwindCSS

Thanks to NextJS statically generation, this page is fully rendered on the server and will add interactivity by hydration of React once it come to the client which help improve SEO compare with a traditional SPA React application

## How to use in dev mode

Clone / fork the repo

Run the following command

```zsh
npm install
#or
yarn install
#or 
pnpm install
```

Note: you need to have Node install on your computer

Run dev server

```zsh
npm run dev
#or
yarn dev
#or 
pnpm dev
```

Go to `localhost:3000` to view the rendered page

For optimized build on local environment run

```zsh
npm run build
npm run start
#or
yarn build
yarn start
#or 
pnpm dev
pnpm start
```

Go to `localhost:3000` to view the rendered page
