import"./assets/styles-36ea9d36.js";const e={email:"",message:""},t=document.querySelector(".feedback-form"),m=t.elements.message,o=t.elements.email,s="feedback-form-state",a=JSON.parse(localStorage.getItem(s));a&&(o.value=a.email||"",e.email=a.email||"",m.value=a.message||"",e.message=a.message||"");t.addEventListener("input",l=>{e[l.target.name]=l.target.value.trim(),localStorage.setItem(s,JSON.stringify(e))});t.addEventListener("submit",l=>{l.preventDefault(),o.value.trim()!==""&&m.value.trim()!==""?(console.log(e),localStorage.removeItem(s),t.reset(),e.email="",e.message=""):alert("Fill please all fields")});
//# sourceMappingURL=commonHelpers2.js.map
