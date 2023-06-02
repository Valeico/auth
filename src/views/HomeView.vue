<script setup>
import { computed, ref } from 'vue';
import MenuComponent from '../components/MenuComponent.vue';
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

    const options = {
        chart: {
          id: 'vuechart-example'
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
        }
      }

      const series = [{
        name: 'series-1',
        data: [30, 40, 45, 50, 49, 60, 70, 91]
      }]

      const chartData = {
        labels: [ 'January', 'February', 'March' ],
        datasets: [ { data: [40, 20, 12] } ]
      }

      const chartOptions = {
        responsive: true,
      }
</script>

<template>
  <main>
    <MenuComponent></MenuComponent>
    <h1>Home</h1>
    <div class="main-target">
      <div class="target-1">
        <i class='bx bx-calculator' ></i>
        <p id="p">Nuevas facturas</p>
      </div>
      <div class="target-2">
        <i class='bx bxs-user-detail' ></i>
        <p>Clientes</p>
      </div>
      <div class="target-3">
        <i class='bx bxs-user-circle' ></i>
        <p>Usuarios</p>
      </div>
    </div>
    <div class="charts-flex">
      <div>
        <h1>Apex chart</h1>
        <apexchart width="500" type="bar" :options="options" :series="series"></apexchart>
      </div>
      <div class="ch">
        <h1>Chart Js</h1>
        <Bar
          id="my-chart-id"
          :options="chartOptions"
          :data="chartData"
        />
      </div>
    </div>
  </main>
  
</template>

<style scoped>
main {
  min-width: 80%;
  min-height: 100vh;
  /* border: 1px solid black; */
}
.main-target {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 33%);
  grid-template-rows: repeat(3, 50px);
  column-gap: 10px;
  /* border: 1px solid black; */
  padding-left: 10px;
}
.target-1 { 
  width: 100%;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  background-color: #DC7633;
  color: blanchedalmond;;
  cursor: pointer;
  font-size: 25px;
  /* border: 1px solid green; */
}

.target-2 { 
  width: 100%;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  background-color: #3498DB;
  color: blanchedalmond;;
  cursor: pointer;
  font-size: 25px;
  /* border: 1px solid green; */
}

.target-3 { 
  width: 100%;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  background-color: #F1C40F;
  color: blanchedalmond;;
  cursor: pointer;
  font-size: 15px;
  /* border: 1px solid green; */
}

i {
  font-size: 40px;
}

.charts-flex {
  margin-top: 100px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  /* gap: 10px; */
}

.ch {
  width: 500px;
  /* border: 1px solid black; */
}

</style> 