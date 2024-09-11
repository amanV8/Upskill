// Chart for Skill Proficiency
const chartData = {
  labels: ["Mastered", "Pending"],
  data: [86, 14],
};

const myChart = document.getElementById("myChart");

new Chart(myChart, {
  type: "doughnut",
  data: {
    labels: chartData.labels,
    datasets: [
      {
        label: "Skill Proficiency",
        data: chartData.data,
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        display: false,
      },
    },
  },
});

// Make buttons functional
document.getElementById("continue-assessment").addEventListener("click", function () {
  window.location.href = "src/pages/skillassessment.html";
});

document.getElementById("start-test").addEventListener("click", function () {
  window.location.href = "src/pages/startTest.html";
});