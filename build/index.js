/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blocks/Button.jsx":
/*!*******************************!*\
  !*** ./src/blocks/Button.jsx ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ButtonWithLink_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/ButtonWithLink.jsx */ "./src/components/ButtonWithLink.jsx");
/* harmony import */ var _button_example_view_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./button-example.view.scss */ "./src/blocks/button-example.view.scss");


 // import './button-example.editor.scss';

const {
  registerBlockType
} = wp.blocks;
const {
  InspectorControls,
  RichText
} = wp.editor;
registerBlockType('arg-gutenberg-blocks/button', {
  title: "Arg Button",
  icon: 'smiley',
  category: 'common',
  keywords: ['btn', 'button'],
  supports: {
    align: true
  },
  attributes: {
    buttonText: {
      type: String
    },
    buttonUrl: {
      type: String
    }
  },

  edit(props) {
    const {
      className,
      setAttributes
    } = props;
    const {
      buttonText,
      buttonUrl
    } = props.attributes;

    function updateAttribute(key, value) {
      setAttributes({ // TODO: need to remove this
        ...props.attributes,
        [key]: value
      });
    }

    return [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      style: {
        padding: '1rem 0'
      }
    }, "Arg Button Options")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: `${className} anisur-rahman`
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_components_ButtonWithLink_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
      text: buttonText,
      url: buttonUrl,
      onButtonTextChange: val => updateAttribute('buttonText', val),
      onURLChange: val => updateAttribute('buttonUrl', val)
    }))];
  },

  save(props) {
    const {
      buttonText,
      buttonUrl
    } = props.attributes;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "ar-btn"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_components_ButtonWithLink_jsx__WEBPACK_IMPORTED_MODULE_1__["default"].View, {
      buttonText: buttonText,
      buttonUrl: buttonUrl
    }));
  }

});

/***/ }),

/***/ "./src/blocks/button-example.view.scss":
/*!*********************************************!*\
  !*** ./src/blocks/button-example.view.scss ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/call-to-actions.js":
/*!***************************************!*\
  !*** ./src/blocks/call-to-actions.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);




Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__["registerBlockType"])('arg-gutenberg-blocks/call-to-action', {
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
      default: 'https://live-greeley-nista.pantheonsite.io/wp-content/uploads/2022/05/CTA.png'
    },
    imageID: {
      type: 'number'
    },
    imageAlt: {
      type: 'string',
      source: 'attribute',
      attribute: 'alt',
      selector: 'img'
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
  edit: ({
    attributes,
    className,
    setAttributes,
    isSelected
  }) => {
    const {
      title,
      subTitle,
      content,
      button,
      imageUrl,
      imageAlt,
      imageID,
      buttonText,
      buttonUrl
    } = attributes;

    function setTitle(value) {
      setAttributes({
        title: value
      });
    }

    ;

    function setSubTitle(newValue) {
      setAttributes({
        subTitle: newValue
      });
    }

    ;

    function setContent(value) {
      setAttributes({
        content: value
      });
    }

    ;

    function onSelectImage(newImg) {
      // upload img url, id, title
      setAttributes({
        imageUrl: newImg.sizes.full.url
      });
    }

    ;

    function onRemoveImage() {
      setAttributes({
        imageUrl: null,
        imageAlt: null,
        imageID: null
      });
    }

    ;

    function setDate(value) {
      setAttributes({
        date: value
      });
    }

    ;

    function setButtonText(newValue) {
      setAttributes({
        buttonText: newValue
      });
    }

    ;

    function setButtonUrl(newValue) {
      setAttributes({
        buttonUrl: newValue
      });
    }

    ;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, console.log(className), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: `call-to-action ${className}`
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["RichText"], {
      key: "editable",
      tagName: "h5",
      placeholder: "Enter subtitle",
      value: subTitle,
      onChange: setSubTitle
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["RichText"], {
      key: "editable",
      tagName: "h2",
      placeholder: "Enter title",
      value: title,
      onChange: setTitle
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["RichText"], {
      key: "editable",
      tagName: "p",
      placeholder: "Enter content",
      value: content,
      onChange: setContent
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["RichText"], {
      className: "cta-btn",
      placeholder: "Enter Button text",
      value: buttonText,
      onChange: setButtonText
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["URLInputButton"], {
      url: buttonUrl,
      placeholder: "Enter Button url",
      onChange: setButtonUrl
    }), imageUrl ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "cta-image-wrapper"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
      src: imageUrl,
      alt: imageAlt,
      className: "cta-image"
    }), isSelected ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["Button"], {
      className: "cta-btn btn-remove-image",
      onClick: onRemoveImage
    }, "Remove Image") : null) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: className
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["MediaUpload"], {
      value: imageUrl,
      type: "image",
      onSelect: onSelectImage,
      render: ({
        open
      }) => Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["IconButton"], {
        title: "Upload Media",
        icon: "upload",
        src: imageUrl,
        className: "cta-btn btn-open-library",
        onClick: open
      }, "Open Library")
    }))));
  },
  save: ({
    attributes
  }) => {
    const {
      title,
      subTitle,
      content,
      button,
      imageUrl,
      imageAlt,
      imageID,
      buttonText,
      buttonUrl
    } = attributes;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "call-to-action-wrapper cta-frontend-wrapper"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "fe-call-to-action"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "fe-cta-content"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h5", null, subTitle), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h2", null, title), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["RichText"].Content, {
      tagName: "p",
      value: content
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["RichText"].Content, {
      className: "cta-btn",
      tagName: "a",
      value: buttonText,
      href: buttonUrl
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "cta-media"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
      src: imageUrl,
      alt: "Image Alt"
    })))));
  }
});

/***/ }),

