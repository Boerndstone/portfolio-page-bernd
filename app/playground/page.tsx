'use client'


import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Flex, Heading, Text } from "@radix-ui/themes";
import { useEffect, useState } from "react"

interface Doc {
  id: string
  title: string
  content: string
}

export default function Home() {

  const [docs, setDocs] = useState<Doc[]>([])

  useEffect(() => {
    fetch("/.netlify/functions/getDocs")
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) setDocs(data)
        else console.error("Unexpected response:", data)
      })
      .catch(err => console.error(err))
  }, [])

  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-12">
      <Flex direction="column" gap="3">
        <Heading size="1">The quick brown fox jumps over the lazy dog</Heading>
        <Heading size="2">The quick brown fox jumps over the lazy dog</Heading>
        <Heading size="3">The quick brown fox jumps over the lazy dog</Heading>
        <Heading size="4">The quick brown fox jumps over the lazy dog</Heading>
        <Heading size="5">The quick brown fox jumps over the lazy dog</Heading>
        <Heading size="6">The quick brown fox jumps over the lazy dog</Heading>
        <Heading size="7">The quick brown fox jumps over the lazy dog</Heading>
        <Heading size="8">The quick brown fox jumps over the lazy dog</Heading>
        <Heading size="9">The quick brown fox jumps over the lazy dog</Heading>
    </Flex>
      </div>
      <Text size="9">The quick brown fox jumps over the lazy dog.</Text>
<hr />
<div>
      {docs.map(doc => (
        <div key={doc.id}>
          <h2>{doc.title}</h2>
          <p>{doc.content}</p>
        </div>
      ))}
    </div>

      <Footer />
    </main>
  );
}