$.ajax({
    type: 'GET',
    url: 'https://corona-virus-world-and-india-data.p.rapidapi.com/api',
    headers: {
        'X-RapidAPI-Key': '0a96cf91a9msh6f6d7a182f6a8ddp125b59jsn043eea278c75',
        'X-RapidAPI-Host': 'corona-virus-world-and-india-data.p.rapidapi.com'
    },
    success: function (response) {
        console.log(response.countries_stat)
        for (var i = 0; i < response.countries_stat.length; i++) 
        { 
            
            
            var tablerow = `<tr>
            <td>${response.countries_stat[i].country_name}</td>
            <td>${response.countries_stat[i].cases}</td>
            <td>${response.countries_stat[i].active_cases}</td>
            <td>${response.countries_stat[i].total_recovered}</td>
            <td>${response.countries_stat[i].deaths}</td>
            </tr>` 


           $('#tbody').append(tablerow)
        
        }
        $('#covidtable').DataTable()
    },
    error: function (error) {
        console.log(error)
    }
});
