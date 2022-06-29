let listings = JSON.parse(localStorage.getItem("listings"))
? JSON.parse(localStorage.getItem("listings")):[
    {image: 'https://raw.githubusercontent.com/leandremoritz/JSproject/main/images/apartment1%20(1).jpg',
    id:1,
     title:'Light and Modern Apartment',
     price: '$4500/mo',
     address:'2436 SW 8th St, Miami, FL 33135, USA',
     bedrooms:'4',
     bathrooms:'2',
     garage:'1',
     size:'1200',
     type:'Apartment',
     user:' Samuel Palmer',
     datePosted:'04/04/2020',
     yearBuilt:'2016',
    },
    {image:'https://raw.githubusercontent.com/leandremoritz/JSproject/main/images/apartment1%20(2).jpg',
    id:2,
    title:'Cute Apartment',
    price: '$4500/mo',
    address:'2436 SW 8th St, Miami, FL 33135, USA',
    bedrooms:'4',
    bathrooms:'2',
    garage:'1',
    size:'1200',
    type:'Apartment',
    user:' Samuel Palmer',
    datePosted:'04/04/2020',
    yearBuilt:'2016',
   },
   {image: 'https://raw.githubusercontent.com/leandremoritz/JSproject/main/images/apartment1%20(3).jpg',
   id:3,
   title:'Cozy Apartment',
   price: '$4500/mo',
   address:'2436 SW 8th St, Miami, FL 33135, USA',
   bedrooms:'4',
   bathrooms:'2',
   garage:'1',
   size:'1200',
   type:'Apartment',
   user:' Samuel Palmer',
   datePosted:'04/04/2020',
   yearBuilt:'2016',
  },
  {image: 'https://raw.githubusercontent.com/leandremoritz/JSproject/main/images/apartment1%20(4).jpg',
  id:4,
  title:'Newly Built Apartment',
  price: '$4500/mo',
  address:'2436 SW 8th St, Miami, FL 33135, USA',
  bedrooms:'4',
  bathrooms:'2',
  garage:'1',
  size:'1200',
  type:'Apartment',
  user:' Samuel Palmer',
  datePosted:'04/04/2020',
  yearBuilt:'2016',
 },
 {image: 'https://raw.githubusercontent.com/leandremoritz/JSproject/main/images/apartment1%20(5).jpg',
     id:5,
 title:'Fully Furnished Apartment',
 price: '$4500/mo',
 address:'2436 SW 8th St, Miami, FL 33135, USA',
 bedrooms:'4',
 bathrooms:'2',
 garage:'1',
 size:'1200',
 type:'Apartment',
 user:' Samuel Palmer',
 datePosted:'04/04/2020',
 yearBuilt:'2016',
},
{image: 'https://raw.githubusercontent.com/leandremoritz/JSproject/main/images/house1%20(1).jpg',
    id:6,
     title:'North Facing listing',
     price: '$4500/mo',
     address:'2436 SW 8th St, Miami, FL 33135, USA',
     bedrooms:'4',
     bathrooms:'2',
     garage:'1',
     size:'1200',
     type:'Apartment',
     user:' Samuel Palmer',
     datePosted:'04/04/2020',
     yearBuilt:'2016',
    },
    {image: 'https://raw.githubusercontent.com/leandremoritz/JSproject/main/images/house1%20(2).jpg',
        id:7,
    title:'Newly Built listing',
    price: '$4500/mo',
    address:'2436 SW 8th St, Miami, FL 33135, USA',
    bedrooms:'4',
    bathrooms:'2',
    garage:'1',
    size:'1200',
    type:'Apartment',
    user:' Samuel Palmer',
    datePosted:'04/04/2020',
    yearBuilt:'2016',
   },
   {image: 'https://raw.githubusercontent.com/leandremoritz/JSproject/main/images/studio%20(1).jpg',
       id:8,
   title:'Grand Mansion',
   price: '$4500/mo',
   address:'2436 SW 8th St, Miami, FL 33135, USA',
   bedrooms:'4',
   bathrooms:'2',
   garage:'1',
   size:'1200',
   type:'Apartment',
   user:' Samuel Palmer',
   datePosted:'04/04/2020',
   yearBuilt:'2016',
  },
  {image: 'https://raw.githubusercontent.com/leandremoritz/JSproject/main/images/studio%20(2).jpg',
  id:9,
  title:'Bachelor Pad',
  price: '$4500/mo',
  address:'2436 SW 8th St, Miami, FL 33135, USA',
  bedrooms:'4',
  bathrooms:'2',
  garage:'1',
  size:'1200',
  type:'Apartment',
  user:' Samuel Palmer',
  datePosted:'04/04/2020',
  yearBuilt:'2016',
 },
 {image: 'https://raw.githubusercontent.com/leandremoritz/JSproject/main/images/studio%20(3).jpg',
 id:10,
 title:'Pentlisting Open Floor',
 price: '$4500/mo',
 address:'2436 SW 8th St, Miami, FL 33135, USA',
 bedrooms:'4',
 bathrooms:'2',
 garage:'1',
 size:'1200',
 type:'Apartment',
 user:' Samuel Palmer',
 datePosted:'04/04/2020',
 yearBuilt:'2016',
},]
    const propertiesTable = document.querySelector("#listingsbox")
function ShowlistingListings (listings) {
    document.querySelector("#listingsbox").innerHTML = " ";
    listings.forEach(listing => {
      propertiesTable.innerHTML += `
        <tr>
        <td>${listing.id}</td>
          <td><img src=${listing.image}</td>
         
          <td>${listing.title}</td>
          <td>${listing.address}</td>
          <td>${listing.type}</td>
          <td>${listing.bedrooms}</td>
          <td>${listing.bathrooms}</td>
          <td>${listing.garage}</td>
          <td>${listing.size}</td>
          <td>${listing.price}</td>
          <td><button onclick="deleteListing(${listing.id})" ><i class="fa-solid fa-trash"></i></button></td>
          <td><button onclick="editListing(${listing.id})"><i class="fa-solid fa-pen-to-square"></i></button></td>
        <tr>
      `;
    });
  };

  ShowlistingListings (listings);
  function deleteListing(id) {
    listings = listings.filter((listing) => {
      //Goes through the array and filters out every id that is equal to the selected one
      return listing.id !== id; //Returns all objects in the array that is not the same id as the selected one
    });
    localStorage.setItem("listings", JSON.stringify(listings));


    ShowlistingListings(listings); //Displays the array
  }

  function editListing(id) {
    let listing = listings.find((listing) => listing.id === id); //Finds the id of button that was clicked
    let input = prompt("Input Changes"); //Allows the user to input their own changes
    listing.title = input; //Changes the content to what the user's input
    localStorage.setItem("listings", JSON.stringify(listings));
    ShowlistingListings(listings); //Displays the array
  }
 


  