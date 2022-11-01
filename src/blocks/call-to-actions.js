import { registerBlockType } from '@wordpress/blocks';
import { RichText, MediaUpload, URLInputButton } from '@wordpress/block-editor';
import { Button, IconButton } from '@wordpress/components';

registerBlockType( 'arg-gutenberg-blocks/call-to-action', {
	title: 'Call to Action',
	icon: 'admin-comments',
	category: 'common',
	keywords: ['cta', 'call to action'],
	attributes: {
		subTitle: {
			type: 'string',
			source: 'html',
			selector: 'h5',
			default: 'Request an appointment'
		},
		title: {
			type: 'string',
			source: 'html',
			selector: 'h2',
			default: 'Get Started Today!'
		},
		content: {
			type: 'string',
			source: 'html',
			selector: 'p',
			default: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id augue semper arcu enim viverra sit ipsum. Nunc lorem a vulputate eget bibendum id et. Eget nunc, eu, molestie tellus sollicitudin vitae consequat adipiscing. Mauris sit quam est .'
		},
		imageUrl: {
			type: 'string',
			default: 'https://live-greeley-nista.pantheonsite.io/wp-content/uploads/2022/05/CTA.png',
		},
		imageID: {
			type: 'number',
		},
		imageAlt: {
			type: 'string',
			source: 'attribute',
			attribute: 'alt',
			selector: 'img',
		},
		date: {
			type: 'string',
			source: 'html',
			selector: 'span'
		},
		buttonText: {
			type: 'string',
			default: 'Learn More',
			selector: 'button'
		},
		buttonUrl: {
			type: 'string',
			default: '#',
			selector: 'button'
		}
	},


	edit: ( { attributes, className, setAttributes, isSelected } ) => {
		const { title, subTitle, content, button, imageUrl, imageAlt, imageID, buttonText, buttonUrl } = attributes;

		function setTitle ( value ) {
			setAttributes( { title: value } );
		};

		function setSubTitle ( newValue ) {
			setAttributes( { subTitle: newValue } );
		};

		function setContent ( value ) {
			setAttributes( { content: value } );
		};

		function onSelectImage ( newImg ) { // upload img url, id, title
			setAttributes( {
				imageUrl: newImg.sizes.full.url
			} );
		};

		function onRemoveImage () {
			setAttributes( {
				imageUrl: null,
				imageAlt: null,
				imageID: null
			} );
		};

		function setDate ( value ) {
			setAttributes( { date: value } );
		};

		function setButtonText ( newValue ) {
			setAttributes( { buttonText: newValue } );
		};

		function setButtonUrl ( newValue ) {
			setAttributes( { buttonUrl: newValue } );
		};

		return (
			<>
				{ console.log( className ) }
				<div className={ `call-to-action ${className}` }>

					<RichText
						key="editable"
						tagName="h5"
						placeholder="Enter subtitle"
						value={ subTitle }
						onChange={ setSubTitle }
					/>

					<RichText
						key="editable"
						tagName="h2"
						placeholder="Enter title"
						value={ title }
						onChange={ setTitle }
					/>

					<RichText
						key="editable"
						tagName="p"
						placeholder="Enter content"
						value={ content }
						onChange={ setContent }
					/>

					<RichText
						className='cta-btn'
						placeholder="Enter Button text"
						value={ buttonText }
						onChange={ setButtonText }
					/>

					<URLInputButton
						url={ buttonUrl }
						placeholder="Enter Button url"
						onChange={ setButtonUrl }

					/>

					{ imageUrl ? (
						<div className='cta-image-wrapper'>
							<img
								src={ imageUrl }
								alt={ imageAlt }
								className="cta-image"
							/>

							{ isSelected ? (
								<Button
									className='cta-btn btn-remove-image'
									onClick={ onRemoveImage }
								>Remove Image
								</Button>
							) : null }
						</div>

					) : (

						<div className={ className }>
							<MediaUpload
								value={ imageUrl }
								type="image"
								onSelect={ onSelectImage }
								render={ ( { open } ) => <IconButton
									title='Upload Media'
									icon="upload"
									src={ imageUrl }
									className="cta-btn btn-open-library"
									onClick={ open }
								>Open Library</IconButton>
								}
							/>
						</div>

					) }

				</div>
			</>
		);
	},


	save: ( { attributes } ) => {
		const { title, subTitle, content, button, imageUrl, imageAlt, imageID, buttonText, buttonUrl } = attributes;
		return (
			<>
				<div className="call-to-action-wrapper cta-frontend-wrapper">
					<div className="fe-call-to-action">
						
						<div className='fe-cta-content'>
							<h5>{ subTitle }</h5>
							<h2>{ title }</h2>
							<RichText.Content
								tagName="p"
								value={ content }
							/>
							<RichText.Content
								className='cta-btn'
								tagName="a"
								value={ buttonText }
								href={ buttonUrl }
							/>
						</div>

						<div className="cta-media">
							<img src={ imageUrl } alt="Image Alt" />
						</div>

					</div>
				</div>
			</>
		);
	}

} );