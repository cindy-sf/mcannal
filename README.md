# MyCanal++ 🎬

## Table of contents :
- [Presentation](#presentation)
- [Prerequisite](#prerequisite)
- [Installation](#installation)

## Presentation

MyCanal++ is a wep app allowing you to consult some movies and tv shows powered with [The Movie DB API](https://www.themoviedb.org/documentation/api).
Here is a small overview of the website 👇

<div>
  <img
    src="https://user-images.githubusercontent.com/38938357/160586434-cdfba00e-a620-4ac0-aa43-442bc26da62a.gif"
    alt="First image preview"
  />
</div>
<br />

You can check the [Figma](https://www.figma.com/file/n0CAOvWZ2vDMs1vzhGVpKy/MyCanal%2B%2B?node-id=10%3A964) and the [workflow](https://www.figma.com/proto/n0CAOvWZ2vDMs1vzhGVpKy/MyCanal%2B%2B?node-id=10%3A964&starting-point-node-id=10%3A964&scaling=scale-down) if you want.

## Prerequisite
- ⚠️ As said above, this project is build with The Movie DB API. You have to generate an api key for the proper operation of the application.
You can do it over [here](https://www.themoviedb.org/settings/api)

## Installation
- Clone the project ```git clone https://github.com/cindy-sf/mcannal.git```
- Now, adding the generated Movie DB api key :
    For this, create a `credential.js` file in the root of the project, and add this following line :
```javascript
export const MOVIE_DB_API_KEY = YOUR_MOVIE_DB_API_KEY
```

- Finally, install the dependencies by running `npm i`.
- Congratulations, you are ready to launch the project 🎉.
  Now run `npm run dev`.

Enjoy 😄 !
