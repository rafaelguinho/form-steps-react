function validateName(name){
  console.log("nome", name);
    if(name === null || name === ''){
      return {valid:false, text:"O nome deve ser preenchido"}
    }else{
      return {valid:true, text:""}
    }
  }

  export {validateName};