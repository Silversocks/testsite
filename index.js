let userform=document.getElementById("form")


const retrievedata=()=>{
    let entries=localStorage.getItem("entries");
    if(entries){
        entries=JSON.parse(entries)
    }
    else{
        entries=[]

    }
    return entries
}

function displayTable(data) {
    // Create the table element
    const table = document.createElement('table');
    table.innerHTML = `
        <thead>
            <tr>
                ${Object.keys(data[0]).map(key => `<th>${key}</th>`).join('')}
            </tr>
        </thead>
        <tbody>
            ${data.map(row => `
                <tr>
                    ${Object.values(row).map(value => `<td>${value}</td>`).join('')}
                </tr>
            `).join('')}
        </tbody>
    `;

    // Append the table to the body or a specific container
    document.body.appendChild(table);
}



let entries=retrievedata();

const saveuserform=(event)=>{
    event.preventDefault();
    const name=document.getElementById("name")
    const mail=document.getElementById("Email")
    const password=document.getElementById("password")
    const dob=document.getElementById("dob") 
    const accepted=document.getElementById("checkbox") 

    const entry={
        name:name,
        email:mail,
        password:password,
        dob:dob,
        accepted:accepted
    }
    entries.push(entry)
    localStorage.setItem("entries",JSON.stringify(entries))
    displayTable(sampleData);
    }
userform.addEventListener("submit",saveuserform)
displayTable(sampleData);
