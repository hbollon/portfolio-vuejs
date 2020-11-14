<h1 align="center">VueJS portfolio template</h1>

> Portfolio template using VueJs framework, CosmicJS API and Bootstrap

<p align="center"><strong> Live demo with my personnal data <a href="https://hugobollon.me">here</a> ! </strong></p>

---

## Table of Contents

- [Features](#features)
- [Setup](#project-setup)
- [Edit Content](#how-to-edit-content)
- [Author](#author)
- [Contributing](#-contributing)

---

## Features
- Builded with VueJs framework ✨
- One page layout ✨
- Material design ✨
- Bootstrap 4.5 & SCSS ✨
- Responsive ✨
- Animated layout ✨
- Content managed with CosmicJS API ✨

## Project setup
```
npm install
```
### Compiles and hot-reloads for development
```
npm run serve
```
### Compiles and minifies for production
```
npm run build
```
### Lints and fixes files
```
npm run lint
```
### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## How to edit content
This template have a CMS support with CosmicJS.
You can easily put your content there by creating and linking your cosmicJS account. To do this, you just have to modify the variables contained in the ENV file (API token, bucket slug and read key).

```env
# CosmicJS 
VUE_APP_COSMICJS_TOKEN=" "
VUE_APP_COSMICJS_BUCKET_SLUG=" "
VUE_APP_COSMICJS_BUCKET_READ_KEY=" "
```

You must create this bucket on your CosmicJS account while being careful to respect the slugs I used if you don't want to have to adapt the code!

To do that properly, you must create a new **Object Type** inside of your CosmicJS Bucket with __portfolio-contents__ as slug.
Now you can create required objects inside of it by following my model that you can find [here](https://api.cosmicjs.com/v1/hugobollonme/objects?pretty=true&hide_metafields=false&type=portfolio-contents&read_key=NKbRz4y01nhElqkgN4wK238zl7nuoDq4se8W9yOSIFRE9P4lca&limit=20&props=slug,title,content,metadata,).

## Author

👤 **Hugo Bollon**

* Github: [@hbollon](https://github.com/hbollon)
* LinkedIn: [@Hugo Bollon](https://www.linkedin.com/in/hugobollon/)
* Portfolio: [hugobollon.me](https://www.hugobollon.me)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/hbollon/portfolio-vuejs/issues). 

## Show your support

Give a ⭐️ if this project helped you!
