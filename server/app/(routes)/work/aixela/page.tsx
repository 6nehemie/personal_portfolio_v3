import Image from 'next/image';

const Aixela = () => {
  return (
    <div className="p-side py-10 space-y-10">
      <Image
        src="https://utfs.io/f/e1a6dac8-430e-4d7a-a202-6d89856b3637-29hg5u.png"
        alt="aixela"
        width={1728}
        height={1117}
        priority
        className="w-full object-cover rounded-md overflow-hidden"
      />

      <div className="max-w-[900px] w-full mx-auto">
        <div className="space-y-2.5">
          <h1 className="text-3xl font-medium">Aixela</h1>
          <p className="text-nm-gray-200 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perferendis, iste? Saepe in at minima adipisci.
          </p>
        </div>

        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit dolorum
            quidem totam odit dolores voluptatem excepturi atque, expedita
            nesciunt aliquid fuga rem nulla laboriosam officiis sed delectus
            sequi! Debitis, deleniti!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit dolorum
            quidem totam odit dolores voluptatem excepturi atque, expedita
            nesciunt aliquid fuga rem nulla laboriosam officiis sed delectus
            sequi! Debitis, deleniti!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit dolorum
            quidem totam odit dolores voluptatem excepturi atque, expedita
            nesciunt aliquid fuga rem nulla laboriosam officiis sed delectus
            sequi! Debitis, deleniti!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit dolorum
            quidem totam odit dolores voluptatem excepturi atque, expedita
            nesciunt aliquid fuga rem nulla laboriosam officiis sed delectus
            sequi! Debitis, deleniti!
          </p>
        </div>
      </div>
    </div>
  );
};
export default Aixela;
