import { VanillaTiltSettings } from "./angular-tilt-settings.model";
import { Directive, ElementRef, Input } from "@angular/core";
import { VanillaTilt } from "./angular-tilt";

@Directive({
  selector: "[atAngularTilt]"
})
export class AngularTiltDirective {
  tilt: any;
  @Input("tiltSettings") tiltSettings: VanillaTiltSettings;
  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.tilt = new VanillaTilt(this.el.nativeElement, this.tiltSettings);
  }
}
