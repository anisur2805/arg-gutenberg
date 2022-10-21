import React from 'react'

const { RichText, URLInputButton } = wp.editor;

const ButtonWithLink = (props) => {
  return (
    <div>

        <RichText 
            className="btn btn--primary"
            value={props.text}
            placeholder="Please enter button text"
            onChange={props.onButtonTextChange}
        />
        <URLInputButton
            url={props.url}
            onChange={props.onURLChange}
        />

        <a href="#" className='btn btn--primary'>
        This will eventually be a button!
        </a>
    </div>
  )
}

ButtonWithLink.View = (props) => {
    return (  
      <div>
  
          <RichText.Content 
              className="btn btn--primary"
              value={props.buttonText}
              tagName="a"
              href={props.buttonUrl}
          />
          </div>
    )
}

export default ButtonWithLink;