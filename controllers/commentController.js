

const iconv = require('iconv-lite');
const express = require("express");



const router = express.Router();




const parseString = require('xml2js').parseString;

const axios = require('axios');



router.route("").get( async (req,res) =>{


  res.json({ username: 'Flavio' })
})





String.prototype.replaceArray = function(find, replace) {
  var chacking = ""
  var replaceString = this;
  for (var i = 0; i < find.length; i++) {
    replaceString = replaceString.replace(find[i], replace[i]);
    chacking+=replaceString +"\n"
  }

  //return chacking
  return replaceString;
};
  


router.route("/rotter").get( async (req,res) =>{

  let D = new Date(Date.now());
  let formattedDate = `${D.getDate().toString().padStart(2, '0')}/${(D.getMonth() + 1).toString().padStart(2, '0')}/${D.getFullYear().toString().substr(-2)} ${D.getHours().toString().padStart(2, '0')}:${D.getMinutes().toString().padStart(2, '0')}:${D.getSeconds().toString().padStart(2, '0')}`;
  
  try{
 
    const response  = await axios({
      url: "http://www.ynet.co.il/Integration/StoryRss1854.xml",
      responseType: 'arraybuffer'
    });
    
    const xmlString = response.data.toString();
    
    console.log("Before ");
    console.log(xmlString);
    console.log("last connection to server: \n" + formattedDate );

    return res.send(xmlString);
  }

  catch(err) {
    console.log("Error: ");
    console.log(err);
    res.send(err);
  }

});

module.exports = router;
