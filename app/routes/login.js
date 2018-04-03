import Route from '@ember/routing/route';


export default Route.extend({
  actions: {
    login: function () {
     // alert(this.get('controller').get('username'));
      //pass all required parameter
      var data = "email=karan8%40adolpha.com&username=karan8&password=karan123%23&passwordConf=karan123%23";

      var xhr = new XMLHttpRequest();
      xhr.withCredentials = true;

      xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
         alert(this.responseText);
        }
      });

      xhr.open("POST", "http://localhost:3000/auth");
      xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

      xhr.send(data);
    }
  }
});
