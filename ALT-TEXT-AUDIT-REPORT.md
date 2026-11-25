# ALT-TEXT-AUDIT-REPORT — DentaBiome (en-dentabiome.vercel.app)

Audit date: 2026-11-25. Method: every built HTML file was parsed (all `<img>` elements; the site uses no `<picture>`/`<source>` elements and JavaScript adds no images). The same audit ran in a headless Chrome browser against a local server, checking that every image actually loads (naturalWidth > 0).

## Summary

| Metric | Value |
|---|---|
| HTML pages audited | 29 |
| Total `<img>` elements checked | 168 |
| Alt texts corrected during build review | 6 (blog-thumbnail and focus-image alts rewritten after the crops were checked visually, so each one describes what is actually shown; applied everywhere those images appear) |
| Images with suitable descriptive alt text | 168 |
| Decorative images using alt="" | 0 (decorative shapes are CSS/SVG with aria-hidden, not `<img>`) |
| Pass 1 issues | 0 |
| Pass 2 (re-scan) issues | 0 |
| Raster image files verified as real WebP (RIFF/WEBP header) | 24/24 |
| Broken images in browser check | 0 |

**Final verification status: PASSED.** The second scan found no missing, generic, over-long or same-page duplicate alt attributes. Every raster image is a real WebP file.

## Inline SVG icons

Icons that stand in for an image, such as the logo, ingredient icons, product-network icons and reference-card icons, have `role="img"` plus `aria-label` and `<title>` text. That gives them the SVG equivalent of alt text. Purely decorative icons beside a text label are `aria-hidden="true"`, the SVG equivalent of alt="". Labelled: 110. Decorative: 118. Unlabelled and not hidden: 0, confirmed in the browser.

## Path fix (Nov 25, 2026)

All image, stylesheet and link paths are now relative, for example `images/...` and `../images/...`. Every image loads, and shows its alt text, whether the site is opened straight from the zip or served from Vercel. The browser check covered 168 images across 29 pages in both modes, with 0 broken.

Not verified here: the live deployed HTML. The site has not been deployed from this session, so after you deploy, spot-check https://en-dentabiome.vercel.app/ in your browser.

## Page-by-page image list

### /404.html  (0 images)


### /affiliate-disclosure.html  (0 images)


### /alternatives.html  (4 images)

- `images/focus-fresh-breath.webp` — alt: "Fresh cranberries in a bowl beside a blue towel"
- `images/dentabiome-6-bottles.webp` — alt: "DentaBiome bottles grouped as the six-bottle package"
- `images/dentabiome-6-bottles.webp` — alt: "Six-bottle DentaBiome package, 180-day supply"
- `images/dentabiome-6-bottles.webp` — alt: "DentaBiome six-bottle package"

### /benefits.html  (8 images)

- `images/dentabiome-3-bottles.webp` — alt: "Three DentaBiome bottles grouped together"
- `images/benefits-overview.webp` — alt: "DentaBiome display highlighting gum, microbiome and fresh breath support with purple carrots"
- `images/dentabiome-2-bottles.webp` — alt: "Two DentaBiome bottles side by side, 60-day supply"
- `images/dentabiome-6-bottles.webp` — alt: "Six DentaBiome bottles arranged in two rows, 180-day supply"
- `images/dentabiome-3-bottles.webp` — alt: "Three DentaBiome bottles grouped together, 90-day supply"
- `images/dentabiome-6-bottles.webp` — alt: "DentaBiome bottles grouped as the six-bottle package"
- `images/dentabiome-6-bottles.webp` — alt: "Six-bottle DentaBiome package, 180-day supply"
- `images/dentabiome-6-bottles.webp` — alt: "DentaBiome six-bottle package"

### /blog/chewable-vs-capsule.html  (8 images)

