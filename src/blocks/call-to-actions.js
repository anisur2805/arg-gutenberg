import { registerBlockType } from '@wordpress/blocks';
import { RichText } from '@wordpress/block-editor';

registerBlockType('arg-gutenberg-blocks/call-to-action', {
	title: 'Call to Action',
	icon: 'admin-comments',
	category: 'common',
	keywords: ['cta', 'call to action'],
	attributes: {
		title: {
			type: 'string',
			source: 'html',
			selector: 'h2'
		},
		content: {
			type: 'string',
			source: 'html',
			selector: 'p'
		},
		button: {
			type: 'string',
			source: 'html',
			selector: 'button'
		}
	},
	/*
	* Edit function
	*/
	edit: ({ attributes, setAttributes }) => {
		const { title, content, button } = attributes;

		function setTitle(value){
			setAttributes({ title: value });
		};
		function setContent(value){
			setAttributes({ content: value });
		};
		function setButton(value){
			setAttributes({ button: value });
		};

		return (
			<>
				<div className="call-to-action 2">
					<RichText
						key="editable"
						tagName="h2"
						placeholder="Enter CTA title"
						value={title}
						onChange={setTitle}
					/>
					<RichText
						key="editable"
						tagName="p"
						placeholder="Enter CTA content"
						value={content}
						onChange={setContent}
					/>
					<RichText
						key="editable"
						tagName="button"
						placeholder="Button text"
						value={button}
						onChange={setButton}
					/>
				</div>
			</>
		);
	},
	/**
	 * Save Function
	 */
	save: ({ attributes }) => {
		const { title, content, button } = attributes;

		return (
			<>
				<div className="call-to-action front-end">
					<h2>{title}</h2>
					<RichText.Content
						tagName="p"
						value={content}
					/>
					<button>{button}</button>
				</div>
			</>
		);
	}
});