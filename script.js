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
   const propertiesContainer = document.querySelector("#properties")
// add array to local storage
//    localStorage.setItem("listings", JSON.stringify(listings));
// display local storage
// document.getElementById("properties").innerHTML = JSON.parse( localStorage.getItem("listings"));
function showlistings (listings) {
    propertiesContainer.innerHTML = "";
    listings.forEach(listing => {
        propertiesContainer.innerHTML += `
      
            <div id='listingcards'>
                <img src=${ listing.image } />
                 <h3>${listing.title}</h3>
                 <p>${listing.address}</p>
                 <i class="fa-solid fa-dollar-sign"></i>${listing.price}</li>
                 <ul id=listing-values>
                 <li><i class="fa-solid fa-bed"></i>${listing.bedrooms}</li>
                 <li><i class="fa-solid fa-shower"></i>${listing.bathrooms}</li>
                <li><i class="fa-solid fa-car"></i>${listing.garage}</li>
                <li><i class="fa-solid fa-ruler"></i>${listing.size}</li>
                
            </div>
        `
    })
}
showlistings(listings);


function typeHouse() {
    let value = document.getElementById("select1").value;
    let filListings = listings.filter((listing) => {
      return listing.type === value     //loop through houses and return houses which id noes not match
    });
    showlistings(filListings);
  }
  function addressHouse() {
    let value = document.getElementById("select2").value;
    let filListings = listings.filter((listing) => {
      return listing.address === value     //loop through houses and return houses which id noes not match
    });
    showlistings(filListings);
  }

  function bedroomsHouse() {
    let value = document.getElementById("select3").value;
    let filListings = listings.filter((listing) => {
      return listing.bedrooms === value     //loop through houses and return houses which id noes not match
    });
    showlistings(filListings);
  }
  
  
  function sortListings(){
    
      let price = listings.sort((a, b) => {
        return a.price - b.price;
      });
      let retrievedList = price;
      document.querySelector("#properties").innerHTML = "";
      retrievedList.forEach((propperty) => {
      showlistings(retrievedList)
    })
}

