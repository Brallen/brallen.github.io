# Hello this is the repo for my personal website!

##### You can check out by clicking [here!](https://brallen.github.io/)

##### If you're reading this thanks for taking the time to check it out

## How it was built

This site was originally built using Gatsby but after learning more and more about React and doing some other side projects, I switched to [MUI](https://mui.com/). Gatsby had some built in features that I enjoyed such as lazy load on images and really fast load times for content that I am finding new libraries for. MUI makes up for having a lot of base components to build off of and really easy CSS in JS support. Having everything needed for a component in one file is a big plus. 

Adobe XD was used for all initial design mock-ups and to create the mountains and trees as SVGs. This was my second time using this program and I am quite pleased with it. It pretty simple to use and let's me get the image in my head actually on a screen. I'm sure some professional designers are able to leverage what it can do more but for my needs (and skill level) it works.

This site is hosted on GitHub Pages. I chose GitHub Pages because it was free and offered up an easy way to host a static site. There's no backend or database associated with the site so hosting here was an easy choice.

You might have noticed that the main branch for this is not 'master' but is instead called 'develop'. This was done on purpose because GitHub Pages serves up only what is on the 'master' branch but I needed to compile the TypeScript down to JavaScript. I didn't want to have the compiled code mixed in with the source code so I am using GitHub Actions to take the source code from 'develop' whenever there is a new commit pushed or merged to it, compile it, and then commit only the production ready code to the 'master' branch for GitHub Pages to serve. This way I don't have to worry about manually compiling and committing and I don't have compiled code intermixed with source code. I was originally using Travis CI to do this step but they changed how their service worked and I figured I'd switch to GitHub Actions to keep the CI/CD/Hosting process all under the GitHub umbrella.

## Updating

I normally try to come in and update it as new projects are completed or if some new design tweak is needed. If you have any recommendations for improvements (UX, Accessibility, etc) please add an issue [here!](https://github.com/Brallen/brallen.github.io/issues) and I'll look into adding that to the site.
