import React from 'react';

class ContentListBlock extends React.Component{



    render(){
        return(
            <div>
                <div><img alt="picture" src={'https://cdn.bioscopelive.com/upload/content/landscape/sd/'+this.props.bongoId+'.jpg'} /></div>
                <div>{this.props.contentName}</div>
            </div>

        );
    }
}

export default ContentListBlock;