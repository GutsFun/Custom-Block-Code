const { registerBlockType } = wp.blocks;
const { __ } = wp.i18n; 
const { createElement } = wp.element;
const { InnerBlocks } = wp.blockEditor;

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
      "div",
      null,
      React.createElement("label", null, "Header block code title : "),
      React.createElement("input", {
		  type: "text",
		  placeholder: __("Write a title..."),
		  value: attributes.title,
		  onChange: (event) => setAttributes({ title: event.target.value })
        }
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