import { EventEmitter } from "../../stencil.core";
import { CalciteTheme } from "../interfaces";
export declare class CalciteTip {
    /**
     * The local storage id used for an instance of a tip.
     */
    storageId: string;
    /**
     * Indicates whether the tip can be dismissed.
     */
    nonDismissible: boolean;
    /**
     * The heading of the tip.
     */
    heading: string;
    /**
     * Alternate text for closing the tip.
     */
    textClose: string;
    /**
     * Alternate text for description of the thumbnail.
     */
    textThumbnail: string;
    /**
     * A string of the path to the thumbnail.
     */
    thumbnail: string;
    /**
     * Used to set the component's color scheme.
     */
    theme: CalciteTheme;
    el: HTMLElement;
    dismissed: boolean;
    /**
     * Emitted when the component has been dismissed.
     */
    calciteTipDismiss: EventEmitter;
    hideTip: () => void;
    render(): any;
}