- `../images/blog-chewable-vs-capsule.webp` — alt: "Lilac chewable tablets on a marble surface"
- `../images/blog-chewable-vs-capsule.webp` — alt: "Lilac chewable tablets on a marble surface"
- `../images/dentabiome-bottle-sm.webp` — alt: "DentaBiome bottle, daily oral postbiotic"
- `../images/blog-oral-microbiome-basics.webp` — alt: "Whole and sliced purple carrots on a marble surface"
- `../images/blog-cranberry-oral-care.webp` — alt: "Fresh cranberries with green leaves in a stone bowl"
- `../images/blog-daily-oral-routine.webp` — alt: "Sliced purple carrot on a marble stand beside a fresh-breath icon"
- `../images/dentabiome-6-bottles.webp` — alt: "Six-bottle DentaBiome package, 180-day supply"
- `../images/dentabiome-6-bottles.webp` — alt: "DentaBiome six-bottle package"

### /blog/cranberry-oral-care.html  (8 images)

- `../images/blog-cranberry-oral-care.webp` — alt: "Fresh cranberries with green leaves in a stone bowl"
- `../images/blog-cranberry-oral-care.webp` — alt: "Fresh cranberries with green leaves in a stone bowl"
- `../images/dentabiome-bottle-sm.webp` — alt: "DentaBiome bottle, daily oral postbiotic"
- `../images/blog-oral-microbiome-basics.webp` — alt: "Whole and sliced purple carrots on a marble surface"
- `../images/blog-chewable-vs-capsule.webp` — alt: "Lilac chewable tablets on a marble surface"
- `../images/blog-daily-oral-routine.webp` — alt: "Sliced purple carrot on a marble stand beside a fresh-breath icon"
- `../images/dentabiome-6-bottles.webp` — alt: "Six-bottle DentaBiome package, 180-day supply"
- `../images/dentabiome-6-bottles.webp` — alt: "DentaBiome six-bottle package"

### /blog/daily-oral-routine.html  (8 images)

- `../images/blog-daily-oral-routine.webp` — alt: "Sliced purple carrot on a marble stand beside a fresh-breath icon"
- `../images/blog-daily-oral-routine.webp` — alt: "Sliced purple carrot on a marble stand beside a fresh-breath icon"
- `../images/dentabiome-bottle-sm.webp` — alt: "DentaBiome bottle, daily oral postbiotic"
- `../images/blog-oral-microbiome-basics.webp` — alt: "Whole and sliced purple carrots on a marble surface"
- `../images/blog-chewable-vs-capsule.webp` — alt: "Lilac chewable tablets on a marble surface"
- `../images/blog-cranberry-oral-care.webp` — alt: "Fresh cranberries with green leaves in a stone bowl"
- `../images/dentabiome-6-bottles.webp` — alt: "Six-bottle DentaBiome package, 180-day supply"
- `../images/dentabiome-6-bottles.webp` — alt: "DentaBiome six-bottle package"

### /blog/fresh-breath-habits.html  (8 images)

- `../images/blog-fresh-breath-habits.webp` — alt: "Oral microbiome support badge with a tooth icon on a light blue background"
- `../images/blog-fresh-breath-habits.webp` — alt: "Oral microbiome support badge with a tooth icon on a light blue background"
- `../images/dentabiome-bottle-sm.webp` — alt: "DentaBiome bottle, daily oral postbiotic"
- `../images/blog-oral-microbiome-basics.webp` — alt: "Whole and sliced purple carrots on a marble surface"
- `../images/blog-chewable-vs-capsule.webp` — alt: "Lilac chewable tablets on a marble surface"
- `../images/blog-cranberry-oral-care.webp` — alt: "Fresh cranberries with green leaves in a stone bowl"
- `../images/dentabiome-6-bottles.webp` — alt: "Six-bottle DentaBiome package, 180-day supply"
- `../images/dentabiome-6-bottles.webp` — alt: "DentaBiome six-bottle package"

### /blog/index.html  (10 images)

