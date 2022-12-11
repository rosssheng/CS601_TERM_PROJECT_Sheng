//about section, functionality to open and close a tab with underlines in the section
function openLink(tab){ 
    let links = document.getElementsByClassName("links");
    let content = document.getElementsByClassName("link-content");
    for(link of links){ //remove content and underline onclick in about me page 
        link.classList.remove("current-link");
    }
    for(description of content){ //remove content and underline onclick in about me page 
        description.classList.remove("current-tab"); 
    }
    event.currentTarget.classList.add("current-link"); //show underline on click 
    document.getElementById(tab).classList.add("current-tab")//onclick open the correct tab 
    
}

