import React from 'react'
import Title from '../components/Title'
import Form from '../components/Form'
import Weather from '../components/Weather'
import ContentListBlock from '../components/ContentListBlock'
import axios from 'axios'

const API_KEY = 'ec1e44e38f204bf4868bfb2cac133631';
/*const Home = () => {

    return(
        <div>
            <Title />
            <Form getWeather={getWeather} />
            <Weather/>
        </div>
    );
}*/



const Home = async () => {
    await starter()
    const contentListDivs = [];
    for(let i = 0; i < contentLists.length; i++){
        contentListDivs.push( <ContentListBlock bongoId={contentList.bongoId} contentName={contentList.title} /> )
    }
    return (
        <div>
            HOME PAGE
            {contentListDivs}
        </div>
    );
}

var token = '';
var baseURL = 'https://api.bioscopelive.com';
var contentLists = [];

async function getWeather (e){
    e.preventDefault();
    const api_call =  await fetch(`https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${API_KEY}`);
    const data = await api_call.json();

    console.log(data);
}


async function starter(){

    token = localStorage.getItem("tokenSaved");

    // this.tokenGennerate();
    if(token == null || token == ''){
        await tokenGennerate();
    }

    console.log('token = '+token+" "+localStorage.getItem('tokenSaved'));

    await getContentList();
}

async function getContentList(){

    let objectInstance = {
        // url: this.baseURL + '/api/en/content-selector/feluda-full-series',
        url: baseURL + '/api/en/content-selector/drama-dhamaka',
        method: 'get',
        headers: {
            "Content-Type" : "application/json",
            "Authorization" : "Bearer " + token,
            "Access-Code" : "QkQ%3D"
        },
    };

    await axios(objectInstance).then((res) => {

        console.log(res.data._embedded.contents);
        contentLists = res.data._embedded.contents;
    }).catch((error) => {
        console.log('error'+error);
        localStorage.setItem('tokenSaved', '');
        starter();
    });
}

async function tokenGennerate(){

    let objectInstance = {
        url: baseURL + '/api/login_check',
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

    // console.log(objectInstance);return;
    await axios(objectInstance).then((res) => {

        token = res.data.token;
        localStorage.setItem('tokenSaved', token);
        // localStorage.setItem('tokenSaved',)
    }).catch(function (error) {
        console.log('token error = '+error);
    });

}

export default Home;