- `../images/blog-oral-microbiome-basics.webp` — alt: "Whole and sliced purple carrots on a marble surface"
- `../images/blog-oral-microbiome-basics.webp` — alt: "Whole and sliced purple carrots on a marble surface"
- `../images/blog-chewable-vs-capsule.webp` — alt: "Lilac chewable tablets on a marble surface"
- `../images/blog-cranberry-oral-care.webp` — alt: "Fresh cranberries with green leaves in a stone bowl"
- `../images/blog-daily-oral-routine.webp` — alt: "Sliced purple carrot on a marble stand beside a fresh-breath icon"
- `../images/blog-purple-carrot-anthocyanins.webp` — alt: "Purple carrots and violet sliced rounds on a marble pedestal"
- `../images/blog-fresh-breath-habits.webp` — alt: "Oral microbiome support badge with a tooth icon on a light blue background"
- `../images/dentabiome-6-bottles.webp` — alt: "DentaBiome bottles grouped as the six-bottle package"
- `../images/dentabiome-6-bottles.webp` — alt: "Six-bottle DentaBiome package, 180-day supply"
- `../images/dentabiome-6-bottles.webp` — alt: "DentaBiome six-bottle package"

### /blog/oral-microbiome-basics.html  (8 images)

- `../images/blog-oral-microbiome-basics.webp` — alt: "Whole and sliced purple carrots on a marble surface"
- `../images/blog-oral-microbiome-basics.webp` — alt: "Whole and sliced purple carrots on a marble surface"
- `../images/dentabiome-bottle-sm.webp` — alt: "DentaBiome bottle, daily oral postbiotic"
- `../images/blog-chewable-vs-capsule.webp` — alt: "Lilac chewable tablets on a marble surface"
- `../images/blog-cranberry-oral-care.webp` — alt: "Fresh cranberries with green leaves in a stone bowl"
- `../images/blog-daily-oral-routine.webp` — alt: "Sliced purple carrot on a marble stand beside a fresh-breath icon"
- `../images/dentabiome-6-bottles.webp` — alt: "Six-bottle DentaBiome package, 180-day supply"
- `../images/dentabiome-6-bottles.webp` — alt: "DentaBiome six-bottle package"

### /blog/purple-carrot-anthocyanins.html  (8 images)

- `../images/blog-purple-carrot-anthocyanins.webp` — alt: "Purple carrots and violet sliced rounds on a marble pedestal"
- `../images/blog-purple-carrot-anthocyanins.webp` — alt: "Purple carrots and violet sliced rounds on a marble pedestal"
- `../images/dentabiome-bottle-sm.webp` — alt: "DentaBiome bottle, daily oral postbiotic"
- `../images/blog-oral-microbiome-basics.webp` — alt: "Whole and sliced purple carrots on a marble surface"
- `../images/blog-chewable-vs-capsule.webp` — alt: "Lilac chewable tablets on a marble surface"
- `../images/blog-cranberry-oral-care.webp` — alt: "Fresh cranberries with green leaves in a stone bowl"
- `../images/dentabiome-6-bottles.webp` — alt: "Six-bottle DentaBiome package, 180-day supply"
- `../images/dentabiome-6-bottles.webp` — alt: "DentaBiome six-bottle package"

### /disclaimer.html  (0 images)


### /faq.html  (4 images)

- `images/dentabiome-bottle.webp` — alt: "DentaBiome bottle with blue cap"
- `images/dentabiome-6-bottles.webp` — alt: "DentaBiome bottles grouped as the six-bottle package"
- `images/dentabiome-6-bottles.webp` — alt: "Six-bottle DentaBiome package, 180-day supply"
- `images/dentabiome-6-bottles.webp` — alt: "DentaBiome six-bottle package"

### /focus-areas/fresh-breath.html  (6 images)

