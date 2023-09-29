import { Bar } from "react-chartjs-2";
import { BarElement,  CategoryScale,Chart as ChartJS,Legend, LinearScale,Title, Tooltip } from "chart.js";


ChartJS.register(CategoryScale, LinearScale, BarElement,Title,Tooltip,Legend);


// const option = {
//     responsive: true,
//     plugins: {
//       legend: { position: "chartArea" },
//       title: {
//         display: true,
//         text: "Modular Bar Chart"
//       },
//     },
//   };

  const option = {
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        display: true,
      },
    },
    barPercentage: 0.9, 
    categoryPercentage: 0.8,
    // barThickness: 30, // Change this value as needed

    
  };
  
  const data = {
    labels: ["01", "02", "03", "04", "05", "06","07","08","09","10","11","12"],
    datasets: [
      {
        label: "last 6 days",
        data: [20, 30, 40, 50, 60,70,20, 30, 40, 50, 60,70],
        backgroundColor: "gray",
      },
      {
        label:'last week',
        data:[15,20,25,40,45,60,15,20,25,40,45,60],
        backgroundColor:'blue'
      },
  
    ],
  
  };
  
  export default function Barchart() {
    return (
      <>
      <div 
       style={{
        width: '100%',
        height:'50vh',
        backgroundColor: 'rgb(236, 230, 225)'
    }}
      >
        <Bar style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            gap: '300px',
         
            fontSize: '18px'
        }} options={option} data={data} />
        </div>
      </>
    );
  }