

async function getActivities(activityQueryString="") {
    const response = await fetch("https://www.boredapi.com/api/activity" + activityQueryString)
    const data = await response.json()
    console.log(data)
    document.getElementById("quest").innerText = data.activity
  }
  

getActivities()

  document.getElementById('activity-dropdown-submit').addEventListener("click", async () => {
    getActivities("?type=" + document.getElementById('activity-dropdown').value)
  })