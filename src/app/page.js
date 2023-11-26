import HomePage from './Home';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-green-100 text-gray-800">
      <header className="z-10 max-w-5xl w-full text-center mb-12">
        <h1 className="text-4xl lg:text-6xl font-bold text-amber-800">
          Quick Knowledge Check
        </h1>
      </header>
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <HomePage />
      </div>
    </main>



  )
}
