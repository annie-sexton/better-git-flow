import React from 'react';

const Footer = (props: any) => {
  function render() {
    return(
      <div>
      {props.children}
      </div>
    )
  }

  return render()
}

export default Footer