import {
  Component,
  Element,
  Event,
  EventEmitter,
  Host,
  Method,
  Prop,
  State,
  Watch,
  h,
  VNode
} from "@stencil/core";
import classnames from "classnames";
import { CSS, ICONS, TEXT } from "./resources";
import { getElementDir } from "../utils/dom";
import { CalciteTheme } from "../interfaces";

/**
 * @slot - A slot for adding `calcite-tip`s.
 */
@Component({
  tag: "calcite-tip-manager",
  styleUrl: "./calcite-tip-manager.scss",
  shadow: true
})
export class CalciteTipManager {
  // --------------------------------------------------------------------------
  //
  //  Properties
  //
  // --------------------------------------------------------------------------
  /**
   * Alternate text for closing the `calcite-tip-manager`.
   */
  @Prop({ reflect: true }) closed = false;

  @Watch("closed")
  closedChangeHandler(): void {
    this.direction = null;
    this.calciteTipManagerToggle.emit();
  }

  /**
   * Alternate text for closing the tip.
   */
  @Prop() intlClose?: string;

  /**
   * Alternate text for closing the tip.
   * @deprecated use "intlClose" instead.
   */
  @Prop() textClose?: string;

  /**
   * The default group title for the `calcite-tip-manager`.
   */
  @Prop() intlDefaultTitle?: string;

  /**
   * The default group title for the `calcite-tip-manager`.
   * @deprecated use "intlDefaultTitle" instead.
   */
  @Prop() textDefaultTitle?: string;

  /**
   * Alternate text for navigating to the next tip.
   */
  @Prop() intlNext?: string;

  /**
   * Alternate text for navigating to the next tip.
   * @deprecated use "intlNext" instead.
   */
  @Prop() textNext?: string;

  /**
   * Label that appears on hover of pagination icon.
   */
  @Prop() intlPaginationLabel?: string;

  /**
   * Label that appears on hover of pagination icon.
   * @deprecated use "intlPaginationLabel" instead.
   */
  @Prop() textPaginationLabel?: string;

  /**
   * Alternate text for navigating to the previous tip.
   */
  @Prop() intlPrevious?: string;

  /**
   * Alternate text for navigating to the previous tip.
   * @deprecated use "intlPrevious" instead.
   */
  @Prop() textPrevious?: string;

  /**
   * Used to set the component's color scheme.
   */
  @Prop({ reflect: true }) theme: CalciteTheme;

  // --------------------------------------------------------------------------
  //
  //  Private Properties
  //
  // --------------------------------------------------------------------------

  @Element() el: HTMLCalciteTipManagerElement;

  @State() selectedIndex: number;

  @Watch("selectedIndex")
  selectedChangeHandler(): void {
    this.showSelectedTip();
    this.updateGroupTitle();
  }

  @State() tips: HTMLCalciteTipElement[];

  @State() total: number;

  @State() direction: "advancing" | "retreating";

  @State() groupTitle: string;

  observer = new MutationObserver(() => this.setUpTips());

  container: HTMLDivElement;

  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------

  connectedCallback(): void {
    this.setUpTips();
  }

  componentDidLoad(): void {
    this.observer.observe(this.el, { childList: true, subtree: true });
  }

  componentDidUnload(): void {
    this.observer.disconnect();
  }

  // --------------------------------------------------------------------------
  //
  //  Public Methods
  //
  // --------------------------------------------------------------------------

  @Method()
  async nextTip(): Promise<void> {
    this.direction = "advancing";
    const nextIndex = this.selectedIndex + 1;
    this.selectedIndex = (nextIndex + this.total) % this.total;
  }

  @Method()
  async previousTip(): Promise<void> {
    this.direction = "retreating";
    const previousIndex = this.selectedIndex - 1;
    this.selectedIndex = (previousIndex + this.total) % this.total;
  }

  // --------------------------------------------------------------------------
  //
  //  Events
  //
  // --------------------------------------------------------------------------

  /**
   * Emitted when the `calcite-tip-manager` has been toggled open or closed.
   */
  @Event() calciteTipManagerToggle: EventEmitter;

  // --------------------------------------------------------------------------
  //
  //  Private Methods
  //
  // --------------------------------------------------------------------------

