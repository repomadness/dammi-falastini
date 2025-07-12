# dammi falastini project

A lightweight, expressive React component library of corner banners and pop-ups for sites to express their solidarity with Palestine.

![palestine flag image](https://raw.githubusercontent.com/repomadness/dammi-falastini/main/public/pal-heart-landscape.svg)

> This isn't the Palestinian flag. Palestine isn't a country for it to have a flag. Palestine is a condition. Every Arab is a Palestinian. Every poor man who carries a gun is a Palestinian. Palestine is the condition of us all.
>
> <cite>- Elias Khoury</cite>

## overview

`dammi-falastini` is a customizable React component library designed to help developers easily add visual indicators to express support for Palestine. Built with accessibility and performance in mind, this library includes animated, responsive, and _themable_ components that can be dropped into any React site.

Whether you're building a blog, portfolio, product site, or platform, these components offer a simple way to take a visible stance with minimal code.

### why this project?

Visibility matters, especially in the face of injustice. As a Lebanese engineer, the Palestinian cause is deeply personal as it's impacted all aspects of my life. It's embedded in our emotions, our history, and our culture. Like most in Lebanon, I grew up with an awareness of the struggle for Palestinian liberation that was undeniable, as the echoes of war, displacement, and resistance are an integral part of the Lebanese collective memory.

This library is a very act of solidarity to help make visible what is often erased, silenced, or forgotten. By building tools that allow people to publicly, creatively, and proudly express support for the brotherly Palestinian people, I hope to encourage others to contribute to a broader culture of empathy, humanity, resistance, and unwavering commitment to justice.

Use whatever skills you have to stand with the oppressed until we're all standing. Please fork, adapt, and remix with the utmost love and without an ounce of fear.

## tech stack

- ⚛️ React with TypeScript
- ⚡️ Powered by Vite
- 📖 Developed with Storybook
- 🧪 VRT with Chromatic
- 💫 Animations with Framer Motion

### peer deps

- `react`
- `react-dom`
- `motion`

## installation

```bash
npm install @repomadness/dammi-falastini
# or for yarn
yarn add @repomadness/dammi-falastini
```

## usage

This package contains:

- `<Keffiyeh />` - a corner banner/page peel component available with both a white (default) and transparent background
- `<PopUpFlag />` - a corner banner that pops up at the bottom of a page, with automatic or hover animation options available
- `<SlideInFlag />` - a corner banner that pops up in the top-right of a page, with automatic or hover animation options available

### Keffiyeh

![keffiyeh component image](https://raw.githubusercontent.com/repomadness/dammi-falastini/main/public/keffiyeh.gif)

```ts
import { Keffiyeh } from "@repomadness/dammi-falastini";

<Keffiyeh scale={1} transparent designColor="red" />;
```

#### options

- `transparent` - the `Keffiyeh` component defaults to a white background, but has a built-in prop to set the background transparent
- `scale` - the component was built with a responsive design, though you can adjust the overall size using the `scale` option (ex. `scale={0.9}` to scale down)
- `designColor` - the primary color of the keffiyeh pattern defaults to black, but can be adjusted to match your theme
- `backgroundColor` - the default background color is white, but can be adjusted to match your theme

### PopUpFlag

![popupflag component image](https://raw.githubusercontent.com/repomadness/dammi-falastini/main/public/pop-up-flag.gif)

```ts
import { PopUpFlag } from "@repomadness/dammi-falastini";

<PopUpFlag scale={1.3} position="left" animationType="hoverSlide" />;
```

#### options

- `scale` - the component was built with a responsive design, though you can adjust the overall size using the `scale` option (ex. `scale={0.9}` to scale down)
- `position` - the position defaults to `right`, but can be updated to `left`
- `animationType` - defaults to `slideIn`, but can be changed to `hoverSlide`
- `initialDelay` - defaults to `0`, use to delay animation

### SlideInFlag

![slideinflag component image](https://raw.githubusercontent.com/repomadness/dammi-falastini/main/public/slide-in-flag.gif)

```ts
import { SlideInFlag } from "@repomadness/dammi-falastini";

<SlideInFlag scale={0.8} animationType="slideIn" initialDelay={1.5} />;
```

#### options

- `scale` - the component was built with a responsive design, though you can adjust the overall size using the `scale` option (ex. `scale={0.9}` to scale down)
- `animationType` - defaults to `slideIn`, but can be changed to `hoverSlide`
- `initialDelay` - defaults to `0`, use to delay animation

## contributions

PRs are welcome. If you have ideas for new components or improvements to existing ones, please open an issue or PR.

```bash
git clone https://github.com/repomadness/dammi-falastini.git
cd dammi-falastini
npm install
npm run storybook
```

## license

MIT © repomadness
Silence is a choice - use freely, stand firmly.