- `../images/focus-fresh-breath.webp` — alt: "Fresh cranberries in a stone bowl with a soft blue towel"
- `../images/focus-fresh-breath.webp` — alt: "Fresh cranberries in a stone bowl with a soft blue towel"
- `../images/dentabiome-bottle.webp` — alt: "DentaBiome oral postbiotic chewable bottle"
- `../images/dentabiome-6-bottles.webp` — alt: "DentaBiome bottles grouped as the six-bottle package"
- `../images/dentabiome-6-bottles.webp` — alt: "Six-bottle DentaBiome package, 180-day supply"
- `../images/dentabiome-6-bottles.webp` — alt: "DentaBiome six-bottle package"

### /focus-areas/gum-comfort.html  (6 images)

- `../images/focus-gum-comfort.webp` — alt: "Whole and sliced purple carrots with green leaves on marble"
- `../images/focus-gum-comfort.webp` — alt: "Whole and sliced purple carrots with green leaves on marble"
- `../images/dentabiome-bottle.webp` — alt: "DentaBiome oral postbiotic chewable bottle"
- `../images/dentabiome-6-bottles.webp` — alt: "DentaBiome bottles grouped as the six-bottle package"
- `../images/dentabiome-6-bottles.webp` — alt: "Six-bottle DentaBiome package, 180-day supply"
- `../images/dentabiome-6-bottles.webp` — alt: "DentaBiome six-bottle package"

### /focus-areas/index.html  (8 images)

- `../images/focus-oral-microbiome.webp` — alt: "DentaBiome bottle on a podium with purple carrots and cranberries"
- `../images/focus-gum-comfort.webp` — alt: "Whole and sliced purple carrots with green leaves on marble"
- `../images/focus-fresh-breath.webp` — alt: "Fresh cranberries in a stone bowl with a soft blue towel"
- `../images/focus-oral-microbiome.webp` — alt: "DentaBiome bottle on a marble podium surrounded by purple carrots and cranberries"
- `../images/focus-teeth-enamel.webp` — alt: "Lilac DentaBiome chewable tablets next to fresh cranberries on marble"
- `../images/dentabiome-6-bottles.webp` — alt: "DentaBiome bottles grouped as the six-bottle package"
- `../images/dentabiome-6-bottles.webp` — alt: "Six-bottle DentaBiome package, 180-day supply"
- `../images/dentabiome-6-bottles.webp` — alt: "DentaBiome six-bottle package"

### /focus-areas/oral-microbiome.html  (6 images)

- `../images/focus-oral-microbiome.webp` — alt: "DentaBiome bottle on a marble podium surrounded by purple carrots and cranberries"
- `../images/focus-oral-microbiome.webp` — alt: "DentaBiome bottle on a marble podium surrounded by purple carrots and cranberries"
- `../images/dentabiome-bottle.webp` — alt: "DentaBiome oral postbiotic chewable bottle"
- `../images/dentabiome-6-bottles.webp` — alt: "DentaBiome bottles grouped as the six-bottle package"
- `../images/dentabiome-6-bottles.webp` — alt: "Six-bottle DentaBiome package, 180-day supply"
- `../images/dentabiome-6-bottles.webp` — alt: "DentaBiome six-bottle package"

### /focus-areas/teeth-and-enamel.html  (6 images)

- `../images/focus-teeth-enamel.webp` — alt: "Lilac DentaBiome chewable tablets next to fresh cranberries on marble"
- `../images/focus-teeth-enamel.webp` — alt: "Lilac DentaBiome chewable tablets next to fresh cranberries on marble"
- `../images/dentabiome-bottle.webp` — alt: "DentaBiome oral postbiotic chewable bottle"
- `../images/dentabiome-6-bottles.webp` — alt: "DentaBiome bottles grouped as the six-bottle package"
- `../images/dentabiome-6-bottles.webp` — alt: "Six-bottle DentaBiome package, 180-day supply"
- `../images/dentabiome-6-bottles.webp` — alt: "DentaBiome six-bottle package"

### /how-it-works.html  (5 images)

