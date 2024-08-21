import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

/**
 * A wrapper for markdown content
 * @param content The markdown content
 * @returns The markdown content wrapped in a ReactMarkdown component
 */
const MarkdownWrapper = ({ content }: { content: string }) => {
  return (
    <ReactMarkdown className={'markdown'} remarkPlugins={[remarkGfm]}>
      {content}
    </ReactMarkdown>
  );
};

export default MarkdownWrapper;
