import ButtonArrowUpRight from '../buttons/ButtonArrowUpRight';

/**
 * This component displays the footer of the website.
 * @returns The Footer component.
 */
const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="p-side">
      <div className="flex justify-between items-end h-max text-sm text-nm-gray-500">
        <div className="text-sm space-y-1">
          <div className="text-sm">All rights reserved {year} © 6nehemie</div>
        </div>

        <div className="">
          <ButtonArrowUpRight
            label="Contact me"
            href="/contact"
            className="text-white sm:text-inherit sm:hover:text-white transition-colors duration-200"
          />
        </div>
      </div>
    </footer>
  );
};
export default Footer;
