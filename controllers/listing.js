const Listing= require("../models/listing");
// const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
// const mapToken=process.env.MAP_TOKEN;
// const geocodingClient =mbxGeocoding({accessToken:mapToken});


module.exports.index= async (req, res) => {
    const { category, location } = req.query;  
    
    let filter = {};
  
 
    if (category) {
      filter.category = category.trim(); 
    }
 
    if (location) {
      filter.location = { $regex: location, $options: 'i' };
    }

  
    try {
    
      const allListings = await Listing.find(filter);
  
      if (allListings.length === 0) {
        req.flash("error", "No listings found for the specified location.");
      }
  
      res.render("listings/index", { allListings, selectedCategory: category, searchLocation: location });
    } catch (error) {
      console.error("Error fetching listings:", error);
      res.status(500).send("Error fetching listings");
    }
  };
  

     module.exports.renderNewForm =( req , res )=>{
    
        res.render("listings/new.ejs");
    };


    module.exports.showListing=async(req,res)=>{
        let{id}=req.params;
        const listing= await Listing.findById(id).populate({path:"reviews", populate:{path:'author'}}).populate("owner");
        if(!listing){
           req.flash("error","Listing you requested for does not exist");
           res.redirect("/listings");
        }
       res.render("listings/show.ejs",{listing});
    };

    module.exports.createListing=async (req , res, next)=>{
        // let response=await geocodingClient.forwardGeocode({
        //     query: req.body.listing.location,
        //     limit: 1
        //   })
        //     .send();
            

            
        let url= req.file.path;
        let filename=req.file.filename;
        const newListing = new Listing(req.body.listing);
        newListing.owner= req.user._id;
        newListing.image={url,filename};

        // newListing.geometry=response.body.features[0].geometry;
        
       let savedListing= await newListing.save();
       console.log(savedListing); 
       req.flash("success","New Listing Created");
        res.redirect("/listings");
   
   
};

//  module.exports.editListing=async (req, res)=>{
//     let {id}= req.params;
//     const listing= await Listing.findById(id);
    
//      res.render("listings/edit.ejs",{ listing });
// };

module.exports.renderEditForm= async(req,res)=>{
    let{id}=req.params;
    const listing= await Listing.findById(id);
    if(!listing){
        req.flash("error","Listing your requested for does not exist!");
        req.redirect("/listing");
    }

    let orignalImageUrl=listing.image.url;
    orignalImageUrl.replace("/upload","/upload/ w_250")
    res.render("listings/edit.ejs",{listing,orignalImageUrl});
};
module.exports.updateListing=async (req,res)=>{
    let {id}=req.params;
     let listing =await Listing.findByIdAndUpdate(id, {...req.body.listing});
     if(typeof req.file !=="undefined"){
     let url= req.file.path;
     let filename=req.file.filename;
     listing.image ={url, filename};
     await listing.save();
     }
     req.flash("success"," Listing updated");
     res.redirect(`/listings/${id}`);
 };

 module.exports.destroyListing=async(req, res)=>{
    let{ id }=req.params;
    let deletedListing=await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    req.flash("success","Listing Deleted");
    res.redirect("/listings");
};
