---
layout: post
date:   2015-02-17 16:52:45
---

# Why wasn't my Yeoman Sub-Generator published to NPM?

## TL;DR

Look in your npm module's `package.json` file for the **files** array and add your submodule.

## The Issue:

I published my yeoman generator using `npm publish`, but my sub-generator wasn't being downloaded when I tried `npm install my-cool-module`. I followed the instructions [here](https://docs.npmjs.com/getting-started/publishing-npm-packages) to create a version and publish it, but the sub-generators didn't get published.

I googled forever, then finally found [this StackOverflow thread](http://stackoverflow.com/questions/22855656/yeoman-generator-does-not-include-subgenerator-after-publishing-to-npm) which mentioned the [package.json files array](https://docs.npmjs.com/files/package.json#files), which, if you don't add your sub-generator folders to that list, they do not get published to the NPM registry. Fun!

## The Solution

### Option 1: Add to package.json files array

find this section:

```
"files":[
    "app"
],
```

and add your sub-generator's folder like so:

```
"files":[
    "app",
    "subgen1",
    "subgen2"
],
```

### Option 2: Remove files array from package.json

find this section:

```
"files":[
    "app"
],
```

delete it. 

**note:** your entire directory will be installed when your module is downloaded via `npm install your-awesome-module` if you remove the **files** array.