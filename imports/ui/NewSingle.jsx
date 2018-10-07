import React from 'react';

const NewSingle = ({item}) => (
//   <div className="col-xs-12 col-sm-4 col-md-4">
//     <div className="card">
//       <div className="card-image">
//         <img className="img-responsive" src={item.urlToImage} alt={item.title}/>
//         <span className="card-title">{item.source.name}</span>
//       </div>
//       <div className="card-content">
//         <p>{item.title}</p>
//       </div>
//       <div className="card-action">

//         <a href={item.url} target="_blank">Full article</a>
//       </div>
//     </div>
//   </div>
<div className="col-xs-12 this-custom-col">
    <img className="img-responsive" src={item.picture.large} alt={item.name.first} />
    <h1>{item.name.first}, {item.name.last}</h1>
    <p>{item.email}</p>
    <p>{item.location.street}</p>
    <hr/>
</div>


);

export default NewSingle;
