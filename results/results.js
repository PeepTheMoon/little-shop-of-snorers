const userData = JSON.parse(localStorage.getItem('STRINGPICKS'));
console.log(userData);
// no id, just name and clicks.  
const labelsArray = [];
const dataArray = [];

for (let i = 0; i < userData.length; i++) {
    const voteItem = userData[i];
    // console.log(voteItem);
    const label = voteItem.id;
    const dataPoint = voteItem.timesPicked; 

    labelsArray.push(label);
    dataArray.push(dataPoint);
}
// console.log(labelsArray);
// console.log(dataArray);


const ctx = document.getElementById('myChart').getContext('2d');
new Chart(ctx, {
    type: 'bar',
    data: {
        labels: labelsArray,
        datasets: [{
            label: '# of Votes',
            data: dataArray,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

// change data using dot notation
// myChart.data.datasets[0].data = [100, 200, 300, 50, 10];