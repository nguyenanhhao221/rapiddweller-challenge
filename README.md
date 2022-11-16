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
 ```

There is another approach which is to create a `robot.txt` file and add in the following lines:

```plain
User-agent: *
Disallow: /
```

This approach would prevent bots/crawler from crawling the page, but if there is another website that have link to this page, Google will still be able to index this page.

So I choose the first approach which means crawlers can still come to the page, but it prevents from indexing and won't let the page appear in the search result
