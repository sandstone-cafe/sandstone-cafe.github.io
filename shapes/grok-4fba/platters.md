# [8800-4fba Platter Buffets](https://grok.com/c/ac4ba6d2-ae12-45b0-b6c3-ed1dfcad4fba?rid=2e14eecd-c072-4a17-8273-32a9e41044ae)

Can you identify the fonts used in this image?   Also, regarding the Irregular quadrilateral shapes with 
"PLATTERS" and "BUFFETS", can you create a clean geometric match

*   the same visual appearance

*   but with clean, consistent SVG geometry - the same angles!

*   ideal for responsive web design
*   no perspective distortion baked in

So I can use them in a website design and be able to change the white border and stone / purple background 
colours and the text?

![](https://assets.grok.com/users/b8cc80f9-31a7-43e3-88a4-458f56536116/8c0c8d44-57e6-4a2f-b78f-eb87b1a5f796/preview-image)

![](https://assets.grok.com/users/b8cc80f9-31a7-43e3-88a4-458f56536116/generated/47afa10d-dc10-4c2e-aeab-3846c4417e8d/image.jpg)

![](https://assets.grok.com/users/b8cc80f9-31a7-43e3-88a4-458f56536116/generated/47afa10d-dc10-4c2e-aeab-3846c4417e8d/image.jpg)

![](https://assets.grok.com/users/b8cc80f9-31a7-43e3-88a4-458f56536116/generated/f3b7ad25-6487-4cc4-9cde-d3df4c7ea08f/image.jpg)

![](https://assets.grok.com/users/b8cc80f9-31a7-43e3-88a4-458f56536116/generated/f3b7ad25-6487-4cc4-9cde-d3df4c7ea08f/image.jpg)

Regarding the Irregular quadrilateral shapes with "PLATTERS" and "BUFFETS", can you create 2 SVGs with a 
clean geometric match

*   the same visual appearance

*   but with clean, consistent SVG geometry - the same angles!

*   ideal for responsive web design
*   no perspective distortion baked in

So I can use them in a website design and be able to change the white border and stone / purple background 
colours and the text?

![](https://assets.grok.com/users/b8cc80f9-31a7-43e3-88a4-458f56536116/generated/79880474-0d5d-4ce5-befa-8a11efa1bde9/image.jpg)

![](https://assets.grok.com/users/b8cc80f9-31a7-43e3-88a4-458f56536116/generated/79880474-0d5d-4ce5-befa-8a11efa1bde9/image.jpg)

![](https://assets.grok.com/users/b8cc80f9-31a7-43e3-88a4-458f56536116/generated/f617d4a7-2cfe-4c2c-9f19-682908af6d76/image.jpg)

![](https://assets.grok.com/users/b8cc80f9-31a7-43e3-88a4-458f56536116/generated/f617d4a7-2cfe-4c2c-9f19-682908af6d76/image.jpg)

Yes, that image with the two shapes - convert them both to 2 clean SVG files, please

![](https://assets.grok.com/users/b8cc80f9-31a7-43e3-88a4-458f56536116/generated/b2349fb0-4a7c-4186-9256-7732a1ee8ca7/image.jpg)

![](https://assets.grok.com/users/b8cc80f9-31a7-43e3-88a4-458f56536116/generated/b2349fb0-4a7c-4186-9256-7732a1ee8ca7/image.jpg)

![](https://assets.grok.com/users/b8cc80f9-31a7-43e3-88a4-458f56536116/generated/a6c2d79e-84ff-41eb-b216-b53f2eaf5e34/image.jpg)

![](https://assets.grok.com/users/b8cc80f9-31a7-43e3-88a4-458f56536116/generated/a6c2d79e-84ff-41eb-b216-b53f2eaf5e34/image.jpg)

what about the simple "SVG" images

Here are clean, perspective-free SVG versions of the two irregular quadrilateral labels ("PLATTERS" and 
"BUFFETS") based on their appearance in the menu.

They use the same approximate angles / slant as visible in the photos (roughly a parallelogram-like shape 
leaning to the right, with ~15–18° shear).

You can easily:

*   change the fill color (background)
*   change the stroke color (white border)
*   change the text content, font, size, color
*   scale them responsively (they use viewBox)

PLATTERS

BUFFETS

### Quick customization examples:

Change background to green and border to black:

Failed to render SVG

Make text white and larger:

Slightly different slant (more / less angled):

Failed to render SVG

### Recommended font replacements

The original appears to use a bold condensed sans-serif (possibly something like Impact, Oswald, Anton, 
or Bebas Neue). You can try:

```css
font-family: 'Anton', 'Bebas Neue', 'Oswald', Impact, sans-serif;
```

or for a slightly more modern condensed look:

```css
font-family: 'Montserrat ExtraBold', 'Roboto Condensed', sans-serif;
```

Let me know if you'd like:

*   different dimensions / proportions
*   rounded corners
*   drop shadow
*   gradient fill
*   exact pixel-accurate angle matching from a photo measurement
*   versions without the white stroke (just the filled shape)

Happy to refine them further!




- - - - - - - - - --  - - - - - 




Here are improved, **more customizable versions** of the two SVGs.

Key improvements:

*   **CSS variables** are used for colors → easy to override with CSS
*   **Text is in its own <g> group** → you can easily rotate, scale, or replace it
*   **Shape is defined once as a <symbol>** → reusable and keeps code DRY
*   **Better proportions** and centering logic
*   **Responsive by default** (viewBox + preserveAspectRatio)
*   **Stroke width, font size, font family, letter-spacing** are all exposed as variables
*   Ready to be styled inline, via <style>, or external CSS

### Shared symbol definition (you can put this once in your HTML)

### PLATTERS label (beige / stone version)

PLATTERS

### BUFFETS label (purple version)

BUFFETS

### Quick ways to customize (examples)

**Change colors via inline style** (most convenient for one-off use):

HTML

Copy

```
<svg class="custom-label platters" style="--bg:#8b7355; --text:#fff; --border:#000;">
  <!-- rest same as above -->
</svg>
```

**Make text uppercase + condensed + larger**:

CSS

Copy

```
.platters text {
  text-transform: uppercase;
  font-size: 54px;
  letter-spacing: 2.5px;
}
```

**Slightly different slant / shape** (replace the polygon points):

Failed to render SVG

**Add subtle shadow** (modern look):

CSS

Copy

```
.custom-label use {
  filter: drop-shadow(3px 4px 5px rgba(0,0,0,0.35));
}
```

**Change font via Google Fonts** (add to <head>):

HTML

Copy

```
<link href="https://fonts.googleapis.com/css2?family=Anton&family=Bebas+Neue&display=swap" rel="stylesheet">
```

Then use \--font-family: 'Anton', sans-serif;

- - - - - --  - - -


