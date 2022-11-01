import { registerBlockType } from '@wordpress/blocks';
import { RichText, MediaUpload } from '@wordpress/block-editor';

wp.blocks.registerBlockType( 'rtc/blog', {
    title: 'Rtc Blog',
    category: 'common',
    edit() {
      return 'Minimal block editor content.';
    },
    save() {
      return 'Minimal block frontend content.';
    },
  } );