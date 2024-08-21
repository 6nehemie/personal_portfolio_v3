import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

/**
 * A wrapper for markdown content
 * @param content The markdown content
 * @returns The markdown content wrapped in a ReactMarkdown component
 */
const MarkdownWrapper = ({ content }: { content: string }) => {
  return (
    <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
      {content}
    </ReactMarkdown>
  );
};

export default MarkdownWrapper;
