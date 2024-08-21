import { cn } from '@/lib/utils';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

/**
 * A wrapper for markdown content
 * @param content The markdown content
 * @returns The markdown content wrapped in a ReactMarkdown component
 */
const MarkdownWrapper = ({ content }: { content: string }) => {
  return (
    <ReactMarkdown
      className={'markdown'}
      remarkPlugins={[remarkGfm]}
      components={{
        h3: ({ node, ...props }) => (
          <h3 className={cn('text-lg font-semibold pt-3 mb-5')} {...props} />
        ),
        strong: ({ node, ...props }) => (
          <strong className={cn('font-semibold')} {...props} />
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  );
};

export default MarkdownWrapper;
