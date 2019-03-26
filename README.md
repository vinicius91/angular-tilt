# AngularTilt

[![npm version](https://badge.fury.io/js/angular-tilt.svg)](https://badge.fury.io/js/angular-tilt)

A 3D tilt implementation for Angular based on the [vanilla-tilt.js](https://github.com/micku7zu/vanilla-tilt.js) and [Tilt.js](https://github.com/gijsroge/tilt.js).

## Usage

Just import the module in the module that you would like to include the directive in your components

```typescript
@NgModule({
  imports: [BrowserModule, BrowserAnimationsModule, AngularTiltModule],
  declarations: [AppComponent, ProjectCardComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

And add the directive to you components

```html
<div class="container" aTilt></div>
```

```html
<div class="container" aTilt [tiltSettings]="tiltSettings"></div>
```

## Install

`yarn add angular-tilt`

or

`npm install --save angular-tilt`

## Credits

Original libraries:

- [vanilla-tilt.js](https://github.com/micku7zu/vanilla-tilt.js);
- [Tilt.js](https://github.com/gijsroge/tilt.js)

## License

MIT License
