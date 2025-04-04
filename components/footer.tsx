export function Footer() {
  return (
    <footer className="bg-muted py-6">
      <div className="container mx-auto px-4 text-center text-muted-foreground">
        <p>
          &copy; {new Date().getFullYear()} Bernd Ullmann. Alle Rechte
          vorbehalten.
        </p>
      </div>
    </footer>
  );
}
