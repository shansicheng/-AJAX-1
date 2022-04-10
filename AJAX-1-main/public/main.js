
getJs.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/2.js");
  request.onload = () => {
    console.log("成功了");
    //创建 script 标签
    const script = document.createElement("script");
    //填写 script 内容
    script.innerHTML = request.response;
    //插入身体里
    document.body.appendChild(script);
  };
  request.onerror = () => {
    console.log("失败了");
  };
  request.send();
};

getCss.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("Get", "/style.css");
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
        //下载完成，但不知道是成功2xx,还是失败4xx,5xx
      if (request.status >= 200 && request.status < 300) {
        //创建 style 标签
        const style = document.createElement("style");
        //填写 style 内容
        style.innerHTML = request.response;
        //插入头
        document.head.appendChild(style);
      }else{
          alert('加载CSS失败')
      }
    }
    
  };
  request.send();
};

getHTML.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/3.html");
  request.onload = () => {
    console.log("成功了");
    const div = document.createElement("div");
    div.innerHTML = request.response;
    document.body.appendChild(div);
  };
  request.onerror = () => {
    console.log("失败了");
  };
  request.send();
};

getXML.onclick = ()=>{
   const request = new XMLHttpRequest()
   request.open('GET','/4.xml')
   request.onreadystatechange = ()=>{
        if(request.readyState === 4 && request.status === 200){
            const dom =request.responseXML
            const string = dom.getElementsByTagName('warning')[0].textContent
            console.log(string.trim())
        }
   }
   request.send()
}

getJSON.onclick = ()=>{
    const request = new XMLHttpRequest();
    request.open('GET','/5.json')
    request.onreadystatechange = ()=>{
    if(request.readyState === 4 &&request.status === 200 ){
      const dog = JSON.parse(request.response)
      console.log(dog)
      myName.textContent = dog.name
    }    
    }
    request.send()
}

let n =1
getPage.onclick = ()=>{
  const request = new XMLHttpRequest()
  request.open('GET',`/page${n+1}.json`)
  request.onreadystatechange = ()=>{
    if(request.readyState === 4 && request.status ===200){
      const array = JSON.parse(request.response)
      array.forEach(item => {
      const li = document.createElement('li')
      li.textContent = item.id
      xxx.appendChild(li)
      });
    n+=1

    }
  }
  request.send()
}