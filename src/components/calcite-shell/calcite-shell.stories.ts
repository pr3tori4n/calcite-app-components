import { boolean, select, withKnobs } from "@storybook/addon-knobs";
import { Attributes, createComponentHTML as create, darkBackground, parseReadme } from "../../../.storybook/utils";
import { ATTRIBUTES } from "../../../.storybook/resources";
const { dir, position, scale, theme } = ATTRIBUTES;
import readme from "./readme.md";
import panelReadme from "../calcite-shell-panel/readme.md";
import dedent from "dedent";

export default {
  title: "components|calcite-shell",
  decorators: [withKnobs],
  parameters: {
    backgrounds: darkBackground,
    notes: {
      shell: parseReadme(readme),
      panel: parseReadme(panelReadme)
    }
  }
};

const createAttributes: (group: string) => Attributes = (group) => {
  return [
    {
      name: "dir",
      value: select("dir", dir.values, dir.defaultValue, group)
    },
    {
      name: "theme",
      value: select("theme", theme.values, theme.defaultValue, group)
    }
  ];
};

const createShellPanelAttributes: (group: "Leading Panel" | "Trailing Panel") => Attributes = (group) => {
  return [
    {
      name: "slot",
      value: group === "Leading Panel" ? "primary-panel" : "contextual-panel"
    },
    {
      name: "collapsed",
      value: boolean("collapsed", false, group)
    },
    {
      name: "detached",
      value: boolean("detached", false, group)
    },
    {
      name: "detached-scale",
      value: select("detachedScale", scale.values, scale.defaultValue, group)
    },
    {
      name: "position",
      value: select(
        "position",
        position.values,
        group === "Leading Panel" ? position.values[0] : position.values[1],
        group
      )
    }
  ];
};

const actionBarPrimaryContentHTML = dedent`
  <calcite-action-group>
    <calcite-action text="Add" label="Add Item"><calcite-icon scale="s" icon="plus"></calcite-icon></calcite-action>
    <calcite-action text="Save" label="Save Item"><calcite-icon scale="s" icon="save"></calcite-icon></calcite-action>
  </calcite-action-group>
  <calcite-action-group>
    <calcite-action text="Layers" label="View Layers"><calcite-icon scale="s" icon="layers"></calcite-icon></calcite-action>
  </calcite-action-group>
`;

const actionBarContextualContentHTML = dedent`
  <calcite-action-group>
    <calcite-action text="Idea" label="Add Item"><calcite-icon scale="s" icon="lightbulb"></calcite-icon></calcite-action>
    <calcite-action text="Information" label="Save Item"><calcite-icon scale="s" icon="information"></calcite-icon></calcite-action>
  </calcite-action-group>
  <calcite-action-group>
    <calcite-action text="Question" label="View Layers"><calcite-icon scale="s" icon="question"></calcite-icon></calcite-action>
  </calcite-action-group>
`;

const actionBarPrimaryHTML = dedent`
  <calcite-action-bar theme="dark" slot="action-bar">
    ${actionBarPrimaryContentHTML}
  </calcite-action-bar>
`;

const actionBarContextualHTML = dedent`
  <calcite-action-bar theme="light" slot="action-bar">
    ${actionBarContextualContentHTML}
  </calcite-action-bar>
`;

const leadingPanelHTML = dedent`
  ${actionBarPrimaryHTML}
  <p>My Leading Panel</p>
`;

const trailingPanelHTML = dedent`
  ${actionBarContextualHTML}
  <p>My Trailing Panel</p>
`;

const headerHTML = dedent`
  <header slot="shell-header">
    <h2>My Shell Header</h2>
  </header>
`;

const footerHTML = `<footer slot="shell-footer">My Shell Footer</footer>`;

const contentHTML = dedent`
  <div style="
    width:100%;
    height:100%;
    background-image: linear-gradient(45deg, #ccc 25%, transparent 25%),
      linear-gradient(-45deg, #ccc 25%, transparent 25%),
      linear-gradient(45deg, transparent 75%, #ccc 75%),
      linear-gradient(-45deg, transparent 75%, #ccc 75%);
    background-size: 20px 20px;
    background-position: 0 0, 0 10px, 10px -10px, -10px 0px;
  "></div>
`;

