# rapiddweller Web challenge

This project is created as part of the rapiddweller's web challenge.

## Quick Overview

The requests:

1. Please create a WordPress website with our rapiddweller theme

Because I don't have any experience with PHP or Wordpress, I decided to build a clone of <https://www.benerator.de/> using mainly NextJS, ReactJS, TailwindCSS instead

2. Make sure this site is not indexed by any crawler/bot.

I used the meta tag in the `<head>` of html to prevent crawler/bot to indexing the page

```html
 <meta name="robots" content="noindex"></meta>
 <meta name="robots" content="nofollow"></meta>
 ```

I also added a `robots.txt` file in the (/public) which will add another layer to make sure crawler and google adsbot bot doesn't crawl the page

```text
User-agent: *
User-agent: AdsBot-Google
Disallow: /
```
