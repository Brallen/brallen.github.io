# Hello this is the repo for my personal website!

##### You can check out by clicking [here!](https://brallen.github.io/)

##### If you're reading this thanks for taking the time to check it out

## How it was built

This site was built using [Gatsby](https://www.gatsbyjs.com/). I chose this framework as a way to scrape the rust of what 
I used to know about React. Gatsby also had some built in features that I enjoyed such as lazy load on images and really fast load times for content.

Adobe XD was used for all initial design mock-ups and to create the mountains and trees as SVGs. This was my second time using 
this program and I am quite pleased with it. It pretty simple to use and let's me get the image in my head actually on a screen. 
I'm sure some professional designers are able to leverage what it can do more but for my needs (and skill level) it works.

This site is hosted on GitHub Pages. I chose GitHub Pages because it was free and offered up an easy way to host a static site.

You might have noticed that the main branch for this is not 'master' but is instead called 'develop'. This was 
done on purpose because GitHub Pages serves up only what is on the 'master' branch but Gatsby needs to compile its files to static HTML, CSS, and 
JavaScript. I didn't want to have the compiled code mixed in with the source code so I am using [Travis CI](https://travis-ci.org/) to take the source 
code from 'develop' whenever there is a new commit pushed or merged to it, compile it, and then commit only the production ready code to the 'master' branch 
for GitHub Pages to serve. This way I don't have to worry about manually compiling and committing and I don't have compiled code intermixed with source code.

## Updating

I normally try to come in and update it as new projects are completed or if some new design tweak is needed. If you have 
any recommendations for improvements (UX, Accessibility, etc) please add an issue 
[here!](https://github.com/Brallen/brallen.github.io/issues) and I'll look into adding that to the site.
