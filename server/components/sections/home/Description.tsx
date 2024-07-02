import { EN as en } from '@/constants';

/**
 * 	This component displays the description of the owner.
 * @returns The description of the owner.
 */
const Description = () => {
  return (
    <section>
      <p>
        <span className="mr-[120px]">This is Nehemie a</span>
        <span className="text-3xl">{en.owner.descriptions.main}</span>
      </p>
    </section>
  );
};
export default Description;