const tipManagerHTML = dedent`
  <calcite-tip-manager slot="tip-manager">
    <calcite-tip-group text-group-title="Astronomy">
      <calcite-tip heading="The Red Rocks and Blue Water">
        <img slot="thumbnail" src="https://placeimg.com/1000/600/city" alt="This is an image." />
        <p>
          This tip is how a tip should really look. It has a landscape or square image and a small amount of text
          content. This paragraph is in an "info" slot.
        </p>
        <p>
          This is another paragraph in a subsequent "info" slot. In publishing and graphic design, Lorem ipsum is
          a placeholder text commonly used to demonstrate the visual form of a document without relying on
          meaningful content (also called greeking). Replacing the actual content with placeholder text allows
          designers to design the form of the content before the content itself has been produced.
        </p>
        <a href="http://www.esri.com">This is the "link" slot.</a>
      </calcite-tip>
      <calcite-tip heading="The Long Trees">
        <img slot="thumbnail" src="https://placeimg.com/1000/600/nature" alt="This is an image." />
        <p>
          This tip has an image that is a pretty tall. And the text will run out before the end of the image.
        </p>
        <p>In astronomy, the terms object and body are often used interchangeably.</p>
        <a href="http://www.esri.com">View Esri</a>
      </calcite-tip>
    </calcite-tip-group>
    <calcite-tip heading="Square Nature">
      <img slot="thumbnail" src="https://placeimg.com/1000/1000/nature" alt="This is an image." />
      <p>
        This tip has an image that is square. And the text will run out before the end of the image.
      </p>
      <p>In astronomy, the terms object and body are often used interchangeably.</p>
      <p>
        In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the
        visual form of a document without relying on meaningful content (also called greeking). Replacing the
        actual content with placeholder text allows designers to design the form of the content before the content
        itself has been produced.
      </p>
      <a href="http://www.esri.com">View Esri</a>
    </calcite-tip>
    <calcite-tip heading="The lack of imagery">
      <p>
        This tip has no image. As such, the content area will take up the entire width of the tip.
      </p>
      <p>
        This is the next paragraph and should show how wide the content area is now. Of course, the width of the
        overall tip will affect things. In astronomy, the terms object and body are often used interchangeably.
      </p>
      <a href="http://www.esri.com">View Esri</a>
    </calcite-tip>
  </calcite-tip-manager>
`;

export const basic = (): string =>
  create(
    "calcite-shell",
    createAttributes("Shell"),
    dedent`
    ${headerHTML}
    ${create("calcite-shell-panel", createShellPanelAttributes("Leading Panel"), leadingPanelHTML)}
    ${contentHTML}
    ${create("calcite-shell-panel", createShellPanelAttributes("Trailing Panel"), trailingPanelHTML)}
    ${footerHTML}
  `
  );

// TODO: UPDATE
const advancedLeadingPanelHTML = dedent`
  ${actionBarPrimaryHTML}
  <calcite-block collapsible open heading="Primary Content" summary="This is the primary.">
    <calcite-block-content>
      <calcite-action text="Play" text-enabled indicator><calcite-icon scale="s" icon="play"></calcite-icon></calcite-action>
      <calcite-action text="Extent" text-enabled><calcite-icon scale="s" icon="extent"></calcite-icon></calcite-action>
      <calcite-action text="Chart" text-enabled><calcite-icon scale="s" icon="arrow-up-right"></calcite-icon></calcite-action>
    </calcite-block-content>
  </calcite-block>
  <calcite-block collapsible open heading="Another Block" summary="This is the primary.">
    <calcite-block-content>
      <div style="height: 300px;">
        <p>Cool thing.</p>
      </div>
    </calcite-block-content>
  </calcite-block>
  <calcite-block collapsible open heading="Additional Block" summary="This is the primary.">
    <calcite-block-content>
      <div style="height: 300px;">
        <p>Cool thing.</p>
      </div>
    </calcite-block-content>
  </calcite-block>
  <calcite-block collapsible open heading="More Block" summary="This is the primary.">
    <calcite-block-content>
      <div style="height: 300px;">
        <p>Cool thang.</p>
      </div>
    </calcite-block-content>
  </calcite-block>
`;

