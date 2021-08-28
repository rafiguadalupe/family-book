var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg","https://i.postimg.cc/qqyYvVbq/grandpa.jpg", "https://i.postimg.cc/wjMnFtMX/father.jpg" , "https://i.postimg.cc/bw5W5zSK/mother.jpg","https://media.istockphoto.com/vectors/running-teen-boy-vector-id520438343?k=6&m=520438343&s=612x612&w=0&h=ejBpYs1vNDwKjhf0CYAbip5Cv3TD8JHVG_xEwr8QbV4="];
var names = ["Fmaily Book","Grandpa", "Salvador Guadalupe",  "Mides Guadalupe", "Rafael Guadalupe"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 4
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = images[i];
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName =names [i] ;
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
