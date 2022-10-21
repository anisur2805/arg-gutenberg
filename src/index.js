const { registerPlugin } = wp.plugins;
const { PluginSidebar, PluginSidebarMoreMenuItem } = wp.editPost;
const { __ } = wp.i18n;
const { Panel, PanelHeader, PanelBody, PanelRow, SelectControl, TextareaControl, TextControl, ToggleControl, Button, Card, CardBody, CardFooter, IconButton } = wp.components;
const { withSelect, withDispatch } = wp.data;

import './blocks/call-to-actions.js';
import './blocks/Button.jsx';

let PluginMetaFields = (props) => {
	
	return (
		<>
			<Panel>
				<PanelBody
					title={__('Posts Meta Fields', 'arg-gutenberg')}
					icon="editor-bold"
					initialOpen={true}
				>
					<TextControl
						value={props.text_field}
						label={__('Name', 'arg-gutenberg')}
						onChange={(value) => props.onTextFieldChange(value)}
					/>
					<TextControl
						value={props.email_field}
						label={__('Email', 'arg-gutenberg')}
						onChange={(value) => props.onEmailFieldChange(value)}
					/>
					<TextControl
						value={props.phone_field}
						label={__('Phone', 'arg-gutenberg')}
						onChange={(value) => props.onPhoneFieldChange(value)}
					/>
					<TextareaControl
						value={props.bio_field}
						label={__('Description', 'arg-gutenberg')}
						onChange={(value) => props.onBioFieldChange(value)}
					/>
					<SelectControl
						help={__('An example dropdown field.', 'arg-gutenberg')}
						label={__('Example Select', 'arg-gutenberg')}
						onChange={(value) => props.onSelectFieldChange(value)}
						options={[
							{
								label: __('Please Select...', 'arg-gutenberg'),
								value: '',
							},
							{
								label: __('Option 1', 'arg-gutenberg'),
								value: 'option-1',
							},
							{
								label: __('Option 2', 'arg-gutenberg'),
								value: 'option-2',
							},
						]}
						value={props.select_field}
					/>
					<ToggleControl
						checked={props.toggle_field}
						help={__('An example toggle.', 'arg-gutenberg')}
						label={__('Example Toggle', 'arg-gutenberg')}
						onChange={(value) => props.onToggleFieldChange(value)}
					/>

				</PanelBody>
			</Panel>
		</>
	);
};

// trigger withSelect
PluginMetaFields = withSelect(
	(select) => {
		return {
			text_field: select('core/editor').getEditedPostAttribute('meta')['_arg_gutenberg_text_field'],
			email_field: select('core/editor').getEditedPostAttribute('meta')['_arg_gutenberg_email_field'],
			phone_field: select('core/editor').getEditedPostAttribute('meta')['_arg_gutenberg_phone_field'],
			bio_field: select('core/editor').getEditedPostAttribute('meta')['_arg_gutenberg_bio_field'],
			select_field: select('core/editor').getEditedPostAttribute('meta')['_arg_gutenberg_select_field'],
			toggle_field: select('core/editor').getEditedPostAttribute('meta')['_arg_gutenberg_toggle_field'],
		};
	}
)(PluginMetaFields);

// trigger withDispatch
PluginMetaFields = withDispatch(
	(dispatch) => {
		return {
			onTextFieldChange: (value) => {
				dispatch('core/editor').editPost({ meta: { _arg_gutenberg_text_field: value } });
			}
		};
	}
)(PluginMetaFields);

PluginMetaFields = withDispatch(
	(dispatch) => {
		return {
			onEmailFieldChange: (value) => {
				dispatch('core/editor').editPost({ meta: { _arg_gutenberg_email_field: value } });
			}
		};
	}
)(PluginMetaFields);

PluginMetaFields = withDispatch(
	(dispatch) => {
		return {
			onPhoneFieldChange: (value) => {
				dispatch('core/editor').editPost({ meta: { _arg_gutenberg_phone_field: value } });
			}
		};
	}
)(PluginMetaFields);

PluginMetaFields = withDispatch(
	(dispatch) => {
		return {
			onBioFieldChange: (value) => {
				dispatch('core/editor').editPost({ meta: { _arg_gutenberg_bio_field: value } });
			}
		};
	}
)(PluginMetaFields);

PluginMetaFields = withDispatch(
	(dispatch) => {
		return {
			onSelectFieldChange: (value) => {
				dispatch('core/editor').editPost({ meta: { _arg_gutenberg_select_field: value } });
			}
		};
	}
)(PluginMetaFields);

PluginMetaFields = withDispatch(
	(dispatch) => {
		return {
			onToggleFieldChange: (value) => {
				dispatch('core/editor').editPost({ meta: { _arg_gutenberg_toggle_field: value } });
			}
		};
	}
)(PluginMetaFields);

registerPlugin('arg-gutenberg', {
	icon: 'smiley',
	render: () => {
		return (
			<>
				<PluginSidebarMoreMenuItem target="arg-gutenberg">
					{__('ARG Gutenberg', 'arg-gutenberg')}
				</PluginSidebarMoreMenuItem>
				<PluginSidebar
					name="arg-gutenberg"
					title={__('Meta Options', 'arg-gutenberg')}
				>
					<PluginMetaFields />
				</PluginSidebar>
			</>
		);
	}
});