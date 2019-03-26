export interface VanillaTiltSettings {
  reverse?: boolean; // reverse the tilt direction
  max?: number; // max tilt rotation (degrees)
  perspective?: number; // Transform perspective, the lower the more extreme the tilt gets.
  scale?: number; // 2 = 200%, 1.5 = 150%, etc..
  speed?: number; // Speed of the enter/exit transition
  transition?: boolean; // Set a transition on enter/exit.
  axis?: string; // What axis should be disabled. Can be X or Y.
  reset?: boolean; // If the tilt effect has to be reset on exit.
  easing?: string; // Easing on enter/exit.
  glare?: boolean; // if it should have a "glare" effect
  "max-glare"?: number; // the maximum "glare" opacity (1 = 100%, 0.5 = 50%)
  "glare-prerender"?: boolean; // false = VanillaTilt creates the glare elements for you, otherwise
  "mouse-event-element"?: string; // css-selector or link to HTML-element what will be listen mouse events
  gyroscope?: boolean; // Boolean to enable/disable device orientation detection,
  gyroscopeMaxAngleX?: number; // This is the top limit of the device angle on X axis, meaning that a device rotated at this angle would tilt the element as if the mouse was on the right border of the element;
  gyroscopeMinAngleY?: number; // This is the bottom limit of the device angle on Y axis, meaning that a device rotated at this angle would tilt the element as if the mouse was on the top border of the element;
  gyroscopeMaxAngleY?: number; // This is the top limit of the device angle on Y axis, meaning that a device rotated at this angle would tilt the element as if the mouse was on the bottom border of the element;
}
