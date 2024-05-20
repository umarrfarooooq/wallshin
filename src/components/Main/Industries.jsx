import Link from "next/link"
import "@/app/globals.css"

export function Industries() {
  return (
    (<section className="gradient-background">
      <div className="py-12 md:py-20 lg:py-24 container">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white-color">Industries We <span className="text-[#61BB46]">Serve</span></h2>
        </div>
        <div
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div
            className="group overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:border-gray-300 hover:shadow-md dark:border-gray-800 dark:bg-gray-950">
            <Link className="block" href="#">
              <img
                alt="Course Image"
                className="h-48 w-full object-cover transition-all group-hover:scale-105"
                height={400}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "600/400",
                  objectFit: "cover",
                }}
                width={600} />
              <div className="p-4">
                <h3 className="text-lg font-semibold">Introduction to Web Development</h3>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  Learn the fundamentals of web development, including HTML, CSS, and JavaScript.
                </p>
              </div>
            </Link>
          </div>
          <div
            className="group overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:border-gray-300 hover:shadow-md dark:border-gray-800 dark:bg-gray-950">
            <Link className="block" href="#">
              <img
                alt="Course Image"
                className="h-48 w-full object-cover transition-all group-hover:scale-105"
                height={400}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "600/400",
                  objectFit: "cover",
                }}
                width={600} />
              <div className="p-4">
                <h3 className="text-lg font-semibold">Introduction to Web Development</h3>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  Learn the fundamentals of web development, including HTML, CSS, and JavaScript.
                </p>
              </div>
            </Link>
          </div>
          <div
            className="group overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:border-gray-300 hover:shadow-md dark:border-gray-800 dark:bg-gray-950">
            <Link className="block" href="#">
              <img
                alt="Course Image"
                className="h-48 w-full object-cover transition-all group-hover:scale-105"
                height={400}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "600/400",
                  objectFit: "cover",
                }}
                width={600} />
              <div className="p-4">
                <h3 className="text-lg font-semibold">Introduction to Web Development</h3>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  Learn the fundamentals of web development, including HTML, CSS, and JavaScript.
                </p>
              </div>
            </Link>
          </div>
          <div
            className="group overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:border-gray-300 hover:shadow-md dark:border-gray-800 dark:bg-gray-950">
            <Link className="block" href="#">
              <img
                alt="Course Image"
                className="h-48 w-full object-cover transition-all group-hover:scale-105"
                height={400}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "600/400",
                  objectFit: "cover",
                }}
                width={600} />
              <div className="p-4">
                <h3 className="text-lg font-semibold">Introduction to Web Development</h3>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  Learn the fundamentals of web development, including HTML, CSS, and JavaScript.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>)
  );
}
