var express=require("express");
var app=express();
app.set("view engine","ejs");
var bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));

var campgrounds=[
  {name:"Sandeep" , image:"https://www.google.com/imgres?imgurl=https%3A%2F%2F27mi124bz6zg1hqy6n192jkb-wpengine.netdna-ssl.com%2Fwp-content%2Fuploads%2F2020%2F05%2FClassroom-Management-for-an-Effective-Learning-Environment-scaled.jpg&imgrefurl=https%3A%2F%2Fwww.teachhub.com%2Fclassroom-management%2F2019%2F05%2Fclassroom-management-for-an-effective-learning-environment%2F&tbnid=yQaZLhwSrq3jlM&vet=12ahUKEwi8oaqR-qTsAhVTJisKHW-ADeMQMygAegUIARC5AQ..i&docid=ySGuPP9QQW3YIM&w=2400&h=1600&q=photos%20of%20classroom&ved=2ahUKEwi8oaqR-qTsAhVTJisKHW-ADeMQMygAegUIARC5AQ"},
  {name:"Sandeep" , image:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fmedia.edutopia.org%2Fstyles%2Fresponsive_2880px_16x9%2Fs3%2Fmasters%2Fd7_images%2Fsutherland-inset4-ugcflex_0.jpg&imgrefurl=https%3A%2F%2Fwww.edutopia.org%2Farticle%2Fdos-and-donts-classroom-decorations&tbnid=y0fek3b3TDguGM&vet=12ahUKEwi8oaqR-qTsAhVTJisKHW-ADeMQMygBegUIARC7AQ..i&docid=t-_e15ibsYBBIM&w=1573&h=885&q=photos%20of%20classroom&ved=2ahUKEwi8oaqR-qTsAhVTJisKHW-ADeMQMygBegUIARC7AQ"},
  {name:"Sandeep" , image:"https://www.google.com/imgres?imgurl=ttps%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fc%2Fce%2FElementary_classroom_in_Alaska.jpg%2F1200px-Elementary_classroom_in_Alaska.jpg&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FClassroom&tbnid=VRofKZWBaS23nM&vet=12ahUKEwi8oaqR-qTsAhVTJisKHW-ADeMQMygCegUIARC9AQ..i&docid=3t0zpr7-CT1buM&w=1200&h=900&q=photos%20of%20classroom&ved=2ahUKEwi8oaqR-qTsAhVTJisKHW-ADeMQMygCegUIARC9AQ"},
];
app.get("/",function(req,res){
  res.render("landing");
});

app.get("/campgrounds",function(req,res){
  res.render("campgrounds",{campgrounds:campgrounds});
});

app.post("/campgrounds",function(req,res){
  var name=req.body.name;
  var image=req.body.image;
  var newCampground={name:name,image:image};
  campgrounds.push(newCampground);
  res.redirect("/campgrounds");
});

app.get("/campgrounds/new",function(req,res){
  res.render("new.ejs");
});

app.listen(3000,function(){
  console.log("Yelpcamp Started!!1");
});
