import React from 'react';
import {Link} from 'react-router-dom';

class ContentListBlock extends React.Component{
    render(){
        return(
            <div className="content-list-item">
                {/*<Link to={{
                    pathname: '/contentDetails/'+this.props.bongoId
                }}>*/}
                <a href={'/contentDetails/'+this.props.bongoId}>
                    <div className="content-image"><img alt="picture" src={'https://cdn.bioscopelive.com/upload/content/landscape/sd/'+this.props.bongoId+'.jpg'} /></div>
                    <div className="content-detail">{this.props.contentName}</div>
                </a>
                {/*</Link>*/}

            </div>

        );
    }
}

export default ContentListBlock;