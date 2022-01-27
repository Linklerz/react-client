import React from 'react';
import { useParams } from 'react-router-dom';
const User = () => {
    const { userName } = useParams();
     const url = `https://lerz-api.herokuapp.com/api/links_json/${ userName }`;

        var linkDiv = document.getElementById('linkDiv');


        fetch(url)
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            // console.log(data);

            let links = data;

            links.map(function(link) {
            console.log(link.name) 


          const li = document.createElement("a");
          const node = document.createTextNode(`${link.name}`);

          li.appendChild(node);
          li.className = "links";
          li.target = '_blank';
          li.href = link.url;
          
          linkDiv.appendChild(li);


            });

            linkDiv.id = `${userName}Links`;
            
          })
          .catch(function(error) {
            console.log(error);
          });

    return (


    <div className="profile-name">@{ userName }</div>


    );
}
export default User;