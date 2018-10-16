import React from 'react';

class ContentListBlock extends React.Component{
    render(){
        return(
            <div>
                <div class="content-image"><img src={'https://cdn.bioscopelive.com/upload/content/landscape/sd/'+this.props.bongoId+'.jpg'} /></div>
                <div class="content-detail">{this.props.contentName}</div>
            </div>

        );
    }
}

export default ContentListBlock;