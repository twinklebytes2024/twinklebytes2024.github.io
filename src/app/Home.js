export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <div className="h-screen w-full flex flex-col justify-center items-center bg-gradient-to-r from-purple-500 to-purple-700 gap-5">
        <div className="flex items-center">
          <img src="logo.png" alt="TwinkleBytes Logo" width={60} height={60} />
          <span className="text-white text-3xl font-semibold">TwinkleBytes</span>
        </div>
        <h3 className="text-xl text-white">Specializing in Website and AI Services</h3>
      </div>

      <div className="flex flex-col gap-2 m-3 text-sm">
        <div>
          <h2>About Us</h2>
          <p>
            TwinkleBytes develop, market, and sell virtual services via an online website. These services are designed to
            enhance efficiency and overall productivity for individuals.
          </p>
        </div>
        <div>
          <h2>Contact Us</h2>
          <p>Email: contact@twinklebytes.com</p>
        </div>
        <div>
          <p>© 2024 TwinkleBytes</p>
        </div>
      </div>
    </div>
  );
}
