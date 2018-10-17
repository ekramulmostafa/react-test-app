import React, { Component } from "react";
import ContentListBlock from '../components/ContentListBlock'
import axios from 'axios';


export default () => {
    var divs = '';


    var baseURL = 'https://api.bioscopelive.com';
    var token = '';
    var contentLists = [];


    function getData(){
        // var pop = [{bongoId: 1, contentName: 'title 1'}, {bongoId: 2, contentName: 'title 2'}];
        // console.log(contentLists);
        divs = contentLists.map((item, key) => {
            // return <ContentListBlock bongoId={item.bongoId} contentName={item.title} key={key} />
            return <div>{item.title}</div>
        })

        return divs;
        // console.log(divs);
    }



    new Promise(function(resolve, reject){
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

        axios(objectInstance).then((res) => {

            resolve(res);
            // localStorage.setItem('tokenSaved',)
        }).catch(function (error) {
            reject(error);
        });
    }).then(function(value){
        token = value.data.token;
        localStorage.setItem('tokenSaved', token);

        // console.log(token);


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

        axios(objectInstance).then((res) => {

            // console.log(res.data._embedded.contents);
            contentLists = res.data._embedded.contents;
            getData();


        }).catch((error) => {
            console.log('error'+error);
            // localStorage.setItem('tokenSaved', '');
            // starter();
        });
    })

    return (
        <div>
            {divs}
        </div>
    );


}