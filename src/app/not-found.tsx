import Link from "next/link";

export default function NotFound() {

  return (
    <section className="flex h-screen w-full justify-center items-center">
      <div className="text-center">
        <h1 className="font-bold text-9xl">404</h1>
        <p className="font-medium text-6xl">Page Not Found</p>
        <p className="text-xl p-5">Sorry, we could not find the requested source for you</p>
        <Link href="/" className="btn btn-outline btn-primary">Back to Home</Link>
      </div>
    </section>
  );
}