// TODO: UPDATE
const advancedTrailingPanelHTMl = dedent`
  ${actionBarContextualHTML}
  <calcite-flow>
    <calcite-flow-item heading="Layer settings">
      <div slot="menu-actions">
        <calcite-action text="Cool thing" text-enabled></calcite-action>
        <calcite-action text="Cool thing" text-enabled></calcite-action>
        <calcite-action text="Cool thing" text-enabled></calcite-action>
      </div>
      <calcite-block collapsible open heading="Contextual Content" summary="Select goodness">
        <calcite-block-content>
          <img alt="demo" src="https://placeimg.com/640/480/any" width="100%" />
          <calcite-block-section text="Cool things">
            <calcite-action text="Cool thing" text-enabled></calcite-action>
            <calcite-action text="Cool thing" text-enabled></calcite-action>
            <calcite-action text="Cool thing" text-enabled></calcite-action>
          </calcite-block-section>
          <calcite-block-section text="Neat things">
            <calcite-action text="Cool thing" text-enabled></calcite-action>
            <calcite-action text="Cool thing" text-enabled></calcite-action>
            <calcite-action text="Cool thing" text-enabled></calcite-action>
          </calcite-block-section>
        </calcite-block-content>
      </calcite-block>
      <calcite-button slot="footer-actions" width="half" >Save</calcite-button>
      <calcite-button slot="footer-actions" width="half" appearance="clear">Cancel</calcite-button>
    </calcite-flow-item>
    <calcite-flow-item heading="Deeper flow item">
      <calcite-block collapsible open heading="Contextual Content" summary="Select goodness">
        <calcite-block-content>
          <calcite-block-section text="Cool things">
            <calcite-action text="Cool thing" text-enabled></calcite-action>
            <calcite-action text="Cool thing" text-enabled></calcite-action>
            <calcite-action text="Cool thing" text-enabled></calcite-action>
          </calcite-block-section>
          <img alt="demo" src="https://placeimg.com/640/480/any" width="100%" />
          <calcite-block-section text="Neat things">
            <calcite-action text="Cool thing" text-enabled></calcite-action>
            <calcite-action text="Cool thing" text-enabled></calcite-action>
            <calcite-action text="Cool thing" text-enabled></calcite-action>
          </calcite-block-section>
        </calcite-block-content>
      </calcite-block>
      <calcite-block collapsible open heading="Even more content" summary="Select goodness">
        <calcite-block-content>
          <calcite-block-section text="Cool things">
            <calcite-action text="Cool thing" text-enabled></calcite-action>
            <calcite-action text="Cool thing" text-enabled></calcite-action>
            <calcite-action text="Cool thing" text-enabled></calcite-action>
          </calcite-block-section>
          <img alt="demo" src="https://placeimg.com/640/480/nature" width="100%" />
          <calcite-block-section text="Neat things">
            <calcite-action text="Cool thing" text-enabled></calcite-action>
            <calcite-action text="Cool thing" text-enabled></calcite-action>
            <calcite-action text="Cool thing" text-enabled></calcite-action>
          </calcite-block-section>
        </calcite-block-content>
      </calcite-block>
      <calcite-button slot="footer-actions" width="half" >Save</calcite-button>
      <calcite-button slot="footer-actions" width="half" appearance="clear">Cancel</calcite-button>
    </calcite-flow-item>
  </calcite-flow>
`;

export const advanced = (): string =>
  create(
    "calcite-shell",
    createAttributes("Shell"),
    dedent`
    ${headerHTML}
    ${create("calcite-shell-panel", createShellPanelAttributes("Leading Panel"), advancedLeadingPanelHTML)}
    ${contentHTML}
    ${create("calcite-shell-panel", createShellPanelAttributes("Trailing Panel"), advancedTrailingPanelHTMl)}
    ${tipManagerHTML}
    ${footerHTML}
  `
  );
