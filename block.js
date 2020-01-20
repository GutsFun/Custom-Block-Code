const { registerBlockType } = wp.blocks;
const { __ } = wp.i18n;
const { TextControl, PanelBody, PanelRow } = wp.components;
const { createElement, Fragment } = wp.element;
const { InnerBlocks, InspectorControls } = wp.blockEditor;

const ALLOWED_BLOCKS = [];
const TEMPLATE = [
  [ 'core/code', { className: 'prettyprint' } ],
];

registerBlockType('gutsfun/custom-block-code', {
  title: 'Custom Block Code',
  icon: 'feedback',
  category: 'formatting',
  attributes: {
    title: {type: 'string', source: 'text', selector: 'p'}
  },
  edit: (props) => {
  const {attributes, setAttributes, className} = props; 
    
    return React.createElement(
      Fragment,
      null,      
    React.createElement(InspectorControls, null,
    React.createElement(PanelBody, { title: __( 'Settings' ), initialOpen: true },
          React.createElement(PanelRow, null,
            React.createElement(TextControl,
              {
            label: 'Title for Code Block',
            value: attributes.title,
          onChange: (value) => setAttributes({ title: value }),
            placeholder: __( 'Title or File (optional)' )
          })
             )
           )
         ),
      React.createElement(InnerBlocks, {
      template: TEMPLATE,
      allowedBlocks: ALLOWED_BLOCKS,
      templateInsertUpdatesSelection: false
    })
    )
  },
  save: (props) => {
  const {attributes, className} = props;
  const paragraph = createElement("p", null, attributes.title);
  const innerBlocks = createElement(InnerBlocks.Content, {});
  const childrens = [];
  if (attributes.title != null) childrens.push(paragraph);
  childrens.push(innerBlocks);
    
    return createElement("div", { className }, childrens);
  }
})