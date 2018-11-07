import React from 'react';
import axios from 'axios';
import {tokenGenerate, contentList} from '../api/api';
import ComponentListBlock from '../components/ContentListBlock'

class Home extends React.Component{
    state = {
        ContentList: '',
        baseUrl: 'https://api.bioscopelive.com',
        token: '',
        contentList: [],
        divs: ''
    }

    async getToken(){

        const data = await tokenGenerate(this.state.baseUrl);

        if(typeof data.token !== 'undefined'){
            this.setState({token: data.token}) ;
            localStorage.setItem('tokenSaved', this.state.token);
        }

        // console.log(this.state.token);
    }

    async getContntList(){
        const data = await contentList(this.state.baseUrl, this.state.token)

        if(typeof data.contentLists !== 'undefined'){
            this.setState({contentLists : data.contentLists});
            this.getData();
        }else{
            localStorage.setItem('tokenSaved', '');
            this.getToken();
        }
    }

    getData(){

        var data = this.state.contentLists.map((item, key) => {
            // return <div>{item.title}</div>
            return <ComponentListBlock bongoId={item.bongoId} contentName={item.title} key={key}></ComponentListBlock>
        })

        this.setState({divs: data});
        // console.log(divs);
    }

    async componentDidMount(){
        await this.getToken();
        await this.getContntList();
    }

    render(){
        return(
            <div className="total-content-list">
                <h1>Content list(React JS)</h1>
                {this.state.divs}
            </div>
        );
    }
}

export default Home;