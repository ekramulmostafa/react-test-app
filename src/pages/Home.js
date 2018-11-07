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
        /*let objectInstance = {
            url: this.state.baseUrl + '/api/login_check',
            method: 'post',
            // headers: {'X-Custom-Header': 'foobar'},
            data: {
                "authentication_type" 	: "anonymous",
                "anonymous_id"			: "bioscope_anonymous",
                "client_type"     		: "web",
                "client_id"       		: "web_"+Math.random(),
                "channel"  				: "bioscope_web_anonymous"
            }
        };

        await axios(objectInstance).then((res) => {

            this.setState({token: res.data.token}) ;
            localStorage.setItem('tokenSaved', this.state.token);
            // localStorage.setItem('tokenSaved',)
        }).catch(function (error) {
            console.log(error)
        });*/

        const data = await tokenGenerate(this.state.baseUrl);
        // console.log(data);
        if(typeof data.token !== 'undefined'){
            this.setState({token: data.token}) ;
            localStorage.setItem('tokenSaved', this.state.token);
        }

        // console.log(this.state.token);
    }

    async getContntList(){
        /*let objectInstance = {
            // url: this.baseURL + '/api/en/content-selector/feluda-full-series',
            url: this.state.baseUrl + '/api/en/content-selector/drama-dhamaka',
            method: 'get',
            headers: {
                "Content-Type" : "application/json",
                "Authorization" : "Bearer " + this.state.token,
                "Access-Code" : "QkQ%3D"
            },
        };

        await axios(objectInstance).then((res) => {

            console.log(res.data._embedded.contents);
            this.setState({contentLists : res.data._embedded.contents});
            this.getData();


        }).catch((error) => {
            console.log('error'+error);
            localStorage.setItem('tokenSaved', '');
            this.getToken();
        });*/


        const data = await contentList(this.state.baseUrl, this.state.token)

        // console.log(JSON.stringify(data, null, 2));
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
        const {token, contentList} = this.state
        return(
            <div className="total-content-list">
                <h1>Content list(React JS)</h1>
                {this.state.divs}
            </div>
        );
    }
}

export default Home;