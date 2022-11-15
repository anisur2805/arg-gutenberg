// const { registerBlockType } = wp.blocks;
// const { __ } = wp.i18n;
// const { Fragment } = wp.element;
// const { InspectorControls, PanelColorSettings, withColors, getColorClassName } = wp.blockEditor;

// const BlockWithColorSettings = ( props ) => {
//     const { textColor, bgColor, setTextColor } = props;  // Props received from withColors

//     console.log( props )
    
//     let divClass;
//     let divBgClass;
//     let divStyles = {};
//     let divBgStyles = {};

//     if ( textColor != undefined ) {
//         if ( textColor.class != undefined ) {
//             divClass = textColor.class;
//         } else {
//             divStyles.color = textColor.color;
//         }
//     }

//     if ( bgColor != undefined ) {
//         if ( bgColor.class != undefined ) {
//             divBgClass = bgColor.class;
//         } else {
//             divBgStyles.color = bgColor.color;
//         }
//     }

//     return (
//         <Fragment>
//             <InspectorControls>
//                 <PanelColorSettings
//                     title={ __( 'Color settings' ) }
//                     colorSettings={ [
//                         {
//                             value: textColor.color,
//                             onChange: setTextColor,
//                             label: __( 'Text color' )
//                         },
//                     ] }
//                 />

//                 <PanelColorSettings
//                     title={ __( 'BG Color settings' ) }
//                     colorSettings={ [
//                         {
//                             // value: bgColor.color,
//                             // onChange: setBgColor,
//                             label: __( 'BG color' )
//                         },
//                     ] }
//                 />

//             </InspectorControls>
//             <div className={ divClass } style={ divStyles }>
//                 PanelColorSettings Demo
//             </div>
//         </Fragment>
//     );
// }

// registerBlockType( 'arg-blocks/color-settings', {
//     title: "Color Settings",
//     icon: 'smiley',
//     category: 'common',
//     attributes: {
//         textColor: {
//             type: 'string'
//         },
//         customTextColor: {
//             type: 'string'
//         },
//     },
//     edit: withColors( { textColor: 'color' } )( BlockWithColorSettings ),
//     save: ( props ) => {
//         const { textColor, customTextColor } = props.attributes;
//         let divClass;
//         let divStyles = {};
//         if ( textColor != undefined ) {
//             divClass = getColorClassName( 'color', textColor );
//         }
//         if ( customTextColor != undefined ) {
//             divStyles.color = customTextColor;
//         }
//         return (
//             <div className={ divClass } style={ divStyles }>
//                 PanelColorSettings Demo
//             </div>
//         );
//     }
// } );