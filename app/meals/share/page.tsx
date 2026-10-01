import { Navbar } from "@/components/navbar";

export default async function Page() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold mb-6">Share</h1>
      </div>
    </>
  )
}