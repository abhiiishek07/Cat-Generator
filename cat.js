function catgenerator(){
    var image= document.createElement('img');
    var div= document.getElementById('cat-gen-cont');
    image.src="https://api.thecatapi.com/api/images/get?format=src&type=gif&size=small";
    div.appendChild(image);


}
function reset(){
    const myNode = document.getElementById("cat-gen-cont");
  while (myNode.firstChild) {
    myNode.removeChild(myNode.lastChild);
  }
}