import { registerBlockType } from '@wordpress/blocks';
import { RichText, useBlockProps } from '@wordpress/block-editor';
import { useSelect, withSelect } from '@wordpress/data';
import { Spinner } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

registerBlockType( 'rtc/blog', {
  title: 'Rtc Blog',
  category: 'common',

  edit: withSelect( select => {
    return {
      posts: select( 'core' ).getEntityRecords( 'postType', 'post', { per_page: 3 } )
    };
  } )( ( { posts, className, attributes, setAttributes } ) => {
 
    if ( !posts ) {
      return (
        <p className={ className }>
          <Spinner />
          { __( 'Loading posts' ) }
        </p>
      );
    }

    if ( 0 === posts.length ) {
      return (
        <p className={ className }>{ __( 'No Posts' ) }</p>
      );
    }
    
    return (
      <div className={ className }>
        <RichText
          tagName='h2'
          value={ attributes.content }
          onChange={ content => setAttributes( { content } ) }
          placeholder={ __( 'Whats up, bruh?' ) }
        />
        <ul>
          { posts.map( post => <li key={ post.id }>
            <a href={ post.link }>
              {post.rtc_feature_image && <img src={post.rtc_feature_image} /> }
              <h4>{ post.title.rendered }</h4>
              <h4>{ post.excerpt.rendered }</h4>
            </a>
          </li>
          )
          }
        </ul>
      </div>
    )
  } ),
  save () {
    return null;
  },
} );