/***/ "./src/blocks/rtc-blog.jsx":
/*!*********************************!*\
  !*** ./src/blocks/rtc-blog.jsx ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);






Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__["registerBlockType"])('rtc/blog', {
  title: 'Rtc Blog',
  category: 'common',
  edit: Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__["withSelect"])(select => {
    return {
      posts: select('core').getEntityRecords('postType', 'post', {
        per_page: 3
      })
    };
  })(({
    posts,
    className,
    attributes,
    setAttributes
  }) => {
    if (!posts) {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", {
        className: className
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Spinner"], null), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Loading posts'));
    }

    if (0 === posts.length) {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", {
        className: className
      }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('No Posts'));
    }

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: className
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["RichText"], {
      tagName: "h2",
      value: attributes.content,
      onChange: content => setAttributes({
        content
      }),
      placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Whats up, bruh?')
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("ul", null, posts.map(post => Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("li", {
      key: post.id
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
      href: post.link
    }, post.rtc_feature_image && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
      src: post.rtc_feature_image
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h4", null, post.title.rendered), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h4", null, post.excerpt.rendered))))));
  }),

  save() {
    return null;
  }

});

/***/ }),

/***/ "./src/components/ButtonWithLink.jsx":
/*!*******************************************!*\
  !*** ./src/components/ButtonWithLink.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const {
  RichText,
  URLInputButton
} = wp.editor;

const ButtonWithLink = props => {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
    className: "btn btn--primary",
    value: props.text,
    placeholder: "Please enter button text",
    onChange: props.onButtonTextChange
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(URLInputButton, {
    url: props.url,
    onChange: props.onURLChange
  }));
};

ButtonWithLink.View = props => {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText.Content, {
    className: "btn btn--primary",
    value: props.buttonText,
    tagName: "a",
    href: props.buttonUrl
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ButtonWithLink);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _blocks_call_to_actions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blocks/call-to-actions.js */ "./src/blocks/call-to-actions.js");
/* harmony import */ var _blocks_Button_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blocks/Button.jsx */ "./src/blocks/Button.jsx");
/* harmony import */ var _blocks_rtc_blog_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blocks/rtc-blog.jsx */ "./src/blocks/rtc-blog.jsx");

const {
  registerPlugin
} = wp.plugins;
const {
  PluginSidebar,
  PluginSidebarMoreMenuItem
} = wp.editPost;
const {
  __
} = wp.i18n;
const {
  Panel,
  PanelHeader,
  PanelBody,
  PanelRow,
  SelectControl,
  TextareaControl,
  TextControl,
  ToggleControl,
  Button,
  Card,
  CardBody,
  CardFooter,
  IconButton
} = wp.components;
const {
  withSelect,
  withDispatch
} = wp.data;




