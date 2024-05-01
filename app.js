
const getAirtableData = async () => {
  const options = {
   method: "GET",
   headers: {
    Authorization: `Bearer pat0TRGZo5l1XAQQv.9d73315f1475d8c32b961bf46723f972593c5d0d66384f6031fd1e37b77c535e`,
   },
  };
  try {
   const response = await fetch(
    `https://api.airtable.com/v0/appPCZ5QIgShGrFhR/Table`,
    options
   );
   const data = await response.json();
   console.log(data);
   for (var i = 0; i < data.records.length; i++) {

     const projectsContainer = document.getElementById('testing'); 
     projectsContainer.innerHTML += ` 
     <h3>${data.records[i].fields.Name}</h3>
     `;

    let testing = data.records[i].fields.ProjectImage;
    console.log(testing)
    console.log(data.records[i].fields.ProjectImage) 
    for (let key in testing) {
      let x = testing[key].url
      projectsContainer.innerHTML += 
      `
      <img src="${x}" />
      `
    }
   
   }
  } catch (error) {
   console.log(error);
  }
 };
 
 getAirtableData();

