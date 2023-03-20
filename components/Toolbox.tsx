import Image from "next/image";

const Toolbox = () => {
  return (
    <section id="work" className="flex flex-col items-center mb-24">
      <img src="/images/toolbox.png" alt="toolbox" className="my-24" />
      <img
        src="/images/tools.svg"
        alt="tool icons"
        width="804px"
        height="320px"
      />
    </section>
  );
};

export default Toolbox;
