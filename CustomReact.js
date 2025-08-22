
// function customRender(ele,container){
//     const domele = document.createElement(ele.type);
//     domele.innerHTML = ele.children;
//     domele.setAttribute('href',ele.props.href);
//     domele.setAttribute('target',ele.props.target);
//     container.appendChild(domele);
// }

const mainContainer = document.getElementById("root");
const domele = document.createElement(element.type);
domele.innerHTML = element.children;
for (const key in element.props) {
    if(key === 'children') continue;
    domele.setAttribute(key,element.props.props.key)
}
mainContainer.appendChild(domele); // appends the configured child(element) into the mainContainer

const element = { // it creates an <a></a> tag in this js file since it is linked with the html file it will be showed in the webPage
    type: 'a',
    props:{
         href: 'https://google.com',
         target: '_blank'
    },
    children: 'Click me to visit google'
}

// customRender(element,mainContainer) // two attributes -> which element to create & where to create
