import { Component, Element, Host, Method, Prop, State, Watch, h } from "@stencil/core";

import { CSS } from "./resources";

import { CalciteLayout, CalcitePlacementValue } from "../interfaces";

import { CalcitePositionStyle, getPositionStyle } from "../utils/position";

@Component({
  tag: "calcite-placement",
  styleUrl: "calcite-placement.scss",
  shadow: true
})
export class CalcitePlacement {
  // --------------------------------------------------------------------------
  //
  //  Properties
  //
  // --------------------------------------------------------------------------

  /**
   * todo
   */
  @Prop({ reflect: true }) layout: CalciteLayout;

  @Watch("layout")
  layoutHandler() {
    this.reposition();
  }

  /**
   * Determines where the element will be positioned.
   * horizontal: TODO
   * vertical: TODO
   */
  @Prop({ reflect: true }) placement: CalcitePlacementValue;

  @Watch("placement")
  placementHandler() {
    this.reposition();
  }

  /**
   * HTMLElement used to position this element according to the placement.
   */
  @Prop() positionElement: HTMLElement;

  @Watch("positionElement")
  positionElementHandler() {
    this.reposition();
  }

  /**
   * TODO
   */
  @Prop({ reflect: true }) xOffset: number;

  @Watch("xOffset")
  xOffsetHandler() {
    this.reposition();
  }

  /**
   * TODO
   */
  @Prop({ reflect: true }) yOffset: number;

  @Watch("yOffset")
  yOffsetHandler() {
    this.reposition();
  }

  // --------------------------------------------------------------------------
  //
  //  Private Properties
  //
  // --------------------------------------------------------------------------

  @Element() el: HTMLCalciteShellFloatingPanelElement;

  @State() positionStyle: CalcitePositionStyle;

  // --------------------------------------------------------------------------
  //
  //  Public Methods
  //
  // --------------------------------------------------------------------------

  @Method() async reposition(): Promise<void> {
    this.positionStyle = getPositionStyle({
      layout: this.layout,
      placement: this.placement,
      positionElement: this.positionElement,
      xOffset: this.xOffset,
      yOffset: this.yOffset
    });
  }

  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------

  render() {
    const { positionStyle } = this;

    return (
      <Host>
        <div style={positionStyle} class={CSS.container}>
          <slot />
        </div>
      </Host>
    );
  }
}
