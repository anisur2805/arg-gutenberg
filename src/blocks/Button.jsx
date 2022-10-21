import ButtonWithLink from '../components/ButtonWithLink.jsx';
import './button-example.view.scss';
// import './button-example.editor.scss';

const { registerBlockType, } = wp.blocks;

const { InspectorControls, RichText } = wp.editor;

registerBlockType( 'arg-gutenberg-blocks/button', {
    title: "Arg Button",
    icon: 'smiley',
    category: 'common',
    keywords: ['btn', 'button'],

    supports: {
        align: true,
    },

    attributes: {
        buttonText: {
            type: String,
        },
        buttonUrl: { type: String, },
    },

    edit ( props ) {
        const { className, setAttributes } = props;
        const { buttonText, buttonUrl } = props.attributes;

        function updateAttribute(key, value) {
            setAttributes({
                // TODO: need to remove this
               ...props.attributes,
                [key]: value,
            });
        }

        return [
            <InspectorControls>
                <div style={ { padding: '1rem 0' } }>
                    Arg Button Options
                </div>
            </InspectorControls>,
            <div className={ `${className} anisur-rahman` }>
                <ButtonWithLink
                    text={buttonText}
                    url={buttonUrl}
                    onButtonTextChange={val => updateAttribute('buttonText', val) }
                    onURLChange={val => updateAttribute('buttonUrl', val) }
                />
            </div>,

        ];
    },

    save ( props ) {
        const { buttonText, buttonUrl} = props.attributes;
        return (
            <div className='ar-btn'>
                <ButtonWithLink.View 
                    buttonText={buttonText}
                    buttonUrl={buttonUrl}
                />
            </div>
        );
    },
} );