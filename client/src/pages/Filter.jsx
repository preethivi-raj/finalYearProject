import { compareSync } from "bcryptjs";
import { useState } from "react";
import { useSelector } from 'react-redux';

function Filter() {
    
const { currentUser } = useSelector((state) => state.user);
const [filteredData , setFilteredData] = useState([])
var id = '';
if(currentUser.username == 'Ram'){
  id='1.00000'
}
else if(currentUser.username == 'Sam')
{
  id='2.00000'
}
else if(currentUser.username == 'Prem'){
  id='3.00000'
}
  fetch("https://api.thingspeak.com/channels/2385609/feed.json?api_key=VSGL2EXJZ6S3KZXW")
 .then(response => response.json())
  .then(data => {
   items(data);
})
.catch(error => console.error(error));
function items(data){
      
  var feeds = data.feeds;
  const feed = feeds.filter(feed => feed.field1===id)
  setFilteredData(feed);
}
  return (
    <div>
      <ul>
        {filteredData.map((obj, index) => (
          <li key={index}>
            <div>
              <p>{`Time: ${obj.created_at}   Balance: ${obj.field2}   Ammout Reduced: ${obj.field3}`}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Filter;


