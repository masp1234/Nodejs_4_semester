async function getActivities() {
    const response = await fetch("https://www.boredapi.com/api/activity")
    const data = await response.json()
    return data
  }
  
async function displayActivities() {
    const data = await getActivities()
    console.log(data)
    // 
    document.getElementById("quest").innerText = data.activity
  }
  displayActivities()