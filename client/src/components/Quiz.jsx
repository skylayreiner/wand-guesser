export default function Quiz() {
  return (
    <div className="mx-auto max-w-6xl bg-black flex min">

      <div className="w-3/5 min-h-[80dvh]">
        <img className="object-cover" src="https://noblecollection.co.uk/wp-content/uploads/2018/07/Dumbledore-Wand.png" alt="Wands" />


      </div>
      <div className="relative flex flex-col w-2/3 m-10 space-y-2 mt-10">
        <h2 className="text-4xl">Whose wand is this?</h2>
        <h3 className="text-2xl italic">Wand Details</h3>
        <ul className="flex flex-col">
          <li className="inline-flex gap-1">Wood Type:<p className="font-bold">Yew</p></li>
          <li className="inline-flex gap-1">Core: <p className="font-bold">Thestral tail hair</p></li>
          <li className="inline-flex gap-1">Length: <p className="font-bold">15 inches</p></li>
        </ul>
        <div className="grid gap-1 w-96 pt-5">
          <button className="bg-slate-100 h-14">Option A</button>
          <button className="bg-slate-100 h-14">Option B</button>
          <button className="bg-slate-100 h-14">Option C</button>
          <button className="bg-slate-100 h-14">Option D</button>
        </div>

      </div>
    </div>
  )
}