import { registerBlockType } from '@wordpress/blocks';
import { RichText, useBlockProps } from '@wordpress/block-editor';
import { useSelect, withSelect } from '@wordpress/data';
import { Spinner } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

registerBlockType( 'rtc/blog', {
  title: 'Rtc Blog',
  category: 'common',

  edit: ({className, attributes, setAttributes}) => {
    const blockProps = useBlockProps();
    const posts = useSelect( ( select ) => {
      return select( 'core' ).getEntityRecords( 'postType', 'post', { per_page: -1 } )
    }, [] );

    // } )( ( { posts, className, attributes, setAttributes } ) => {

    //   { console.log( typeof posts ) }
    return (
      <div { ...blockProps }>
        { !posts && ( <p className="{ className }">
          <Spinner />
          { __( 'Loading posts' ) }</p>
        )
        }

        { 0 === posts.length && (
          <p className="{ className }">{ __( 'No Posts' ) }</p> )
        }

        <div className="{ className }">
          <RichText
            tagName='h2'
            value={ attributes.content }
            onChange={ content => setAttributes( { content } ) }
            placeholder={ __( 'Whats up, bruh?' ) }
          />
          <ul>
            { posts.map( post => <li key={ post.id }>
              <a href={ post.link }>
                <h4>{ post.title.rendered }</h4>
                <h4>{ post.excerpt.rendered }</h4>
              </a>
            </li>
            )
            }
          </ul>
        </div>
      </div>
    )
  },
  save () {
    return null;
  },
} );