  setUpTips(): void {
    const tips = Array.from(this.el.querySelectorAll("calcite-tip"));
    this.total = tips.length;
    if (this.total === 0) {
      return;
    }
    const selectedTip = this.el.querySelector<HTMLCalciteTipElement>("calcite-tip[selected]");

    this.tips = tips;
    this.selectedIndex = selectedTip ? tips.indexOf(selectedTip) : 0;

    tips.forEach((tip) => {
      tip.nonDismissible = true;
    });
    this.showSelectedTip();
    this.updateGroupTitle();
  }

  hideTipManager = (): void => {
    this.closed = true;
    this.calciteTipManagerToggle.emit();
  };

  showSelectedTip(): void {
    this.tips.forEach((tip, index) => {
      const isSelected = this.selectedIndex === index;
      tip.selected = isSelected;
      tip.hidden = !isSelected;
    });
  }

  updateGroupTitle(): void {
    const selectedTip = this.tips[this.selectedIndex];
    const tipParent = selectedTip.closest("calcite-tip-group");
    this.groupTitle =
      tipParent?.textGroupTitle ||
      this.intlDefaultTitle ||
      this.textDefaultTitle ||
      TEXT.defaultGroupTitle;
  }

  previousClicked = (): void => {
    this.previousTip();
  };

  nextClicked = (): void => {
    this.nextTip();
  };

  tipManagerKeyUpHandler = (event: KeyboardEvent): void => {
    if (event.target !== this.container) {
      return;
    }

    switch (event.key) {
      case "ArrowRight":
        event.preventDefault();
        this.nextTip();
        break;
      case "ArrowLeft":
        event.preventDefault();
        this.previousTip();
        break;
      case "Home":
        event.preventDefault();
        this.selectedIndex = 0;
        break;
      case "End":
        event.preventDefault();
        this.selectedIndex = this.total - 1;
        break;
    }
  };

  storeContainerRef = (el: HTMLDivElement): void => {
    this.container = el;
  };

  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------

  renderPagination(): VNode {
    const dir = getElementDir(this.el);
    const {
      selectedIndex,
      tips,
      total,
      intlNext,
      textNext,
      intlPrevious,
      textPrevious,
      intlPaginationLabel,
      textPaginationLabel
    } = this;

    const nextLabel = intlNext || textNext || TEXT.next;
    const previousLabel = intlPrevious || textPrevious || TEXT.previous;
    const paginationLabel =
      intlPaginationLabel || textPaginationLabel || TEXT.defaultPaginationLabel;

    return tips.length > 1 ? (
      <footer class={CSS.pagination}>
        <calcite-action
          text={previousLabel}
          onClick={this.previousClicked}
          class={CSS.pagePrevious}
        >
          <calcite-icon scale="s" icon={dir === "ltr" ? ICONS.chevronLeft : ICONS.chevronRight} />
        </calcite-action>
        <span class={CSS.pagePosition}>{`${paginationLabel} ${selectedIndex + 1}/${total}`}</span>
        <calcite-action text={nextLabel} onClick={this.nextClicked} class={CSS.pageNext}>
          <calcite-icon scale="s" icon={dir === "ltr" ? ICONS.chevronRight : ICONS.chevronLeft} />
        </calcite-action>
      </footer>
    ) : null;
  }

  render(): VNode {
    const { closed, direction, groupTitle, selectedIndex, intlClose, textClose, total } = this;

    const closeLabel = intlClose || textClose || TEXT.close;

    if (total === 0) {
      return <Host />;
    }
    return (
      <Host>
        <div
          class={CSS.container}
          hidden={closed}
          aria-hidden={closed.toString()}
          tabIndex={0}
          onKeyUp={this.tipManagerKeyUpHandler}
          ref={this.storeContainerRef}
        >
          <header class={CSS.header}>
            <h2 key={selectedIndex} class={CSS.heading}>
              {groupTitle}
            </h2>
            <calcite-action text={closeLabel} onClick={this.hideTipManager} class={CSS.close}>
              <calcite-icon scale="s" icon={ICONS.close} />
            </calcite-action>
          </header>
          <div
            tabIndex={0}
            class={classnames(CSS.tipContainer, {
              [CSS.tipContainerAdvancing]: !closed && direction === "advancing",
              [CSS.tipContainerRetreating]: !closed && direction === "retreating"
            })}
            key={selectedIndex}
          >
            <slot />
          </div>
          {this.renderPagination()}
        </div>
      </Host>
    );
  }
}
