import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Flex, Heading, Text, Link } from "@radix-ui/themes";

export default function Home() {
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

      <Link size="1" href="/signup">Sign up</Link>

      <Footer />
    </main>
  );
}