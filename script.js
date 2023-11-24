   //fetching
   fetch('https://jsonplaceholder.typicode.com/users')
   .then(data=>data.json())
   .then(user=>displayContent(user))


    function displayContent(users){
        for(let user of users){
            htmlData = `
            <div class="container px-5 pt-5">
        <div class="card" style="width: 18rem;">
            <div class="card-body">
              <p class="card-title">
                <h5>User ID : ${user.id}</h5> </p>
              <h6 class="card-title">Name : ${user.name}</h6>
              <h6 class="card-title">User name : ${user.username}</h6>
              <h6 class="card-title">Email : ${user.email}</h6> <br>

              <h5 class="card-text">Address:
                </h5> 
                <p>Street : ${user.address.street}</p>
                <p>Suite : ${user.address.suite}</p>
                <p>City : ${user.address.city}</p>
                <p>Zipcode : ${user.address.zipcode}</p>
                <br>

                <h5 class="card-text">Location:
                    </h5> 
                    <p>Lat : ${user.address.geo.lat}</p>
                    <p>Lan : ${user.address.geo.lng}</p>
                    <br>
            <h5 class="card-text">Phone no:
                </h5>
                <p>${user.phone}</p>
                <h5 class="card-text">Website:
                    </h5>
                    <p>${user.website}</p>
                    <br>

                <h5 class="card-text">Company:
                    </h5>
                <p>Name : ${user.company.name}</p>
                <p>Catch Phrase : ${user.company.catchPhrase}</p>
                <p>Field : ${user.company.bs}</p>


              
            </div>
          </div>
    </div>
            `
            result.innerHTML += htmlData
        }
        const Total = document.getElementById('total')
        Total.innerHTML = `Total Users : ${users.length}`
    }