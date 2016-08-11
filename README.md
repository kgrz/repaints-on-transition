The Problem
===========

Having a transition (timing function, duration) setting on an element
that does a CSS scale `transform` on hover creates a repaint and layout
invalidation on any subsequent elements.

Removing the transition directive in CSS, while still having the scale
transform, avoids these repaints and layouts.



Example
=======

1. Open the `index.html` file in Chrome
2. Go to the `Rendering` tab, check Paint Flashing
3. Hover on one element

Note that all the subsequent rows of items are getting repainted even
though none change.

4. Uncheck Paint Flashing; check Layer Borders
5. Hover on elements

Note that each hover creates a layer out of the hovered over element,
and the group of items that are below the current row.

6. Comment out line number 16 in `styles.css`
7. Go through steps 2-5

Note that only the element currently hovered on gets transformed. No
other layout/paint occurs.


Question
========

1. Is this phenomenon of repaints and/or layouts expected in cases like
   this? Can this be optimized at the browse level? Can this be
   optimized at the app level?

2. I'm aware of the `will-change` property but adding that to every
   `.carousel` block (and *gasp* on every `.image-container`) seems like
   a bad practice, so I'm not sure if this is a good idea. There can be
   about 20 carousel rows at any point of time, which would mean about
   20 new layers!

