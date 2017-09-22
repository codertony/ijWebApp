var express = require('express');
var router = express.Router();
var request = require('request');

/* 微信登陆 */

/* 公司企业号 */

var hostUrl = 'www.54qipa.cn'
  // var hostUrl = 'tonycoder.ngrok.cc'
var corpid = 'wx5f75aad47402dac7';
var corpsecret = 'I3hHOg0HKXdAK2EAKKqfL43AEa0GAq2nyZoYtWkDo2hqyRT6AEv0hO3jOUhdK7AV';
var agentid = '88'
var Secret = 'l-NqzCKzXOeBAMfX4gmkbWctyGU6J4JnIfZrCXbEfmM'

var access_token = ''

var getToken = function(callBack) {
  request.get({
      url: 'https://qyapi.weixin.qq.com/cgi-bin/gettoken?corpid=' + corpid + '&corpsecret=' + corpsecret
    },
    function(error, response, body) {
      if (response.statusCode == 200) {
        // 第三步：拉取用户信息(需scope为 snsapi_userinfo)
        //console.log(JSON.parse(body));
        var data = JSON.parse(body);
        access_token = data.access_token;
        callBack && callBack()
      } else {
        console.log(response.statusCode);
      }
    }
  )

}

getToken()
setInterval(function() {
  getToken()
}, 7200 * 1000)


router.get('/wx_login', function(req, res, next) {
  //console.log("oauth - login")
  // 第一步：用户同意授权，获取code
  var router = 'get_wx_access_token';
  // 这是编码后的地址
  var return_uri = 'http%3A%2F%2F' + hostUrl + '%2Fij%2F' + router;
  var scope = 'snsapi_userinfo';

  res.redirect('https://open.weixin.qq.com/connect/oauth2/authorize?appid=' + corpid + '&redirect_uri=' + return_uri + '&response_type=code&scope=' + scope + '&agentid=' + agentid + '&state=STATE#wechat_redirect');

});


router.get('/get_wx_access_token', function(req, res, next) {
  //console.log("get_wx_access_token")
  //console.log("code_return: "+req.query.code)

  // 第二步：通过code换取网页授权access_token
  var code = req.query.code;
  request.get({
      url: 'https://qyapi.weixin.qq.com/cgi-bin/user/getuserinfo?access_token=' + access_token + '&code=' + code,
    },
    function(error, response, body) {
      if (response.statusCode == 200) {

        // 第三步：拉取用户信息(需scope为 snsapi_userinfo)
        //console.log(JSON.parse(body));
        var data = JSON.parse(body);
        console.log(access_token);
        console.log(data.UserId)
          /* res.redirect('http://tonycoder.ngrok.cc?userId=' + data.UserId); */
        res.redirect('http://' + hostUrl + '/?userId=' + data.UserId);
        /* request.get({
            url: 'https://qyapi.weixin.qq.com/cgi-bin/user/get?access_token=' + access_token + '&userid=' + data.UserId
          },
          function(error, response, body) {
            if (response.statusCode == 200) {
              console.log(body)
              var userinfo = JSON.parse(body);
              res.send("\
								<h1>" + userinfo.name + " 的个人信息</h1>\
								<p><img src='" + userinfo.avatar + "' /></p>\
								<p>" + userinfo.department + "，" + userinfo.position + "，" + userinfo.gender + "</p>\
						");
            } else {
              console.log(response.statusCode);
            }
          }
        ) */
      } else {
        console.log(response.statusCode);
      }
    }
  )

});
router.get('/getUserInfo', function(req, res, next) {
  var UserId = req.query.userId;
  console.log(req)
  console.log(req.query)
  console.log(UserId)
  request.get({
      url: 'https://qyapi.weixin.qq.com/cgi-bin/user/get?access_token=' + access_token + '&userid=' + UserId
    },
    function(error, response, body) {
      if (response) {
        if (response.statusCode == 200) {
          console.log(body)
          var userinfo = JSON.parse(body);
          /* res.send("\
				<h1>" + userinfo.name + " 的个人信息</h1>\
				<p><img src='" + userinfo.avatar + "' /></p>\
				<p>" + userinfo.department + "，" + userinfo.position + "，" + userinfo.gender + "</p>"); */
          res.json(userinfo)
        } else {
          console.log(response.statusCode);
        }
      } else {
        res.json({
          error: error,
          body: body
        })
      }

    }
  )
});

router.get('/test1', function(req, res) {
  res.json({
    test: 'test1'
  })
})

module.exports = router;