- `images/dentabiome-studio-display.webp` — alt: "DentaBiome bottle with purple carrots and cranberries in a bright studio scene"
- `images/how-it-works-routine.webp` — alt: "Cranberries in a stone bowl next to a blue towel, part of a calm daily routine"
- `images/dentabiome-6-bottles.webp` — alt: "DentaBiome bottles grouped as the six-bottle package"
- `images/dentabiome-6-bottles.webp` — alt: "Six-bottle DentaBiome package, 180-day supply"
- `images/dentabiome-6-bottles.webp` — alt: "DentaBiome six-bottle package"

### /index.html  (26 images)

- `images/ingredient-purple-carrot.webp` — alt: "Fresh purple carrots, the source of the purple carrot powder in DentaBiome"
- `images/ingredient-cranberry.webp` — alt: "Ripe cranberries with leaves, representing the cranberry extract in DentaBiome"
- `images/dentabiome-chewable-tablets.webp` — alt: "Lilac Berry Frost DentaBiome chewable tablets on a marble surface"
- `images/ingredient-cranberry-bowl.webp` — alt: "Bowl of fresh cranberries in a bright kitchen setting"
- `images/dentabiome-bottle.webp` — alt: "DentaBiome Daily Oral Postbiotic bottle with blue cap, 30 chewable tablets, enhanced with purple carrot powder and cranberry extract"
- `images/dentabiome-studio-display.webp` — alt: "DentaBiome bottle on a marble pedestal with purple carrots, cranberries and chewable tablets"
- `images/focus-gum-comfort.webp` — alt: "Whole and sliced purple carrots with green leaves on marble"
- `images/focus-fresh-breath.webp` — alt: "Fresh cranberries in a stone bowl with a soft blue towel"
- `images/focus-oral-microbiome.webp` — alt: "DentaBiome bottle on a marble podium surrounded by purple carrots and cranberries"
- `images/focus-teeth-enamel.webp` — alt: "Lilac DentaBiome chewable tablets next to fresh cranberries on marble"
- `images/dentabiome-bottle.webp` — alt: "Front label of the DentaBiome bottle showing 30 chewable tablets, daily oral postbiotic and dietary supplement"
- `images/ingredient-purple-carrot.webp` — alt: "Purple Carrot Powder ingredient"
- `images/ingredient-cranberry.webp` — alt: "Cranberry Extract ingredient"
- `images/how-it-works-routine.webp` — alt: "Bowl of cranberries beside a folded blue towel in a bright bathroom setting"
- `images/dentabiome-2-bottles.webp` — alt: "Two DentaBiome bottles side by side, 60-day supply"
- `images/dentabiome-6-bottles.webp` — alt: "Six DentaBiome bottles arranged in two rows, 180-day supply"
- `images/dentabiome-3-bottles.webp` — alt: "Three DentaBiome bottles grouped together, 90-day supply"
- `images/blog-oral-microbiome-basics.webp` — alt: "Whole and sliced purple carrots on a marble surface"
- `images/blog-chewable-vs-capsule.webp` — alt: "Lilac chewable tablets on a marble surface"
- `images/blog-cranberry-oral-care.webp` — alt: "Fresh cranberries with green leaves in a stone bowl"
- `images/blog-daily-oral-routine.webp` — alt: "Sliced purple carrot on a marble stand beside a fresh-breath icon"
- `images/blog-purple-carrot-anthocyanins.webp` — alt: "Purple carrots and violet sliced rounds on a marble pedestal"
- `images/blog-fresh-breath-habits.webp` — alt: "Oral microbiome support badge with a tooth icon on a light blue background"
- `images/dentabiome-6-bottles.webp` — alt: "Six DentaBiome bottles shown as the best-value package"
- `images/dentabiome-6-bottles.webp` — alt: "Six-bottle DentaBiome package, 180-day supply"
- `images/dentabiome-6-bottles.webp` — alt: "DentaBiome six-bottle package"