let PluginMetaFields = props => {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Panel, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
    title: __('Posts Meta Fields', 'arg-gutenberg'),
    icon: "editor-bold",
    initialOpen: true
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
    value: props.text_field,
    label: __('Name', 'arg-gutenberg'),
    onChange: value => props.onTextFieldChange(value)
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
    value: props.email_field,
    label: __('Email', 'arg-gutenberg'),
    onChange: value => props.onEmailFieldChange(value)
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
    value: props.phone_field,
    label: __('Phone', 'arg-gutenberg'),
    onChange: value => props.onPhoneFieldChange(value)
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextareaControl, {
    value: props.bio_field,
    label: __('Description', 'arg-gutenberg'),
    onChange: value => props.onBioFieldChange(value)
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
    help: __('An example dropdown field.', 'arg-gutenberg'),
    label: __('Example Select', 'arg-gutenberg'),
    onChange: value => props.onSelectFieldChange(value),
    options: [{
      label: __('Please Select...', 'arg-gutenberg'),
      value: ''
    }, {
      label: __('Option 1', 'arg-gutenberg'),
      value: 'option-1'
    }, {
      label: __('Option 2', 'arg-gutenberg'),
      value: 'option-2'
    }],
    value: props.select_field
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
    checked: props.toggle_field,
    help: __('An example toggle.', 'arg-gutenberg'),
    label: __('Example Toggle', 'arg-gutenberg'),
    onChange: value => props.onToggleFieldChange(value)
  }))));
}; // trigger withSelect


PluginMetaFields = withSelect(select => {
  return {
    text_field: select('core/editor').getEditedPostAttribute('meta')['_arg_gutenberg_text_field'],
    email_field: select('core/editor').getEditedPostAttribute('meta')['_arg_gutenberg_email_field'],
    phone_field: select('core/editor').getEditedPostAttribute('meta')['_arg_gutenberg_phone_field'],
    bio_field: select('core/editor').getEditedPostAttribute('meta')['_arg_gutenberg_bio_field'],
    select_field: select('core/editor').getEditedPostAttribute('meta')['_arg_gutenberg_select_field'],
    toggle_field: select('core/editor').getEditedPostAttribute('meta')['_arg_gutenberg_toggle_field']
  };
})(PluginMetaFields); // trigger withDispatch

PluginMetaFields = withDispatch(dispatch => {
  return {
    onTextFieldChange: value => {
      dispatch('core/editor').editPost({
        meta: {
          _arg_gutenberg_text_field: value
        }
      });
    }
  };
})(PluginMetaFields);
PluginMetaFields = withDispatch(dispatch => {
  return {
    onEmailFieldChange: value => {
      dispatch('core/editor').editPost({
        meta: {
          _arg_gutenberg_email_field: value
        }
      });
    }
  };
})(PluginMetaFields);
PluginMetaFields = withDispatch(dispatch => {
  return {
    onPhoneFieldChange: value => {
      dispatch('core/editor').editPost({
        meta: {
          _arg_gutenberg_phone_field: value
        }
      });
    }
  };
})(PluginMetaFields);
PluginMetaFields = withDispatch(dispatch => {
  return {
    onBioFieldChange: value => {
      dispatch('core/editor').editPost({
        meta: {
          _arg_gutenberg_bio_field: value
        }
      });
    }
  };
})(PluginMetaFields);
PluginMetaFields = withDispatch(dispatch => {
  return {
    onSelectFieldChange: value => {
      dispatch('core/editor').editPost({
        meta: {
          _arg_gutenberg_select_field: value
        }
      });
    }
  };
})(PluginMetaFields);
PluginMetaFields = withDispatch(dispatch => {
  return {
    onToggleFieldChange: value => {
      dispatch('core/editor').editPost({
        meta: {
          _arg_gutenberg_toggle_field: value
        }
      });
    }
  };
})(PluginMetaFields);
registerPlugin('arg-gutenberg', {
  icon: 'smiley',
  render: () => {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PluginSidebarMoreMenuItem, {
      target: "arg-gutenberg"
    }, __('ARG Gutenberg', 'arg-gutenberg')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PluginSidebar, {
      name: "arg-gutenberg",
      title: __('Meta Options', 'arg-gutenberg')
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PluginMetaFields, null)));
  }
});

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["blockEditor"]; }());

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["blocks"]; }());

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["components"]; }());

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["data"]; }());

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["element"]; }());

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["i18n"]; }());

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["React"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map