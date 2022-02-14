import React from 'react';

import { auth } from '../services/firebase'
import { collection, addDoc, getDocs } from "firebase/firestore"; 
import { v4 as uuid } from "uuid";
import { db } from '../services/firebase';
import '../App.css';

var x;
async function getData(user){
    if(user){
      var userEmail = [];
      const querySnapshot = await getDocs(collection(db, "Users"));
      querySnapshot.forEach((doc) => {
        var dataaa = doc.data();
        userEmail.push(dataaa.email);
      });
      if (userEmail.includes(user.email)){
        console.log(userEmail.includes(user.email));
      }
      else{
        userEmail.push(user.email);
        try{
          await addDoc(collection(db, "Users"), {
            id: uuid(),
            email: user.email
          });
          setTimeout(console.log(900), 1800);
        }
        catch (e){
          console.log(e);
        }
      }
    }
  }

function getBTCPrice(){
    fetch(`https://api.nomics.com/v1/currencies/ticker?key=${process.env.REACT_APP_BTC_API_KEY}&ids=BTC`)
        .then(response => response.json())
        .then(data => (x = Math.floor(data[0]['price'])));
}

function showPrice(){
    document.getElementById('btc').innerHTML = "BTC Price is USD " + x;
    addPrice();
}

async function addPrice(){
    if (x){
        await addDoc(collection(db, "BTCPrice"),{
            id: uuid(),
            price: x,
            dateTime: new Date()
        });
    }
}

const Home = ({ user }) => {
    getData(user);
    getBTCPrice();
    console.log(user);

  return (
    <div className="home">
      <img src={user.photoURL}></img>
      <h1>Hello, <span></span>{user.displayName}</h1>
      <p>Email : {user.email}</p>
      <div id='btc' className='BTCPrice'></div>
      <button type="button" onClick={showPrice} className="button getprice btn btn-outline-dark">Get Price</button>
      {/* <button className='button getprice' onClick={showPrice}>Get Price</button> */}
    </div>
  )
}

export default Home;