### /order.html  (3 images)

- `images/dentabiome-2-bottles.webp` — alt: "Two DentaBiome bottles side by side, 60-day supply"
- `images/dentabiome-6-bottles.webp` — alt: "Six DentaBiome bottles arranged in two rows, 180-day supply"
- `images/dentabiome-3-bottles.webp` — alt: "Three DentaBiome bottles grouped together, 90-day supply"

### /price.html  (7 images)

- `images/dentabiome-6-bottles.webp` — alt: "DentaBiome six-bottle best value package"
- `images/dentabiome-2-bottles.webp` — alt: "Two DentaBiome bottles side by side, 60-day supply"
- `images/dentabiome-6-bottles.webp` — alt: "Six DentaBiome bottles arranged in two rows, 180-day supply"
- `images/dentabiome-3-bottles.webp` — alt: "Three DentaBiome bottles grouped together, 90-day supply"
- `images/dentabiome-6-bottles.webp` — alt: "DentaBiome bottles grouped as the six-bottle package"
- `images/dentabiome-6-bottles.webp` — alt: "Six-bottle DentaBiome package, 180-day supply"
- `images/dentabiome-6-bottles.webp` — alt: "DentaBiome six-bottle package"

### /privacy-policy.html  (0 images)


### /product-overview.html  (7 images)

- `images/dentabiome-bottle.webp` — alt: "DentaBiome bottle front label: daily oral postbiotic, 30 chewable tablets"
- `images/dentabiome-oral-wellness-mockup.webp` — alt: "DentaBiome daily oral postbiotic display with purple carrots, cranberries and chewable tablets on a marble pedestal"
- `images/ingredient-purple-carrot.webp` — alt: "Purple Carrot Powder ingredient"
- `images/ingredient-cranberry.webp` — alt: "Cranberry Extract ingredient"
- `images/dentabiome-6-bottles.webp` — alt: "DentaBiome bottles grouped as the six-bottle package"
- `images/dentabiome-6-bottles.webp` — alt: "Six-bottle DentaBiome package, 180-day supply"
- `images/dentabiome-6-bottles.webp` — alt: "DentaBiome six-bottle package"

### /product-review.html  (3 images)

- `images/dentabiome-bottle.webp` — alt: "DentaBiome bottle reviewed: daily oral postbiotic chewable"
- `images/dentabiome-6-bottles.webp` — alt: "Six-bottle DentaBiome package, 180-day supply"
- `images/dentabiome-6-bottles.webp` — alt: "DentaBiome six-bottle package"

### /pros-and-cons.html  (4 images)

- `images/focus-teeth-enamel.webp` — alt: "DentaBiome chewable tablets and cranberries on marble"
- `images/dentabiome-6-bottles.webp` — alt: "DentaBiome bottles grouped as the six-bottle package"
- `images/dentabiome-6-bottles.webp` — alt: "Six-bottle DentaBiome package, 180-day supply"
- `images/dentabiome-6-bottles.webp` — alt: "DentaBiome six-bottle package"

### /reviews.html  (4 images)

- `images/dentabiome-6-bottles.webp` — alt: "Six DentaBiome bottles in two rows"
- `images/dentabiome-6-bottles.webp` — alt: "DentaBiome bottles grouped as the six-bottle package"
- `images/dentabiome-6-bottles.webp` — alt: "Six-bottle DentaBiome package, 180-day supply"
- `images/dentabiome-6-bottles.webp` — alt: "DentaBiome six-bottle package"

### /terms.html  (0 images)


### /where-to-buy.html  (3 images)

- `images/dentabiome-3-bottles.webp` — alt: "Three DentaBiome bottles ready to order"
- `images/dentabiome-6-bottles.webp` — alt: "Six-bottle DentaBiome package, 180-day supply"
- `images/dentabiome-6-bottles.webp` — alt: "DentaBiome six-bottle package"
