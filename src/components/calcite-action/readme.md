# calcite-action

The `calcite-action` component lives in either a `calcite-action-bar` or `calcite-action-pad`. Actions look like an icon with a text description option of the component that will be revealed when the icon/ text is clicked or selected.

<!-- Auto Generated Below -->

## Usage

### Basic

#### Without text

Renders a `calcite-action` that displays only an icon and a tooltip label.

```html
<calcite-action label="Performs my custom action">
  <calcite-icon scale="s" icon="plus"></calcite-icon>
</calcite-action>
```

#### With text

Renders a `calcite-action` that displays text along side an icon and a tooltip label.

```html
<calcite-action label="Performs my custom action" text="Perform Action!" text-enabled>
  <calcite-icon scale="s" icon="save"></calcite-icon>
</calcite-action>
```

#### Clear appearance

Renders a `calcite-action` that has a clear background.

```html
<calcite-action appearance="clear">
  <calcite-icon scale="s" icon="layers"></calcite-icon>
</calcite-action>
```

## Properties

| Property            | Attribute      | Description                                                                                                                         | Type                              | Default     |
| ------------------- | -------------- | ----------------------------------------------------------------------------------------------------------------------------------- | --------------------------------- | ----------- |
| `active`            | `active`       | Indicates whether the action is highlighted.                                                                                        | `boolean`                         | `false`     |
| `appearance`        | `appearance`   | Specify the appearance style of the action, defaults to solid.                                                                      | `"clear" or "outline" or "solid"` | `"solid"`   |
| `compact`           | `compact`      | Compact mode is used internally by components to reduce side padding, e.g. calcite-block-section.                                   | `boolean`                         | `false`     |
| `disabled`          | `disabled`     | When true, disabled prevents interaction. This state shows items with lower opacity/grayed.                                         | `boolean`                         | `false`     |
| `icon`              | `icon`         | The name of the icon to display. The value of this property must match the icon name from https://esri.github.io/calcite-ui-icons/. | `string`                          | `undefined` |
| `indicator`         | `indicator`    | Indicates unread changes.                                                                                                           | `boolean`                         | `false`     |
| `label`             | `label`        | Label of the action, exposed on hover. If no label is provided, the label inherits what's provided for the `text` prop.             | `string`                          | `undefined` |
| `loading`           | `loading`      | When true, content is waiting to be loaded. This state shows a busy indicator.                                                      | `boolean`                         | `false`     |
| `scale`             | `scale`        | Specifies the size of the action.                                                                                                   | `"l" or "m" or "s"`               | `"m"`       |
| `text` _(required)_ | `text`         | Text that accompanies the action icon.                                                                                              | `string`                          | `undefined` |
| `textEnabled`       | `text-enabled` | Indicates whether the text is displayed.                                                                                            | `boolean`                         | `false`     |
| `theme`             | `theme`        | Used to set the component's color scheme.                                                                                           | `"dark" or "light"`               | `undefined` |

## Methods

### `setFocus() => Promise<void>`

#### Returns

Type: `Promise<void>`

## Slots

| Slot | Description                         |
| ---- | ----------------------------------- |
|      | A slot for adding a `calcite-icon`. |

## Dependencies

### Used by

- [calcite-action-bar](../calcite-action-bar)
- [calcite-action-pad](../calcite-action-pad)
- [calcite-block-section](../calcite-block-section)
- [calcite-flow-item](../calcite-flow-item)
- [calcite-panel](../calcite-panel)
- [calcite-pick-list-item](../calcite-pick-list-item)
- [calcite-tip](../calcite-tip)
- [calcite-tip-manager](../calcite-tip-manager)

### Graph

```mermaid
graph TD;
  calcite-action-bar --> calcite-action
  calcite-action-pad --> calcite-action
  calcite-block-section --> calcite-action
  calcite-flow-item --> calcite-action
  calcite-panel --> calcite-action
  calcite-pick-list-item --> calcite-action
  calcite-tip --> calcite-action
  calcite-tip-manager --> calcite-action
  style calcite-action fill:#f9f,stroke:#333,stroke-width:4px
```

---

_Built with [StencilJS](https://stenciljs.com/)_
