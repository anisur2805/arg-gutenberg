import { registerBlockType } from '@wordpress/blocks';
import { RichText, MediaUpload } from '@wordpress/block-editor';

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
		image: {
			type: 'string',
			selector: 'img',
			default: 'shorturl.at/hOTV1',
		},
		date: {
			type: 'string',
			source: 'html',
			selector: 'span'
		},
		buttonText: {
			type: 'string',
		}
	},
	/*
	* Edit function
	*/
	edit: ({ attributes, className, setAttributes }) => {
		const { title, content, button } = attributes;

		function setTitle(value){
			setAttributes({ title: value });
		};
		function setContent(value){
			setAttributes({ content: value });
		};
		function setImage(value){
			console.log( value );
			setAttributes({ image: value.sizes.full.url, });
		};
		function setDate(value){
			setAttributes({ date: value });
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

					<div className={className}>
						<MediaUpload
						    onSelect={setImage}
							render={({open}) => {
								return <img 
									src={attributes.image}
									onClick={open} 
								/>
							}}
							/>
					</div>
				</div>
			</>
		);
	},
	/**
	 * Save Function
	 */
	save: ({ attributes }) => {
		const { title, content, button, className } = attributes;

		return (
			<>
				<div className={className}>
					<div className="call-to-action front-end">
						<div className="media">
							<img src={attributes.image} />
						</div>
						<h2>{title}</h2>
						<RichText.Content
							tagName="p"
							value={content}
						/>
						<button>{button}</button>
					</div>
				</div>
			</>
		);
	}
});