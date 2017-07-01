 /**
 * 
 */
app.factory('UserService',function($http)
{
    var userService={}

    userService.registerUser=function(user)
    {
        return $http.post("http://localhost:8081/backend_project2/registration",user)
    }
    userService.login=function(user)
    {
        return $http.post("http://localhost:8081/backend_project2/login",user)
    }
    userService.logoutr=function(user)
    {
        return $http.get("http://localhost:8081/backend_project2/logout")
    }
return userService;
})