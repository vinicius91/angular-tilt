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

To customize the tile settings, pass tiltSettings configurations as object
```html
<div class="container" aTilt [tiltSettings]="tiltSettings"></div>
```

```
tiltSettings = {
    reverse:                false,
    max:                    15,
    perspective:            1000,
    scale:                  1,
    speed:                  300,
    transition:             true,
    axis:                   null,
    reset:                  true,
    glare:                  false,
    "max-glare":            1,
    "glare-prerender":      false,
    "mouse-event-element":  null,
    gyroscope:              true,
    gyroscopeMaxAngleX:     45,
    gyroscopeMinAngleY:     -45,
    gyroscopeMaxAngleY:     45,
};

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
