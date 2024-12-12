import Sidebar from './components/Sidevar/Sidevar'
import Header from './components/Header/Header'
import DashboardCards from './components/Dashboard/DashboardCard'
import Action from './components/Dashboard/ActionsDashboard/Action'
import BarChart from './components/Dashboard/BarChart'

function App() {

  return (
    <>
      <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header />
        <main className="p-4 bg-gray-100 flex-1">
          <DashboardCards />
          <Action />
          <BarChart />
        </main>
      </div>
    </div>
    </>
  )
}

export default App
