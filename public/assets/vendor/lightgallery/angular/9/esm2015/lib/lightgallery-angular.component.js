import { Component, Input } from "@angular/core";
import lightGallery from "lightgallery";
import * as i0 from "@angular/core";
const _c0 = ["*"];
const LgMethods = {
  onAfterAppendSlide: "lgAfterAppendSlide",
  onInit: "lgInit",
  onHasVideo: "lgHasVideo",
  onContainerResize: "lgContainerResize",
  onUpdateSlides: "lgUpdateSlides",
  onAfterAppendSubHtml: "lgAfterAppendSubHtml",
  onBeforeOpen: "lgBeforeOpen",
  onAfterOpen: "lgAfterOpen",
  onSlideItemLoad: "lgSlideItemLoad",
  onBeforeSlide: "lgBeforeSlide",
  onAfterSlide: "lgAfterSlide",
  onPosterClick: "lgPosterClick",
  onDragStart: "lgDragStart",
  onDragMove: "lgDragMove",
  onDragEnd: "lgDragEnd",
  onBeforeNextSlide: "lgBeforeNextSlide",
  onBeforePrevSlide: "lgBeforePrevSlide",
  onBeforeClose: "lgBeforeClose",
  onAfterClose: "lgAfterClose",
  onRotateLeft: "lgRotateLeft",
  onRotateRight: "lgRotateRight",
  onFlipHorizontal: "lgFlipHorizontal",
  onFlipVertical: "lgFlipVertical",
};
export class LightgalleryComponent {
  constructor(_elementRef) {
    this._elementRef = _elementRef;
    this.lgInitialized = false;
    this._elementRef = _elementRef;
  }
  ngAfterViewChecked() {
    if (!this.lgInitialized) {
      this.registerEvents();
      this.LG = lightGallery(this._elementRef.nativeElement, this.settings);
      this.lgInitialized = true;
    }
  }
  ngOnDestroy() {
    this.LG.destroy();
    this.lgInitialized = false;
  }
  registerEvents() {
    if (this.onAfterAppendSlide) {
      this._elementRef.nativeElement.addEventListener(
        LgMethods.onAfterAppendSlide,
        (event) => {
          this.onAfterAppendSlide && this.onAfterAppendSlide(event.detail);
        },
      );
    }
    if (this.onInit) {
      this._elementRef.nativeElement.addEventListener(
        LgMethods.onInit,
        (event) => {
          this.onInit && this.onInit(event.detail);
        },
      );
    }
    if (this.onHasVideo) {
      this._elementRef.nativeElement.addEventListener(
        LgMethods.onHasVideo,
        (event) => {
          this.onHasVideo && this.onHasVideo(event.detail);
        },
      );
    }
    if (this.onContainerResize) {
      this._elementRef.nativeElement.addEventListener(
        LgMethods.onContainerResize,
        (event) => {
          this.onContainerResize && this.onContainerResize(event.detail);
        },
      );
    }
    if (this.onAfterAppendSubHtml) {
      this._elementRef.nativeElement.addEventListener(
        LgMethods.onAfterAppendSubHtml,
        (event) => {
          this.onAfterAppendSubHtml && this.onAfterAppendSubHtml(event.detail);
        },
      );
    }
    if (this.onBeforeOpen) {
      this._elementRef.nativeElement.addEventListener(
        LgMethods.onBeforeOpen,
        (event) => {
          this.onBeforeOpen && this.onBeforeOpen(event.detail);
        },
      );
    }
    if (this.onAfterOpen) {
      this._elementRef.nativeElement.addEventListener(
        LgMethods.onAfterOpen,
        (event) => {
          this.onAfterOpen && this.onAfterOpen(event.detail);
        },
      );
    }
    if (this.onSlideItemLoad) {
      this._elementRef.nativeElement.addEventListener(
        LgMethods.onSlideItemLoad,
        (event) => {
          this.onSlideItemLoad && this.onSlideItemLoad(event.detail);
        },
      );
    }
    if (this.onBeforeSlide) {
      this._elementRef.nativeElement.addEventListener(
        LgMethods.onBeforeSlide,
        (event) => {
          this.onBeforeSlide && this.onBeforeSlide(event.detail);
        },
      );
    }
    if (this.onAfterSlide) {
      this._elementRef.nativeElement.addEventListener(
        LgMethods.onAfterSlide,
        (event) => {
          this.onAfterSlide && this.onAfterSlide(event.detail);
        },
      );
    }
    if (this.onPosterClick) {
      this._elementRef.nativeElement.addEventListener(
        LgMethods.onPosterClick,
        (event) => {
          this.onPosterClick && this.onPosterClick(event.detail);
        },
      );
    }
    if (this.onDragStart) {
      this._elementRef.nativeElement.addEventListener(
        LgMethods.onDragStart,
        (event) => {
          this.onDragStart && this.onDragStart(event.detail);
        },
      );
    }
    if (this.onDragMove) {
      this._elementRef.nativeElement.addEventListener(
        LgMethods.onDragMove,
        (event) => {
          this.onDragMove && this.onDragMove(event.detail);
        },
      );
    }
    if (this.onDragEnd) {
      this._elementRef.nativeElement.addEventListener(
        LgMethods.onDragEnd,
        (event) => {
          this.onDragEnd && this.onDragEnd(event.detail);
        },
      );
    }
    if (this.onBeforeNextSlide) {
      this._elementRef.nativeElement.addEventListener(
        LgMethods.onBeforeNextSlide,
        (event) => {
          this.onBeforeNextSlide && this.onBeforeNextSlide(event.detail);
        },
      );
    }
    if (this.onBeforePrevSlide) {
      this._elementRef.nativeElement.addEventListener(
        LgMethods.onBeforePrevSlide,
        (event) => {
          this.onBeforePrevSlide && this.onBeforePrevSlide(event.detail);
        },
      );
    }
    if (this.onBeforeClose) {
      this._elementRef.nativeElement.addEventListener(
        LgMethods.onBeforeClose,
        (event) => {
          this.onBeforeClose && this.onBeforeClose(event.detail);
        },
      );
    }
    if (this.onAfterClose) {
      this._elementRef.nativeElement.addEventListener(
        LgMethods.onAfterClose,
        (event) => {
          this.onAfterClose && this.onAfterClose(event.detail);
        },
      );
    }
    if (this.onRotateLeft) {
      this._elementRef.nativeElement.addEventListener(
        LgMethods.onRotateLeft,
        (event) => {
          this.onRotateLeft && this.onRotateLeft(event.detail);
        },
      );
    }
    if (this.onRotateRight) {
      this._elementRef.nativeElement.addEventListener(
        LgMethods.onRotateRight,
        (event) => {
          this.onRotateRight && this.onRotateRight(event.detail);
        },
      );
    }
    if (this.onFlipHorizontal) {
      this._elementRef.nativeElement.addEventListener(
        LgMethods.onFlipHorizontal,
        (event) => {
          this.onFlipHorizontal && this.onFlipHorizontal(event.detail);
        },
      );
    }
    if (this.onFlipVertical) {
      this._elementRef.nativeElement.addEventListener(
        LgMethods.onFlipVertical,
        (event) => {
          this.onFlipVertical && this.onFlipVertical(event.detail);
        },
      );
    }
  }
}
LightgalleryComponent.ɵfac = function LightgalleryComponent_Factory(t) {
  return new (t || LightgalleryComponent)(i0.ɵɵdirectiveInject(i0.ElementRef));
};
LightgalleryComponent.ɵcmp = i0.ɵɵdefineComponent({
  type: LightgalleryComponent,
  selectors: [["lightgallery"]],
  inputs: {
    settings: "settings",
    onAfterAppendSlide: "onAfterAppendSlide",
    onInit: "onInit",
    onHasVideo: "onHasVideo",
    onContainerResize: "onContainerResize",
    onAfterAppendSubHtml: "onAfterAppendSubHtml",
    onBeforeOpen: "onBeforeOpen",
    onAfterOpen: "onAfterOpen",
    onSlideItemLoad: "onSlideItemLoad",
    onBeforeSlide: "onBeforeSlide",
    onAfterSlide: "onAfterSlide",
    onPosterClick: "onPosterClick",
    onDragStart: "onDragStart",
    onDragMove: "onDragMove",
    onDragEnd: "onDragEnd",
    onBeforeNextSlide: "onBeforeNextSlide",
    onBeforePrevSlide: "onBeforePrevSlide",
    onBeforeClose: "onBeforeClose",
    onAfterClose: "onAfterClose",
    onRotateLeft: "onRotateLeft",
    onRotateRight: "onRotateRight",
    onFlipHorizontal: "onFlipHorizontal",
    onFlipVertical: "onFlipVertical",
  },
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function LightgalleryComponent_Template(rf, ctx) {
    if (rf & 1) {
      i0.ɵɵprojectionDef();
      i0.ɵɵprojection(0);
    }
  },
  encapsulation: 2,
});
/*@__PURE__*/ (function () {
  i0.ɵsetClassMetadata(
    LightgalleryComponent,
    [
      {
        type: Component,
        args: [
          {
            selector: "lightgallery",
            template: "<ng-content></ng-content>",
            styles: [],
          },
        ],
      },
    ],
    function () {
      return [{ type: i0.ElementRef }];
    },
    {
      settings: [
        {
          type: Input,
        },
      ],
      onAfterAppendSlide: [
        {
          type: Input,
        },
      ],
      onInit: [
        {
          type: Input,
        },
      ],
      onHasVideo: [
        {
          type: Input,
        },
      ],
      onContainerResize: [
        {
          type: Input,
        },
      ],
      onAfterAppendSubHtml: [
        {
          type: Input,
        },
      ],
      onBeforeOpen: [
        {
          type: Input,
        },
      ],
      onAfterOpen: [
        {
          type: Input,
        },
      ],
      onSlideItemLoad: [
        {
          type: Input,
        },
      ],
      onBeforeSlide: [
        {
          type: Input,
        },
      ],
      onAfterSlide: [
        {
          type: Input,
        },
      ],
      onPosterClick: [
        {
          type: Input,
        },
      ],
      onDragStart: [
        {
          type: Input,
        },
      ],
      onDragMove: [
        {
          type: Input,
        },
      ],
      onDragEnd: [
        {
          type: Input,
        },
      ],
      onBeforeNextSlide: [
        {
          type: Input,
        },
      ],
      onBeforePrevSlide: [
        {
          type: Input,
        },
      ],
      onBeforeClose: [
        {
          type: Input,
        },
      ],
      onAfterClose: [
        {
          type: Input,
        },
      ],
      onRotateLeft: [
        {
          type: Input,
        },
      ],
      onRotateRight: [
        {
          type: Input,
        },
      ],
      onFlipHorizontal: [
        {
          type: Input,
        },
      ],
      onFlipVertical: [
        {
          type: Input,
        },
      ],
    },
  );
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlnaHRnYWxsZXJ5LWFuZ3VsYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbGlnaHRnYWxsZXJ5L2FuZ3VsYXIvOS8iLCJzb3VyY2VzIjpbImxpYi9saWdodGdhbGxlcnktYW5ndWxhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBYyxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxZQUFZLE1BQU0sY0FBYyxDQUFDOzs7QUEwQnhDLE1BQU0sU0FBUyxHQUFHO0lBQ2Qsa0JBQWtCLEVBQUUsb0JBQW9CO0lBQ3hDLE1BQU0sRUFBRSxRQUFRO0lBQ2hCLFVBQVUsRUFBRSxZQUFZO0lBQ3hCLGlCQUFpQixFQUFFLG1CQUFtQjtJQUN0QyxjQUFjLEVBQUUsZ0JBQWdCO0lBQ2hDLG9CQUFvQixFQUFFLHNCQUFzQjtJQUM1QyxZQUFZLEVBQUUsY0FBYztJQUM1QixXQUFXLEVBQUUsYUFBYTtJQUMxQixlQUFlLEVBQUUsaUJBQWlCO0lBQ2xDLGFBQWEsRUFBRSxlQUFlO0lBQzlCLFlBQVksRUFBRSxjQUFjO0lBQzVCLGFBQWEsRUFBRSxlQUFlO0lBQzlCLFdBQVcsRUFBRSxhQUFhO0lBQzFCLFVBQVUsRUFBRSxZQUFZO0lBQ3hCLFNBQVMsRUFBRSxXQUFXO0lBQ3RCLGlCQUFpQixFQUFFLG1CQUFtQjtJQUN0QyxpQkFBaUIsRUFBRSxtQkFBbUI7SUFDdEMsYUFBYSxFQUFFLGVBQWU7SUFDOUIsWUFBWSxFQUFFLGNBQWM7SUFDNUIsWUFBWSxFQUFFLGNBQWM7SUFDNUIsYUFBYSxFQUFFLGVBQWU7SUFDOUIsZ0JBQWdCLEVBQUUsa0JBQWtCO0lBQ3BDLGNBQWMsRUFBRSxnQkFBZ0I7Q0FDbkMsQ0FBQztBQU9GLE1BQU0sT0FBTyxxQkFBcUI7SUFHOUIsWUFBb0IsV0FBdUI7UUFBdkIsZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUFEbkMsa0JBQWEsR0FBRyxLQUFLLENBQUM7UUFF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QixFQUFFLEVBQUU7Z0JBQ3BCLElBQUksQ0FBQyxjQUFjLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDN0QsQ0FBQyxDQUFrQixDQUN0QixDQUFDO1NBQ0w7SUFDTCxDQUFDOzswRkFyT1EscUJBQXFCOzBEQUFyQixxQkFBcUI7O1FBSG5CLGtCQUFZOztrREFHZCxxQkFBcUI7Y0FMakMsU0FBUztlQUFDO2dCQUNQLFFBQVEsRUFBRSxjQUFjO2dCQUN4QixRQUFRLEVBQUUsMkJBQTJCO2dCQUNyQyxNQUFNLEVBQUUsRUFBRTthQUNiOztrQkFRSSxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IGxpZ2h0R2FsbGVyeSBmcm9tICdsaWdodGdhbGxlcnknO1xuaW1wb3J0IHtcbiAgICBBZnRlckFwcGVuZFN1Ykh0bWxEZXRhaWwsXG4gICAgQWZ0ZXJDbG9zZURldGFpbCxcbiAgICBBZnRlck9wZW5EZXRhaWwsXG4gICAgQWZ0ZXJTbGlkZURldGFpbCxcbiAgICBCZWZvcmVDbG9zZURldGFpbCxcbiAgICBCZWZvcmVOZXh0U2xpZGVEZXRhaWwsXG4gICAgQmVmb3JlT3BlbkRldGFpbCxcbiAgICBCZWZvcmVQcmV2U2xpZGVEZXRhaWwsXG4gICAgQmVmb3JlU2xpZGVEZXRhaWwsXG4gICAgQ29udGFpbmVyUmVzaXplRGV0YWlsLFxuICAgIERyYWdFbmREZXRhaWwsXG4gICAgRHJhZ01vdmVEZXRhaWwsXG4gICAgRHJhZ1N0YXJ0RGV0YWlsLFxuICAgIEZsaXBIb3Jpem9udGFsRGV0YWlsLFxuICAgIEZsaXBWZXJ0aWNhbERldGFpbCxcbiAgICBJbml0RGV0YWlsLFxuICAgIFBvc3RlckNsaWNrRGV0YWlsLFxuICAgIFJvdGF0ZUxlZnREZXRhaWwsXG4gICAgUm90YXRlUmlnaHREZXRhaWwsXG4gICAgU2xpZGVJdGVtTG9hZERldGFpbCxcbn0gZnJvbSAnbGlnaHRnYWxsZXJ5L2xnLWV2ZW50cyc7XG5pbXBvcnQgeyBMaWdodEdhbGxlcnlTZXR0aW5ncyB9IGZyb20gJ2xpZ2h0Z2FsbGVyeS9sZy1zZXR0aW5ncyc7XG5pbXBvcnQgeyBMaWdodEdhbGxlcnkgfSBmcm9tICdsaWdodGdhbGxlcnkvbGlnaHRnYWxsZXJ5JztcblxuY29uc3QgTGdNZXRob2RzID0ge1xuICAgIG9uQWZ0ZXJBcHBlbmRTbGlkZTogJ2xnQWZ0ZXJBcHBlbmRTbGlkZScsXG4gICAgb25Jbml0OiAnbGdJbml0JyxcbiAgICBvbkhhc1ZpZGVvOiAnbGdIYXNWaWRlbycsXG4gICAgb25Db250YWluZXJSZXNpemU6ICdsZ0NvbnRhaW5lclJlc2l6ZScsXG4gICAgb25VcGRhdGVTbGlkZXM6ICdsZ1VwZGF0ZVNsaWRlcycsXG4gICAgb25BZnRlckFwcGVuZFN1Ykh0bWw6ICdsZ0FmdGVyQXBwZW5kU3ViSHRtbCcsXG4gICAgb25CZWZvcmVPcGVuOiAnbGdCZWZvcmVPcGVuJyxcbiAgICBvbkFmdGVyT3BlbjogJ2xnQWZ0ZXJPcGVuJyxcbiAgICBvblNsaWRlSXRlbUxvYWQ6ICdsZ1NsaWRlSXRlbUxvYWQnLFxuICAgIG9uQmVmb3JlU2xpZGU6ICdsZ0JlZm9yZVNsaWRlJyxcbiAgICBvbkFmdGVyU2xpZGU6ICdsZ0FmdGVyU2xpZGUnLFxuICAgIG9uUG9zdGVyQ2xpY2s6ICdsZ1Bvc3RlckNsaWNrJyxcbiAgICBvbkRyYWdTdGFydDogJ2xnRHJhZ1N0YXJ0JyxcbiAgICBvbkRyYWdNb3ZlOiAnbGdEcmFnTW92ZScsXG4gICAgb25EcmFnRW5kOiAnbGdEcmFnRW5kJyxcbiAgICBvbkJlZm9yZU5leHRTbGlkZTogJ2xnQmVmb3JlTmV4dFNsaWRlJyxcbiAgICBvbkJlZm9yZVByZXZTbGlkZTogJ2xnQmVmb3JlUHJldlNsaWRlJyxcbiAgICBvbkJlZm9yZUNsb3NlOiAnbGdCZWZvcmVDbG9zZScsXG4gICAgb25BZnRlckNsb3NlOiAnbGdBZnRlckNsb3NlJyxcbiAgICBvblJvdGF0ZUxlZnQ6ICdsZ1JvdGF0ZUxlZnQnLFxuICAgIG9uUm90YXRlUmlnaHQ6ICdsZ1JvdGF0ZVJpZ2h0JyxcbiAgICBvbkZsaXBIb3Jpem9udGFsOiAnbGdGbGlwSG9yaXpvbnRhbCcsXG4gICAgb25GbGlwVmVydGljYWw6ICdsZ0ZsaXBWZXJ0aWNhbCcsXG59O1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2xpZ2h0Z2FsbGVyeScsXG4gICAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+JyxcbiAgICBzdHlsZXM6IFtdLFxufSlcbmV4cG9ydCBjbGFzcyBMaWdodGdhbGxlcnlDb21wb25lbnQge1xuICAgIHByaXZhdGUgTEchOiBMaWdodEdhbGxlcnk7XG4gICAgcHJpdmF0ZSBsZ0luaXRpYWxpemVkID0gZmFsc2U7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xuICAgICAgICB0aGlzLl9lbGVtZW50UmVmID0gX2VsZW1lbnRSZWY7XG4gICAgfVxuXG4gICAgQElucHV0KCkgc2V0dGluZ3MhOiBMaWdodEdhbGxlcnlTZXR0aW5ncztcbiAgICBASW5wdXQoKSBvbkFmdGVyQXBwZW5kU2xpZGU/OiAoZGV0YWlsOiBBZnRlclNsaWRlRGV0YWlsKSA9PiB2b2lkO1xuICAgIEBJbnB1dCgpIG9uSW5pdD86IChkZXRhaWw6IEluaXREZXRhaWwpID0+IHZvaWQ7XG4gICAgQElucHV0KCkgb25IYXNWaWRlbz86IChkZXRhaWw6IEluaXREZXRhaWwpID0+IHZvaWQ7XG4gICAgQElucHV0KCkgb25Db250YWluZXJSZXNpemU/OiAoZGV0YWlsOiBDb250YWluZXJSZXNpemVEZXRhaWwpID0+IHZvaWQ7XG4gICAgQElucHV0KCkgb25BZnRlckFwcGVuZFN1Ykh0bWw/OiAoZGV0YWlsOiBBZnRlckFwcGVuZFN1Ykh0bWxEZXRhaWwpID0+IHZvaWQ7XG4gICAgQElucHV0KCkgb25CZWZvcmVPcGVuPzogKGRldGFpbDogQmVmb3JlT3BlbkRldGFpbCkgPT4gdm9pZDtcbiAgICBASW5wdXQoKSBvbkFmdGVyT3Blbj86IChkZXRhaWw6IEFmdGVyT3BlbkRldGFpbCkgPT4gdm9pZDtcbiAgICBASW5wdXQoKSBvblNsaWRlSXRlbUxvYWQ/OiAoZGV0YWlsOiBTbGlkZUl0ZW1Mb2FkRGV0YWlsKSA9PiB2b2lkO1xuICAgIEBJbnB1dCgpIG9uQmVmb3JlU2xpZGU/OiAoZGV0YWlsOiBCZWZvcmVTbGlkZURldGFpbCkgPT4gdm9pZDtcbiAgICBASW5wdXQoKSBvbkFmdGVyU2xpZGU/OiAoZGV0YWlsOiBBZnRlclNsaWRlRGV0YWlsKSA9PiB2b2lkO1xuICAgIEBJbnB1dCgpIG9uUG9zdGVyQ2xpY2s/OiAoZGV0YWlsOiBQb3N0ZXJDbGlja0RldGFpbCkgPT4gdm9pZDtcbiAgICBASW5wdXQoKSBvbkRyYWdTdGFydD86IChkZXRhaWw6IERyYWdTdGFydERldGFpbCkgPT4gdm9pZDtcbiAgICBASW5wdXQoKSBvbkRyYWdNb3ZlPzogKGRldGFpbDogRHJhZ01vdmVEZXRhaWwpID0+IHZvaWQ7XG4gICAgQElucHV0KCkgb25EcmFnRW5kPzogKGRldGFpbDogRHJhZ0VuZERldGFpbCkgPT4gdm9pZDtcbiAgICBASW5wdXQoKSBvbkJlZm9yZU5leHRTbGlkZT86IChkZXRhaWw6IEJlZm9yZU5leHRTbGlkZURldGFpbCkgPT4gdm9pZDtcbiAgICBASW5wdXQoKSBvbkJlZm9yZVByZXZTbGlkZT86IChkZXRhaWw6IEJlZm9yZVByZXZTbGlkZURldGFpbCkgPT4gdm9pZDtcbiAgICBASW5wdXQoKSBvbkJlZm9yZUNsb3NlPzogKGRldGFpbDogQmVmb3JlQ2xvc2VEZXRhaWwpID0+IHZvaWQ7XG4gICAgQElucHV0KCkgb25BZnRlckNsb3NlPzogKGRldGFpbDogQWZ0ZXJDbG9zZURldGFpbCkgPT4gdm9pZDtcbiAgICBASW5wdXQoKSBvblJvdGF0ZUxlZnQ/OiAoZGV0YWlsOiBSb3RhdGVMZWZ0RGV0YWlsKSA9PiB2b2lkO1xuICAgIEBJbnB1dCgpIG9uUm90YXRlUmlnaHQ/OiAoZGV0YWlsOiBSb3RhdGVSaWdodERldGFpbCkgPT4gdm9pZDtcbiAgICBASW5wdXQoKSBvbkZsaXBIb3Jpem9udGFsPzogKGRldGFpbDogRmxpcEhvcml6b250YWxEZXRhaWwpID0+IHZvaWQ7XG4gICAgQElucHV0KCkgb25GbGlwVmVydGljYWw/OiAoZGV0YWlsOiBGbGlwVmVydGljYWxEZXRhaWwpID0+IHZvaWQ7XG5cbiAgICBuZ0FmdGVyVmlld0NoZWNrZWQoKTogdm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5sZ0luaXRpYWxpemVkKSB7XG4gICAgICAgICAgICB0aGlzLnJlZ2lzdGVyRXZlbnRzKCk7XG4gICAgICAgICAgICB0aGlzLkxHID0gbGlnaHRHYWxsZXJ5KFxuICAgICAgICAgICAgICAgIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudCxcbiAgICAgICAgICAgICAgICB0aGlzLnNldHRpbmdzLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHRoaXMubGdJbml0aWFsaXplZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5MRy5kZXN0cm95KCk7XG4gICAgICAgIHRoaXMubGdJbml0aWFsaXplZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIHByaXZhdGUgcmVnaXN0ZXJFdmVudHMoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm9uQWZ0ZXJBcHBlbmRTbGlkZSkge1xuICAgICAgICAgICAgdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICAgICAgTGdNZXRob2RzLm9uQWZ0ZXJBcHBlbmRTbGlkZSxcbiAgICAgICAgICAgICAgICAoKGV2ZW50OiBDdXN0b21FdmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uQWZ0ZXJBcHBlbmRTbGlkZSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkFmdGVyQXBwZW5kU2xpZGUoZXZlbnQuZGV0YWlsKTtcbiAgICAgICAgICAgICAgICB9KSBhcyBFdmVudExpc3RlbmVyLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5vbkluaXQpIHtcbiAgICAgICAgICAgIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKExnTWV0aG9kcy5vbkluaXQsICgoXG4gICAgICAgICAgICAgICAgZXZlbnQ6IEN1c3RvbUV2ZW50LFxuICAgICAgICAgICAgKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5vbkluaXQgJiYgdGhpcy5vbkluaXQoZXZlbnQuZGV0YWlsKTtcbiAgICAgICAgICAgIH0pIGFzIEV2ZW50TGlzdGVuZXIpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm9uSGFzVmlkZW8pIHtcbiAgICAgICAgICAgIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgICAgIExnTWV0aG9kcy5vbkhhc1ZpZGVvLFxuICAgICAgICAgICAgICAgICgoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25IYXNWaWRlbyAmJiB0aGlzLm9uSGFzVmlkZW8oZXZlbnQuZGV0YWlsKTtcbiAgICAgICAgICAgICAgICB9KSBhcyBFdmVudExpc3RlbmVyLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5vbkNvbnRhaW5lclJlc2l6ZSkge1xuICAgICAgICAgICAgdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICAgICAgTGdNZXRob2RzLm9uQ29udGFpbmVyUmVzaXplLFxuICAgICAgICAgICAgICAgICgoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25Db250YWluZXJSZXNpemUgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub25Db250YWluZXJSZXNpemUoZXZlbnQuZGV0YWlsKTtcbiAgICAgICAgICAgICAgICB9KSBhcyBFdmVudExpc3RlbmVyLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5vbkFmdGVyQXBwZW5kU3ViSHRtbCkge1xuICAgICAgICAgICAgdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICAgICAgTGdNZXRob2RzLm9uQWZ0ZXJBcHBlbmRTdWJIdG1sLFxuICAgICAgICAgICAgICAgICgoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25BZnRlckFwcGVuZFN1Ykh0bWwgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub25BZnRlckFwcGVuZFN1Ykh0bWwoZXZlbnQuZGV0YWlsKTtcbiAgICAgICAgICAgICAgICB9KSBhcyBFdmVudExpc3RlbmVyLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5vbkJlZm9yZU9wZW4pIHtcbiAgICAgICAgICAgIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgICAgIExnTWV0aG9kcy5vbkJlZm9yZU9wZW4sXG4gICAgICAgICAgICAgICAgKChldmVudDogQ3VzdG9tRXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkJlZm9yZU9wZW4gJiYgdGhpcy5vbkJlZm9yZU9wZW4oZXZlbnQuZGV0YWlsKTtcbiAgICAgICAgICAgICAgICB9KSBhcyBFdmVudExpc3RlbmVyLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5vbkFmdGVyT3Blbikge1xuICAgICAgICAgICAgdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICAgICAgTGdNZXRob2RzLm9uQWZ0ZXJPcGVuLFxuICAgICAgICAgICAgICAgICgoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25BZnRlck9wZW4gJiYgdGhpcy5vbkFmdGVyT3BlbihldmVudC5kZXRhaWwpO1xuICAgICAgICAgICAgICAgIH0pIGFzIEV2ZW50TGlzdGVuZXIsXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm9uU2xpZGVJdGVtTG9hZCkge1xuICAgICAgICAgICAgdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICAgICAgTGdNZXRob2RzLm9uU2xpZGVJdGVtTG9hZCxcbiAgICAgICAgICAgICAgICAoKGV2ZW50OiBDdXN0b21FdmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uU2xpZGVJdGVtTG9hZCAmJiB0aGlzLm9uU2xpZGVJdGVtTG9hZChldmVudC5kZXRhaWwpO1xuICAgICAgICAgICAgICAgIH0pIGFzIEV2ZW50TGlzdGVuZXIsXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm9uQmVmb3JlU2xpZGUpIHtcbiAgICAgICAgICAgIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgICAgIExnTWV0aG9kcy5vbkJlZm9yZVNsaWRlLFxuICAgICAgICAgICAgICAgICgoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25CZWZvcmVTbGlkZSAmJiB0aGlzLm9uQmVmb3JlU2xpZGUoZXZlbnQuZGV0YWlsKTtcbiAgICAgICAgICAgICAgICB9KSBhcyBFdmVudExpc3RlbmVyLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5vbkFmdGVyU2xpZGUpIHtcbiAgICAgICAgICAgIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgICAgIExnTWV0aG9kcy5vbkFmdGVyU2xpZGUsXG4gICAgICAgICAgICAgICAgKChldmVudDogQ3VzdG9tRXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkFmdGVyU2xpZGUgJiYgdGhpcy5vbkFmdGVyU2xpZGUoZXZlbnQuZGV0YWlsKTtcbiAgICAgICAgICAgICAgICB9KSBhcyBFdmVudExpc3RlbmVyLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5vblBvc3RlckNsaWNrKSB7XG4gICAgICAgICAgICB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgICAgICBMZ01ldGhvZHMub25Qb3N0ZXJDbGljayxcbiAgICAgICAgICAgICAgICAoKGV2ZW50OiBDdXN0b21FdmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uUG9zdGVyQ2xpY2sgJiYgdGhpcy5vblBvc3RlckNsaWNrKGV2ZW50LmRldGFpbCk7XG4gICAgICAgICAgICAgICAgfSkgYXMgRXZlbnRMaXN0ZW5lcixcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMub25EcmFnU3RhcnQpIHtcbiAgICAgICAgICAgIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgICAgIExnTWV0aG9kcy5vbkRyYWdTdGFydCxcbiAgICAgICAgICAgICAgICAoKGV2ZW50OiBDdXN0b21FdmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uRHJhZ1N0YXJ0ICYmIHRoaXMub25EcmFnU3RhcnQoZXZlbnQuZGV0YWlsKTtcbiAgICAgICAgICAgICAgICB9KSBhcyBFdmVudExpc3RlbmVyLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5vbkRyYWdNb3ZlKSB7XG4gICAgICAgICAgICB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgICAgICBMZ01ldGhvZHMub25EcmFnTW92ZSxcbiAgICAgICAgICAgICAgICAoKGV2ZW50OiBDdXN0b21FdmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uRHJhZ01vdmUgJiYgdGhpcy5vbkRyYWdNb3ZlKGV2ZW50LmRldGFpbCk7XG4gICAgICAgICAgICAgICAgfSkgYXMgRXZlbnRMaXN0ZW5lcixcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMub25EcmFnRW5kKSB7XG4gICAgICAgICAgICB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgICAgICBMZ01ldGhvZHMub25EcmFnRW5kLFxuICAgICAgICAgICAgICAgICgoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25EcmFnRW5kICYmIHRoaXMub25EcmFnRW5kKGV2ZW50LmRldGFpbCk7XG4gICAgICAgICAgICAgICAgfSkgYXMgRXZlbnRMaXN0ZW5lcixcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMub25CZWZvcmVOZXh0U2xpZGUpIHtcbiAgICAgICAgICAgIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgICAgIExnTWV0aG9kcy5vbkJlZm9yZU5leHRTbGlkZSxcbiAgICAgICAgICAgICAgICAoKGV2ZW50OiBDdXN0b21FdmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uQmVmb3JlTmV4dFNsaWRlICYmXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9uQmVmb3JlTmV4dFNsaWRlKGV2ZW50LmRldGFpbCk7XG4gICAgICAgICAgICAgICAgfSkgYXMgRXZlbnRMaXN0ZW5lcixcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMub25CZWZvcmVQcmV2U2xpZGUpIHtcbiAgICAgICAgICAgIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgICAgIExnTWV0aG9kcy5vbkJlZm9yZVByZXZTbGlkZSxcbiAgICAgICAgICAgICAgICAoKGV2ZW50OiBDdXN0b21FdmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uQmVmb3JlUHJldlNsaWRlICYmXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9uQmVmb3JlUHJldlNsaWRlKGV2ZW50LmRldGFpbCk7XG4gICAgICAgICAgICAgICAgfSkgYXMgRXZlbnRMaXN0ZW5lcixcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMub25CZWZvcmVDbG9zZSkge1xuICAgICAgICAgICAgdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICAgICAgTGdNZXRob2RzLm9uQmVmb3JlQ2xvc2UsXG4gICAgICAgICAgICAgICAgKChldmVudDogQ3VzdG9tRXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkJlZm9yZUNsb3NlICYmIHRoaXMub25CZWZvcmVDbG9zZShldmVudC5kZXRhaWwpO1xuICAgICAgICAgICAgICAgIH0pIGFzIEV2ZW50TGlzdGVuZXIsXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm9uQWZ0ZXJDbG9zZSkge1xuICAgICAgICAgICAgdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICAgICAgTGdNZXRob2RzLm9uQWZ0ZXJDbG9zZSxcbiAgICAgICAgICAgICAgICAoKGV2ZW50OiBDdXN0b21FdmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uQWZ0ZXJDbG9zZSAmJiB0aGlzLm9uQWZ0ZXJDbG9zZShldmVudC5kZXRhaWwpO1xuICAgICAgICAgICAgICAgIH0pIGFzIEV2ZW50TGlzdGVuZXIsXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm9uUm90YXRlTGVmdCkge1xuICAgICAgICAgICAgdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICAgICAgTGdNZXRob2RzLm9uUm90YXRlTGVmdCxcbiAgICAgICAgICAgICAgICAoKGV2ZW50OiBDdXN0b21FdmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uUm90YXRlTGVmdCAmJiB0aGlzLm9uUm90YXRlTGVmdChldmVudC5kZXRhaWwpO1xuICAgICAgICAgICAgICAgIH0pIGFzIEV2ZW50TGlzdGVuZXIsXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm9uUm90YXRlUmlnaHQpIHtcbiAgICAgICAgICAgIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgICAgIExnTWV0aG9kcy5vblJvdGF0ZVJpZ2h0LFxuICAgICAgICAgICAgICAgICgoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25Sb3RhdGVSaWdodCAmJiB0aGlzLm9uUm90YXRlUmlnaHQoZXZlbnQuZGV0YWlsKTtcbiAgICAgICAgICAgICAgICB9KSBhcyBFdmVudExpc3RlbmVyLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5vbkZsaXBIb3Jpem9udGFsKSB7XG4gICAgICAgICAgICB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgICAgICBMZ01ldGhvZHMub25GbGlwSG9yaXpvbnRhbCxcbiAgICAgICAgICAgICAgICAoKGV2ZW50OiBDdXN0b21FdmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uRmxpcEhvcml6b250YWwgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub25GbGlwSG9yaXpvbnRhbChldmVudC5kZXRhaWwpO1xuICAgICAgICAgICAgICAgIH0pIGFzIEV2ZW50TGlzdGVuZXIsXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm9uRmxpcFZlcnRpY2FsKSB7XG4gICAgICAgICAgICB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgICAgICBMZ01ldGhvZHMub25GbGlwVmVydGljYWwsXG4gICAgICAgICAgICAgICAgKChldmVudDogQ3VzdG9tRXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkZsaXBWZXJ0aWNhbCAmJiB0aGlzLm9uRmxpcFZlcnRpY2FsKGV2ZW50LmRldGFpbCk7XG4gICAgICAgICAgICAgICAgfSkgYXMgRXZlbnRMaXN0ZW5lcixcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=
