import TabComponent from "./components/Tabcomponent"
import AddPhoto from "./components/AddPhoto"

function App() {

  return (
    <>
    <section className="bg-gradient-to-bl from-[#262a2f] from-15% via-[#1b1d21] via-50% to-[#191b1f] w-full h-full absolute"></section>
    <section className="relative w-full container mx-auto flex flex-col-reverse lg:flex-row lg:justify-center lg:items-center lg:gap-x-4">
      <section className="w-full lg:w-[50%] h-[500px] rounded-lg outline"></section>
      <section className="w-full lg:w-[50%] mt-4 lg:mt-0">
        <TabComponent/>
        <AddPhoto/>
      </section>
    </section>
    </>
  )
}

export default App
