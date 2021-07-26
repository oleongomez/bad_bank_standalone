const userExists = (user_name, user_list) =>{
    return (user_list.find(user => user.name === user_name))
 }

 const emailExists = (email, user_list) => {
     return (user_list.find(user => user.email === email ))
 }
 const validateEmail = (email) => {
   if (
     /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
       email
     )
   ) {
     return true;
   }
   return false;
 };
 const validateName = (name) => {
   if (name !== "") {
     return true;
   } else {
     return false;
   }
 };

 const validatePwd = (pwd) => {
   if (pwd !== "") {
     return true;
   } else {
     return false;
   }
 }

 const canLogin = (name, password, user_list) => {
    return user_list.find(user => {
        console.log(user);
        return(user.name === name || user.email === name) && user.password === password})
 }

 const getUserObject = (name, user_list) =>{
     return user_list.filter(user => (user.name === name || user.email === name))[0]
 }

 const uuid = () => {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
      var r = (Math.random() * 16) | 0,
        v = c === "x" ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }
  