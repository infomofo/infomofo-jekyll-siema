# infomofo.com v2

This is a redesign of my personal website using the static site generator [Jekyll](https://jekyllrb.com/) using [github pages](https://jekyllrb.com/docs/github-pages/).

## Local testing

`bundle install`
`bundle exec jekyll serve`

## Deploy

The master branch is automatically deployed to github pages.

## Image optimization

Images can be optimized for web delivery just scaled on height maintaining aspect ratio using the following command (where "600" is the height).

`mogrify -geometry x600 -sampling-factor 4:2:0 -strip -quality 85 -interlace JPEG image.png`

i.e.

`mogrify -geometry x128 -sampling-factor 4:2:0 -strip -quality 85 -interlace JPEG _heads/*`
`mogrify -geometry x160 -sampling-factor 4:2:0 -strip -quality 85 -interlace JPEG _tops/*`
`mogrify -geometry x200 -sampling-factor 4:2:0 -strip -quality 85 -interlace JPEG _bottoms/*`
`mogrify -geometry x80 -sampling-factor 4:2:0 -strip -quality 85 -interlace JPEG _shoes/*`
`mogrify -geometry x300 -sampling-factor 4:2:0 -strip -quality 85 -interlace JPEG _projects/*`