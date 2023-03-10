console.log(window)

setTimeout(() => {
    // client-side redirection/server-side redirection. this is client-side redirection
    // window.location.replace('/visitors) writing window makes it more clear where the method came from.
    window.location.href = '/visitors';
    
}, 3000)