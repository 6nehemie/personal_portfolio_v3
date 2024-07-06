import Separator from './Separator';

/**
 * Page header component.
 * @param title - The title of the page
 * @param text - The text of the page
 * @returns The page header component.
 */
const PageHeader = ({ title, text }: { title: string; text?: string }) => {
  return (
    <div className="space-y-10 mb-20">
      <div className="space-y-5">
        <h1 className="text-2xl">{title}</h1>
        {text && <p className="text-nm-gray-200 text-sm">{text}</p>}
      </div>

      <Separator />
    </div>
  );
};
export default PageHeader;
