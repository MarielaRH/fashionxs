const About = () => {
  return (
    <div
      className=" pt-[70px]  landing"
      style={{ height: "calc(100vh - 70px)" }}
    >
      <div className="bg-black/50 h-full w-full flex flex-col justify-center items-center text-white">
        <p className=" text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold">
          FASHIONXS
        </p>
        <p className="font-normal p-10 text-center text-2xl">
          Hi! I am <strong>Mariela Rivas</strong> , I am a young frontend
          developer! I have made this e-commerce page with Netx.js and Tailwind
          CSS, and I am so happy for sharing it with you!!.
          <br />
          <br />
          If you have a piece of advice for me, you can contact me through Email
          or LinkedIn, It will be a pleasure read you!
        </p>
      </div>
    </div>
  );
};

export default About;
