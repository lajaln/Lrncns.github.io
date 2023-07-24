
const container='.tagcloud';
const skill=[
    'HTML','CSS','JAVASCRIPT',
    'PYTHON','JAVA','C','C++',
    ,'GIT','GITHUB',
    'BOOTSTRAP','XML'
];


var tagCloud = TagCloud('.Sphere', skill, {

    // Sphere radius in px
    radius: 150,

    
    maxSpeed: 'fast',
    initSpeed: 'fast',

   
    direction: 135,

 
    keep: true

});


var colors = ['#34A853', '#FBBC05', '#4285F4', '#7FBC00', 'FFBA01', '01A6F0'];
var random_color = colors[Math.floor(Math.random() * colors.length)];
document.querySelector('.Sphere').style.color = random_color;
