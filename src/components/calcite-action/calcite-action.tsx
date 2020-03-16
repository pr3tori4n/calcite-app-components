import { Component, Element, Host, Method, Prop, h } from "@stencil/core";

import { CalciteAppearance, CalciteScale, CalciteTheme } from "../interfaces";

import classnames from "classnames";

import { CSS } from "./resources";

import { CSS_UTILITY } from "../utils/resources";

import { getElementDir } from "../utils/dom";
import { State, VNode, Watch } from "@stencil/core/internal";

/**
 * @slot - A slot for adding a `calcite-icon`.
 */
@Component({
  tag: "calcite-action",
  styleUrl: "calcite-action.scss",
  shadow: true
})
export class CalciteAction {
  // --------------------------------------------------------------------------
  //
  //  Properties
  //
  // --------------------------------------------------------------------------
  /** Specify the appearance style of the action, defaults to solid. */
  @Prop({ reflect: true }) appearance: CalciteAppearance = "solid";

  /**
   * Indicates whether the action is highlighted.
   */
  @Prop({ reflect: true }) active = false;

  /**
   * Compact mode is used internally by components to reduce side padding, e.g. calcite-block-section.
   */
  @Prop({ reflect: true }) compact = false;

  /**
   * When true, disabled prevents interaction. This state shows items with lower opacity/grayed.
   */
  @Prop({ reflect: true }) disabled = false;

  /**
   * The name of the icon to display. The value of this property must match the icon name from https://esri.github.io/calcite-ui-icons/.
   */
  @Prop() icon?: string;

  /**
   * Indicates unread changes.
   */
  @Prop({ reflect: true }) indicator = false;

  /**
   * Label of the action, exposed on hover. If no label is provided, the label inherits what's provided for the `text` prop.
   */
  @Prop() label?: string;

  @Watch("label")
  labelHandler() {
    this.setTooltipText();
  }

  /**
   * When true, content is waiting to be loaded. This state shows a busy indicator.
   */
  @Prop({ reflect: true }) loading = false;

  /**
   * Specifies the size of the action.
   */
  @Prop({ reflect: true }) scale: CalciteScale = "m";

  /**
   * Text that accompanies the action icon.
   */
  @Prop() text!: string;

  @Watch("text")
  textHandler() {
    this.setTooltipText();
  }

  /**
   * Indicates whether the text is displayed.
   */
  @Prop({ reflect: true }) textEnabled = false;

  @Watch("textEnabled")
  textEnabledHandler() {
    this.toggleTooltip(this.tooltip);
  }

  /**
   * Used to set the component's color scheme.
   */
  @Prop({ reflect: true }) theme: CalciteTheme;

  @Watch("theme")
  themeHandler() {
    this.toggleTooltip(this.tooltip);
  }

  /**
   * Display a tooltip when hovering or focusing the action.
   */
  @Prop({ reflect: true }) tooltip = true;

  @Watch("tooltip")
  tooltipHandler(tooltip: boolean) {
    this.toggleTooltip(tooltip);
  }

  // --------------------------------------------------------------------------
  //
  //  Private Properties
  //
  // --------------------------------------------------------------------------

  @Element() el: HTMLCalciteActionElement;

  @State() tooltipText: string = null;

  @Watch("tooltipText")
  tooltipTextListener() {
    this.toggleTooltip(this.tooltip);
  }

  private buttonEl: HTMLButtonElement;

  private tooltipEl: HTMLCalciteTooltipElement;

  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------

  connectedCallback() {
    this.setTooltipText();
  }

  componentDidUnload() {
    this.toggleTooltip(false);
  }

  // --------------------------------------------------------------------------
  //
  //  Methods
  //
  // --------------------------------------------------------------------------

  @Method()
  async setFocus() {
    this.buttonEl.focus();
  }

  // --------------------------------------------------------------------------
  //
  //  Private Methods
  //
  // --------------------------------------------------------------------------

  setTooltipText = (): void => {
    this.tooltipText = this.label || this.text;
  };

  setUpTooltip(): HTMLCalciteTooltipElement {
    if (this.tooltipEl) {
      return this.tooltipEl;
    }

    const tooltipElement = document.createElement("calcite-tooltip");
    document.body.appendChild(tooltipElement);
    this.tooltipEl = tooltipElement;
    return tooltipElement;
  }

  toggleTooltip = (tooltip: boolean): void => {
    const { el, tooltipEl, textEnabled, tooltipText, theme } = this;

    if (tooltip && tooltipText && !textEnabled) {
      const tooltipElement = this.setUpTooltip();
      tooltipElement.textContent = tooltipText;
      tooltipElement.referenceElement = el;
      tooltipElement.theme = theme;
    } else {
      tooltipEl?.parentElement?.removeChild(tooltipEl);
      this.tooltipEl = null;
    }
  };

  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------

  renderTextContainer(): VNode {
    const { text, textEnabled } = this;

    const textContainerClasses = {
      [CSS.textContainerVisible]: textEnabled
    };

    return text ? (
      <div key="text-container" class={classnames(CSS.textContainer, textContainerClasses)}>
        {text}
      </div>
    ) : null;
  }

  renderIconContainer(): VNode {
    const { el, loading, icon, scale } = this;
    const iconScale = scale === "l" ? "m" : "s";
    const calciteLoaderNode = loading ? <calcite-loader is-active inline /> : null;
    const calciteIconNode = icon ? <calcite-icon icon={icon} scale={iconScale} /> : null;
    const iconNode = calciteLoaderNode || calciteIconNode;
    const hasIconToDisplay = iconNode || el.querySelector("calcite-icon, svg");

    const slotContainerNode = (
      <div
        class={classnames(CSS.slotContainer, {
          [CSS.slotContainerHidden]: loading
        })}
      >
        <slot />
      </div>
    );

    return hasIconToDisplay ? (
      <div key="icon-container" aria-hidden="true" class={CSS.iconContainer}>
        {iconNode}
        {slotContainerNode}
      </div>
    ) : null;
  }

  render() {
    const { compact, disabled, loading, el, textEnabled, tooltipText } = this;
    const rtl = getElementDir(el) === "rtl";

    const buttonClasses = {
      [CSS.buttonTextVisible]: textEnabled,
      [CSS.buttonCompact]: compact,
      [CSS_UTILITY.rtl]: rtl
    };

    return (
      <Host>
        <button
          class={classnames(CSS.button, buttonClasses)}
          aria-label={tooltipText}
          disabled={disabled}
          aria-disabled={disabled.toString()}
          aria-busy={loading.toString()}
          ref={(buttonEl) => (this.buttonEl = buttonEl)}
        >
          {this.renderIconContainer()}
          {this.renderTextContainer()}
        </button>
      </Host>
    );
  }
}
