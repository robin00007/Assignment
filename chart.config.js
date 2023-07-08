import data from "../data/data";
const config = {
    type: 'line',
    data: data,
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: 'Activities'
        },
      },
      interaction: {
        intersect: false,
      },
      scales: {
        x: {
          display: true,
          title: {
            display: false
        
          }
        },
        y: {
          display: true,
          title: {
            display: false,
            text: 'Value'
          },
          suggestedMin: 0,
          suggestedMax: 500
        }
      }
    },
  };
