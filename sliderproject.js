 let img = document.querySelector('.img1')
 let name = document.querySelector('.head1')
 let job = document.querySelector('.p1')
 let info = document.querySelector('.p2')
 let nextbtn = document.querySelector('.crazytwos')
 let prevbtn = document.querySelector('.crazyones')
 let randombtn = document.querySelector('.weird')

 let containers = [
     {img: 'http://127.0.0.1:5500/17.jpg',
      name: 'Lawal sanjo',
      job: 'WEB DEVELOPER',
      info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' +
      'Ad, reiciendis sequi in velit quos unde mollitia cupiditate, ' +
      'illum necessitatibus dolore tempore molestias praesentium' + 
      'magnam excepturi consequuntur fuga. Laborum, commodi soluta.'
    },

    {
        img: 'http://127.0.0.1:5500/12.jpg',
        name: 'Awwal saheed',
        job: 'WEB DESIGNER',
        info: 'lorem ipsum dolor sit amet consectetur adipisicing elit.' +
        ' Ad, reiciendis sequi in velit quos unde mollitia cupiditate,' +
        ' illum necessitatibus dolore tempore molestias praesentium '+
        ' excepturi.'
    },

    {
        img: 'http://127.0.0.1:5500/prototype2.jpg',
        name: 'Roberto Carlos',
        job: 'Project Manager'.toLocaleUpperCase(),
        info: 'reiciendis sequi in velit quos unde mollitia cupiditate, '+
        'illum necessitatibus dolore tempore molestias praesentmagnam' +
        'excepturi consequuntur fuga.' +
        ' Laborum, commodi soluta.'
    },
    {
        img: 'http://127.0.0.1:5500/prototype.jpg',
        name: 'Emmanuel job',
        job:  'Team Leader'.toLocaleUpperCase(),
        info: "ipsum dolor sit amet consectetur adipisicing elit. Ad," + 
        "reiciendis sequi in velit quos unde mollitia cupiditate, illum" +
         "necessitatibus dolore" +
         "tempore molestias praesentium magnam excepturi consequuntur fuga." 
    }
 ]
let  index = 0
 function shownextinfo() {
  index += 1
  if (index > 3) {
      index = 0
  }
    img.src = containers[index].img
   name.innerHTML = containers[index].name
   job.innerHTML = containers[index].job
   info.innerHTML = containers[index].info
}
nextbtn.addEventListener('click', shownextinfo) ;

function showprevinfo() {
    index -= 1
    if (index < 0 ) {
        index = 0
    }
  img.src = containers[index].img
  name.innerHTML = containers[index].name
   job.innerHTML = containers[index].job
   info.innerHTML = containers[index].info
  
}
prevbtn.addEventListener('click', showprevinfo)

 function random() {
   B = Math.floor(Math.random()*containers.length)
   console.log(B)
    img.src = containers[B].img
    name.innerHTML = containers[B].name
    job.innerHTML = containers[B].job
    info.innerHTML = containers[B].info


}

randombtn.addEventListener('click', random)

 