let listings = JSON.parse(localStorage.getItem("listings"))
? JSON.parse(localStorage.getItem("listings")):[
    {image: 'https://raw.githubusercontent.com/leandremoritz/JSproject/main/images/apartment1%20(1).jpg',
    id:1,
     title:'Light and Modern Apartment',
     price: '4500',
     address:'Miami',
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
    price: '3500',
    address:'Los Angeles',
    bedrooms:'3',
    bathrooms:'1',
    garage:'1',
    size:'1000',
    type:'Apartment',
    user:' Samuel Palmer',
    datePosted:'04/04/2020',
    yearBuilt:'2016',
   },
   {image: 'https://raw.githubusercontent.com/leandremoritz/JSproject/main/images/apartment1%20(3).jpg',
   id:3,
   title:'Cozy Apartment',
   price: '3550',
   address:'Chicago',
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
  price: '2050',
  address:'New York',
  bedrooms:'4',
  bathrooms:'2',
  garage:'1',
  size:'1100',
  type:'Apartment',
  user:' Samuel Palmer',
  datePosted:'04/04/2020',
  yearBuilt:'2016',
 },
 {image: 'https://raw.githubusercontent.com/leandremoritz/JSproject/main/images/apartment1%20(5).jpg',
     id:5,
 title:'Fully Furnished Apartment',
 price: '4000',
 address:'Miami',
 bedrooms:'2',
 bathrooms:'1',
 garage:'1',
 size:'1000',
 type:'Apartment',
 user:' Samuel Palmer',
 datePosted:'04/04/2020',
 yearBuilt:'2016',
},
{image: 'https://raw.githubusercontent.com/leandremoritz/JSproject/main/images/house1%20(1).jpg',
    id:6,
     title:'North Facing listing',
     price: '2M',
     address:'New York',
     bedrooms:'4',
     bathrooms:'2',
     garage:'2',
     size:'2000',
     type:'House',
     user:' Samuel Palmer',
     datePosted:'04/04/2020',
     yearBuilt:'2016',
    },
    {image: 'https://raw.githubusercontent.com/leandremoritz/JSproject/main/images/house1%20(2).jpg',
        id:7,
    title:'Newly Built listing',
    price: '1.5M',
    address:"Los Angeles",
    bedrooms:'4',
    bathrooms:'2',
    garage:'3',
    size:'2200',
    type:'House',
    user:' Samuel Palmer',
    datePosted:'04/04/2020',
    yearBuilt:'2016',
   },
   {image: 'https://raw.githubusercontent.com/leandremoritz/JSproject/main/images/studio%20(1).jpg',
       id:8,
   title:'Grand Mansion',
   price: '1000',
   address:'Miami',
   bedrooms:'0',
   bathrooms:'1',
   garage:'2',
   size:'900',
   type:'Studio',
   user:' Samuel Palmer',
   datePosted:'04/04/2020',
   yearBuilt:'2016',
  },
  {image: 'https://raw.githubusercontent.com/leandremoritz/JSproject/main/images/studio%20(2).jpg',
  id:9,
  title:'Bachelor Pad',
  price: '2500',
  address:'Chicago',
  bedrooms:'1',
  bathrooms:'2',
  garage:'5',
  size:'1000',
  type:'Studio',
  user:' Samuel Palmer',
  datePosted:'04/04/2020',
  yearBuilt:'2016',
 },
 {image: 'https://raw.githubusercontent.com/leandremoritz/JSproject/main/images/studio%20(3).jpg',
 id:10,
 title:'Pentlisting Open Floor',
 price: '2000',
 address:'New York',
 bedrooms:'1',
 bathrooms:'2',
 garage:'4',
 size:'1100',
 type:'Studio',
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
          <td><img src=${listing.image} /></td>
         
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
  };

  
function typeHouse() {
    let value = document.getElementById("select1").value;
    let filListings = listings.filter((listing) => {
      return listing.type === value     //loop through houses and return houses which id noes not match
    });
    ShowlistingListings(filListings);
  }
  function addressHouse() {
    let value = document.getElementById("select2").value;
    let filListings = listings.filter((listing) => {
      return listing.address === value     //loop through houses and return houses which id noes not match
    });
    ShowlistingListings(filListings);
  }

  function bedroomsHouse() {
    let value = document.getElementById("select3").value;
    let filListings = listings.filter((listing) => {
      return listing.bedrooms === value     //loop through houses and return houses which id noes not match
    });
    ShowlistingListings(filListings);
  }
   
  function sortListings(){
    
    let price = listings.sort((a, b) => {
      return a.price - b.price;
    });
    let retrievedList = price;
    document.querySelector("#listingsbox").innerHTML = "";
    retrievedList.forEach((propperty) => {
      ShowlistingListings(retrievedList);
  })
}
function addListing() {
  let property = {
    id: listings.length + 1,
    title: document.querySelector("#Title").value,
    area: document.querySelector("#Location").value,
    image: document.querySelector("#Image").value,
    type: document.querySelector("#Type").value,
    bedrooms: document.querySelector("#Bedrooms").value,
    baths: document.querySelector("#Bathrooms").value,
    garage: document.querySelector("#Garage").value,
    size: document.querySelector("#Size").value,
    price: document.querySelector("#Price").value,
    status: document.querySelector("#Status").value,
  };
  listings.push(property);
  localStorage.setItem("properties", JSON.stringify(listings));
  ShowlistingListings(listings);
 
}


 


  