function reverse(){
var typed = document.querySelector('#stringtyped').value;
for(i=typed.length;i<=typed.length&&i!==-1;i--){
document.querySelector('#output').value += typed.charAt(i);
  }
}