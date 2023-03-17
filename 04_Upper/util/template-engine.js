import fs from 'fs';
import escape from "escape-html";

// escape-html: used to sanitize strings. it's used here to prevent Cross-side scripting. the weird string returned by escape(<string>) is still valid HTML
console.log(escape('<script>alert("hello")</script>'));


// readfileSync returns a buffer that we need to turn into a string
// default empty config
function renderPage(page, config={}) {
    let cssLinksString = ""
    if (config.cssLinks) {
        console.log(cssLinksString)
        config.cssLinks.forEach(cssLink => cssLinksString += cssLink + '\n')
    }
    
    const navbar = fs.readFileSync('./public/components/navbar/navbar.html').toString()
    
        // replace returns a new string, since strings are immutable
        // || works like a ternary statement
        .replace("$TAB_TITLE", config.tabTitle || "Upper")
        .replace("$CSS_LINK", cssLinksString)
        
    const footer = fs.readFileSync('./public/components/footer/footer.html').toString()
        .replace("$FOOTER_YEAR", `${new Date().getFullYear()} ©️`)



    return navbar + page + footer;

}

function readPage(pagePath) {
    return fs.readFileSync(pagePath).toString();
    

}

export {
    renderPage,
    readPage
}