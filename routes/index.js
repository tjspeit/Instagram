var express = require('express');
var session = require('express-session');//메모리에 정보저장
var router = express.Router();
var count;

var id = "";
var pw = "";

// session 초기화
router.use(session({
  secret: '1234DSFS@!',
  resave: false,
  saveUninitialized: true
}));

/* GET home page. */
router.get('/', function(req, res) {
  //console.log(req.session.uid);
  if(req.session.uid) {
   res.redirect('/feed');
  }
  else {
    res.render('login');//send: 자체의 변수 내보냄, render: ejs파일을 load
  }
});

//post: 아이디비번 노출X
router.post('/login', function(req, res) {
  var inputId = req.body.userId;
  var inputPw = req.body.userPw;

  //console.log(inputId, inputPw);

  // if(inputId != id && inputPw != pw) {
  //   res.redirect('/');
  // }

  if(!req.session.uid) {
    req.session.uid = inputId;
    res.redirect('/feed');
  }
});

router.get('/feed', function(req, res) {
  if(!req.session.uid)//로그인이 없으면
    res.redirect('/');
  res.render('feed');
});

router.get('/profile', function(req, res) {
  if(!req.session.uid)//로그인이 없으면
    res.redirect('/');
  res.render('profile');
});

router.get('/logout', function(req, res) {
  delete req.session.uid;
  res.redirect('/');
});

// router.get('/count',function(req,res){
//   if(req.session.count){ // count값이 세팅되어있으면
//     req.session.count++;
//   }
//   else{
//     req.session.count = 1;
//   }
//   res.send('count : '+req.session.count);
// });



// router.get('/tmp',function(req,res){
//   res.send('result : ' + req.session.count);
// });

module.exports = router;
// 코드완성후 내보냄



