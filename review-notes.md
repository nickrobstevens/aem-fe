# Notes

I've tried to align to the reference site as closely as possible.
Under the hood the 2 site have different design systems, and lifting the CSS from the reference site is not the point of the test.

All up this took me around 3 hours, roughly:
- 1 hour for exploring and understanding the framework
- 1.5 hours for the banner blocks
- .5 hours for the cards

I've implented the banner in 2 ways:
- As an autoblock, there's a bit of data preprocessing that happens here in /scripts/scripts.js
- As a standalone block
And both use the same JS and CSS in source.


Generally in any FE project I'd look to use:
- a CSS framework (bootstrap, tailwind etc) to standardise and simplify the design. 
- build tooling eg CSS preprocessors. Implementing this for this test is overkill.
- some type of templating engine/framework (handlebars through to React), as writing vanillaJS elements is slow and cumbersome. I'd need to spend more time with the framework to understand how to better incorporate this into the dev workflow.

If this were a real project, in addition to the 3 points above:
- I'd clean out the existing css and leverage the CSS framework. At the moment its a bit of a frankenstein. I've tried to encapsulate style as much as possible.
- Parts of the pre-built blocks are useful, Cards pulls a lot from the boilerplate. I expect that these generally need significant customisation based on the design.
