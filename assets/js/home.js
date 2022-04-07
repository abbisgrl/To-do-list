var works = document.getElementsByClassName('task');

for(let i of works){
  // for line-through style on  text when checkbox is clicked
    i.getElementsByTagName('input')[0].addEventListener('change', function() {
        if (this.checked) {
          i.getElementsByTagName('p')[0].style.textDecoration = 'line-through';
          i.getElementsByTagName('span')[0].style.textDecoration = 'line-through';
        } else {
            i.getElementsByTagName('p')[0].style.textDecoration = 'none';
            i.getElementsByTagName('span')[0].style.textDecoration = 'none';
        }
      });

      //alert box on clicking on the category in the list
    i.getElementsByTagName('button')[0].addEventListener('click', function(){
        let res;
        res = "Task : " + i.getElementsByTagName('p')[0].innerText + "\n" +
              "Deadline : " + i.getElementsByTagName('span')[0].innerText + "\n" +
              "Category : " + this.innerText;
        window.alert(res);
    });
}


